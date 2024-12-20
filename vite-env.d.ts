// src/vite-env.d.ts
/// <reference types="vite/client" />

// Environment variables
interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string;
  readonly VITE_APP_ENV: 'development' | 'staging' | 'production';
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_BUILD_TIME: string;
  // Add other environment variables here
  readonly VITE_AUTH_DOMAIN?: string;
  readonly VITE_AUTH_CLIENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Asset imports
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

// Style modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Global window types
declare interface Window {
  // Add any custom window properties here
  _env_?: ImportMetaEnv;
  gtag?: (type: string, ...args: any[]) => void;
}

// Custom type declarations
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type Nullable<T> = T | null;

// Utility types
type ValueOf<T> = T[keyof T];

type Awaited<T> = T extends Promise<infer U> ? U : T;