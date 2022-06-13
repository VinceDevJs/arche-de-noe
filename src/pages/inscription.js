import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

import Header from '../components/Inscription/Header'
import SubHeader from '../components/Inscription/SubHeader'
import MainIncription from '../components/Inscription/MainInscription'
import waves from '../assets/images/formation/waves_2.png'
import DefaultLayout from '../layouts/default'

const Inscription = () => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Inscription | Arche de noé</title>
      </Helmet>
      {/* <Header /> */}
      <SubHeader />
      <img
        src={waves}
        style={{
          width: '100%',
          marginBottom: '5em',
        }}
        alt=""
      />
      {/* <MainIncription /> */}

      <Message>Bientot Disponible !</Message>
      {/* <img
        src={waves}
        style={{
          width: '100%',
          marginTop: '3.5em',
          transform: 'rotate(180deg) scaleX(-1)'
        }}
        alt=''
      /> */}
    </DefaultLayout>
  )
}

export default Inscription

export const Message = styled.p`
  display: block;
  text-align: center;
  padding: 2em;
  font-size: 3em;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #04a0c5;
`
