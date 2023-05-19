/**
 * 若为后端返回数据那么数据及必返回如下 true false 也可以用0 和 1代替，必须为数值或者number
 * path					必填 请求路径
 * component		必填 组件路径，由开发人员填写
 * name					选填 必须英文，默认不展示，直接replaceAll '/'
 * title				必填 菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 * isLink   		是否超链接菜单与 isIframe 互斥
 * isIframe 		是否内嵌窗口与 isLink 互斥
 * address 			当 isLink isIframe两者为true时此项必填
 * isHide   		是否隐藏此路由
 * isKeepAlive	是否缓存组件状态
 * isAffix  		是否固定在 tagsView 栏上
 * roles    		判断是否有当前角色，仅仅当前端控制权限时，此项必须
 * permission   判断当前操作权限，仅仅当前端控制权限时，此项必须
 * icon     		必填 菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * children
 */
export default {
  menus: [{
    path: "/demo",
    component: "",
  }]
};
