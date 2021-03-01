import { css, Global } from '@emotion/react'
import React from 'react'


export const breakpoints = {
  s: 576,
  m: 813,
  l: 1023,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: 'Krona One', sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
        margin: 0;
      }

      button {
        outline: none;
      }

      .bm-menu {
        background: white;
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
