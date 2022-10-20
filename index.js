module.exports = {
  "overrides": [{
    "files": [".eslintrc.cjs"],
    "env": {
      "node": true,
    },
  }],
  "extends": [
    "./rules/base.js",
    "./rules/react.js",
    "./rules/svelte.js",
    "./rules/import.js",
  ],
};
