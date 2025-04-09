import { utils } from './comfy/index.js';

utils.addStylesheet('extensions/ComfyUI-Crystools/monitor.css');

export enum Styles {
  'BARS' = 'BARS'
}

export enum Colors {
  'CPU' = '#a6e22e',
  'RAM' = '#44600d',
  'DISK' = '#ac6218',
  'GPU' = '#ae81ff',
  'VRAM' = '#f92672',
  'TEMP_START' = '#00ff00',
  'TEMP_END' = '#ff0000',
}
