// Extend the CDS theme with custom color variables
declare module '@coinbase/cds-common/core/theme' {
  export namespace ThemeVarsExtended {
    export interface Color {
      fgSecondary: void;
    }
  }
}

// This export is required to make this file a module
export {};

