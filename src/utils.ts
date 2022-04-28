import {
  GoogleChartWrapper,
  GoogleChartWrapperChartType,
  GoogleDataTable,
  GoogleDataView,
  GoogleViz,
  GoogleVizEventName,
  GoogleVizEvents,
} from './types';

export interface ICreateChartFunction {
  (
    el: HTMLElement,
    google: GoogleViz,
    type: GoogleChartWrapperChartType
  ): GoogleChartWrapper;
}

export function getValidChartData(
  chartsLib: null | GoogleViz,
  data: unknown[][] | GoogleDataTable | Record<string, any> | null
): GoogleDataTable | GoogleDataView | null {
  if (chartsLib !== null && data instanceof chartsLib.visualization.DataTable) {
    return data;
  }

  if (chartsLib !== null && data instanceof chartsLib.visualization.DataView) {
    return data;
  }

  if (chartsLib !== null && Array.isArray(data)) {
    return chartsLib.visualization.arrayToDataTable(data);
  }

  if (chartsLib !== null && data !== null && typeof data === 'object') {
    return new chartsLib.visualization.DataTable(data);
  }

  return null;
}

export function createChartObject(
  chartsLib: GoogleViz | null,
  chartObject: GoogleChartWrapper | null,
  chartEl: HTMLElement | null,
  chartType: GoogleChartWrapperChartType,
  chartEvents: GoogleVizEvents | null,
  createChartFunction?: ICreateChartFunction
): GoogleChartWrapper | null {
  const createChart: ICreateChartFunction = (
    el: HTMLElement,
    google: GoogleViz,
    type: GoogleChartWrapperChartType
  ): GoogleChartWrapper => {
    if (type === undefined) {
      throw new Error('please, provide chart type property');
    }

    return new google.visualization[type](el);
  };

  if (chartsLib === null) {
    throw new Error('please, provide charts lib property');
  }

  if (chartEl === null) {
    throw new Error('please, provide chart element property');
  }

  const fn = createChartFunction || createChart;

  chartObject = fn(chartEl, chartsLib, chartType);

  attachListeners(chartsLib, chartObject, chartEvents);

  return chartObject;
}

function attachListeners(
  chartsLib: null | GoogleViz,
  chartObject: GoogleChartWrapper | null,
  chartEvents: GoogleVizEvents | null
): void {
  if (chartEvents === null) {
    return;
  }

  for (const [event, listener] of Object.entries(chartEvents)) {
    if (chartsLib !== null && chartObject !== null) {
      chartsLib.visualization.events.addListener(
        chartObject,
        event as GoogleVizEventName,
        listener as (chartWrapper: GoogleChartWrapper) => any
      );
    }
  }
}
