import Vue from 'vue';
import App from './App.vue';

import VueECharts from 'vue-echarts';

import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/chart/line';

// register globally (or you can do it locally)
Vue.component('v-chart', VueECharts);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
