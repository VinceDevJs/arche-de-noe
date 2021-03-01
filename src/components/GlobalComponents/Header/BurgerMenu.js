import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import {Link} from 'gatsby'
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
        outerContainerId={ "app" }
        right
        customBurgerIcon={<img src={hamburgerIcon}  alt='hamburger'/>}
        customCrossIcon={<img src={hamburgerClose}  alt='hamburger'/>}
        width='60%'
        onStateChange={isMenuOpen}
        isOpen={isOpen}
      >
        <Link onClick={() => setIsOpen(!isOpen)} to="/">Home</Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/about">About</Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/contact">Contact</Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="">Settings</Link>
      </Menu>
    </div>
  )
}

export default BurgerMenu