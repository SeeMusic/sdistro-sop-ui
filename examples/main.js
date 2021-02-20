import Vue from 'vue';
import App from './App';
import SdistroSopUI from '../packages';

Vue.use(SdistroSopUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
