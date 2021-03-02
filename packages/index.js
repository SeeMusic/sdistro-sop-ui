import Card from './card';
import Cover from './cover';
import DataTable from './datatable';
import DataTableItem from './datatable-item';
import StatusIcon from './status-icon'; // Deprecated
import Status from './status';

import MetaInfo from './meta-info';
import BasicInfo from './basic-info';

// 组件列表
const components = [
  DataTable,
  DataTableItem,
  Card,
  Cover,
  StatusIcon,
  MetaInfo,
  BasicInfo,
  Status,
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const { version } = require('../package.json');

export default {
  version,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  DataTable,
  DataTableItem,
  Status,
  StatusIcon,
  Card,
  Cover,
  MetaInfo,
  BasicInfo,
};
