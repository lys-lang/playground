import * as monaco from "monaco-editor";
import { dark } from "./theme";
import { monarch } from "./monarch";

/// --- SIDE EFFECTS ---

monaco.editor.defineTheme("dark", dark);
monaco.editor.setTheme("dark");
monaco.languages.register({
  aliases: ["lys"],
  id: "lys",
  extensions: [".lys"]
});
monaco.languages.setMonarchTokensProvider("lys", monarch);
monaco.languages.setLanguageConfiguration("lys", {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,

  brackets: [["{", "}"], ["[", "]"], ["#[", "]"], ["(", ")"]],

  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },

  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "/**", close: " */", notIn: ["string"] }
  ],

  onEnterRules: [
    {
      // e.g. /** | */
      beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
      afterText: /^\s*\*\/$/,
      action: { indentAction: monaco.languages.IndentAction.IndentOutdent, appendText: " * " }
    },
    {
      // e.g. /** ...|
      beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
      action: { indentAction: monaco.languages.IndentAction.None, appendText: " * " }
    },
    {
      // e.g.  * ...|
      beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
      action: { indentAction: monaco.languages.IndentAction.None, appendText: "* " }
    },
    {
      // e.g.  */|
      beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
      action: { indentAction: monaco.languages.IndentAction.None, removeText: 1 }
    }
  ]
});

/// --- EXPORTS ---

export { monaco };

export function ensureMonacoModel(path: string, content: string): void {
  let model = getModel(path);
  if (!model) {
    model = createModel(path, "lys", content);
  } else {
    if (model.getValue() !== content) {
      model.setValue(content);
    }
  }
}

export function getModel(path: string) {
  return monaco.editor.getModels().find(model => model.uri.path === path) || null;
}

export function createModel(path: string, language: string, value: string) {
  const uri = monaco.Uri.file(path);
  console.log(monaco.editor.getModels());
  const model = monaco.editor.createModel(value, language, uri);
  model.updateOptions({
    tabSize: 2,
    insertSpaces: true
  });
  // HACK: to see if the models get disposed with time
  model.onWillDispose(() => console.log("will dispose", model.uri.path));
  return model;
}

export function wipeModels() {
  // Call this function when wiping project
  monaco.editor.getModels().forEach($ => $.dispose());
}

export const monacoError = {
  position: monaco.editor.OverviewRulerLane.Center,
  color: "#FF0000",
  darkColor: "#FF0000"
};

export const monacoWarning = {
  position: monaco.editor.OverviewRulerLane.Center,
  color: "#FFFF00",
  darkColor: "#FFFF00"
};
