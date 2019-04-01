import { monaco } from ".";

export const monarch: any & monaco.languages.IMonarchLanguage = {
  keywords: [
    "type",
    "impl",
    "struct",
    "enum",
    "fun",
    "val",
    "var",
    "loop",
    "if",
    "else",
    "case",
    "match",
    "continue",
    "break",
    "is",
    "as",

    "private",
    "public",
    "package",
    "import",
    "=",
    ".",
    "->"
  ],
  defaultToken: "invalid",

  escapes: /\\(?:[nrt\\"'\?]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{6})/,
  identifiers: /(?:[$A-Za-z_][A-Za-z0-9_$]*)/,
  operators: /(?:!|\|\||&&|&|\||\+\+|\-\-|\+|\-|==|!=|==|!==|<=|>=|<<|>>>|>>|<|>|\/|\*|\*\*|%|~|\^)/,

  tokenizer: {
    root: [
      { include: "@whitespace" },

      [/(@identifiers)(\.)/, ["identifier", "keyword.dot"]],
      [/(@identifiers)(\()/, [{ token: "identifier" }, { token: "@brackets", bracket: "@open", next: "@paren_block" }]],
      [/(@identifiers)(::)/, ["identifier.namespace", "identifier.namespace"]],

      [/(%struct\b)/, "keyword"],
      [/(%wasm\b\s*)(\{)/, [{ token: "keyword" }, { token: "@brackets", bracket: "@open", next: "@wasm" }]],
      [/(\bva[rl]\b\s*)(@identifiers)/, [{ token: "keyword" }, { token: "identifier" }]],
      [/\b(fun\b\s*)(@identifiers|@operators)/, [{ token: "keyword" }, { token: "identifier" }]],
      [/(%wasm\b)/, "invalid"],

      // identifiers and operators
      [/[A-Z]@identifiers/, "identifier"],

      [
        /\b@identifiers\b/,
        {
          cases: {
            "@keywords": {
              cases: {
                is: { token: "keyword", next: "@type_name" },
                as: { token: "keyword", next: "@type_name" },
                impl: { token: "keyword", next: "@type_name" },
                struct: { token: "keyword", next: "@type_name" },
                type: { token: "keyword", next: "@alias_type" },
                enum: { token: "keyword", next: "@type" },
                "@default": "keyword"
              }
            },
            "@default": "source"
          }
        }
      ],

      [/@identifiers/, "source"],

      [/(:(?!:))/, "delimiter", "@type"],

      { include: "@literals" },

      [/#\[/, { token: "@brackets", bracket: "@open", next: "@decorator" }],
      [/\{/, { token: "@brackets", bracket: "@open", next: "@block" }],
      [/\(/, { token: "@brackets", bracket: "@open", next: "@paren_block" }],

      [/[,]/, "delimiter"],
      [/[;`]/, "invalid"],

      // operators
      [/@operators/, { cases: { "\\-": "operator.minus", "@keywords": "keyword.operator", "@default": "operator" } }],
      [/=/, "keyword"]
    ],

    block: [
      [/\}/, { token: "@brackets", bracket: "@close", next: "@pop" }],
      { include: "@whitespace" },
      { include: "@root" }
    ],

    paren_block: [
      [/\)/, { token: "@brackets", bracket: "@close", next: "@pop" }],
      { include: "@whitespace" },
      { include: "@root" }
    ],

    whitespace: [
      [/[\s\r\n]+/, "white"],
      ["/\\*", "comment", "@comment"],
      ["//$", "comment"],
      ["//", "comment", "@line_comment"]
    ],

    comment: [
      [/^\s*["|]\s*$/, "comment", "@comment_docblock"],
      [/[^\/*"|]+/, "comment"],
      ["/\\*", "comment", "@push"],
      ["\\*/", "comment", "@pop"],
      [/(")((?:[^"]|"")*)(")/, ["comment", "comment.doc", "comment"]],
      [/(\|)((?:[^|]|\|\|)*)(\|)/, ["comment", "comment.doc", "comment"]],
      [/[\/*"|]/, "comment"]
    ],

    comment_docblock: [
      [/\*\/|\/\*/, "@rematch", "@pop"], // recover: back to comment mode
      [/^\s*"\s*$/, "comment", "@pop"],
      [/^\s*\|\s*$/, "comment", "@pop"],
      [/[^*\/]+/, "comment.doc"],
      [/./, "comment.doc"] // catch all
    ],

    line_comment: [
      [/[^"|]*$/, "comment", "@pop"],
      [/[^"|]+/, "comment"],
      [
        /(")((?:[^"]|"")*)(")/,
        ["comment", "comment.doc", { cases: { "@eos": { token: "comment", next: "@pop" }, "@default": "comment" } }]
      ],
      [
        /(\|)((?:[^|]|\|\|)*)(\|)/,
        ["comment", "comment.doc", { cases: { "@eos": { token: "comment", next: "@pop" }, "@default": "comment" } }]
      ],
      [/.*$/, "comment", "@pop"] // catch all
    ],

    literals: [
      // numbers
      [/[0-9]+\.[0-9]+([eE][\-+]?[0-9]+)?/, "number.float"],
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/[0-9]+/, "number"],

      // strings
      [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }]
    ],

    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "invalid"],
      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],

    decorator: [
      [/\]/, { token: "@brackets", bracket: "@close", next: "@pop" }],
      { include: "@literals" },
      [/@identifiers/, "source"],
      { include: "@whitespace" }
    ],

    paren_block_wasm: [[/\)/, { token: "@brackets", bracket: "@close", next: "@pop" }], { include: "@wasm" }],

    wasm: [
      [/\}/, { token: "@brackets", bracket: "@close", next: "@pop" }],
      [
        /(\()([\s\r\n]*)((?:@identifiers|\/|\.)+)/,
        [
          { token: "@brackets", bracket: "@open" },
          { token: "text" },
          { token: "identifier", next: "@paren_block_wasm" }
        ]
      ],
      [/(@identifiers|\/|\.)/, "source"],
      { include: "@literals" },
      { include: "@whitespace" }
    ],

    alias_type: [
      [/=/, "keyword.operator"], // allow equal sign
      { include: "@type" }
    ],

    type_name: [{ include: "@whitespace" }, [/@identifiers/, "type.identifier", "@pop"]],

    type: [[/[(\[<]/, { token: "@brackets.type" }, "@type_nested"], { include: "@type_content" }],

    type_nested: [
      [/[)\]>]/, { token: "@brackets.type" }, "@pop"],
      [/[(\[<]/, { token: "@brackets.type" }, "@push"],
      [/,/, "delimiter.type"],
      [/(@identifiers)(\s*)(:)(?!:)/, ["type.identifier.typeparam", "white", "type.operator"]],
      { include: "@type_content" }
    ],

    type_content: [
      { include: "@whitespace" },

      // type identifiers
      [/[a-z][0-9]*(?![a-zA-Z_\-])/, "type.identifier.typevar"],
      [
        /@identifiers/,
        {
          cases: {
            "@keywords": { token: "@rematch", next: "@pop" },
            "@default": "type.identifier"
          }
        }
      ],
      [/@identifiers(\.?)/, { cases: { $2: ["identifier.namespace", "keyword.dot"], "@default": "type.identifier" } }],

      [/::|->|[\.:|]/, "type.operator"],
      ["", "", "@pop"] // catch all
    ]
  },

  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "#[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ]
};
