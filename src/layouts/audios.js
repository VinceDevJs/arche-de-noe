import React from 'react'
import { GlobalStyle } from '../utils/styles'

const AudioLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div>
        {children}
      </div>
    </>
  )
}

export default AudioLayout
