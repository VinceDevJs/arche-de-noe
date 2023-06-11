import React, { useState, useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { primaryColor, secondaryColor } from '../../../utils/styles.js'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import hamburgerIcon from './../../../assets/icons/hamburger_icon.png'
import hamburgerClose from '../../../assets/icons/hamburger_close.png'
import cartIcon from '../../../assets/icons/header/cart-icon.png'
import { CartContainer, CartIcon, CartQuantity } from './index'

const BurgerMenu = ({ inscriptionActivated }) => {
  const [isOpen, setIsOpen] = useState(false)

  const { state } = useContext(SnipcartContext)

  const { userStatus, cartQuantity, totalPrice } = state

  const isMenuOpen = (state) => {
    return setIsOpen(state.isOpen)
  }
  return (
    <div>
      <Menu
        outerContainerId="app"
        right
        customBurgerIcon={<img src={hamburgerIcon} alt="hamburger" />}
        customCrossIcon={<img src={hamburgerClose} alt="hamburger" />}
        width="60%"
        onStateChange={isMenuOpen}
        isOpen={isOpen}
      >
        <CartContainerMobile
          onClick={() => setIsOpen(!isOpen)}
          className="snipcart-checkout"
        >
          <CartIcon src={cartIcon} />
          {cartQuantity > 0 ? <CartQuantity>{cartQuantity}</CartQuantity> : ''}
        </CartContainerMobile>
        <LinkText onClick={() => setIsOpen(!isOpen)} to="/">
          Accueil
        </LinkText>
        {inscriptionActivated && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <LinkText onClick={() => setIsOpen(!isOpen)} to="/formation">
              Formation
            </LinkText>
            <LinkText onClick={() => setIsOpen(!isOpen)} to="/emploi-du-temps">
              Emploi du temps
            </LinkText>
          </div>
        )}
        <LinkText onClick={() => setIsOpen(!isOpen)} to="/nos-ouvrages">
          Nos ouvrages
        </LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to="/inscription">
          Inscription
        </LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to="/contact">
          Contact
        </LinkText>
        <Button href="https://interface.institutarchedenoe.fr/login.php">
          Mon espace
        </Button>
      </Menu>
    </div>
  )
}

export default BurgerMenu

export const LinkText = styled(Link)`
  margin-bottom: 0.6em;
  text-decoration: none;
  color: ${secondaryColor};
  font-size: 1.1em;
  outline: none;
`

export const Button = styled.a`
  background-color: ${primaryColor};
  width: 6em;
  color: white;
  border-radius: 30px;
  padding: 5px 25px;
  line-height: 1;
  font-size: 1em;
  border: 2px solid transparent;
  text-decoration: none;
  font-family: 'Avenir Next Bold Demi', serif;

  :hover {
    background-color: transparent;
    border: 2px solid ${secondaryColor};
    color: ${secondaryColor};
    cursor: pointer;
  }
`

export const CartContainerMobile = styled(CartContainer)`
  position: absolute;
  top: 1.05em;
  right: 1em;
  outline: none;
`
