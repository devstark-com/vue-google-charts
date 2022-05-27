# vue-google-charts

[![npm](https://img.shields.io/npm/v/vue-google-charts.svg) ![npm](https://img.shields.io/npm/dm/vue-google-charts.svg)](https://www.npmjs.com/package/vue-google-charts)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

Reactive Vue.js wrapper for Google Charts lib

<br />
<a href="#installation">Installation</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#usage">Usage</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://slack.cube.dev/?ref=eco-vue-google-charts">Slack</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#examples">Examples</a>
<br />
<hr />

# Installation

```bash
pnpm add vue-google-charts
# or
yarn add vue-google-charts
# or
npm i vue-google-charts
```

<hr />

Need an API to fetch data? Consider [Cube](https://cube.dev/?ref=eco-vue-google-charts), an open-source API for data apps.

<br />

[![supported by Cube](https://user-images.githubusercontent.com/986756/154330861-d79ab8ec-aacb-4af8-9e17-1b28f1eccb01.svg)](https://cube.dev/?ref=eco-vue-google-charts)

## Default import

This package works with version 2.x and 3.x of Vue.

Use locally in a component:

```javascript
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  }
}
```

For Vue 2 projects, you need to import from `vue-google-charts/legacy`.

```javascript
import { GChart } from 'vue-google-charts/legacy'
```

# Usage

## Read the Google Charts docs first
The `GChart` component is a wrapper for the original Google Charts, so it's assumed you are familiar with the vanilla Google Charts usage (https://developers.google.com/chart/).

With `vue-google-charts` package you don't need to link script loader and load Google Charts package manually.

Another bonus — reactive data binding. A chart will be redrawn automatically once `data` , `type` and `options` prop is changed.

## Simple usage:

```html
  <GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
  />
```
---
```javascript
export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  }
}
```
---
## Load additional packages:

```html
  <GChart
    :settings="{ packages: ['corechart', 'table', 'map'] }"
    type="Map"
    :data="chartData"
    :options="chartOptions"
  />
```
Using `settings` prop you can specify any setting available for google charts loader:
`packages`, `language`, `callback`, `mapsApiKey`.

See more on [available setting](https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings)

There's also `version` prop, so you can load a specific version, e.g. `version="upcoming"`.

See more on [available versions](https://developers.google.com/chart/interactive/docs/basic_load_libs#load-version-name-or-number)


---
## Add event listeners:

```html
  <GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
    :events="chartEvents"
  />
```

```javascript
export default {
  data () {
    return {
      // {
      //    eventName: handlerFunction,
      //    eventName: handlerFunction,
      // }
      chartEvents: {
        'select': () => {
          // handle event here
        }
      }
    }
  }
}
```

---
## Use `@ready` for something very custom

You can get chart instance and charts api references to draw a custom chart:

```html
  <GChart
    type="ColumnChart"
    @ready="onChartReady"
  />
```

```javascript
export default {
  methods: {
    onChartReady (chart, google) {
      const query = new google.visualization.Query('https://url-to-spreadsheet...')
      query.send(response => {
        const options = {
          // some custom options
        }
        const data = response.getDataTable()
        chart.draw(data, options)
      })
    }
  }
}
```

---

## `createChart` property

This property allows you to create custom chart object from outside of the component.
`createChart` property is the function and accepts three arguments:
`el` - the reference to chart element,
`google` - Google chart library,
`type` - chart type

```html
  <GChart
    :type="chartType"
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
  />
```

By default the function looks like this:
```javascript
  (el, google, type) => {
    return new google.visualization[type](el)
  }
```

For example `createChart` may be used to create Material bar charts (Material bar charts expect of class `google.charts.Bar` instead of `google.visualization.BarChart`). See: https://codesandbox.io/embed/z699l6oq4p?module=%2Fsrc%2FApp.vue

---
## Responsive Chart Behaviour

GCharts are responsive by default and they can change their width on `window.resize` event.
The resize is debounces and you can control debounce time (ms) by using `resizeDebounce` property:
```html
  <GChart
    :resizeDebounce="500"
  />
```
If you don't need responsive behaviour for your charts, set `:resizeDebounce="0"`

---

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm i
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developing, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link vue-google-charts
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## Examples

- Area Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/area-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/area-chart)
- Bar Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/bar-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/bar-chart)
- Bubble Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/bubble-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/bubble-chart)
- Calendar Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/calendar-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/calendar-chart)
- Candlestick Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/candlestick-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/candlestick-chart)
- Column Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/column-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/column-chart)
- Combo Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/combo-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/combo-chart)
- Donut Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/donut-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/donut-chart)
- Gantt Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/gantt-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/gantt-chart)
- Gauge Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/gauge-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/gauge-chart)
- Geo Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/geo-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/geo-chart)
- Histogram Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/histogram-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/histogram-chart)
- Line Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/line-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/line-chart)
- Org Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/org-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/org-chart)
- Pie Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/pie-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/pie-chart)
- Sankey Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/sankey-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/sankey-chart)
- Scatter Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/scatter-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/scatter-chart)
- Stepped Area Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/stepped-area-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/stepped-area-chart)
- Table Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/table-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/table-chart)
- Timeline Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/timeline-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/time-line-chart)
- Tree Map Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/tree-map-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/tree-map-chart)
- Trendlines Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/trendlines-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/trendlines-chart)
- Waterfall Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/waterfall-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/waterfall-chart)
- Word Tree Chart: [Vue 2](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/legacy/sandboxes/word-tree-chart) / [Vue 3](https://codesandbox.io/s/github/devstark-com/vue-google-charts/tree/master/sandboxes/word-tree-chart)

## License

[MIT](http://opensource.org/licenses/MIT)
