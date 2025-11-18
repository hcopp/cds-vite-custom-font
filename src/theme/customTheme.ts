import type { ThemeConfig } from '@coinbase/cds-web/core/theme';
import { defaultTheme } from '@coinbase/cds-web/themes/defaultTheme';

// Import the type extensions
import './types';

// Define the custom theme with fgSecondary color
export const customTheme = {
  ...defaultTheme,
  id: 'custom-theme-with-fgSecondary',
  lightColor: {
    ...defaultTheme.lightColor,
    // fgSecondary in light mode - set to red
    fgSecondary: `rgb(${defaultTheme.lightSpectrum.red60})`,
  },
  darkColor: {
    ...defaultTheme.darkColor,
    // fgSecondary in dark mode - set to red
    fgSecondary: `rgb(${defaultTheme.darkSpectrum.red60})`,
  },
} as const satisfies ThemeConfig;

