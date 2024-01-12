import 'styled-components';
import {
 type GetClamped, type GetMinMax, type Transition,
} from './theme.types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme extends DefaultTheme {
    colors: {
      accent: string;
      brand: string;
      brow: string;
      highlight: string;
    };
    fonts: {
      alt: string;
      heading: string;
      text: string;
    };
    getClamped: GetClamped;
    getMax: GetMinMax;
    getMin: GetMinMax;
    transitions: {
      [key in Transition]: string
    };
  }
}
