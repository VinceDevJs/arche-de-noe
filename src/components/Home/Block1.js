import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'
import booksSvg from '../../assets/images/home/block1/books.png'
import logo from '../../assets/images/home/block1/logo.png'
// import wavesBackground from '../../assets/images/home/block1/waves.png'
import { breakpoints, secondaryColor } from '../../utils/styles'

const Block1 = () => {
  return (
    <Container>
      {/* <Waves src={wavesBackground} alt='arche de noe' /> */}
      <LeftBox data-aos="fade-right" data-aos-duration="3000">
        <Logo src={logo} />
        <TopTitle>institut</TopTitle>
        <Title>L&apos;Arche de Noé</Title>
        <Text>
          L’Institut l’arche de Noé dispense
          <Bold>
            &nbsp;des cours d’arabe et de culture islamique&nbsp;
          </Bold>
          pour enfants et adultes.
        </Text>
        <Button to="#block3">En savoir plus</Button>
      </LeftBox>
      <RightBox data-aos="fade-down" data-aos-duration="2000">
        <BookImage src={booksSvg} />
      </RightBox>
    </Container>
  )
}

export default Block1

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5em 0 2em 3em;
  height: 28em;
 z-index: 100000;
 position: relative;

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    align-items: center;
    height: 48em;
    padding: 0 2em;
    margin-top: 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 42em;
    margin-top: 4em;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 35%;
  padding: 0 1em;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
  }
`

export const Logo = styled.img`
  width: 120px;
`

export const TopTitle = styled.p`
  font-size: 1.1em;
  font-family: Futurist,serif;
  color: #666666;
  margin: .9em 0 0;
  text-transform: uppercase;
  letter-spacing: .9em;
`

export const Title = styled.h2`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00A1C6;
  font-size: 3.2em;
  font-weight: bold;
  margin: 0 0 0.5em;
  text-align: center;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2.5em;
  }
`

export const Text = styled.p`
  text-align: center;
  color: #195780;
  font-size: 1.1em;
  margin: 0;

  @media (max-width: ${breakpoints.m}px) {
    width: 80%;
  }
`

export const Bold = styled.span`
  font-weight: bold;
  margin: 0;
`

export const Button = styled(Link)`
  background-color: transparent;
  border-radius: 30px;
  border: 2.5px solid #007cad;
  font-size: 1.2em;
  color: ${secondaryColor};
  font-weight: bold;
  padding: 2px 20px;
  margin-top: 1.8em;
  text-decoration: none;
  font-family: 'Avenir Next Bold', sans-serif;

  :hover {
    background-color: ${secondaryColor};
    color: white;
    cursor: pointer;
  }
`

export const RightBox = styled.div`
  width: 65%;
  max-width: 800px;
  padding-left: 3em;
  right: 0;

  @media (max-width: ${breakpoints.m}px) {
    width: 65%;
    margin-top: 2em;
    margin-left: 3.5em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const BookImage = styled.img`
  width: 86%;
  margin-top: 0;
  animation: MoveUpDown 3s linear infinite;
  left: 0;
  bottom: 0;

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(0px);
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 2em;
  }
`

export const Waves = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`
