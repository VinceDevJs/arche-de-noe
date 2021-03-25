import React from 'react'
import Footer from '../components/GlobalComponents/Footer/Footer'
import { GlobalStyle } from '../utils/styles'
import Header from '../components/GlobalComponents/Header'
import BurgerMenu from '../components/GlobalComponents/Header/BurgerMenu'
import PushUp from '../components/pushUp'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div id='app'>
        <BurgerMenu />
        <Header />
        {children}
        <PushUp />
        <Footer />
      </div>
    </>
  )
}

export default Layout
