import MetaInfo from './main';

MetaInfo.install = (Vue) => {
  Vue.component(MetaInfo.name, MetaInfo);
};

export default MetaInfo;
