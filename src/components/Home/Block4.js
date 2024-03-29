import styled from '@emotion/styled'
import React from 'react'
import computerSvg from '../../assets/images/home/block4/computer.svg'
import wave from '../../assets/images/home/block4/waves_3.png'
import zoomLogo from '../../assets/images/home/block4/zoom_icon.png'
import { breakpoints, secondaryColor } from '../../utils/styles.js'

const Block4 = () => {
  return (
    <Container>
      <Wave src={wave} />
      <ContentWrapper data-aos='fade-right' data-aos-delay='450' data-aos-duration='3000'>
        <Title>Les cours à</Title>
        <Title sub>distance</Title>
        <Text>
          Lors de la fermeture des locaux en raison de la pandémie du COVID-19, les équipes enseignantes et administratives de l’institut se sont mobilisés pour assurer la continuité pédagogique des formations proposées et accompagner au mieux chaque élève.
        </Text>
        <Text>
          L’ensemble des élèves ont pu suivre les cours de l’institut via la solution de visioconférence Zoom.
          <br /> <br />
          Le corps professoral a été formé à la solution Zoom et est en mesure d’assurer un suivi et une pédagogie adaptée tout aussi rigoureuse dans le cas d’un nouveau confinement.
        </Text>
        <ZoomIcon src={zoomLogo} />
      </ContentWrapper>
      <ImageWrapper data-aos='zoom-in' data-aos-delay='450' data-aos-duration='3000'>
        <RightImage src={computerSvg} />
      </ImageWrapper>
    </Container>
  )
}

export default Block4

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5em 4em 0 4em;
  background: rgb(112, 194, 225);
  background: radial-gradient(
    circle,
    rgba(112, 194, 225, 1) 14%,
    rgba(0, 148, 190, 1) 49%
  );
  height: 43em;

  @media (max-width: ${breakpoints.l}px) {
    height: 40em;
    padding: 5em 2em 0 2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    height: 43em;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column-reverse;
    padding: 0 1em;
    height: 63em;
  }
`

export const ContentWrapper = styled.div`
  width: 44%;
  text-align: right;
  margin-right: 2em;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    text-align: center;
    margin-right: 0;
  }
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold';
  font-size: 3.5em;
  margin: 0;
  margin-bottom: ${props => (props.sub ? '0.7em' : '0')};
  color: ${props => (props.sub ? secondaryColor : 'white')};
  line-height: 1;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 3em;
  }

  @media (max-width: 340px) {
    font-size: 3em;
  }
`

export const Text = styled.p`
  color: white;
  text-align: right;

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
  }
`

export const ZoomIcon = styled.img`
  height: 3em;
  margin: 2em 2em 0 0;

  @media (max-width: ${breakpoints.s}px) {
    margin: 2em 0 0;
  }
`

export const ImageWrapper = styled.div`
  width: 40%;
  max-width: 450px;
  margin-top: -10em;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: -8em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 3em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 80%;
    margin: -10em auto 3em auto;
  }
`

export const RightImage = styled.img``

export const Wave = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`
