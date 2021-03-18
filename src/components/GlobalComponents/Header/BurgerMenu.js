import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { primaryColor, secondaryColor } from '../../../utils/styles.js'
import hamburgerIcon from './../../../assets/icons/hamburger_icon.png'
import hamburgerClose from '../../../assets/icons/hamburger_close.png'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

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
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/'>Accueil</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/about'>Formation</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/contact'>Emplois du temps</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to=''>Nos  ouvrages</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/about'>Inscription</LinkText>
        <LinkText onClick={() => setIsOpen(!isOpen)} to='/contact'>Contact</LinkText>
        <Button>Espace pro</Button>
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
