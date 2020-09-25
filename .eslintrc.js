module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'babel'
  ],
  'extends': [
    'eslint-config-airbnb-base'
  ],
  'env': {
    'node': true,
    'es6': true
  },
  'globals': {
    'ENV': 'readable',
    'fetch': true
  },
  'rules': {
    'no-shadow': [
      0
    ],
    'no-case-declarations': [
      0
    ],
    'no-use-before-define': [
      0
    ],
    'no-bitwise': [
      0
    ],
    'comma-dangle': [
      1,
      'never'
    ],
    'radix': [
      2,
      'as-needed'
    ],
    'template-curly-spacing': [
      1,
      'always'
    ],
    'import/prefer-default-export': [
      0
    ],
    'import/no-unresolved': [
      0
    ],
    'import/extensions': [
      0
    ],
    'import/no-named-as-default': [
      0
    ],
    'import/no-absolute-path': [
      0
    ],
    'space-before-function-paren': [
      0
    ],
    'prefer-const': [
      0
    ],
    'operator-linebreak': [
      0
    ],
    'no-plusplus': [
      0
    ],
    'no-underscore-dangle': [
      0
    ],
    'no-throw-literal': [
      0
    ],
    'no-param-reassign': [
      0
    ],
    'class-methods-use-this': [
      0
    ],
    'object-curly-newline': [
      0
    ],
    'no-unused-expressions': [
      0
    ],
    'babel/no-unused-expressions': [
      1,
      { 'allowShortCircuit': true, 'allowTernary': true }
    ],
    'max-len': [1, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }]
  }
};
