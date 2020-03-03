import { createGlobalStyle } from 'styled-components';

import OpenSansLightItalicWoff2 from '../../fonts/OpenSans/OpenSans-LightItalic.woff2';
import OpenSansLightItalicWoff from '../../fonts/OpenSans/OpenSans-LightItalic.woff';
import OpenSansLightItalicTtf from '../../fonts/OpenSans/OpenSans-LightItalic.ttf';

import OpenSansRegularWoff2 from '../../fonts/OpenSans/OpenSans-Regular.woff2';
import OpenSansRegularWoff from '../../fonts/OpenSans/OpenSans-Regular.woff';
import OpenSansRegularTtf from '../../fonts/OpenSans/OpenSans-Regular.ttf';

import OpenSansSemiBoldItalicWoff2 from '../../fonts/OpenSans/OpenSans-SemiBoldItalic.woff2';
import OpenSansSemiBoldItalicWoff from '../../fonts/OpenSans/OpenSans-SemiBoldItalic.woff';
import OpenSansSemiBoldItalicTtf from '../../fonts/OpenSans/OpenSans-SemiBoldItalic.ttf';

import OpenSansBoldWoff2 from '../../fonts/OpenSans/OpenSans-Bold.woff2';
import OpenSansBoldWoff from '../../fonts/OpenSans/OpenSans-Bold.woff';
import OpenSansBoldTtf from '../../fonts/OpenSans/OpenSans-Bold.ttf';

import GothamThinEot from '../../fonts/Gotham/Gotham-Thin.eot';
import GothamThinTtf from '../../fonts/Gotham/Gotham-Thin.ttf';
import GothamThinWoff from '../../fonts/Gotham/Gotham-Thin.woff';
import GothamThinWoff2 from '../../fonts/Gotham/Gotham-Thin.woff2';

import GothamThinItalicEot from '../../fonts/Gotham/Gotham-ThinItalic.eot';
import GothamThinItalicTtf from '../../fonts/Gotham/Gotham-ThinItalic.ttf';
import GothamThinItalicWoff from '../../fonts/Gotham/Gotham-ThinItalic.woff';
import GothamThinItalicWoff2 from '../../fonts/Gotham/Gotham-ThinItalic.woff2';

import GothamXLightEot from '../../fonts/Gotham/Gotham-XLight.eot';
import GothamXLightTtf from '../../fonts/Gotham/Gotham-XLight.ttf';
import GothamXLightWoff from '../../fonts/Gotham/Gotham-XLight.woff';
import GothamXLightWoff2 from '../../fonts/Gotham/Gotham-XLight.woff2';

import GothamLightEot from '../../fonts/Gotham/Gotham-Light.eot';
import GothamLightTtf from '../../fonts/Gotham/Gotham-Light.ttf';
import GothamLightWoff from '../../fonts/Gotham/Gotham-Light.woff';
import GothamLightWoff2 from '../../fonts/Gotham/Gotham-Light.woff2';

import GothamBookEot from '../../fonts/Gotham/Gotham-Book.eot';
import GothamBookTtf from '../../fonts/Gotham/Gotham-Book.ttf';
import GothamBookWoff from '../../fonts/Gotham/Gotham-Book.woff';
import GothamBookWoff2 from '../../fonts/Gotham/Gotham-Book.woff2';

import GothamBookItalicEot from '../../fonts/Gotham/Gotham-BookItalic.eot';
import GothamBookItalicTtf from '../../fonts/Gotham/Gotham-BookItalic.ttf';
import GothamBookItalicWoff from '../../fonts/Gotham/Gotham-BookItalic.woff';
import GothamBookItalicWoff2 from '../../fonts/Gotham/Gotham-BookItalic.woff2';

import GothamMediumEot from '../../fonts/Gotham/Gotham-Medium.eot';
import GothamMediumTtf from '../../fonts/Gotham/Gotham-Medium.ttf';
import GothamMediumWoff from '../../fonts/Gotham/Gotham-Medium.woff';
import GothamMediumWoff2 from '../../fonts/Gotham/Gotham-Medium.woff2';

