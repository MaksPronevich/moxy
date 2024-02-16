module.exports = {
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:perfectionist/recommended-natural",
	],
	ignorePatterns: ["dist"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "perfectionist"],
	root: true,
	rules: {
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@typescript-eslint/no-unused-vars": "warn",
		"perfectionist/sort-array-includes": [
			"warn",
			{
				order: "asc",
				"spread-last": true,
				type: "natural",
			},
		],
		"perfectionist/sort-classes": [
			"warn",
			{
				groups: [
					"private-property",
					"static-property",
					"static-method",
					"constructor",
					"property",
					"private-method",
					"method",
				],
				order: "asc",
				type: "natural",
			},
		],
		"perfectionist/sort-enums": "off",
		"perfectionist/sort-exports": [
			"warn",
			{
				order: "asc",
				type: "line-length",
			},
		],
		"perfectionist/sort-interfaces": [
			"warn",
			{
				order: "asc",
				type: "natural",
			},
		],
		"perfectionist/sort-imports": [
			"warn",
			{
				"newlines-between": "always",
				order: "asc",
				type: "line-length",
			},
		],
		"perfectionist/sort-jsx-props": [
			"warn",
			{
				"custom-groups": {
					control: "id",
					id: "id",
					key: "id",
					name: "id",
					rules: "id",
				},
				groups: ["id", "unknown"],
				order: "asc",
				type: "line-length",
			},
		],
		"perfectionist/sort-named-exports": [
			"warn",
			{
				order: "asc",
				type: "natural",
			},
		],
		"perfectionist/sort-named-imports": [
			"warn",
			{
				order: "asc",
				type: "natural",
			},
		],
		"perfectionist/sort-object-types": "off",
		"perfectionist/sort-objects": "off",
		"perfectionist/sort-union-types": "off",
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": [
			"off",
			{},
			{
				usePrettierrc: true,
				endOfLine: "auto",
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
