import DataTable from './main';

DataTable.install = (Vue) => {
  Vue.component(DataTable.name, DataTable);
};

export default DataTable;
