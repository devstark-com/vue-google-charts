# vue-google-charts

[![npm](https://img.shields.io/npm/v/vue-google-charts.svg) ![npm](https://img.shields.io/npm/dm/vue-google-charts.svg)](https://www.npmjs.com/package/vue-google-charts)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Reactive Vue.js wrapper for Google Charts lib

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm i vue-google-charts
```

## Default import

Install a component globally (use as plugin):

```javascript
import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
```

Use locally in a component:

```javascript
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  }
}
```

## Browser

```html
<script src="vue.js"></script>
<script src="vue-google-charts/dist/vue-google-charts.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

# Usage

Simple usage:

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
Load additional packages:

```html
  <GChart
    :packages="['corechart', 'table', 'map']"
    type="Map"
    :data="chartData"
    :options="chartOptions"
  />
```
---
Add event listeners:

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
      // ...data, options, etc...
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
Something very custom.
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

While developping, you can follow the install instructions of your plugin and link it into the project that uses it.

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

## License

[MIT](http://opensource.org/licenses/MIT)
