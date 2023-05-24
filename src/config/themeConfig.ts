export default {
  screenMobile: 991,
  screenNormal: 992,
  screenData: 3840,
  i18nDef: import.meta.env.VITE_LOCAL,
  i18nEnum: {
    ZHCN: {
      name: "中文简体",
      value: "zh-CN",
    },
    ENUS: {
      name: "English",
      value: "en-US",
    },
  },
  i18nKey: /\/zh-CN|en-US|zh-TW\//,
  i18nKeyArr: ["zh-CN", "en-US", "zh-TW"],
  i18nKeys: [
    {
      label: "中文简体",
      value: "zh-CN",
    },
    {
      label: "English",
      value: "en-US",
    },
  ],
  sizeKeys: [
    {
      label: "默认",
      value: "default",
    },
    {
      label: "大型",
      value: "large",
    },
    {
      label: "小型",
      value: "small",
    },
  ],
};
