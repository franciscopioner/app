import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  p {
    font-family: sans-serif;
    font-size: 14px; 
    color: #1B2126; 
    margin: 0.5rem 0; 
    line-height: 1.5; 
  }
  h3 {
    font-family: sans-serif;
    font-size: 18px; 
    color: #1B2126; 
    margin: 0.5rem 0; 
    line-height: 1.5; 
  }
`;

export default GlobalStyles;
