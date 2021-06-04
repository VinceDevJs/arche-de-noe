import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/Inscription/Header'
import SubHeader from '../components/Inscription/SubHeader'
import MainIncription from '../components/Inscription/MainInscription'
import waves from '../assets/images/formation/waves_2.png'

const Inscription = () => {
  return (
    <>
      <Helmet>
        <title>Inscription | Arche de noé</title>
      </Helmet>
      <Header />
      <SubHeader />
      <img
        src={waves}
        style={{
          width: '100%',
          marginBottom: '5em'
        }}
        alt=''
      />
      <MainIncription />
      <img
        src={waves}
        style={{
          width: '100%',
          marginTop: '3.5em',
          transform: 'rotate(180deg) scaleX(-1)'
        }}
        alt=''
      />
    </>
  )
}

export default Inscription
