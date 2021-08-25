import { css, Global } from '@emotion/react'
import React from 'react'
import { injectGlobal } from '@emotion/css'
import avenirNextBold from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Bold.otf'
import avenirNextBoldDemi from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Demi.otf'
import avenirNext from './../assets/fonts/Avenir-Next/AvenirNextLTPro-Regular.otf'

export const breakpoints = {
  s: 576,
  m: 825,
  l: 1025,
  xl: 1200
}

export const primaryColor = '#00a1c6'
export const secondaryColor = '#007cad'

export const GlobalStyle = () => (
  <Global
    styles={css`
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

      .image-gallery-image {
      }

      .image-gallery {
        width: 100% !important;
      }

      .image-gallery-bullets .image-gallery-bullets-container {
        margin: 0;
        padding: 0;
        text-align: center;
        position: absolute;
        margin-top: 3em;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
      }

      .image-gallery-bullets .image-gallery-bullet {
        -webkit-appearance: none;
        appearance: none;
        background-color: grey;
        border: none;
        border-radius: 50%;
        box-shadow: none;
        cursor: pointer;
        display: inline-block;
        margin: 0 5px;
        outline: none;
        padding: 4px;
        transition: background 0.2s ease-out;
      }

      .active {
        background-color: #007cad !important;
      }

      .snipcart-cart-button--highlight {
        border-radius: 30px !important;
      }

      .snipcart-modal__container {
        z-index: 1000000000 !important;
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
        left: 1em;
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

injectGlobal`
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
`
