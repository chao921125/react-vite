import { tupleStr } from '@/utils/core'

// eslint-disable-next-line
import { ReactComponent as menuBlank } from './black/menu_blank.svg'
import { ReactComponent as menuChart } from './black/menu_chart.svg'
import money from './colour/money.svg'

/**
 * 1.为什么要将图标放在本地？
 * 以前开发的时候将图标上传到远程的iconfont，每次要用到某个图标，都要去iconfont上查看。
 * 如果将图标放在本地，只需要打开这个文件即可查看所有图标，并找到自己所要使用的图标。
 * vs code可以安装Svg Preview插件来实现预览。
 * 另一方面，设计师通过AI导出的svg图标如果比较复杂的话，很可能无法上传到iconfont上，所以有时候还是得在本地维护一份图标文件。
 *
 * 2.为什么要将图标名称进行类型定义
 * 如果图标太多的话，根本是记不住所有图标的名称的，所以每次都得来这里找。
 * 对图标名称进行类型限制，就可以在使用Icon组件的时候得到提示。如果图标的命名比较规范，就可以很方便的知道自己所要使用的图标。
 *
 * 3.为什么要分单色图标和多色图标
 * antd的Icon组件可以接受一个React组件。设计师提供的比较复杂的多色图标可能出现显示上的问题，所以对于多色图标，统一使用img。
 */

 interface IBlackIcon {
    [key: string]: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined
        }
    >
}

interface IColourIcon {
    [key: string]: string
}

// 单色图标。
// key为图标名称，value为本地的图标资源
export const BLACK_ICON_MAP: IBlackIcon = {
    menuBlank,
    menuChart,
}

// 多色图标
export const COLOUR_ICON_MAP: IColourIcon = {
    money
}

// 图标名称类型
const blackIconNames = tupleStr('menuBlank', 'menuChart')
const colourIconNames = tupleStr('money')
export type BlackIconName = typeof blackIconNames[number]
export type ColourIconName = typeof colourIconNames[number]
export type IconName = BlackIconName | ColourIconName