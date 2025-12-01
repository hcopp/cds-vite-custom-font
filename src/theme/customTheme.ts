import type { ThemeConfig } from '@coinbase/cds-web/core/theme';
import { defaultTheme } from '@coinbase/cds-web/themes/defaultTheme';

// Import the type extensions
import './types';

const sansFont = 'var(--defaultFont-sans)';

const customFontFamily = {
  ...defaultTheme.fontFamily,
  titleLg: sansFont,
  titleMd: sansFont,
  bodyMd: sansFont,
  bodyText: sansFont,
};

const customFontFamilyMono = {
  ...defaultTheme.fontFamilyMono,
  titleLg: defaultTheme.fontFamilyMono.display1,
  titleMd: defaultTheme.fontFamilyMono.headline,
  bodyMd: defaultTheme.fontFamilyMono.body,
  bodyText: defaultTheme.fontFamilyMono.body,
};

const customFontSize = {
  ...defaultTheme.fontSize,
  titleLg: '5rem',
  titleMd: '1.5rem',
  bodyMd: '1.125rem',
  bodyText: '0.9375rem',
};

const customFontWeight = {
  ...defaultTheme.fontWeight,
  titleLg: '600',
  titleMd: '500',
  bodyMd: '400',
  bodyText: '400',
};

const customLineHeight = {
  ...defaultTheme.lineHeight,
  titleLg: '5rem',
  titleMd: '2rem',
  bodyMd: '1.75rem',
  bodyText: '1.5rem',
};

const customTextTransform = {
  ...defaultTheme.textTransform,
  titleLg: 'none',
  titleMd: 'none',
  bodyMd: 'none',
  bodyText: 'none',
};

// Define the custom theme with fgSecondary color and custom fonts
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
  fontFamily: customFontFamily,
  fontFamilyMono: customFontFamilyMono,
  fontSize: customFontSize,
  fontWeight: customFontWeight,
  lineHeight: customLineHeight,
  textTransform: customTextTransform,
} as const satisfies ThemeConfig;

