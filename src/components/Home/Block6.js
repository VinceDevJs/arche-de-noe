import styled from '@emotion/styled'
import React from 'react'
import checkIcon from '../../assets/icons/check.png'
import logoBoat from '../../assets/images/home/block6/logo_boat.svg'
import { breakpoints, secondaryColor } from '../../utils/styles.js'

const Block6 = () => {
  return (
    <Container>
      <LogoImage src={logoBoat} />
      <LeftBox>
        <Title>Restons en <span style={{ color: '#007cad' }}>contact</span></Title>
        <Text>Recevez l'actualité de notre institut : derniers événements, nouveaux cours, dates des inscriptions et les infos majeures à ne pas manquer.</Text>
      </LeftBox>
      <RightBox>
        <Form>
          <Input
            placeholder='Votre adresse mail'
            type='text'
          />
          <Button><img style={{ width: '2em', marginTop: '.3em' }} src={checkIcon} /></Button>
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
  align-items: center;
  height: 18em;
  width: 100%;

  @media (max-width: ${breakpoints.s}px) {
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
  background-image: linear-gradient(270deg, #70c2e1 0%, #0094be 100%);

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    height: 50%;
  }
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold';
  color: white;
  font-size: 3em;
  margin: 0;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2.2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.8em;
    margin-right: 1em;
  }

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
    margin-right: 0;
  }
`

export const Text = styled.p`
  display: inline-block;
  max-width: 25em;
  text-align: right;
  color: white;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 1em;
    max-width: 20em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-right: 3em;
    max-width: 18em;
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
  background-color: ${secondaryColor};

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    height: 50%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2.5px solid white;
  padding: 0 .5em 0 1em;
  height: 3.5em;
  max-width: 25em;
  border-radius: 50px;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 18em;
  }

  @media (max-width: ${breakpoints.m}px) {
    max-width: 15em;
    margin-left: 3em;
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
  font-size: 2em;
  color: white;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 1.5em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.3em;
  }

  ::placeholder {
    color: white;
    font-size: .6em;
  }

  :focus {
    outline: none;
  }
`

export const Button = styled.button`
  border-radius: 50%;
  border: 2.5px solid white;
  background-color: transparent;
  height: 3.2em;
  width: 3.2em;
  cursor: pointer;
`

export const LogoImage = styled.img`
 position: absolute!important;
 margin-left: auto;
 margin-right: auto;
 left: 0;
 right: 0;
 width: 150px;

 @media (max-width: ${breakpoints.l}px) {
    width: 120px;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 100px;
  }

  @media (max-width: ${breakpoints.s}px) {
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;

    @media (max-width: ${breakpoints.s}px) {
      width: 110px;
  }
  }
`
