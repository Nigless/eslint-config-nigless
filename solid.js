module.exports = {
  "extends": [
    "./index.js",
  ],
  "rules": {
    "react/no-unknown-property": ["error", {
      ignore: ["class"]
    }]
  }
};
