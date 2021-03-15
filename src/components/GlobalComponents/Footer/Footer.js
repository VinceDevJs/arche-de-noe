import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import facebookIcon from '../../../assets/images/footer/facebook.png'
import bottomImg from '../../../assets/images/footer/footer_bottom.png'
import topImg from '../../../assets/images/footer/footer_top.png'
import logoIcon from '../../../assets/images/footer/logo.png'
import twitterIcon from '../../../assets/images/footer/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Img top src={topImg} />
      <Img src={bottomImg} />
      <BlockLeft>
        <Box>
          <Title>L’Institut</Title>
          <LinkText to='/'>Accueil</LinkText>
          <LinkText to='/'>Formation</LinkText>
          <LinkText to='/'>Emplois du temps</LinkText>
          <LinkText to='/'>Nos  ouvrages</LinkText>
          <LinkText to='/'>Inscription</LinkText>
          <LinkText to='/'>Contact</LinkText>
        </Box>
        <Box>
          <Title>A propos</Title>
          <LinkText to='/'>Mentions légales</LinkText>
          <LinkText to='/'>FAQ</LinkText>
          <IconBox>
            <Link><SocialIcon style={{ marginRight: '1em' }} src={facebookIcon} /></Link>
            <Link><SocialIcon src={twitterIcon} /></Link>
          </IconBox>
        </Box>
      </BlockLeft>

      <BlockRight>
        <Image src={logoIcon} />
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
`

export const BlockLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5em;
  height: 25em;
  width: 50%;
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold';
  color: #00b9d8;
  font-size: 3em;
  margin: 0 0 0.7em 0;
`

export const LinkText = styled(Link)`
  color: white;
  font-size: 1.6em;
  margin-bottom: 0.5em;
  font-family: 'Avenir Next Bold Demi';
  text-decoration: none;
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
`

export const Image = styled.img`
  width: 18em;
`

export const Img = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  top: ${props => (props.top ? '0' : '')};
  bottom: ${props => (!props.top ? '0' : '')};
`
