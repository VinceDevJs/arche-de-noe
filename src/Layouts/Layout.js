import React from 'react'
import Footer from '../components/GlobalComponents/Footer/Footer'
import { GlobalStyle } from '../utils/styles'
import Header from '../components/GlobalComponents/Header'
import BurgerMenu from '../components/GlobalComponents/Header/BurgerMenu'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div id='app'>
        <BurgerMenu />
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
