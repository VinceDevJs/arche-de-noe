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

      <Message>
        Les inscriptions seront ouvertes à partir du 3 juillet 2022 !
      </Message>
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
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 0.5em;
  font-size: 2.5em;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #04a0c5;
`
