import { monaco } from ".";

export const ui = {
  background: "#202020",

  f_high: "#e47464",
  f_med: "#ffffff",
  f_low: "#c4c4c4",
  f_inv: "#66606b",
  b_high: "#eeeeee",
  b_med: "#5f5353",
  b_low: "#47424a",
  b_inv: "#e47464",

  f_con: "#72dec2",
  b_con: "#ffb545",
  error: "#ed2c3e"
};

const c = (color: string) => color.substr(1);

const theme = (base: monaco.editor.BuiltinTheme): monaco.editor.IStandaloneThemeData => ({
  base,
  inherit: false,
  rules: [
    { token: "", foreground: c(ui.f_low) },
    { token: "source", foreground: c(ui.f_low) },

    { token: "invalid", foreground: c(ui.error) },
    { token: "emphasis", fontStyle: "italic" },
    { token: "strong", fontStyle: "bold" },

    { token: "identifier", foreground: c(ui.f_med) },
    { token: "identifier.namespace", foreground: c(ui.f_inv) },

    { token: "constant", foreground: c(ui.b_con) },
    { token: "number", foreground: c(ui.b_con) },
    { token: "number.hex", foreground: c(ui.b_con) },
    { token: "regexp", foreground: c(ui.b_con) },
    { token: "type", foreground: c(ui.f_con) },

    { token: "comment", foreground: c(ui.f_inv), fontStyle: "italic" },
    { token: "delimiter", foreground: c(ui.f_low) },

    { token: "string", foreground: c(ui.f_inv) },
    { token: "keyword", foreground: c(ui.f_high), fontStyle: "bold" },
    { token: "operator", foreground: c(ui.f_high) }
  ],
  colors: {
    "editor.background": ui.background,
    "editor.foreground": ui.f_high,
    "editorIndentGuide.background": ui.background,
    "editorIndentGuide.activeBackground": ui.b_med,
    "breadcrumb.foreground": "#999999",
    "breadcrumb.background": ui.background,
    "editorGroupHeader.noTabsBackground": ui.background,
    "editorGutter.background": ui.background,
    "editorPane.background": ui.background,
    "editorWidget.background": ui.background,
    "tab.activeBackground": ui.background,

    "sideBar.background": "#101010",

    "editor.inactiveSelectionBackground": "#3a3d41",
    "editor.lineHighlightBackground": "#2a2a2b",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionBackground": "#add6ff26",
    "selection.background": "#7ebeff69",

    "editorBracketMatch.background": "#880088",

    "editorBracketMatch.border": "#cc00cc",
    "editorGroup.border": "#000000",
    "editorLineNumber.activeForeground": "#ffffff",
    "editorLineNumber.foreground": "#555555",
    "editorRuler.foreground": ui.b_low,
    "editorWhitespace.foreground": ui.b_low,
    "list.dropBackground": "#383b3d",
    "panel.background": "#000000",

    "sideBar.foreground": "#999999",
    "sideBarSectionHeader.background": "#000000",
    "statusBar.background": "#000000",
    "statusBar.foreground": ui.b_med,
    "statusBarItem.prominentBackground": "#00ff00",
    "terminal.background": "#000000",
    //
    "activityBar.background": "#000000",
    "activityBar.dropBackground": "#888888",
    "activityBar.foreground": "#888888",
    "activityBarBadge.background": "#4d4d4d",
    "activityBarBadge.foreground": "#ffffff",
    "badge.background": "#4d4d4d",
    "badge.foreground": "#ffffff",
    "breadcrumb.activeSelectionForeground": "#e0e0e0",

    "breadcrumb.focusForeground": "#e0e0e0",
    "breadcrumbPicker.background": "#2d2d30",
    "button.background": "#0e639c",

    "button.foreground": "#ffffff",
    "button.hoverBackground": "#1177bb",
    "debugExceptionWidget.background": "#420b0d",
    "debugExceptionWidget.border": "#a31515",
    "debugToolBar.background": "#333333",
    descriptionForeground: "#ccccccb3",
    "diffEditor.insertedTextBackground": "#9bb95533",
    "diffEditor.removedTextBackground": "#ff000033",
    "dropdown.background": "#3c3c3c",
    "dropdown.border": "#3c3c3c",
    "dropdown.foreground": "#f0f0f0",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchHighlightBackground": "#ea5c0055",
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.lineHighlightBorder": "#282828",
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.wordHighlightBackground": "#575757b8",
    "editor.wordHighlightStrongBackground": "#004972b8",
    "editorCodeLens.foreground": "#999999",
    "editorCursor.foreground": "#aeafad",
    "editorError.foreground": "#f44747",
    "editorGroup.dropBackground": "#53595d80",

    "editorGroupHeader.tabsBackground": "#252526",
    "editorGutter.addedBackground": "#587c0c",

    "editorGutter.commentRangeForeground": "#c5c5c5",
    "editorGutter.deletedBackground": "#94151b",
    "editorGutter.modifiedBackground": "#0c7d9d",
    "editorHint.foreground": "#eeeeeeb3",
    "editorHoverWidget.background": "#2d2d30",
    "editorHoverWidget.border": "#454545",
    "editorInfo.foreground": "#008000",
    "editorLink.activeForeground": "#4e94ce",
    "editorMarkerNavigation.background": "#2d2d30",
    "editorMarkerNavigationError.background": "#f44747",
    "editorMarkerNavigationInfo.background": "#008000",
    "editorMarkerNavigationWarning.background": "#4d9e4d",
    "editorOverviewRuler.addedForeground": "#007acc99",
    "editorOverviewRuler.border": "#7f7f7f4d",
    "editorOverviewRuler.bracketMatchForeground": "#a0a0a0",
    "editorOverviewRuler.commonContentForeground": "#60606066",
    "editorOverviewRuler.currentContentForeground": "#40c8ae80",
    "editorOverviewRuler.deletedForeground": "#007acc99",
    "editorOverviewRuler.errorForeground": "#f44747ce",
    "editorOverviewRuler.findMatchForeground": "#f6b94db3",
    "editorOverviewRuler.incomingContentForeground": "#40a6ff80",
    "editorOverviewRuler.infoForeground": "#121288b3",
    "editorOverviewRuler.modifiedForeground": "#007acc99",
    "editorOverviewRuler.rangeHighlightForeground": "#007acc99",
    "editorOverviewRuler.selectionHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.warningForeground": "#128812b3",
    "editorOverviewRuler.wordHighlightForeground": "#a0a0a0cc",
    "editorOverviewRuler.wordHighlightStrongForeground": "#c0a0c0cc",

    "editorSuggestWidget.background": "#2d2d30",
    "editorSuggestWidget.border": "#454545",
    "editorSuggestWidget.foreground": ui.f_high,
    "editorSuggestWidget.highlightForeground": "#0097fb",
    "editorSuggestWidget.selectedBackground": "#062f4a",
    "editorUnnecessaryCode.opacity": "#000000aa",
    "editorWarning.foreground": "#4d9e4d",

    "editorWidget.border": "#454545",
    errorForeground: "#f48771",
    "extensionButton.prominentBackground": "#327e36",
    "extensionButton.prominentForeground": "#ffffff",
    "extensionButton.prominentHoverBackground": "#28632b",
    focusBorder: "#ffffff7f",
    foreground: "#cccccc",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#ff00ff",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": "#666",
    "gitDecoration.modifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",
    "input.background": "#3c3c3c",
    "input.foreground": "#cccccc",
    "input.placeholderForeground": "#cccccc80",
    "inputOption.activeBorder": "#ffffff",
    "inputValidation.errorBackground": "#5a1d1d",
    "inputValidation.errorBorder": "#be1100",
    "inputValidation.infoBackground": "#063b49",
    "inputValidation.infoBorder": "#007acc",
    "inputValidation.warningBackground": "#352a05",
    "inputValidation.warningBorder": "#b89500",
    "list.activeSelectionBackground": "#094771",
    "list.activeSelectionForeground": "#ffffff",
    "list.errorForeground": "#f88070",
    "list.focusBackground": "#062f4a",
    "list.highlightForeground": "#0097fb",
    "list.hoverBackground": "#2a2d2e",
    "list.inactiveFocusBackground": "#313135",
    "list.inactiveSelectionBackground": "#37373d",
    "list.invalidItemForeground": "#b89500",
    "list.warningForeground": "#4d9e4d",
    "menu.background": "#111111",
    "menu.foreground": "#999999",
    "menu.selectionBackground": "#094771",
    "menu.selectionForeground": "#ffffff",
    "menubar.selectionBackground": "#ffffff1a",
    "menubar.selectionForeground": "#cccccc",
    "merge.commonContentBackground": "#60606029",
    "merge.commonHeaderBackground": "#60606066",
    "merge.currentContentBackground": "#40c8ae33",
    "merge.currentHeaderBackground": "#40c8ae80",
    "merge.incomingContentBackground": "#40a6ff33",
    "merge.incomingHeaderBackground": "#40a6ff80",
    "notificationCenterHeader.background": "#3b3b3e",
    "notificationLink.foreground": "#3794ff",
    "notifications.background": "#2d2d30",
    "notifications.border": "#3b3b3e",
    "panel.border": "#80808059",
    "panel.dropBackground": "#ffffff1f",
    "panelTitle.activeBorder": "#80808059",
    "panelTitle.activeForeground": "#e7e7e7",
    "panelTitle.inactiveForeground": "#e7e7e799",
    "peekView.border": "#007acc",
    "peekViewEditor.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewResult.background": "#252526",
    "peekViewResult.fileForeground": "#ffffff",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": "#1e1e1e",
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#ffffff",
    "pickerGroup.border": "#3f3f46",
    "pickerGroup.foreground": "#3794ff",
    "progressBar.background": "#0e70c0",
    "scrollbar.shadow": "#000000",
    "scrollbarSlider.activeBackground": "#bfbfbf66",
    "scrollbarSlider.background": "#79797966",
    "scrollbarSlider.hoverBackground": "#646464b3",
    "settings.checkboxBackground": "#3c3c3c",
    "settings.checkboxBorder": "#3c3c3c",
    "settings.checkboxForeground": "#f0f0f0",
    "settings.dropdownBackground": "#3c3c3c",
    "settings.dropdownBorder": "#3c3c3c",
    "settings.dropdownForeground": "#f0f0f0",
    "settings.dropdownListBorder": "#454545",
    "settings.headerForeground": "#e7e7e7",
    "settings.modifiedItemIndicator": "#0c7d9d",
    "settings.numberInputBackground": "#3c3c3c",
    "settings.numberInputForeground": "#cccccc",
    "settings.textInputBackground": "#3c3c3c",
    "settings.textInputForeground": "#cccccc",
    "sideBar.dropBackground": "#ffffff1f",
    "sideBarSectionHeader.foreground": "#999999",
    "sideBarTitle.foreground": "#999999",
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": ui.b_med,
    "statusBar.noFolderBackground": "#68217a",
    "statusBar.noFolderForeground": ui.b_med,
    "statusBarItem.activeBackground": "#ffffff2e",
    "statusBarItem.hoverBackground": "#ffffff1f",
    "statusBarItem.prominentHoverBackground": "#369432",

    "tab.activeForeground": "#ffffff",
    "tab.border": "#252526",
    "tab.unfocusedActiveForeground": "#ffffff80",
    "tab.inactiveBackground": ui.b_low,
    "tab.inactiveForeground": "#888888",

    // "tab.unfocusedHoverBackground": "#ffff00",
    // "tab.hoverBackground": "#00ffff",
    // "tab.unfocusedActiveBorder": "#ff0000",
    // "tab.activeBorderTop": "#ff00ff",
    // "editorGroup.emptyBackground": "#ff0000",

    "tab.unfocusedInactiveForeground": ui.b_med,
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#2472c8",
    "terminal.ansiBrightBlack": ui.b_med,
    "terminal.ansiBrightBlue": "#3b8eea",
    "terminal.ansiBrightCyan": "#29b8db",
    "terminal.ansiBrightGreen": "#23d18b",
    "terminal.ansiBrightMagenta": "#d670d6",
    "terminal.ansiBrightRed": "#f14c4c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#f5f543",
    "terminal.ansiCyan": "#11a8cd",
    "terminal.ansiGreen": "#0dbc79",
    "terminal.ansiMagenta": "#bc3fbc",
    "terminal.ansiRed": "#cd3131",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": "#e5e510",
    "terminal.foreground": "#cccccc",
    "terminal.selectionBackground": "#ffffff40",
    "textBlockQuote.background": "#7f7f7f1a",
    "textBlockQuote.border": "#007acc80",
    "textCodeBlock.background": "#0a0a0a66",
    "textLink.activeForeground": "#3794ff",
    "textLink.foreground": "#3794ff",
    "textPreformat.foreground": "#d7ba7d",
    "textSeparator.foreground": "#ffffff2e",

    "titleBar.border": "#000000",
    "titleBar.activeBackground": "#000000",
    "titleBar.activeForeground": "#cccccc",
    "titleBar.inactiveBackground": "#00000099",
    "titleBar.inactiveForeground": "#cccccc99",

    "widget.shadow": "#000000"
  }
});

export const dark = theme("vs-dark");
