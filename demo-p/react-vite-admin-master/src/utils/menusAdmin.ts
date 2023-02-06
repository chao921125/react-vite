// import { AppstoreAddOutlined, FormOutlined, VerticalAlignMiddleOutlined } from '@ant-design/icons-vue';
// import { AntdIconProps } from '@ant-design/icons-vue/lib/components/AntdIcon';
// import { FunctionalComponent } from 'vue';
// import i18n from '../plugins/i18n/i18n';

export type Menu = {
  name: string;
  path: string;
  folder?: string;
  file?: string;
  icon?: string;
  children?: Menu[];
}
export const menusAdmin: Menu[] = [
  {
    folder: 'workplace',
    file: 'Workplace',
    path: 'workplace',
    name: ('global.工作台'),
  },
  {
    folder: 'richText', file: 'RichText', path: 'rich-text', name: ('global.富文本'),
  },
//   {
//     folder: 'echarts', file: 'Echarts', path: 'echarts', name: ('echarts.图表'),
//   },
//   {
//     path: 'digui',
//     name: ('global.递归路由'),
//     children: [
//       {
//         folder: 'recursive',
//         file: 'Recursive1',
//         path: 'recursive-1',
//         name: ('global.递归-1'),
//         children: [
//           {
//             folder: 'recursive',
//             file: 'Recursive3',
//             path: 'recursive-3',
//             name: ('global.递归-3'),
//           },
//         ],
//       },
//       {
//         folder: 'recursive',
//         file: 'Recursive2',
//         path: 'recursive-2',
//         name: ('global.递归-2'),
//       },
//     ],
//   },
];
