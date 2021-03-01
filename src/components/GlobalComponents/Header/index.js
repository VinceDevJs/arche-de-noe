import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import {breakpoints} from '../../../utils/styles'

const Index = () => {
  return (
    <Header>
      <Logo>L'arche de noe</Logo>
      <Nav>
        <li><Link to='/'>menu1</Link></li>
        <li><Link to='/'>menu2</Link></li>
        <li><Link to='/'>menu3</Link></li>
      </Nav>
    </Header>
  )
}

export default Index

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  background-color: antiquewhite;
  padding: 0 2em;
  margin-bottom: 2em;
`

export const Logo = styled.h1`
  margin: 0;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  width: 13em;

  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`