module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],
  // overrides: [
  //     // 扫描.vue/html文件中的<style>标签内的样式
  //     {
  //         files: ["**/*.{vue,html}"],
  //         customSyntax: "postcss-html",
  //     },
  // ],
  // 覆盖配置（优先级大于config-standard）
  rules: {
    indentation: 4,
    "font-family-no-missing-generic-family-keyword": null,
  },
};
