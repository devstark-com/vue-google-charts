/**
 * Usage:
 * import { loadGoogleCharts } from 'vue-google-charts'
 *
 * loadGoogleCharts(['corechart', 'map']) // loader params are optional
 *  .then(google => {
 *    const chart = new chartsLib.visualization.Map ...
 *  })
 */

const chartsScriptUrl = 'https://www.gstatic.com/charts/loader.js'
const defaultPackages = ['corechart', 'table']

let chartsLoaderPromise = null
let defaultChartsPromise = null

export function getChartsLoader () {
  // If already included in the page:
  if (window.google && window.google.charts) {
    return Promise.resolve(window.google.charts)
  }
  if (!chartsLoaderPromise) {
    chartsLoaderPromise = new Promise(resolve => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.onload = () => resolve(window.google.charts)
      script.src = chartsScriptUrl
      document.body.appendChild(script)
    })
  }
  return chartsLoaderPromise
}

function loadPackages (loader, packages) {
  return new Promise(resolve => {
    loader.load('current', { packages })
    loader.setOnLoadCallback(() => resolve(window.google))
  })
}

function loadDefaultPackages (loader) {
  if (!defaultChartsPromise) {
    defaultChartsPromise = loadPackages(loader, defaultPackages)
  }
  return defaultChartsPromise
}

export default function loadGoogleCharts (packages) {
  return getChartsLoader().then(loader => {
    if (!packages) return loadDefaultPackages(loader)
    return loadPackages(loader, packages)
  })
}
