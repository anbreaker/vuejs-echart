<template>
  <div class="chart">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
  import { use } from 'echarts/core';
  import { CanvasRenderer } from 'echarts/renderers';
  import { PieChart } from 'echarts/charts';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import VChart, { THEME_KEY } from 'vue-echarts';

  use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

  export default {
    name: 'HelloWorld',
    components: {
      VChart,
    },
    provide: {
      [THEME_KEY]: 'dark',
    },
    data() {
      return {
        option: {
          tooltip: { trigger: 'item' },
          legend: {
            show: true,
            top: '5%',
            left: 'left',
            orient: 'vertical',
            formatter: (name) => {
              return name + '\n1048';
            },
          },
          series: [
            {
              name: 'Alarmas',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: true,
              label: {
                show: true,
                position: 'center',
                fontSize: '40',
                formatter: () => {
                  return 'Total\n10\nalarms';
                },
              },
              labelLine: { show: false },
              data: [
                { value: 1048, name: 'Acknowledge' },
                { value: 735, name: 'Unacknowledge' },
              ],
            },
          ],
        },
      };
    },
  };
</script>

<style scoped>
  .chart {
    height: 400px;
  }
</style>
