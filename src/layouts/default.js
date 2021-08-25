import React, { useEffect, useState } from 'react'
import Footer from '../components/GlobalComponents/Footer/Footer'
import { GlobalStyle } from '../utils/styles'
import Header from '../components/GlobalComponents/Header'
import BurgerMenu from '../components/GlobalComponents/Header/BurgerMenu'
import PushUp from '../components/pushUp'
import Block6 from '../components/Home/Block6'
import PopUp from '../components/GlobalComponents/PopUp'

const DefaultLayout = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState()

  useEffect(() => {
    setShowPopUp((typeof window !== 'undefined' && window.sessionStorage.getItem('popup')))
  }, [])

  const handleClosePopUp = () => {
    console.log('test')
    if (typeof window !== 'undefined') window.sessionStorage.setItem('popup', 'closed')
    setShowPopUp(typeof window !== 'undefined' && window.sessionStorage.getItem('popup'))
  }

  return (
    <>
      <GlobalStyle />
      <div id='app'>
        <PopUp showPopUp={showPopUp} handleClosePopUp={handleClosePopUp} />
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
