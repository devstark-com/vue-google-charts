// Complete Google Charts Type Definition : https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/google.visualization/index.d.ts
export type GoogleViz = {
  charts: GoogleChartLoader;
  visualization: {
    ChartWrapper: GoogleChartWrapper;
    ChartEditor: GoogleChartEditor;
    DataTable: GoogleDataTable;
    DataView: GoogleDataView;
    events: GoogleVizEvents;
    arrayToDataTable: GoogleArrayToDataTable;
    drawToolbar: GoogleVizDrawToolbar;
    [otherKeys: string]: any;
  };
};

export type GoogleChartLoader = {
  load: (
    version: GoogleChartVersion,
    googleChartOptions: GoogleChartLoaderOptions
  ) => void;
  setOnLoadCallback: (callback: () => void) => void;
};

export type GoogleChartWrapper = {
  new (element: Element): GoogleChartWrapper;
  getContainer(): Element;
  getSelection(): ChartSelection[];
  setSelection(selection?: ChartSelection[] | null): void;
  draw: (
    data: GoogleDataTable | GoogleDataView,
    options: GoogleChartOptions
  ) => any;
  clearChart(): void;
  getImageURI(): string;
  getAction(id: string | number): ChartAction;
  getBoundingBox(id: string): ChartBoundingBox;
  getChartAreaBoundingBox(): ChartBoundingBox;
  getChartLayoutInterface(): ChartLayoutInterface;
  getHAxisValue(position: number, axisIndex?: number): number;
  getVAxisValue(position: number, axisIndex?: number): number;
  getXLocation(position: number, axisIndex?: number): number;
  getYLocation(position: number, axisIndex?: number): number;
  removeAction(id: string | number): void;
  setAction(action: ChartAction): void;
};

export interface ChartSelection {
  column?: number | null | undefined;
  row?: number | null | undefined;
}

export interface ChartAction {
  id: string | number;
  text: string;
  action: () => void;
}

export interface ChartBoundingBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface ChartLayoutInterface {
  getBoundingBox(id: string): ChartBoundingBox;
  getChartAreaBoundingBox(): ChartBoundingBox;
  getHAxisValue(position: number, axisIndex?: number): number;
  getVAxisValue(position: number, axisIndex?: number): number;
  getXLocation(position: number, axisIndex?: number): number;
  getYLocation(position: number, axisIndex?: number): number;
}

export type GoogleChartEditor = {
  new (): GoogleChartEditor;
  openDialog: (
    chartWrapper: GoogleChartWrapper,
    chartEditorOptions?: { dataSourceInput?: any; [otherKeyMaybe: string]: any }
  ) => null;
  getChartWrapper: () => GoogleChartWrapper;
  setChartWrapper: (chartWrapper: GoogleChartWrapper) => GoogleChartWrapper;
  closeDialog: () => null;
};

