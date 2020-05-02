module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    jquery: false,
    browser: true,
    es6: true
  },
  overrides: [
    {
      files: [
        "**/*.spec.js"
      ],
      env: {
        jest: true
      }
    }
  ],
  extends: [
    "react-app",
    "plugin:jsdoc/recommended",
    "strongloop"
  ],
  plugins: [
    "html",
    "jsdoc"
  ],
  rules: {
    'max-len': ["error", { "code": 150 }],
    indent: [
      "error", 2,
      {SwitchCase: 1}
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "never"
    ],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    }],
    "jsdoc/no-undefined-types": 0
  }
}
