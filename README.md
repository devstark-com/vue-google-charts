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

Install all the components:

```javascript
import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
```

Use specific modules:

```javascript
import Vue from 'vue'
import { Test } from 'vue-google-charts'

Vue.component('test', Test)
```

## Browser

```html
<script src="vue.js"></script>
<script src="vue-google-charts/dist/vue-google-charts.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

# Usage

> TODO

# Example

> TODO

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
