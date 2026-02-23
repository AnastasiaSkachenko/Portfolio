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

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}