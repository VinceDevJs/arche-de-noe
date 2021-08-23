import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import waves from './../assets/images/formation/waves_2.png'
import { breakpoints } from '../utils/styles'
import DefaultLayout from '../layouts/default'

const Faq = () => {
  return (
    <DefaultLayout>
      <Container>
        <Helmet>
          <title>Faq | Arche de noé</title>
        </Helmet>
        <img
          src={waves}
          style={{ width: '100%', marginBottom: '2.5em' }}
          alt=''
        />
        <Title>FAQ</Title>
        <p style={{ textAlign: 'center', marginBottom: '10em' }}>Bientot disponible</p>
      </Container>
    </DefaultLayout>
  )
}

export default Faq

export const Container = styled.div`
`

export const Title = styled.h1`
  text-align: center;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00a1c6;
  font-size: 2.5em;
  margin: 0 0 2em;
`

export const Content = styled.div`
  padding: 0 8em;
  margin-bottom: 7em;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0 1.5em;
  }
`

export const TitleContent = styled.p`
  font-weight: bold;
  margin: 4em 0 1em;
  font-size: 1.1em;
`

export const TextContent = styled.p``
