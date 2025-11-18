import { initializeCDS } from '@coinbase/cds-web/styles/config';

// Initialize CDS with custom theme extensions
// This should be called once before the app renders
initializeCDS({
  extendStyleProps: {
    Color: {
      fgSecondary: {
        background: {
          base: 'background-fgSecondary',
          phone: 'background-fgSecondary-phone',
          tablet: 'background-fgSecondary-tablet',
          desktop: 'background-fgSecondary-desktop',
        },
        color: {
          base: 'color-fgSecondary',
          phone: 'color-fgSecondary-phone',
          tablet: 'color-fgSecondary-tablet',
          desktop: 'color-fgSecondary-desktop',
        },
        borderColor: {
          base: 'borderColor-fgSecondary',
          phone: 'borderColor-fgSecondary-phone',
          tablet: 'borderColor-fgSecondary-tablet',
          desktop: 'borderColor-fgSecondary-desktop',
        },
      },
    },
  },
});

