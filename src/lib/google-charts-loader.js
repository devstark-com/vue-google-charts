/**
 * Usage:
 * import { loadGoogleCharts } from 'vue-google-charts'
 *
 * loadGoogleCharts('current', { packages: ['corechart', 'map'] })
 *  .then(google => {
 *    const chart = new google.visualization.Map ...
 *  })
 */

const chartsScriptUrl = 'https://www.gstatic.com/charts/loader.js'

let chartsLoaderPromise = null
const loadedPackages = new Map()

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

export default function loadGoogleCharts (version = 'current', settings = {}) {
  return getChartsLoader().then(loader => {
    if (typeof settings !== 'object') throw new Error('Google Charts loader: settings must be an object')
    const settingsKey = version + '_' + JSON.stringify(settings, Object.keys(settings).sort())

    if (loadedPackages.has(settingsKey)) return loadedPackages.get(settingsKey)

    const loaderPromise = new Promise(resolve => {
      loader.load(version, settings)
      loader.setOnLoadCallback(() => resolve(window.google))
    })
    loadedPackages.set(settingsKey, loaderPromise)
    return loaderPromise
  })
}
