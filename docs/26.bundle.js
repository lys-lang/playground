(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [['[', ']'], ['(', ')'], ['{', '}']],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '{', close: '}', notIn: ['string', 'comment'] },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.msdax',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '{', close: '}', token: 'delimiter.brackets' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        // Query keywords\n        'VAR',\n        'RETURN',\n        'NOT',\n        'EVALUATE',\n        'DATATABLE',\n        'ORDER',\n        'BY',\n        'START',\n        'AT',\n        'DEFINE',\n        'MEASURE',\n        'ASC',\n        'DESC',\n        'IN',\n        // Datatable types\n        'BOOLEAN',\n        'DOUBLE',\n        'INTEGER',\n        'DATETIME',\n        'CURRENCY',\n        'STRING'\n    ],\n    functions: [\n        // Relational\n        'CLOSINGBALANCEMONTH', 'CLOSINGBALANCEQUARTER', 'CLOSINGBALANCEYEAR', 'DATEADD', 'DATESBETWEEN',\n        'DATESINPERIOD', 'DATESMTD', 'DATESQTD', 'DATESYTD', 'ENDOFMONTH',\n        'ENDOFQUARTER', 'ENDOFYEAR', 'FIRSTDATE', 'FIRSTNONBLANK', 'LASTDATE',\n        'LASTNONBLANK', 'NEXTDAY', 'NEXTMONTH', 'NEXTQUARTER', 'NEXTYEAR',\n        'OPENINGBALANCEMONTH', 'OPENINGBALANCEQUARTER', 'OPENINGBALANCEYEAR', 'PARALLELPERIOD', 'PREVIOUSDAY',\n        'PREVIOUSMONTH', 'PREVIOUSQUARTER', 'PREVIOUSYEAR', 'SAMEPERIODLASTYEAR', 'STARTOFMONTH',\n        'STARTOFQUARTER', 'STARTOFYEAR', 'TOTALMTD', 'TOTALQTD', 'TOTALYTD',\n        'ADDCOLUMNS', 'ADDMISSINGITEMS', 'ALL', 'ALLEXCEPT', 'ALLNOBLANKROW',\n        'ALLSELECTED', 'CALCULATE', 'CALCULATETABLE', 'CALENDAR', 'CALENDARAUTO',\n        'CROSSFILTER', 'CROSSJOIN', 'CURRENTGROUP', 'DATATABLE', 'DETAILROWS',\n        'DISTINCT', 'EARLIER', 'EARLIEST', 'EXCEPT', 'FILTER',\n        'FILTERS', 'GENERATE', 'GENERATEALL', 'GROUPBY', 'IGNORE',\n        'INTERSECT', 'ISONORAFTER', 'KEEPFILTERS', 'LOOKUPVALUE', 'NATURALINNERJOIN',\n        'NATURALLEFTOUTERJOIN', 'RELATED', 'RELATEDTABLE', 'ROLLUP', 'ROLLUPADDISSUBTOTAL',\n        'ROLLUPGROUP', 'ROLLUPISSUBTOTAL', 'ROW', 'SAMPLE', 'SELECTCOLUMNS',\n        'SUBSTITUTEWITHINDEX', 'SUMMARIZE', 'SUMMARIZECOLUMNS', 'TOPN', 'TREATAS',\n        'UNION', 'USERELATIONSHIP', 'VALUES', 'SUM', 'SUMX',\n        'PATH', 'PATHCONTAINS', 'PATHITEM', 'PATHITEMREVERSE', 'PATHLENGTH',\n        'AVERAGE', 'AVERAGEA', 'AVERAGEX', 'COUNT', 'COUNTA',\n        'COUNTAX', 'COUNTBLANK', 'COUNTROWS', 'COUNTX', 'DISTINCTCOUNT',\n        'DIVIDE', 'GEOMEAN', 'GEOMEANX', 'MAX', 'MAXA',\n        'MAXX', 'MEDIAN', 'MEDIANX', 'MIN', 'MINA',\n        'MINX', 'PERCENTILE.EXC', 'PERCENTILE.INC', 'PERCENTILEX.EXC', 'PERCENTILEX.INC',\n        'PRODUCT', 'PRODUCTX', 'RANK.EQ', 'RANKX', 'STDEV.P',\n        'STDEV.S', 'STDEVX.P', 'STDEVX.S', 'VAR.P', 'VAR.S',\n        'VARX.P', 'VARX.S', 'XIRR', 'XNPV',\n        // Scalar\n        'DATE', 'DATEDIFF', 'DATEVALUE', 'DAY', 'EDATE',\n        'EOMONTH', 'HOUR', 'MINUTE', 'MONTH', 'NOW',\n        'SECOND', 'TIME', 'TIMEVALUE', 'TODAY', 'WEEKDAY',\n        'WEEKNUM', 'YEAR', 'YEARFRAC', 'CONTAINS', 'CONTAINSROW',\n        'CUSTOMDATA', 'ERROR', 'HASONEFILTER', 'HASONEVALUE', 'ISBLANK',\n        'ISCROSSFILTERED', 'ISEMPTY', 'ISERROR', 'ISEVEN', 'ISFILTERED',\n        'ISLOGICAL', 'ISNONTEXT', 'ISNUMBER', 'ISODD', 'ISSUBTOTAL',\n        'ISTEXT', 'USERNAME', 'USERPRINCIPALNAME', 'AND', 'FALSE',\n        'IF', 'IFERROR', 'NOT', 'OR', 'SWITCH',\n        'TRUE', 'ABS', 'ACOS', 'ACOSH', 'ACOT',\n        'ACOTH', 'ASIN', 'ASINH', 'ATAN', 'ATANH',\n        'BETA.DIST', 'BETA.INV', 'CEILING', 'CHISQ.DIST', 'CHISQ.DIST.RT',\n        'CHISQ.INV', 'CHISQ.INV.RT', 'COMBIN', 'COMBINA', 'CONFIDENCE.NORM',\n        'CONFIDENCE.T', 'COS', 'COSH', 'COT', 'COTH',\n        'CURRENCY', 'DEGREES', 'EVEN', 'EXP', 'EXPON.DIST',\n        'FACT', 'FLOOR', 'GCD', 'INT', 'ISO.CEILING',\n        'LCM', 'LN', 'LOG', 'LOG10', 'MOD',\n        'MROUND', 'ODD', 'PERMUT', 'PI', 'POISSON.DIST',\n        'POWER', 'QUOTIENT', 'RADIANS', 'RAND', 'RANDBETWEEN',\n        'ROUND', 'ROUNDDOWN', 'ROUNDUP', 'SIGN', 'SIN',\n        'SINH', 'SQRT', 'SQRTPI', 'TAN', 'TANH',\n        'TRUNC', 'BLANK', 'CONCATENATE', 'CONCATENATEX', 'EXACT',\n        'FIND', 'FIXED', 'FORMAT', 'LEFT', 'LEN',\n        'LOWER', 'MID', 'REPLACE', 'REPT', 'RIGHT',\n        'SEARCH', 'SUBSTITUTE', 'TRIM', 'UNICHAR', 'UNICODE',\n        'UPPER', 'VALUE'\n    ],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            [/[;,.]/, 'delimiter'],\n            [/[({})]/, '@brackets'],\n            [/[a-z_][a-zA-Z0-9_]*/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@functions': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        comments: [\n            [/\\/\\/+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/N\"/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string', next: '@string' }]\n        ],\n        string: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string'],\n            [/\"/, { token: 'string', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/\\[/, { token: 'identifier.quote', next: '@bracketedIdentifier' }],\n            [/'/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        bracketedIdentifier: [\n            [/[^\\]]+/, 'identifier'],\n            [/]]/, 'identifier'],\n            [/]/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        quotedIdentifier: [\n            [/[^']+/, 'identifier'],\n            [/''/, 'identifier'],\n            [/'/, { token: 'identifier.quote', next: '@pop' }]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js?");

/***/ })

}]);