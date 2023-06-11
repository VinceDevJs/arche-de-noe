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

const Index = ({ inscriptionActivated }) => {
  console.log('🚀 ~ file: index.js:14 ~ Index ~ inscriptionActivated:', inscriptionActivated)
  const { state } = useContext(SnipcartContext)
  const { cartQuantity } = state

  return (
    <>
      <Nav>
        <div>
          <Link to="/">
            <Logo src={logoHeader} alt="arche de noe" />
          </Link>
        </div>

        <LinkBox inscription={inscriptionActivated}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          {inscriptionActivated && (
            <li>
              <Link to="/formation">Formation</Link>
            </li>
          )}
          <li>
            <Link to="/inscription">Inscription</Link>
          </li>
          <li>
            <Link to="/nos-ouvrages">Nos ouvrages</Link>
          </li>
          {inscriptionActivated && (
            <li>
              <Link to="/emploi-du-temps">Emploi du temps</Link>
            </li>
          )}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Button href="https://interface.institutarchedenoe.fr/login.php">
              Mon espace
            </Button>
          </li>
          <CartContainer className="snipcart-checkout">
            <CartIcon src={cartIcon} />
            {cartQuantity > 0
              ? (
                <CartQuantity>{cartQuantity}</CartQuantity>
                )
              : (
                  ''
                )}
          </CartContainer>
        </LinkBox>
      </Nav>
      <NavMobile>
        <Link to="/">
          <LogoMobile src={logoHeader} alt="arche de noe" />
        </Link>
      </NavMobile>
    </>
  )
}

export default Index

export const Logo = styled.img`
  height: 4em;
  width: 4em;
`

export const Nav = styled.div`
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

export const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.inscription ? '80%' : '65%'};
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

export const Button = styled.a`
  color: ${primaryColor}!important;
  border-radius: 40px;
  padding: 2px 25px;
  line-height: 1;
  font-size: 1em;
  text-decoration: none;
  border: 2px solid ${primaryColor};
  font-family: 'Avenir Next Bold Demi', serif;

  :hover {
    background-color: ${primaryColor};
    color: white !important;
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