import GothamBoldEot from '../../fonts/Gotham/Gotham-Bold.eot';
import GothamBoldTtf from '../../fonts/Gotham/Gotham-Bold.ttf';
import GothamBoldWoff from '../../fonts/Gotham/Gotham-Bold.woff';
import GothamBoldWoff2 from '../../fonts/Gotham/Gotham-Bold.woff2';

import GothamBlackEot from '../../fonts/Gotham/Gotham-Black.eot';
import GothamBlackTtf from '../../fonts/Gotham/Gotham-Black.ttf';
import GothamBlackWoff from '../../fonts/Gotham/Gotham-Black.woff';
import GothamBlackWoff2 from '../../fonts/Gotham/Gotham-Black.woff2';

import GothamUltraEot from '../../fonts/Gotham/Gotham-Ultra.eot';
import GothamUltraTtf from '../../fonts/Gotham/Gotham-Ultra.ttf';
import GothamUltraWoff from '../../fonts/Gotham/Gotham-Ultra.woff';
import GothamUltraWoff2 from '../../fonts/Gotham/Gotham-Ultra.woff2';

const Fonts = createGlobalStyle`

  /* Open Sans */
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansLightItalicWoff2}) format('woff2'),
      url(${OpenSansLightItalicWoff}) format('woff'),
      url(${OpenSansLightItalicTtf}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegularWoff2}) format('woff2'),
      url(${OpenSansRegularWoff}) format('woff'),
      url(${OpenSansRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBoldItalicWoff2}) format('woff2'),
      url(${OpenSansSemiBoldItalicWoff}) format('woff'),
      url(${OpenSansSemiBoldItalicTtf}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBoldWoff2}) format('woff2'),
      url(${OpenSansBoldWoff}) format('woff'),
      url(${OpenSansBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  /* Gotham */
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamThinEot}),
      url(${GothamThinTtf}) format('truetype'),
      url(${GothamThinWoff}) format('woff'),
      url(${GothamThinWoff2}) format('woff2');
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamThinItalicEot}),
      url(${GothamThinItalicTtf}) format('truetype'),
      url(${GothamThinItalicWoff}) format('woff'),
      url(${GothamThinItalicWoff2}) format('woff2');
    font-style: italic;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamXLightEot}),
      url(${GothamXLightTtf}) format('truetype'),
      url(${GothamXLightWoff}) format('woff'),
      url(${GothamXLightWoff2}) format('woff2');
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamLightEot}),
      url(${GothamLightTtf}) format('truetype'),
      url(${GothamLightWoff}) format('woff'),
      url(${GothamLightWoff2}) format('woff2');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookEot}),
      url(${GothamBookTtf}) format('truetype'),
      url(${GothamBookWoff}) format('woff'),
      url(${GothamBookWoff2}) format('woff2');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookItalicEot}),
      url(${GothamBookItalicTtf}) format('truetype'),
      url(${GothamBookItalicWoff}) format('woff'),
      url(${GothamBookItalicWoff2}) format('woff2');
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamMediumEot}),
      url(${GothamMediumTtf}) format('truetype'),
      url(${GothamMediumWoff}) format('woff'),
      url(${GothamMediumWoff2}) format('woff2');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBoldEot}),
      url(${GothamBoldTtf}) format('truetype'),
      url(${GothamBoldWoff}) format('woff'),
      url(${GothamBoldWoff2}) format('woff2');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBlackEot}),
      url(${GothamBlackTtf}) format('truetype'),
      url(${GothamBlackWoff}) format('woff'),
      url(${GothamBlackWoff2}) format('woff2');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Gotham';
    src: url(${GothamUltraEot}),
      url(${GothamUltraTtf}) format('truetype'),
      url(${GothamUltraWoff}) format('woff'),
      url(${GothamUltraWoff2}) format('woff2');
    font-style: normal;
    font-weight: 800;
  }
`;

export default Fonts;
