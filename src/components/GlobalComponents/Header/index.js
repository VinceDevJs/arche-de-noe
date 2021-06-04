import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import {
  breakpoints,
  primaryColor,
  secondaryColor
} from '../../../utils/styles.js'
import logoHeader from './../../../assets/icons/header/logo_header.png'
import cartIcon from './../../../assets/icons/header/cart-icon.png'

const Index = () => {
  const { state } = useContext(SnipcartContext)
  console.log(state)
  const { userStatus, cartQuantity } = state
  return (
    <>
      <Nav>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/formation'>Formation</Link>
        </li>
        <li>
          <Link to='/inscription'>Inscription</Link>
        </li>
        <li>
          <Link to='/nos-ouvrages'>Nos ouvrages</Link>
        </li>
        <li>
          <Link to='/'>
            <Logo src={logoHeader} alt='arche de noe' />
          </Link>
        </li>
        <li>
          <Link to='/'>Emploi du temps</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Button>Se connecter</Button>
        </li>
        <CartContainer className='snipcart-checkout'>
          <CartIcon src={cartIcon} />
          {cartQuantity > 0 ? <CartQuantity>{cartQuantity}</CartQuantity> : ''}
        </CartContainer>
      </Nav>
      <NavMobile>
        <Link to='/'>
          <LogoMobile src={logoHeader} alt='arche de noe' />
        </Link>
      </NavMobile>
    </>
  )
}

export default Index

export const Logo = styled.img`
  height: 5.4em;
  width: 5em;
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  height: 5em;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0 4em;
  font-size: 1.1em;

  a {
    text-decoration: none;
    font-family: 'Avenir Next Bold', sans-serif;
    color: ${secondaryColor};

    :hover {
      color: ${primaryColor};
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`

export const NavMobile = styled.div`
  @media (max-width: ${breakpoints.l}px) {
    height: 6em;
  }
  @media (min-width: ${breakpoints.l}px) {
    display: none;
  }
`

export const LogoMobile = styled.img`
  position: absolute;
  height: 4.4em;
  width: 4em;
  top: 12px;
  left: 15px;
`

export const Button = styled.button`
  background-color: ${primaryColor};
  color: white;
  border-radius: 40px;
  border: none;
  padding: 2px 25px;
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

export const CartContainer = styled.li`
  position: relative;
  cursor: pointer;
`

export const CartIcon = styled.img`
  width: 1.6em;
`

export const CartQuantity = styled.p`
  position: absolute;
  display: block;
  text-align: center;
  background-color: ${primaryColor};
  color: white;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  top: -8px;
  right: -5px;
  margin: 0;
  font-size: 0.9em;
  line-height: 1.35;
  font-family: 'Avenir Next Bold';
`
