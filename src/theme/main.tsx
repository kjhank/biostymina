import { type DefaultTheme, ThemeProvider } from 'styled-components';
import { type ThemeProps } from './theme.types';

import {
 getClamped, getMax, getMin,
} from './helpers';

const theme: DefaultTheme = {
  colors: {
    // color declarations go here
    accent: '#B30018',
    brand: '#285C3F',
    brow: '#C4D76E',
    highlight: '#89B05F',
  },
  fonts: {
    alt: '\'Barlow Condensed\', serif',
    heading: '\'Barlow\', serif',
    text: '\'Poppins\', sans-serif',
    // font declarations go here
  },
  getClamped,
  getMax,
  getMin,
  transitions: {
    default: '0.4s',
    fast: '0.2s',
    slow: '0.8s',
  },
};

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
