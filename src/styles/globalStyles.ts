import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    overflow: hidden;
  }

  a {
    text-decoration:none;
    color:inherit;
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }
`;
