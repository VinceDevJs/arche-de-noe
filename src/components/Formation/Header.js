import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import wave from '../../assets/images/formation/wave.svg'
import computer from '../../assets/images/formation/computer.svg'
import { LeftBox } from '../Home/Block1'

const Header = () => {
  return (
    <Container>
      <Wave src={wave} alt='wave logo' />
      <ComputerImg
        data-aos='fade-right'
        data-aos-duration='2000'
        src={computer}
        alt='çomputer logo'
      />
      <TitleWrapper data-aos='fade-left' data-aos-duration='2500'>
        <Title>
          Nos <br />
          Formations
        </Title>
        <Separator />
        <SubTitle>
          L’Institut l’arche de Noé vous propose trois types de formations adaptées à
          différentes tranches d’âges: Langue arabe, Coran, Science islamique
          <br /> <br />
          Découvrez ci-dessous le détails de ces formations
        </SubTitle>
      </TitleWrapper>
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
  height: 37em;
  background: rgb(112, 194, 225);
  background: radial-gradient(
    circle,
    rgba(112, 194, 225, 1) 0%,
    rgba(0, 148, 190, 1) 58%
  );
  margin: 0 0 5em;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column-reverse;
    height: 40em;
    padding-top: 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 35em;
    padding-top: 3em;
  }
`

export const Wave = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const ComputerImg = styled.img`
  width: 60%;
  max-width: 40em;
  margin-top: 12em;
  z-index: 2;

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 1em;
    margin-bottom: -3em;
    max-width: 50em;
    width: 70%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
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

  @media (max-width: ${breakpoints.s}px) {
    font-size: 3.3em;
  }
`

export const Separator = styled.div`
  border-bottom: 2px solid white;
  width: 8em;
  margin: 2em 0;

  @media (max-width: ${breakpoints.m}px) {
    margin: 2em auto;
  }
`

export const SubTitle = styled.p``
