import { initializeCDS } from '@coinbase/cds-web/styles/config';

const responsiveClassNames = (baseClass: string) => ({
  base: baseClass,
  phone: `${baseClass}-phone`,
  tablet: `${baseClass}-tablet`,
  desktop: `${baseClass}-desktop`,
});

// Initialize CDS with custom theme extensions
// This should be called once before the app renders
initializeCDS({
  extendStyleProps: {
    Color: {
      fgSecondary: {
        background: responsiveClassNames('background-fgSecondary'),
        color: responsiveClassNames('color-fgSecondary'),
        borderColor: responsiveClassNames('borderColor-fgSecondary'),
      },
    },
    FontFamily: {
      titleLg: {
        fontFamily: responsiveClassNames('fontFamily-titleLg'),
      },
      titleMd: {
        fontFamily: responsiveClassNames('fontFamily-titleMd'),
      },
      bodyMd: {
        fontFamily: responsiveClassNames('fontFamily-bodyMd'),
      },
      bodyText: {
        fontFamily: responsiveClassNames('fontFamily-bodyText'),
      },
    },
    FontSize: {
      titleLg: {
        fontSize: responsiveClassNames('fontSize-titleLg'),
      },
      titleMd: {
        fontSize: responsiveClassNames('fontSize-titleMd'),
      },
      bodyMd: {
        fontSize: responsiveClassNames('fontSize-bodyMd'),
      },
      bodyText: {
        fontSize: responsiveClassNames('fontSize-bodyText'),
      },
    },
    FontWeight: {
      titleLg: {
        fontWeight: responsiveClassNames('fontWeight-titleLg'),
      },
      titleMd: {
        fontWeight: responsiveClassNames('fontWeight-titleMd'),
      },
      bodyMd: {
        fontWeight: responsiveClassNames('fontWeight-bodyMd'),
      },
      bodyText: {
        fontWeight: responsiveClassNames('fontWeight-bodyText'),
      },
    },
    LineHeight: {
      titleLg: {
        lineHeight: responsiveClassNames('lineHeight-titleLg'),
      },
      titleMd: {
        lineHeight: responsiveClassNames('lineHeight-titleMd'),
      },
      bodyMd: {
        lineHeight: responsiveClassNames('lineHeight-bodyMd'),
      },
      bodyText: {
        lineHeight: responsiveClassNames('lineHeight-bodyText'),
      },
    },
  },
});