export type GoogleDataTable = {
  // https://developers.google.com/chart/interactive/docs/reference#dataparam
  new (dataParam: any): GoogleDataTable;
  addColumn: (column: GoogleDataTableColumn) => number;
  addRow: (row?: GoogleDataTableRow) => number;
  addRows: (rows?: GoogleDataTableRow[] | number[] | any[]) => number;
  clone: () => GoogleDataTable;

  getColumnId: (columnIndex: number) => string;
  getColumnLabel: (columnIndex: number) => string;
  getColumnPattern: (columnIndex: number) => string;
  getColumnProperties: (columnIndex: number) => {};
  getColumnProperty: (columnIndex: number, name: string) => any;
  getColumnRange: (columnIndex: number) => {
    min: number | null;
    max: number | null;
  };
  getColumnRole: (columnIndex: number) => GoogleDataTableColumnRoleType;
  getColumnType: (columnIndex: number) => GoogleDataTableColumnType;
  getDistinctValues: (columnIndex: number) => any[];
  getFilteredRows: (filters: GoogleDataTableRowFilter[]) => number[];
  getFormattedValue: (rowIndex: number, columnIndex: number) => string;
  getNumberOfColumns: () => number;
  getNumberOfRows: () => number;
  getProperties: (rowIndex: number, columnIndex: number) => {};
  getProperty: (rowIndex: number, columnIndex: number, name: string) => any;
  getRowProperties: (rowIndex: number) => {};
  getRowProperty: (rowIndex: number, name: string) => any;
  getSortedRows: (sortColumns: GoogleDataTableSortColumns) => number[];
  getTableProperties: () => {};
  getTableProperty: (name: string) => any;
  getValue: (
    rowIndex: number,
    columnIndex: number
  ) => boolean | string | number | Date | number[] | null;
  insertColumn: (
    columnIndex: number,
    type: GoogleDataTableColumnType,
    label?: string,
    id?: string
  ) => void;
  insertRows: (
    rowIndex: number,
    numberOrArray: GoogleDataTableRow[] | number
  ) => void;
  removeColumn: (columnIndex: number) => void;
  removeColumns: (columnIndex: number, numberOfColumns: number) => void;
  removeRow: (rowIndex: number) => void;
  removeRows: (rowIndex: number, numberOfColumns: number) => void;
  setCell: (
    rowIndex: number,
    columnIndex: number,
    value?: any,
    formattedValue?: string,
    properties?: {}
  ) => {};
  setColumnLabel: (columnIndex: number, label: string) => void;
  setColumnProperty: (columnIndex: number, name: string, value: any) => void;
  setColumnProperties: (columnIndex: number, properties: {} | null) => void;
  setFormattedValue: (
    rowIndex: number,
    columnIndex: number,
    formattedValue: string
  ) => void;
  setProperty: (
    rowIndex: number,
    columnIndex: number,
    name: string,
    value: any
  ) => void;
  setProperties: (
    rowIndex: number,
    columnIndex: number,
    properties: {} | null
  ) => void;

  setRowProperty: (rowIndex: number, name: string, value: any) => void;
  setRowProperties: (rowIndex: number, properties: {} | null) => void;
  setTableProperties: (properties: {} | null) => void;
  setValue: (rowIndex: number, columnIndex: number, value: string) => void;
  sort: (sortColumns: GoogleDataTableSortColumns) => void;
  toJSON: () => string; // GoogleDataTableJS
};

export type GoogleVizEvents = {
  addListener: (
    chartWrapper: GoogleChartWrapper | GoogleChartControl | GoogleChartEditor,
    name: GoogleVizEventName,
    onEvent: (chartWrapper: GoogleChartWrapper) => any
  ) => any;
  removeListener: (
    chartWrapper: GoogleChartWrapper,
    name: GoogleVizEventName,
    callback: Function
  ) => any;
  removeAllListeners: (chartWrapper: GoogleChartWrapper) => any;
};

export type GoogleArrayToDataTable = (
  data: any[][],
  isFirstRowLabels?: boolean
) => GoogleDataTable;

export type GoogleVizDrawToolbar = (
  toolbarContainer: HTMLDivElement,
  components: GoogleChartToolbarItem[]
) => any;

export type GoogleChartVersion = 'current' | 'upcoming';

export type GoogleChartLoaderOptions = {
  packages?: GoogleChartPackages[];
  language?: string;
  mapsApiKey?: string;
};

export interface ChartWrapperOptions {
  chartType: string;
  containerId: string;
  options: Partial<{
    width: number;
    height: number;
    is3D: boolean;
    title: string;
    backgroundColor: string;
    hAxis?: {
      minValue?: any;
      maxValue?: any;
      ticks?: GoogleChartTicks;
      title?: string;
      viewWindow?: { max?: any; min?: any };
      [otherOptionKey: string]: any;
    };
    vAxis?: {
      minValue?: any;
      maxValue?: any;
      ticks?: GoogleChartTicks;
      title?: string;
      viewWindow?: { max?: any; min?: any };
      [otherOptionKey: string]: any;
    };
    legend: any;
    colors: string[];
    [otherOptionKey: string]: any;
  }>;
  dataTable?: GoogleDataTable;
  dataSourceUrl?: string;
  query?: string;
  refreshInterval?: number;
  view: any[] | {};
  [otherOptionKey: string]: any;
}

export interface ChartWrapperProps {
  chartType: GoogleChartWrapperChartType;
  containerId?: string;
  options?: {
    width?: number;
    height?: number;
    is3D?: boolean;
    title?: string;
    backgroundColor: string;
  };
  dataTable?: {};
  dataSourceUrl?: string;
  query?: string;
  refreshInterval?: number;
  view?: any[] | {};
  render?: (props: ChartWrapperProps, chartWrapper: GoogleChartWrapper) => any;
  children?: (
    props: ChartWrapperProps,
    chartWrapper: GoogleChartWrapper
  ) => any;
}

