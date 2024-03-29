import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import Img from 'gatsby-image'

import clockIcon from './../../assets/images/contact/clock.svg'
import mapIcon from './../../assets/images/contact/map.svg'
import phoneIcon from './../../assets/images/contact/phone.svg'
import whatsappIcon from './../../assets/images/contact/whatsapp-icon.png'

const Header = () => {
  const image = useStaticQuery(graphql`
      query {
          phone: file(relativePath: { eq: "images/contact/big_phone.png" }) {
              childImageSharp {
                  fluid(maxWidth: 450) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <MainContainer>
      <LeftBox data-aos="fade-right" data-aos-duration="2000">
        <PhoneImg
          fluid={image.phone.childImageSharp.fluid}
          alt="phone arche de noe"
        />
      </LeftBox>

      <RightBox data-aos="fade-left" data-aos-duration="3000" id="contact">
        <RightHeaderContent>
          <RightHeaderTitle>Nous contacter</RightHeaderTitle>
          <RightHeaderText>
            Vous avez une question, nous vous répondons par téléphone, e-mail ou via l’application WhatsApp
          </RightHeaderText>
          <RightHeaderButton to="#form">J’ai une question</RightHeaderButton>
        </RightHeaderContent>

        <RightInfoContainer>
          <RightInfoBox>
            <RightIconBox>
              <RightIcon
                src={mapIcon}
                style={{ width: '4em' }}
                alt="carte arche de noe"
              />
            </RightIconBox>
            <RightContentBox>
              <RightContentText style={{ fontSize: '2.2em', textAlign: 'center' }}>
                <span style={{ fontSize: '16px' }}>
                  12, Avenue du générale de Gaulle
                </span>
                <br />
                93440 - Dugny
              </RightContentText>
            </RightContentBox>
          </RightInfoBox>

          <Separator />

          <RightInfoBox>
            <RightIconBox>
              <RightIcon
                src={phoneIcon}
                style={{ width: '4em' }}
                alt="telephone arche de noe"
              />
            </RightIconBox>
            <RightContentBox>
              <RightContentText style={{ fontSize: '1.8em' }}>
                01. 83. 37. 75. 84
              </RightContentText>
            </RightContentBox>
          </RightInfoBox>

          <Separator />

          <RightInfoBox>
            <RightIconBox>
              <RightIcon
                src={whatsappIcon}
                style={{ width: '4.3em' }}
                alt="telephone arche de noe"
              />
            </RightIconBox>
            <RightContentBox>
              <WhatsButton href="https://wa.me/33766575082">Nous contacter via Whatsapp</WhatsButton>
            </RightContentBox>
          </RightInfoBox>

          <Separator />

          <RightInfoBox>
            <RightIconBox>
              <RightIcon
                src={clockIcon}
                style={{ width: '5.5em' }}
                alt="montre arche de noe"
              />
            </RightIconBox>
            <RightContentBox>
              <RightContentText>
                <DayTitle>Mercredi:</DayTitle> 10h00-15h00 <br />
                <DayTitle>Samedi:</DayTitle> 11h00-16h00
              </RightContentText>
            </RightContentBox>
          </RightInfoBox>
        </RightInfoContainer>
      </RightBox>
    </MainContainer>
  )
}

export default Header

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 8em;
  max-width: 60em;
  margin: 3em auto 0 auto;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 3em;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0 1em;
  }
`

export const LeftBox = styled.div`
  width: 460px;

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    width: 340px;
  }
`

export const PhoneImg = styled(Img)`
  width: 100%;
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  max-width: 34em;
  margin-left: 3em;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    margin-left: 0;
    max-width: max-content;
  }
`

export const RightHeaderContent = styled.div`
  margin-bottom: 4em;

  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
  }
`

export const RightHeaderTitle = styled.p`
  color: #00a1c6;
  font-size: 3em;
  font-family: 'Avenir Next Bold', sans-serif;
  margin: 0;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2.5em;
  }
`

export const RightHeaderText = styled.p`
  margin-bottom: 2em;
  color: #00a1c6;
`

export const RightHeaderButton = styled(Link)`
  background-color: #00a1c6;
  color: white;
  border-radius: 30em;
  padding: 0.3em 2.2em;
  border: 2px solid transparent;
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.3em;
  cursor: pointer;
  text-decoration: none;

  :hover {
    border: 2px solid #00a1c6;
    background-color: white;
    color: #00a1c6;
  }
`

export const RightInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const RightInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em 0;

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    width: 30em;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
  }
`

export const RightIconBox = styled.div`
  display: flex;
  justify-content: center;
  width: 7em;

  @media (max-width: ${breakpoints.s}px) {
    margin-bottom: 1em;
  }
`

export const Separator = styled.div`
  border-bottom: 2px solid #00a1c6;
  width: 7em;
  margin: 1em 0;
  height: 2px;

  @media (max-width: ${breakpoints.m}px) {
    margin: 2em auto;
  }
`

export const RightIcon = styled.img``

export const RightContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2em;

  @media (max-width: ${breakpoints.s}px) {
    margin-left: 0;
  }
`

export const RightContentText = styled.p`
  margin: 0;
  color: #00a1c6;
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.1em;
`

export const DayTitle = styled.span`
  font-family: 'Avenir Next', sans-serif;
  font-weight: normal;
`

export const WhatsButton = styled.a`
  border: 2px solid #00A1C6;
  border-radius: 30px;
  padding: .5em 2em;
  color: #00A1C6;
  font-size: 1.1em;
  text-align: center;
  font-family: 'Avenir Next Bold', sans-serif;
  text-decoration: none;

  :hover {
    background-color: #00A1C6;
    color: white;
  }
`
