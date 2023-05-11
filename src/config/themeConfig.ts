export default {
  screenMobile: 991,
  screenNormal: 992,
  screenData: 3840,
  i18nDef: import.meta.env.VITE_LOCAL,
  i18nEnum: {
    ZHCN: {
      name: "",
      value: "zh-cn",
    },
    ENUS: {
      name: "",
      value: "en-us",
    },
  },
  i18nKey: /\/zh-cn|en-us|zh-tw\//,
  i18nKeys: [
    {
      label: "中文简体",
      value: "zh-cn",
    },
    {
      label: "English",
      value: "en-us",
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
