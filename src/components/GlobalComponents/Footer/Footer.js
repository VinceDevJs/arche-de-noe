import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import facebookIcon from '../../../assets/images/footer/facebook.png'
import bottomImg from '../../../assets/images/footer/footer_bottom.png'
import topImg from '../../../assets/images/footer/footer_top.png'
import logoSvg from '../../../assets/images/footer/logo_footer.svg'
import twitterIcon from '../../../assets/images/footer/twitter.png'
import { breakpoints } from '../../../utils/styles.js'

const Footer = () => {
  return (
    <FooterContainer>
      <Img top src={topImg} />
      <Img src={bottomImg} />
      <BlockLeft>
        <Box>
          <Title>L’Institut</Title>
          <LinkText to='/'>Accueil</LinkText>
          <LinkText to='/formation'>Formation</LinkText>
          <LinkText to='/emplois-du-temps'>Emplois du temps</LinkText>
          <LinkText to='/nos-ouvrages'>Nos  ouvrages</LinkText>
          <LinkText to='/inscription'>Inscription</LinkText>
          <LinkText to='/contact'>Contact</LinkText>
        </Box>
        <Box>
          <Title>A propos</Title>
          <LinkText to='/'>Mentions légales</LinkText>
          <LinkText to='/'>FAQ</LinkText>
          <IconBox>
            <a href='https://fr-fr.facebook.com/institutarchedenoe'><SocialIcon style={{ marginRight: '1em' }} src={facebookIcon} /></a>
            <a href='https://twitter.com'><SocialIcon src={twitterIcon} /></a>
          </IconBox>
        </Box>
      </BlockLeft>

      <BlockRight>
        <Image src={logoSvg} />
      </BlockRight>
    </FooterContainer>
  )
}

export default Footer

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  height: 45em;
  background-color: #0079b2;
  color: antiquewhite;

  @media (max-width: ${breakpoints.s}px) {
    height: 57em;
    flex-direction: column;
    padding: 4em 0;
  }
`

export const BlockLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5em;
  height: 25em;
  width: 50%;

  @media (max-width: ${breakpoints.l}px) {
    margin-left: 3em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-left: 2.5em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: fit-content;
    margin: 1em 0;
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold';
  color: #00b9d8;
  font-size: 2.7em;
  margin: 0 0 0.7em 0;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2.2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.8em;
  }

  @media (max-width: ${breakpoints.s}px) {
    
  }
`

export const LinkText = styled(Link)`
  color: white;
  font-size: 1.4em;
  margin-bottom: 0.5em;
  font-family: 'Avenir Next Bold Demi';
  text-decoration: none;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.3em;
  }

  :hover {
    color: #00b9d8;
  }
`

export const IconBox = styled.div``

export const SocialIcon = styled.img`
  cursor: pointer;
  width: 3em;
`

export const BlockRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    height: fit-content;
    margin-top: 3em;
  }
`

export const Image = styled.img`
  width: 18em;

  @media (max-width: ${breakpoints.s}px) {
    width: 13em;
  }
`

export const Img = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  top: ${props => (props.top ? '0' : '')};
  bottom: ${props => (!props.top ? '0' : '')};
`
