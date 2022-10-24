module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	globals: {
		// Ref sugar (take 2)
		$: "readonly",
		$$: "readonly",
		$ref: "readonly",
		$shallowRef: "readonly",
		$computed: "readonly",

		// index.d.ts
		// global.d.ts
		Fn: "readonly",
		PromiseFn: "readonly",
		RefType: "readonly",
		LabelValueOptions: "readonly",
		EmitType: "readonly",
		TargetContext: "readonly",
		ComponentElRef: "readonly",
		ComponentRef: "readonly",
		ElRef: "readonly",
		global: "readonly",
		ForDataType: "readonly",
		ComponentRoutes: "readonly",

		// script setup
		defineProps: "readonly",
		defineEmits: "readonly",
		defineExpose: "readonly",
		withDefaults: "readonly",
	},
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/jsx-runtime",
	],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: "latest",
		sourceType: "module",
		jsxPragma: "React",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",

		// eslint (http://eslint.cn/docs/rules)
		"no-console": "off", // 禁用 console
		"no-debugger": "off", // 禁用 debugger
		"no-irregular-whitespace": "off", // 禁止不规则的空白

		"no-case-declarations": "off", // 不允许在 case 子句中使用词法声明

		"no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
		"no-unused-vars": "off", // 禁止定义未使用的变量
		"space-before-function-paren": "off", // 强制在 function的左括号之前使用一致的空格

		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行

		"no-var": "error", // 要求使用 let 或 const 而不是 var
		"prefer-const": "off", // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const

		// typeScript (https://typescript-eslint.io/rules)
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^h$",
				varsIgnorePattern: "^h$",
			},
		], // 禁止定义未使用的变量
		"@typescript-eslint/no-inferrable-types": "off", // 可以轻松推断的显式类型可能会增加不必要的冗长
		"@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
		"@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
		"@typescript-eslint/ban-ts-ignore": "off", // 禁止使用 @ts-ignore
		"@typescript-eslint/ban-types": "off", // 禁止使用特定类型
		"@typescript-eslint/explicit-function-return-type": "off", // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		"@typescript-eslint/no-var-requires": "off", // 不允许在 import 语句中使用 require 语句
		"@typescript-eslint/no-empty-function": "off", // 禁止空函数
		"@typescript-eslint/no-use-before-define": "off", // 禁止在变量定义之前使用它们
		"@typescript-eslint/ban-ts-comment": "off", // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		"@typescript-eslint/no-non-null-assertion": "off", // 不允许使用后缀运算符的非空断言(!)
		"@typescript-eslint/explicit-module-boundary-types": "off", // 要求导出函数和类的公共类方法的显式返回和参数类型
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
