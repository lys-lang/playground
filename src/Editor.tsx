import { monaco, monacoError, monacoWarning, getModel, createModel } from "./monaco";

import * as React from "react";
import { Problem, LogLevel } from "./logs";

export type Props = {
  path: string;
  language: string;
  value: string;
  logs: Problem[];
  readOnly?: boolean;
  onValueChange: (value: string) => void;
  onSave?: (value: string) => void;
};

export class Editor extends React.Component<Props> {
  static defaultProps = {
    readOnly: false,
    onSave: () => {
      /**/
    },
    onValueChange: () => {
      /**/
    }
  };
  private editor: monaco.editor.IStandaloneCodeEditor;
  private subscription: any;
  private node: any;
  private model: monaco.editor.ITextModel;
  private decorations: string[] = [];

  componentDidMount() {
    this.editor = monaco.editor.create(this.node, {
      minimap: { enabled: false },
      automaticLayout: true,
      readOnly: this.props.readOnly,
      autoClosingBrackets: "languageDefined",
      autoClosingQuotes: "languageDefined",
      fontSize: 16,
      fontWeight: "100",
      smoothScrolling: false
    });
    this.editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
      () => this.props.onSave && this.props.onSave(this.model.getValue()),
      ""
    );
    this.openFile();
    this.handleDecorations();
  }

  componentWillUnmount() {
    console.log("Unmounting Monaco (this should not happen very often)");
    this.editor && this.editor.dispose();
    this.subscription && this.subscription.dispose();
  }

  componentWillReceiveProps(nextProps: Props) {
    const { path, value } = nextProps;

    const model = getModel(path);

    if (model) {
      if (this.model !== model) {
        this.openFile(nextProps);
      }

      if (this.props.value !== value) {
        this.updateFile(this.model, value);
      }
    } else {
      this.openFile(nextProps);
    }

    this.handleDecorations();
  }

  handleDecorations = () => {
    // TODO: handle the decorations outside of the component, against the model
    let newDecorations: monaco.editor.IModelDeltaDecoration[] = [];

    this.props.logs.forEach((log: Problem) => {
      const className = {
        [LogLevel.ERROR]: "squiggly-error",
        [LogLevel.WARNING]: "squiggly-warning"
        // squiggly-info squiggly-hint
      };

      const posStart = this.model.getPositionAt(log.start);
      const postEnd = this.model.getPositionAt(log.end);

      const range = monaco.Range.fromPositions(posStart, postEnd);

      newDecorations.push({
        options: {
          stickiness: monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
          className: className[log.level],
          hoverMessage: { value: log.message },
          overviewRuler: log.level === LogLevel.ERROR ? monacoError : monacoWarning
        },
        range
      });
    });

    this.decorations = this.model.deltaDecorations(this.decorations, newDecorations);
  };

  updateFile = (model: monaco.editor.ITextModel, value: string = this.props.value) => {
    // If a model exists, we need to update it's value
    // This is needed because the content for the file might have been modified externally
    // Use `pushEditOperations` instead of `setValue` or `applyEdits` to preserve undo stack
    this.editor.executeEdits(null as any, [
      {
        range: model.getFullModelRange(),
        text: value
      }
    ]);
  };

  openFile = (nextProps: Props = this.props) => {
    const { language, value, path } = nextProps;

    let model = getModel(path) || createModel(path, language, value);
    this.model = model;
    this.editor.setModel(model);

    this.subscription && this.subscription.dispose();
    this.subscription = model.onDidChangeContent(() => {
      const value = model.getValue();
      this.props.onValueChange(value);
    });
  };

  render() {
    const style = {
      width: "100%",
      height: "100%"
    };
    return <div data-test-id="editor" ref={c => (this.node = c)} style={style} />;
  }
}
