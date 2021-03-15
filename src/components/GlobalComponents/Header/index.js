import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import { breakpoints, primaryColor, secondaryColor } from '../../../utils/styles.js'
import logoHeader from './../../../assets/icons/header/logo_header.png'

const Index = () => {
  return (
    <>
      <Nav>
        <li style={{ color: 'white' }}>Arche de noe</li>
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/'>Formation</Link></li>
        <li><Link to='/'>Emplois du temps</Link></li>
        <li><Link to='/'><Logo src={logoHeader} alt='arche de noe' /></Link></li>
        <li><Link to='/'>Nos  ouvrages</Link></li>
        <li><Link to='/'>Inscription</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Button>Espace pro</Button></li>
      </Nav>
    </>
  )
}

export default Index

export const Logo = styled.img`
  height: 5em;
  width: 5em;
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  height: 5em;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0 2em;
  font-size: 1.1em;

  a {
    text-decoration: none;
    font-family: 'Avenir Next Bold Demi', sans-serif;
    color: ${secondaryColor};
  
    :hover {
      color: ${primaryColor};
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`

export const Button = styled.button`
  background-color: ${primaryColor};
  color: white;
  border-radius: 30px;
  border: none;
  padding: 5px 25px;
  line-height: 1;
  font-size: 1em;
  border: 2px solid transparent;
  font-family: 'Avenir Next Bold Demi';

  :hover {
    background-color: transparent;
    border: 2px solid ${secondaryColor};
    color: ${secondaryColor};
    cursor: pointer;
  }
`
