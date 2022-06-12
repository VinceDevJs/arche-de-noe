import styled from '@emotion/styled'
import React, { useState } from 'react'
import checkIcon from '../../assets/icons/check.png'
import logoBoat from '../../assets/images/home/block6/logo_boat.png'
import { breakpoints } from '../../utils/styles.js'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import topImg from '../../assets/images/home/block6/waves.png'

const Block6 = () => {
  const initialMessage = 'Votre adresse e-mail'

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(initialMessage)

  const handleSubmit = e => {
    e.preventDefault()
    // console.log('send')

    addToMailchimp(email).then((resp) => {
      console.log(resp)

      if (resp.result === 'success') {
        setEmail('')
        setMessage('Inscription réussi!')
        setTimeout(() => setMessage(initialMessage), 5000)
      } else {
        setEmail('')
        setMessage('Une erreur s\'est produite! Recommencer')
        setTimeout(() => setMessage(initialMessage), 5000)
      }
    })
  }

  return (
    <Container>
      <Img top src={topImg} />
      <LeftBox>
        <LogoImage src={logoBoat} />
      </LeftBox>
      <RightBox>
        <Title>Restons en contact</Title>
        <Text>
            Recevez l'actualité de notre institut : derniers événements, nouveaux cours, dates des inscriptions  et les infos majeures à ne pas manquer.
        </Text>

        <Form onSubmit={handleSubmit}>
          <Input
            placeholder={message}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button><img style={{ width: '1.8em', marginTop: '.3em' }} src={checkIcon} /></Button>
        </Form>
      </RightBox>
    </Container>
  )
}

export default Block6

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  height: 22em;
  background-color: #ebf5fa;
  padding: 0 12em;

  @media (max-width: ${breakpoints.xxl}px) {
    padding: 0 6em;
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 0 4em;
  }

   @media (max-width: ${breakpoints.l}px) {
    padding: 0 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-top: 10em;
    flex-direction: column;
    height: 35em;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    height: 40%;
  }
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold';
  color: #007cad;
  text-align: center;
  font-size: 3em;
  margin: 0;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2.2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.8em;
  }

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    margin-right: 0;
  }
`

export const Text = styled.p`
  display: inline-block;
  text-align: right;
  max-width: 32em;
  color: #007cad;
  text-align: center;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 1em;
    max-width: 28em;
  }

  @media (max-width: ${breakpoints.m}px) {
    max-width: 22em;
    font-size: 0.9em;
  }

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    margin-right: 0;
  }
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    height: 50%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2.5px solid #007cad;
  padding: 0 .5em 0 1em;
  height: 3.2em;
  max-width: 25em;
  border-radius: 50px;
  margin-top: 2em;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 18em;
  }

  @media (max-width: ${breakpoints.m}px) {
    max-width: 15em;
  }

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    margin-left: 0;
    width: 90%;
    max-width: 17em;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 90%;
  font-size: 1.6em;
  color: #007cad;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 1.5em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.3em;
  }

  ::placeholder {
    display: block;
    color: #007cad;
    font-size: .6em;
  }

  :focus {
    outline: none;
  }
`

export const Button = styled.button`
  border-radius: 50%;
  border: 2.5px solid #007cad;
  background-color: transparent;
  height: 3em;
  width: 3em;
  cursor: pointer;
`

export const LogoImage = styled.img`
  margin-top: -9em;
  width: 28em;
  z-index: 10;


 @media (max-width: ${breakpoints.l}px) {
   width: 23em;
  }

  @media (max-width: ${breakpoints.m}px) {
   width: 20em;
   margin-top: -10em;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-top: -6em;
  }
`

export const Img = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0;
  top: ${props => (props.top ? '0' : '')};
  bottom: ${props => (!props.top ? '0' : '')};
`
