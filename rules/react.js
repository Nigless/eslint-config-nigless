module.exports = {
  "overrides": [{
    "files": ["*.tsx"],
    rules: {
      'react/prop-types': 'off',
      "react/require-default-props": "off"
    }
  }],
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  rules: {
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true
    }],
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],
    'react/require-render-return': 'error',
    'react/jsx-no-target-blank': ['error', {
      enforceDynamicLinks: 'always'
    }],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx']
    }],
    'react/no-danger-with-children': 'error',
    'react/style-prop-object': 'error',
    'react/no-children-prop': 'error',
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
    }],
    'react/forbid-foreign-prop-types': ['warn', {
      allowInPropTypes: true
    }],
    'react/void-dom-elements-no-children': 'error',
    'react/default-props-match-prop-types': ['error', {
      allowRequiredDefaults: false
    }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-typos': 'error',
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never'
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false,
    }],
    'react/no-this-in-sfc': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': ['error', 'property assignment'],
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: [],
    }],
    'react/jsx-no-script-url': ['error', [{
      name: 'Link',
      props: ['to'],
    }, ]],
    'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'function-expression'],
      unnamedComponents: 'function-expression',
    }],
    'react/jsx-no-constructed-context-values': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-namespace': 'error',
    'react/prefer-exact-props': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-invalid-html-attribute': 'error',
  },
};
