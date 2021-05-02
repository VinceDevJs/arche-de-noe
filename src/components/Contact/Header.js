import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'

import clockIcon from './../../assets/images/contact/clock.svg'
import mapIcon from './../../assets/images/contact/map.svg'
import phoneIcon from './../../assets/images/contact/phone.svg'
import bigPhoneIcon from './../../assets/images/contact/big_phone.svg'
const Header = () => {
  return (
    <MainContainer>
      <LeftBox>
        <PhoneImg src={bigPhoneIcon} alt='phone arche de noe' />
      </LeftBox>

      <RightBox>
        <RightHeaderContent>
          <RightHeaderTitle>Nous contacter</RightHeaderTitle>
          <RightHeaderText>
            L’Institut l’Arche de Noé a développé, au ﬁl des ans une réelle
            expertise dans différents domaines relatifes à la culture Islamique
            ainsi qu’à la langue Arabe en général.
          </RightHeaderText>
          <RightHeaderButton to='#'>J’ai un question</RightHeaderButton>
        </RightHeaderContent>

        <RightInfoContainer>
          <RightInfoBox>
            <RightIconBox>
              <RightIcon
                src={mapIcon}
                style={{ width: '4em' }}
                alt='carte arche de noe'
              />
            </RightIconBox>
            <RightContentBox>
              <RightContentText style={{ fontSize: '2.2em' }}>
                <span style={{ color: 'black', fontSize: '16px' }}>
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
                alt='telephone arche de noe'
              />
            </RightIconBox>
            <RightContentBox>
              <RightContentText style={{ fontSize: '1.9em' }}>
                01. 83. 37. 75. 84
              </RightContentText>
            </RightContentBox>
          </RightInfoBox>

          <Separator />

          <RightInfoBox>
            <RightIconBox>
              <RightIcon
                src={clockIcon}
                style={{ width: '5.5em' }}
                alt='montre arche de noe'
              />
            </RightIconBox>
            <RightContentBox>
              <RightContentText>
                <DayTitle>Mercredi:</DayTitle> 13h-17h30 <br />
                <DayTitle>Samedi:</DayTitle> 8h00-13h00 & 14h00-20h00
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
  max-width: 35em;

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
  }
`

export const PhoneImg = styled.img`
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