/*
 *
 * Reference + Docs:
 * https://developers.google.com/chart/interactive/docs/reference#constructor_3
 * https://developers.google.com/chart/interactive/docs/reference#google.visualization.drawchart
 *
 */
export type GoogleChartWrapperChartType =
  | 'AnnotationChart'
  | 'AreaChart'
  | 'BarChart'
  | 'BubbleChart'
  | 'Calendar'
  | 'CandlestickChart'
  | 'ColumnChart'
  | 'ComboChart'
  | 'DiffChart'
  | 'DonutChart'
  | 'Gantt'
  | 'Gauge'
  | 'GeoChart'
  | 'Histogram'
  | 'LineChart'
  | 'Line'
  | 'Bar'
  | 'Map'
  | 'OrgChart'
  | 'PieChart'
  | 'Sankey'
  | 'ScatterChart'
  | 'Scatter'
  | 'SteppedAreaChart'
  | 'Table'
  | 'Timeline'
  | 'TreeMap'
  | 'WaterfallChart'
  | 'WordTree';

export type GoogleChartAction = {
  id: string;
  text: string;
  action: (chartWrapper: GoogleChartWrapper) => void;
};

export type GoogleDataTableColumn =
  | {
      type: GoogleDataTableColumnType;
      label?: string; //  A label for the column.
      role?: GoogleDataTableColumnRoleType;
      pattern?: string;
      p?: {};
      id?: string;
    }
  | string;

export type GoogleDataTableColumnType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'timeofday';

// Reference https://developers.google.com/chart/interactive/docs/roles
export enum GoogleDataTableColumnRoleType {
  annotation = 'annotation',
  annotationText = 'annotationText',
  certainty = 'certainty',
  emphasis = 'emphasis',
  interval = 'interval',
  scope = 'scope',
  style = 'style',
  tooltip = 'tooltip',
  domain = 'domain',
}

export type GoogleDataTableRow = GoogleDataTableCell[];

// Ref : https://developers.google.com/chart/interactive/docs/reference#dataparam

export type GoogleDataTableCell =
  | {
      v?: any; // The cell value. Type should match DataTableColumn type field
      f?: string; // A string version of the v value, formatted for display.
      p?: {};
    }
  | string
  | number
  | boolean
  | Date;

// Reference : https://developers.google.com/chart/interactive/docs/reference#DataTable

export type GoogleDataTableRowFilter = {
  column: number;
  value: any;
  minValue?: any;
  maxValue?: any;
};

export type GoogleDataTableSortColumns =
  | number
  | {
      column: number;
      desc: boolean;
    }
  | number[]
  | {
      column: number;
      desc: boolean;
    }[];

export type GoogleChartControl = {
  getContainerId: () => string;
  getOptions: () => GoogleChartControlOptions;
  getState: () => any;
  setState: (state: any) => void;
  setOptions: (options: GoogleChartControlOptions) => void;
  setControlType: (controlType: string) => void;
};

export type GoogleChartControlOptions = any;

export type GoogleVizEventName =
  | 'ready'
  | 'error'
  | 'select'
  | 'animationfinish'
  | 'statechange'
  | 'ok'
  | 'cancel'
  | 'animationstart';

export type GoogleChartToolbarItem = {
  type: 'igoogle' | 'html' | 'csv' | 'htmlcode';
  datasource: string;
  gadget?: string;
  userPrefs?: {
    '3d': number;
    [otherKeyMaybe: string]: any;
  };
};

export type GoogleChartPackages =
  | 'corechart'
  | 'charteditor'
  | 'controls'
  | 'calendar'
  | 'gantt'
  | 'gauge'
  | 'geochart'
  | 'map'
  | 'orgchart'
  | 'sankey'
  | 'table'
  | 'timeline'
  | 'treemap'
  | 'wordtree';

export type GoogleChartTicks = (number | Date)[];

