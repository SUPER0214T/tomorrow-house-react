import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
	Col,
	Container,
	LG_BREAKPOINT,
	MD_BREAKPOINT,
	numToPX,
	Row,
} from './styles/layouts/grids';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Custom Global Style */
  .sm-only {
    @media screen and (min-width: ${numToPX(MD_BREAKPOINT)}) {
    display: none !important;
    }
  }
  .md-only {
    @media screen and (max-width: ${numToPX(MD_BREAKPOINT - 1)}) {
      display: none !important;
    }

    @media screen and (min-width: ${numToPX(LG_BREAKPOINT)}) {
      display: none !important;
    }
  }

  .lg-only {
    @media screen and (max-width: ${numToPX(LG_BREAKPOINT - 1)}) {
      display: none !important;
    }
  }

  .sm-hidden {
    @media screen and (max-width: ${numToPX(MD_BREAKPOINT - 1)}) {
      display: none !important;
    }
  }

  .md-hidden {
    @media screen and (min-width: ${numToPX(MD_BREAKPOINT)}) 
    and (max-width: ${numToPX(LG_BREAKPOINT - 1)}) {
      display: none !important;
    }
  }

  .lg-hidden {
    @media screen and (min-width: ${numToPX(LG_BREAKPOINT)}) {
      display: none !important;
    }
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Container className="container">
				<Row className="row">
					<Col className="col" sm="4" md="6" lg="4">
						1
					</Col>
					<Col className="col" sm="4" md="6" lg="4">
						2
					</Col>
					<Col className="col" sm="4" md="6" lg="4">
						3
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
