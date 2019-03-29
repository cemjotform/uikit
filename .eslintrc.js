const eslintConfig = require('@jotforminc/configs').eslint({}, {
  "parser": "babel-eslint",
  "plugins": ["jest"],
  "rules": {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
      "import/no-extraneous-dependencies": 0,
      "react/forbid-foreign-prop-types" : 0
  },
  "env": {
      "jest/globals": true
  },
  "globals": {
    "FormData": true,
    "FileReader": true
  }
});

// console.log(require('util').inspect(eslintConfig, false, 15, true));

module.exports = eslintConfig;