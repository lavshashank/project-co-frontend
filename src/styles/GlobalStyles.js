import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Default font and body styling */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    color: #212529;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;