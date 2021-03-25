import { css, Global } from '@emotion/react'
import React from 'react'
import avenirNextBold from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Bold.otf'
import avenirNextBoldDemi from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Demi.otf'
import avenirNext from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Regular.otf'

export const breakpoints = {
  s: 576,
  m: 813,
  l: 1025,
  xl: 1200
}

export const primaryColor = '#00a1c6'
export const secondaryColor = '#007cad'

export const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Avenir Next Bold';
        src: url(${avenirNextBold}) format('truetype');
      }
      @font-face {
        font-family: 'Avenir Next';
        src: url(${avenirNext}) format('truetype');
      }
      @font-face {
        font-family: 'Avenir Next Bold Demi';
        src: url(${avenirNextBoldDemi}) format('truetype');
      }
      body {
        margin: 0 auto;
        max-width: 1600px;
        overflow-x: hidden;
        width: 100%;
      }
      // FIX AOS WHITE SPACE
      html,
      body {
        display: block;
        padding: 0px;
        overflow-x: hidden;
        width: 100%;
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

      .bm-item-list {
        margin-top: 3em;
      }

      .bm-cross-button {
        margin-right: 1em;
        margin-top: 1em;
      }

      @media (min-width: 1025px) {
        .bm-burger-button {
          display: none;
        }
      }

      @media (max-width: 1025px) {
        .bm-burger-button {
          position: absolute;
          top: 0;
          right: 15px;
          width: 40px;
          margin: 1.9em 0 0 0.8em;
        }
      }

      .bm-icon {
        top: 15px !important;
        right: 30px;
      }

      .bm-burger-bars {
        display: absolute;
        height: 6em !important;
      }
    `}
  />
)
