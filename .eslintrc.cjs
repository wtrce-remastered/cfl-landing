module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "@feature-sliced",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "@feature-sliced/eslint-config/rules/import-order/experimental"
    ],
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "react", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-namespace": "off",
        "react-hooks/exhaustive-deps": "off",
        "import/no-internal-modules": [
            "off",
            {
                allow: ["~/shared/ui/icons/*"]
            }
        ]
    }
}

