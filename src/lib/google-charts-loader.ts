/**
 * Usage:
 * import { loadGoogleCharts } from 'vue-google-charts'
 *
 * loadGoogleCharts('current', { packages: ['corechart', 'map'] })
 *  .then(google => {
 *    const chart = new google.visualization.Map ...
 *  })
 */

import type {
  GoogleViz,
  GoogleChartLoader,
  GoogleChartVersion,
  GoogleChartLoaderOptions,
} from '../types';

const chartsScriptUrl = 'https://www.gstatic.com/charts/loader.js';

let chartsLoaderPromise: null | Promise<GoogleChartLoader> = null;

const loadedPackages = new Map();

export function getChartsLoader(): Promise<GoogleChartLoader> {
  // If already included in the page:
  if (window.google !== undefined) {
    return Promise.resolve(window.google.charts);
  }

  if (chartsLoaderPromise === null) {
    chartsLoaderPromise = new Promise(resolve => {
      // Find script tag with same src in DOM.
      const foundScript = document.querySelector<HTMLScriptElement>(
        `script[src="${chartsScriptUrl}"]`
      );

      // Create or get existed tag.
      const script = foundScript || document.createElement('script');

      // Set src if no script was found.
      if (!foundScript) {
        script.src = chartsScriptUrl;
        script.type = 'text/javascript';

        document.head.append(script);
      }

      script.onload = () => {
        if (window.google !== undefined) {
          resolve(window.google.charts);
        }
      };
    });
  }

  return chartsLoaderPromise;
}

/**
 * Function to load Google Charts JS API.
 * @param version - Chart version to load.
 * @param packages - Packages to load.
 * @param language - Languages to load.
 * @param mapsApiKey - Google Maps api key.
 * @returns
 */
export async function loadGoogleCharts(
  version: GoogleChartVersion = 'current',
  {
    packages = ['corechart', 'controls'],
    language = 'en',
    mapsApiKey,
  }: GoogleChartLoaderOptions
): Promise<GoogleViz | undefined> {
  const loader = await getChartsLoader();

  const settingsKey = `${version}_${packages.join('_')}_${language}`;

  if (loadedPackages.has(settingsKey)) return loadedPackages.get(settingsKey);

  const loaderPromise: Promise<GoogleViz | undefined> = new Promise(resolve => {
    loader.load(version, {
      packages,
      language,
      mapsApiKey,
    });

    loader.setOnLoadCallback(() => resolve(window.google));
  });

  loadedPackages.set(settingsKey, loaderPromise);

  return loaderPromise;
}
