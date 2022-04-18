import { GoogleViz } from './types';

declare global {
  interface Window {
    google?: GoogleViz;
  }
}
