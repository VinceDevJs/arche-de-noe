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

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { state } = useContext(SnipcartContext)
  console.log(state)
  const { userStatus, cartQuantity, totalPrice } = state

  const isMenuOpen = state => {
    return setIsOpen(state.isOpen)
  }
  return (
    <div>
      <Menu
        outerContainerId='app'
        right
        customBurgerIcon={<img src={hamburgerIcon} alt='hamburger' />}
        customCrossIcon={<img src={hamburgerClose} alt='hamburger' />}
        width='60%'
        onStateChange={isMenuOpen}
        isOpen={isOpen}
      >
        <CartContainerMobile onClick={() => setIsOpen(!isOpen)} className='snipcart-checkout'>
          <CartIcon src={cartIcon} />
          {cartQuantity > 0 ? <CartQuantity>{cartQuantity}</CartQuantity> : ''}
        </CartContainerMobile>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/'>Accueil</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/formation'>Formation</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/'>Emploi du temps</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/nos-ouvrages'>Nos  ouvrages</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/inscription'>Inscription</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/contact'>Contact</LinkText>
        <Button>Se connecter</Button>
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

export const Button = styled.button`
  background-color: ${primaryColor};
  width: 100%;
  color: white;
  border-radius: 30px;
  padding: 5px 25px;
  line-height: 1;
  font-size: 1em;
  border: 2px solid transparent;
  font-family: 'Avenir Next Bold Demi',serif;

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
