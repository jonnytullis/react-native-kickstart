module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "react-native/react-native": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "react-native",
    ],
    "rules": {
        "array-bracket-spacing": [ "warn", "always" ],
        "comma-dangle": [ "error", "always-multiline" ],
        "func-call-spacing": [ "warn", "never" ],
        "indent": [ "warn", 4 ],
        "no-unused-vars": "error",
        "space-before-blocks": [ "warn", "always" ],
        "object-curly-spacing": [ "warn", "always" ],
        "react-native/split-platform-components": "error",
        "react-native/no-inline-styles": "error",
        "react-native/no-color-literals": "error",
        "react-native/no-raw-text": "error",
        "react-native/no-single-element-style-arrays": "warn",
    },
}
