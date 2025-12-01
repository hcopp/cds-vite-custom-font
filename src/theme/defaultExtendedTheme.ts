import type { ThemeConfig } from '@coinbase/cds-web/core/theme';
import { defaultTheme } from '@coinbase/cds-web/themes/defaultTheme';

import './types';

const extendedLightColor = {
  ...defaultTheme.lightColor,
  fgSecondary: defaultTheme.lightColor.fgPrimary,
};

const extendedDarkColor = {
  ...defaultTheme.darkColor,
  fgSecondary: defaultTheme.darkColor.fgPrimary,
};

const extendedFontFamily = {
  ...defaultTheme.fontFamily,
  titleLg: defaultTheme.fontFamily.display1,
  titleMd: defaultTheme.fontFamily.title2,
  bodyMd: defaultTheme.fontFamily.body,
  bodyText: defaultTheme.fontFamily.body,
};

const extendedFontFamilyMono = {
  ...defaultTheme.fontFamilyMono,
  titleLg: defaultTheme.fontFamilyMono.display1,
  titleMd: defaultTheme.fontFamilyMono.title2,
  bodyMd: defaultTheme.fontFamilyMono.body,
  bodyText: defaultTheme.fontFamilyMono.body,
};

const extendedFontSize = {
  ...defaultTheme.fontSize,
  titleLg: defaultTheme.fontSize.display2,
  titleMd: defaultTheme.fontSize.title1,
  bodyMd: defaultTheme.fontSize.body,
  bodyText: defaultTheme.fontSize.body,
};

const extendedFontWeight = {
  ...defaultTheme.fontWeight,
  titleLg: defaultTheme.fontWeight.title1,
  titleMd: defaultTheme.fontWeight.title3,
  bodyMd: defaultTheme.fontWeight.body,
  bodyText: defaultTheme.fontWeight.body,
};

const extendedLineHeight = {
  ...defaultTheme.lineHeight,
  titleLg: defaultTheme.lineHeight.display2,
  titleMd: defaultTheme.lineHeight.title1,
  bodyMd: defaultTheme.lineHeight.body,
  bodyText: defaultTheme.lineHeight.body,
};

const extendedTextTransform = {
  ...defaultTheme.textTransform,
  titleLg: 'none',
  titleMd: 'none',
  bodyMd: 'none',
  bodyText: 'none',
};

export const defaultExtendedTheme = {
  ...defaultTheme,
  lightColor: extendedLightColor,
  darkColor: extendedDarkColor,
  fontFamily: extendedFontFamily,
  fontFamilyMono: extendedFontFamilyMono,
  fontSize: extendedFontSize,
  fontWeight: extendedFontWeight,
  lineHeight: extendedLineHeight,
  textTransform: extendedTextTransform,
} as const satisfies ThemeConfig;


