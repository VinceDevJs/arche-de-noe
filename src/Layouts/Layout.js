import React, { useEffect } from 'react'
import Footer from '../components/GlobalComponents/Footer/Footer'
import { GlobalStyle } from '../utils/styles'
import Header from '../components/GlobalComponents/Header'
import BurgerMenu from '../components/GlobalComponents/Header/BurgerMenu'
import sal from 'sal.js'
import 'sal.js/dist/sal.css'

const Layout = ({ children }) => {
  const salLibrary = sal()

  useEffect(() => {
    if (salLibrary) {
      salLibrary.enable()
    }
    return () => {
      salLibrary.reset()
    }
  }, [])
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
