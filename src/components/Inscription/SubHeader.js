import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'
import wave from '../../assets/images/formation/wave.svg'
import computer from '../../assets/images/inscription/computer-inscription.svg'

const SubHeader = () => {
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
        <Title>Inscription</Title>
        <Separator />
        <SubTitle>
          L’Institut l’Arche de Noé a développé, au fil des ans une réelle
          expertise dans différents domaines relatifes à la culture Islamique
          ainsi qu’à la langue Arabe en général.
        </SubTitle>
        <Button to='#main_inscription'>Connaître les modalités</Button>
      </TitleWrapper>
    </Container>
  )
}

export default SubHeader

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
  margin: 0;

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
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(180deg) scaleX(-1);
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
`
