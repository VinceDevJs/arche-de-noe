import React from 'react'
import Footer from '../components/GlobalComponents/Footer/Footer'
import { GlobalStyle } from '../utils/styles'
import Header from '../components/GlobalComponents/Header'
import BurgerMenu from '../components/GlobalComponents/Header/BurgerMenu'
import PushUp from '../components/pushUp'
import Block6 from '../components/Home/Block6'
import PopUp from '../components/GlobalComponents/PopUp'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div id='app'>
        {/* <PopUp /> */}
        <BurgerMenu />
        <Header />
        {children}
        <PushUp />
        <Block6 />
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout