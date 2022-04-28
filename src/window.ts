import { GoogleViz } from './types';
import Vue from 'vue';

declare global {
  interface Window {
    google?: GoogleViz;
    Vue?: typeof Vue;
  }
}
