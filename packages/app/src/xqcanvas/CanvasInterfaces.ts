export interface paletteItemCollection {
  [index: string]: string;
}
export interface pixelCanvas {
  [index: string]: number;
}
export interface pixelArray {
  pixels: number[];
}
export const pixelKey = (x: number, y: number) => {
  return `px_${x}X${y}`;
};

export const pixelKeyVals: (key: string) => number[] = (pxKey: string) => {
  if (!pxKey || pxKey.slice(0, 3) != "px_") return [];
  return pxKey
    .replace("px_", "")
    .split("X")
    .map((val) => parseInt(val));
};

export const paletteKey = (i: number) => {
  return `pal_${i}`;
};

export interface CanvasCoreStore {
  width: number;
  setWidth: (val: number) => void;
  height: number;
  setHeight: (val: number) => void;
  zoom: number;
  setZoom: (val: number) => void;
  palette: paletteItemCollection;
  setPalette: (vals: paletteItemCollection) => void;
  setPaletteItem: (item: number, val: string) => void;
  paletteSize: number;
  setPaletteSize: (val: number) => void;
  pixels: pixelCanvas;
  setPixel: (x: number, y: number, val: number) => void;
  setPixels: (vals: pixelCanvas) => void;

  // the following are UI state and would be better in their own stores
  currPaletteItem: number;
  setCurrPaletteItem: (val: number) => void;
  dropperActive: boolean;
  setDropperActive: (val: boolean) => void;
}

export interface CanvasStore extends CanvasCoreStore {
  getPaletteItemColor: (item: number) => string;
  getPaletteItemColors: () => string[];
  getPaletteItemColorsStr: () => string;
  getPixelVal: (x: number, y: number) => number;
  getPixelColor: (x: number, y: number) => string;
}
