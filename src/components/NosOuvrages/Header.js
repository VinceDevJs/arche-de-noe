import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import wave from '../../assets/images/formation/wave.svg'
import store from '../../assets/images/nos_ouvrages/store.svg'
import { LeftBox } from '../Home/Block1'

const Header = () => {
  return (
    <Container>
      <Wave src={wave} alt='wave logo' />
      <ComputerImg
        data-aos='fade-left'
        data-aos-duration='2000'
        src={store}
        alt='çomputer logo'
      />
      <TitleWrapper data-aos='fade-right' data-aos-duration='2500'>
        <Title>
          Nos <br />
          Ouvrages
        </Title>
        <Separator />
        <SubTitle>
          Retrouver tous les livres de l’institut l’Arche de Noé disponible à l’achat
        </SubTitle>
      </TitleWrapper>
    </Container>
  )
}

export default Header

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
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
    height: 53em;
    padding-top: 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 40em;
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
  max-width: 35em;
  margin-top: 12em;
  z-index: 2;

  @media (max-width: ${breakpoints.l}px) {
    width: 65%;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 1em;
    margin-bottom: -3em;
    max-width: 50em;
    width: 70%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  color: white;
  width: 35%;
  max-width: 25em;
  margin-right: 3em;

  @media (max-width: ${breakpoints.m}px) {
    margin-right: 0;
    margin-top: 12em;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: fit-content;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-top: 7em;
    width: 100%;
  }
`

export const Title = styled.p`
  font-size: 4em;
  text-align: right;
  margin: 0;
  font-family: 'Avenir Next Bold', sans-serif;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 3.5em;
  }

  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
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
  text-align: end;

  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
  }
`
