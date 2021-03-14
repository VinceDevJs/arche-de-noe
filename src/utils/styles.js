import { css, Global } from '@emotion/react'
import React from 'react'
import avenirNextBold from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Demi.otf'
import avenirNext from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Regular.otf'

export const breakpoints = {
  s: 576,
  m: 813,
  l: 1023,
  xl: 1200
}

export const primaryColor = '#00a1c6'
export const secondaryColor = '#007cad'

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap');
    @font-face {
        font-family: 'Avenir Next Bold';
        src: url(${avenirNextBold}) format('truetype');
      }
      @font-face {
        font-family: 'Avenir Next';
        src: url(${avenirNext}) format('truetype');
      }
      body {
        margin: 0;
      }
      html {
        font-family: 'Avenir Next', sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
        margin: 0;
      }

      button {
        outline: none;
      }

      .bm-menu {
        background: rgb(255, 255, 255);
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
      }

      @media (max-width: 1025px) {
        .bm-burger-button {
          position: fixed;
          top: 15px;
          right: 30px;
          width: 40px;
        }
      }

      @media (min-width: 1025px) {
        .bm-burger-button {
          display: none;
        }
      }

      .bm-burger-bars {
        display: absolute;
        height: 6em !important;
      }
    `}
  />
)
