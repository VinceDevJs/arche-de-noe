import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints } from '../../utils/styles'

import logo from '../../assets/images/inscription/Logo-inscription.svg'

const Header = () => {
  return (
    <Container>
      <Logo left='true' src={logo} alt='logo arche de noe' />

      <TextContent>
        L’Institut l’Arche de Noé a le plaisir de vous informer que les
        inscriptions pour l’année 2021 | 2022 se dérouleront les jours suivants
        :
      </TextContent>
      <DateContent>
        LES SAMEDIS 19 & 26 JUIN 2021 ET LES DIMANCHES 20 & 27 JUIN 2021
      </DateContent>

      <ButtonsBox>
        <Button to='#main_inscription'>Connaître les modalités</Button>
        <Button to='/formation' color='true'>
          Nos formations
        </Button>
      </ButtonsBox>
      <Logo src={logo} alt='logo arche de noe' />
    </Container>
  )
}

export default Header

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 16em;
  background-color: #007cad;
  text-align: center;

  @media (max-width: ${breakpoints.m}px) {
    height: 22em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 50em;
  }
`

export const Logo = styled.img`
  position: absolute;
  left: ${props => (props.left ? '3em' : 'none')};
  right: ${props => (props.left ? 'none' : '3em')};
  margin: auto;
  top: 0;
  bottom: 0;
  height: 75%;
  padding: 2em 0;

  @media (max-width: ${breakpoints.l}px) {
    height: 65%;
    left: ${props => (props.left ? '1em' : 'none')};
    right: ${props => (props.left ? 'none' : '1em')};
  }

  @media (max-width: ${breakpoints.m}px) {
    height: 35%;
    max-width: 38em;
    left: ${props => (props.left ? '1em' : 'none')};
    right: ${props => (props.left ? 'none' : '1em')};
  }

  @media (max-width: ${breakpoints.s}px) {
    position: relative;
    height: 20%;
    max-width: 38em;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`

export const TextContent = styled.p`
  display: inline-block;
  color: white;
  font-size: 1.1em;
  width: 60%;
  max-width: 35em;
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${breakpoints.l}px) {
    width: 65%;
    max-width: 38em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

export const DateContent = styled.p`
  display: inline-block;
  font-size: 1.4em;
  color: #6cdcef;
  width: 60%;
  max-width: 38em;
  font-family: 'Avenir Next Bold', monospace;

  @media (max-width: ${breakpoints.l}px) {
    width: 65%;
    max-width: 38em;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  margin-top: 3em;
  width: 35em;
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

export const Button = styled(Link)`
  border-radius: 40px;
  font-family: 'Avenir Next Bold', monospace;
  border: ${props => (props.color ? '2px solid #6CDCEF' : '2px solid white')};
  background-color: ${props => (props.color ? '#6CDCEF' : 'transparent')};
  width: 14em;
  padding: 0.4em 0;
  font-size: 1.2em;
  color: ${props => (props.color ? '#007CAD' : 'white')};
  text-decoration: none;

  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: ${props => (props.color ? '0' : '1em')};
  }

  :hover {
    border: ${props =>
      !props.color ? '2px solid #6CDCEF' : '2px solid white'};
    cursor: pointer;
  }
`
