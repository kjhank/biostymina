import { type DefaultTheme, ThemeProvider } from 'styled-components';
import { type ThemeProps } from './theme.types';

import {
 getClamped, getMax, getMin,
} from './helpers';

const theme: DefaultTheme = {
  colors: {
    accent: '#b30018',
    brand: '#285c3f',
    brow: '#c4d76e',
    emphasis: '#f65c04',
    highlight: '#89b05f',
    neutral: '#f6f6f6',
  },
  fonts: {
    alt: '\'Barlow Condensed\', serif',
    heading: '\'Barlow\', serif',
    text: '\'Poppins\', sans-serif',
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
