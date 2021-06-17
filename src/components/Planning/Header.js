import React from 'react'
import wave from '../../assets/images/formation/wave.svg'
import clockPlanning from '../../assets/images/planning/header-clock.png'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <Container>
      <Wave top style={{ top: '0' }} src={wave} alt='wave logo' />
      <ClockImg
        data-aos='fade-right'
        data-aos-duration='2000'
        src={clockPlanning}
        alt='çomputer logo'
      />
      <TitleWrapper data-aos='fade-left' data-aos-duration='2500'>
        <Title>Emploi <br /> du temps</Title>
        <Separator />
        <SubTitle>
          Retrouvez le créneau de chaque formation ci-dessous
        </SubTitle>
        <Button to='#main_time'>Accéder à l'emploi du temps</Button>
      </TitleWrapper>
      <Wave style={{ bottom: '0' }} src={wave} alt='wave logo' />
    </Container>
  )
}

export default Header

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 41em;
  background: rgb(112, 194, 225);
  background: radial-gradient(
    circle,
    rgba(112, 194, 225, 1) 0%,
    rgba(0, 148, 190, 1) 58%
  );
  margin: 0;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column-reverse;
    height: 52em;
    padding-top: 9em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 45em;
    padding-top: 3em;
  }
`

export const Wave = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  transform: ${props => props.top ? 'rotate(180deg) scaleX(-1)' : ''};
`

export const ClockImg = styled.img`
  width: 60%;
  max-width: 40em;
  margin-top: 12em;
  z-index: 2;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 10em;
    width: 50%;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 7em;
    margin-bottom: -3em;
    max-width: 50em;
    width: 80%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    margin-top: 5em;
    margin-bottom: -9em;
  }
`

export const TitleWrapper = styled.div`
  color: white;
  width: 35%;
  max-width: 25em;
  margin-left: 3em;

  @media (max-width: ${breakpoints.m}px) {
    margin-left: 0;
    text-align: center;
    width: fit-content;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const Title = styled.p`
  font-size: 4em;
  margin: 0;
  font-family: 'Avenir Next Bold', sans-serif;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 3.5em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 3.3em;
  }
`

export const Separator = styled.div`
  border-bottom: 1px solid white;
  width: 8em;
  margin: 2em 0;

  @media (max-width: ${breakpoints.m}px) {
    margin: 2em auto;
  }
`

export const SubTitle = styled.p`
  margin-bottom: 2.5em;
`

export const Button = styled(Link)`
  border: 2px solid white;
  border-radius: 40px;
  color: white;
  padding: 0.4em 2em;
  font-size: 1.1em;
  text-decoration: none;
  font-family: 'Avenir Next Bold', monospace;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 1em;
  }
`
