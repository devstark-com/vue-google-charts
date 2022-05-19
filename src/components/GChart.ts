import {
  defineComponent,
  ref,
  h,
  onMounted,
  onBeforeUnmount,
  watch,
  PropType,
} from 'vue';

import {
  GoogleViz,
  GoogleChartWrapper,
  GoogleChartWrapperChartType,
  GoogleChartOptions,
  GoogleChartVersion,
  GoogleChartLoaderOptions,
  GoogleVizEvents,
  GoogleDataTable,
} from '../types';

import {
  createChartObject,
  getValidChartData,
  ICreateChartFunction,
} from '../utils';

import { loadGoogleCharts } from '../lib/google-charts-loader';
import { debounce } from '../lib/debounce';

let chartsLib: null | GoogleViz = null;

export const GChart = defineComponent({
  name: 'GChart',
  props: {
    type: {
      type: String as PropType<GoogleChartWrapperChartType>,
      required: true,
    },
    data: {
      type: [Array, Object, null] as PropType<
        unknown[][] | GoogleDataTable | Record<string, any> | null
      >,
      default: () => [],
    },
    isFirstRowLabels: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object as PropType<GoogleChartOptions>,
      default: () => ({}),
    },
    version: {
      type: String as PropType<GoogleChartVersion>,
      default: 'current',
    },
    settings: {
      type: Object as PropType<GoogleChartLoaderOptions>,
      default: () => ({
        packages: ['corechart', 'table'],
      }),
    },
    events: {
      type: Object as PropType<GoogleVizEvents | null>,
      default: null,
    },
    createChart: {
      type: Function as PropType<ICreateChartFunction>,
      default: undefined,
    },
    resizeDebounce: {
      type: Number,
      default: 200,
    },
  },
  setup(props, { emit }) {
    const chartObject = ref<GoogleChartWrapper | null>(null);
    const chartEl = ref<HTMLElement | null>(null);

    function drawChart(): void {
      if (chartsLib === null || chartObject.value === null) {
        return;
      }

      const data = getValidChartData(
        chartsLib,
        props.data,
        props.isFirstRowLabels
      );
      if (data !== null) {
        chartObject.value?.draw(data, props.options);
      }
    }

    watch(
      () => props.data,
      () => drawChart(),
      { deep: true }
    );

    watch(
      () => props.options,
      () => drawChart(),
      { deep: true }
    );

    watch(
      () => props.type,
      () => {
        chartObject.value = createChartObject(
          chartsLib,
          chartObject.value,
          chartEl.value,
          props.type,
          props.events,
          props.createChart
        );

        drawChart();
      }
    );

    onMounted(() => {
      loadGoogleCharts(props.version, props.settings).then(api => {
        if (api !== undefined) {
          chartsLib = api;

          chartObject.value = createChartObject(
            chartsLib,
            chartObject.value,
            chartEl.value,
            props.type,
            props.events,
            props.createChart
          );

          emit('ready', chartObject.value, api);

          drawChart();
        }
      });

      if (props.resizeDebounce > 0) {
        window.addEventListener(
          'resize',
          debounce(drawChart, props.resizeDebounce) as EventListener
        );
      }
    });

    onBeforeUnmount(() => {
      if (
        chartObject.value !== null &&
        typeof chartObject.value.clearChart === 'function'
      ) {
        chartObject.value.clearChart();
      }

      if (props.resizeDebounce > 0) {
        window.removeEventListener(
          'resize',
          debounce(drawChart, props.resizeDebounce) as EventListener
        );
      }
    });

    return () => h('div', { ref: chartEl }, []);
  },
});
