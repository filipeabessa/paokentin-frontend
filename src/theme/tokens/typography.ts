import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    textBodySmall: CSSProperties;
    textBodyMedium: CSSProperties;
    textBodyLarge: CSSProperties;
    linkMedium: CSSProperties;
    labelMedium: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    textBodySmall?: CSSProperties;
    textBodyMedium?: CSSProperties;
    textBodyLarge?: CSSProperties;
    linkMedium?: CSSProperties;
    labelMedium?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    textBodySmall: true;
    textBodyMedium: true;
    textBodyLarge: true;
    linkMedium: true;
    labelMedium: true;
  }
}

const themeTypography = {
  fontFamily: 'Roboto',
  h1: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '0.005em',
  },
  h2: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px',
    letterSpacing: '0.005em',
  },
  h3: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.005em',
  },
  h4: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0.005em',
  },
  textBodySmall: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.005em',
  },
  textBodyMedium: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.005em',
  },
  textBodyLarge: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '32px',
    letterSpacing: '0.005em',
  },
  linkMedium: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.005em',
  },
  labelMedium: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.005em',
    textDecoration: 'underline',
  },
};

export default themeTypography;
