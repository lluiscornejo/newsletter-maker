import { createGlobalStyle } from 'styled-components';
import { colors } from '@Common/styles/colors';
import { primaryFont } from '@Common/styles/fonts';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: ${primaryFont};
    color: ${colors.mediumBlack};
    font-weight: 400;
  }

  main {
    display: block;
  }

  html, body, #app, main {
    height: 100%;
  }

  iframe {
    margin-bottom: 20px;
    max-width: 100%;
  }
  img {
    max-width: 100%;
  }

  button, a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  strong {
    font-weight: 600;
  }
  .slick-slider * {
    outline: none;
  }
`;

export default Global;
