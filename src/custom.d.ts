// src/custom.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": {
      url?: string;
      hint?: boolean;
      style?: React.CSSProperties;
      [key: string]: any; // allow any other props
    };
  }
}