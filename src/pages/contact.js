import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

import { breakpoints } from '../utils/styles'
import ContactForm from '../components/Contact/Form'
import Header from '../components/Contact/Header'
import Map from '../components/Contact/Map'
import boiteAuxLettresImg from '../../src/assets/images/contact/boite-au-lettre.svg'
import waves from './../assets/images/formation/waves_2.png'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Arche de noé</title>
      </Helmet>

      <img
        src={waves}
        style={{ width: '100%', marginBottom: '2.5em' }}
        alt=''
      />
      <Header />
      <Map />
      <FormTitle id='form'>
        Une question ? Un renseignement ? c’est ici !
      </FormTitle>
      <FormSection>
        <ContactForm />
        <FormImg
          src={boiteAuxLettresImg}
          alt='arche de noe boite aux lettres'
        />
      </FormSection>
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

export default Contact

export const FormTitle = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00a1c6;
  text-align: center;
  font-size: 2.3em;
  margin: 2em 0;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 1em;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin: 1em 0;
    font-size: 2em;
  }
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 70%;
  max-width: 60em;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const FormImg = styled.img`
  width: 45%;
  max-width: 30em;
  margin-left: 3em;
  margin-top: -8em;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`
