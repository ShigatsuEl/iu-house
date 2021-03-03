import 'styled-components';
import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    px: {
      mainHeader: string;
      headingTwo: string;
      headingThree: string;
      mainTitle: string;
      subTitle: string;
      paragraph: string;
    };

    dark: {
      mainBackground: string;
      subBackground: string;
      primaryText: string;
      secondaryText: string;
      border: string;
    };

    light: {
      mainBackground: string;
      subBackground: string;
      primaryText: string;
      secondaryText: string;
      border: string;
    };
  }
}