export type GoogleChartOptions = {
  width?: number;
  height?: number;
  is3D?: boolean;
  backgroundColor?: string;

  title?: string;
  hAxis?: {
    minValue?: any;
    maxValue?: any;
    ticks?: GoogleChartTicks;
    title?: string;
    viewWindow?: { max?: any; min?: any; [otherOptionKey: string]: any };
    [otherOptionKey: string]: any;
  };
  vAxis?: {
    minValue?: any;
    maxValue?: any;
    ticks?: GoogleChartTicks;
    title?: string;
    viewWindow?: { max?: any; min?: any; [otherOptionKey: string]: any };
    [otherOptionKey: string]: any;
  };
  bubble?: {};
  pieHole?: number;
  redFrom?: number;
  redTo?: number;
  yellowFrom?: number;
  yellowTo?: number;
  minorTicks?: number;
  legend?:
    | string
    | {
        position?: string;
        maxLines?: number;
        [otherOptionKey: string]: any;
      };
  curveType?: string;
  showTooltip?: boolean;
  showInfoWindow?: boolean;
  allowHtml?: boolean;
  isStacked?: string | boolean;
  minColor?: string;
  midColor?: string;
  maxColor?: string;
  headerHeight?: number;
  fontColor?: string;
  showScale?: boolean;
  bar?: { groupWidth?: string }; // Remove space between bars.
  candlestick?: {
    fallingColor?: { strokeWidth?: number; fill?: string }; // red
    risingColor?: { strokeWidth?: number; fill?: string }; // green
    [otherOptionKey: string]: any;
  };
  wordtree?: {
    format?: string;
    word?: string;
    [otherOptionKey: string]: any;
  };
  [otherOptionKey: string]: any;
};

export type GoogleDataView = {
  new (dataParam: any): GoogleDataView;
  getColumnId(columnIndex: number): String;
  getColumnLabel(columnIndex: number): string;
  getColumnPattern(columnIndex: number): string;
  getColumnProperty(columnIndex: number, name: string): any;
  getColumnRange(columnIndex: number): { min: any; max: any };
  getColumnType(columnIndex: number): string;
  getDistinctValues(columnIndex: number): any[];
  getFilteredRows(filters: DataTableCellFilter[]): number[];
  getFormattedValue(rowIndex: number, columnIndex: number): string;
  getNumberOfColumns(): number;
  getNumberOfRows(): number;
  getProperty(rowIndex: number, columnIndex: number, name: string): any;
  getProperties(rowIndex: number, columnIndex: number): Properties;
  getRowProperty(rowIndex: number, name: string): any;
  getSortedRows(sortColumn: number): number[];
  getSortedRows(sortColumn: SortByColumn): number[];
  getSortedRows(sortColumns: number[]): number[];
  getSortedRows(sortColumns: SortByColumn[]): number[];
  getTableProperty(name: string): any;
  getValue(rowIndex: number, columnIndex: number): any;
  getTableColumnIndex(viewColumnIndex: number): number;
  getTableRowIndex(viewRowIndex: number): number;
  getViewColumnIndex(tableColumnIndex: number): number;
  getViewColumns(): number[];
  getViewColumns(): ColumnSpec[];
  getViewRowIndex(tableRowIndex: number): number;
  getViewRows(): number[];

  hideColumns(columnIndexes: number[]): void;
  hideRows(min: number, max: number): void;
  hideRows(rowIndexes: number[]): void;

  setColumns(columnIndexes: number[]): void;
  setColumns(columnIndexes: ColumnSpec[]): void;
  setColumns(columnIndexes: any[]): void;
  setRows(min: number, max: number): void;
  setRows(rowIndexes: number[]): void;

  toDataTable(): GoogleDataTable;
  toJSON(): string;
};

export interface DataTableCellFilter {
  column: number;
  value?: any;
  minValue?: any;
  maxValue?: any;
  test?:
    | ((
        value: any,
        row?: number,
        column?: number,
        data?: GoogleDataTable | GoogleDataView
      ) => boolean)
    | undefined;
}

export interface Properties {
  [property: string]: any;
}

export interface SortByColumn {
  column: number;
  desc: boolean;
}

export interface ColumnSpec {
  calc?: ((data: GoogleDataTable, row: number) => any) | undefined;
  type?: string | undefined;
  label?: string | undefined;
  id?: string | undefined;
  sourceColumn?: number | undefined;
  properties?: Properties | undefined;
  role?: string | undefined;
}
