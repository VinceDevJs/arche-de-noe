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
      <ContentWrapper>
        <Title>Les cours à</Title>
        <Title sub>distance</Title>
        <Text>Suite à la pandémie du Covid-19 ainsi qu’aux restrictions et mesures de sécurité misent en place aﬁn de limiter lapropagation du virus, l’insitut l’Arche de Noé a du tres vite s’adapter afin de proposer des solutions efficaces afin d’assurer la continuité des ses cours dans les meilleures conditions.</Text>
        <Text>C’est pour cela que l’Institut l’Arche de Noé propose aujourdhui des cours à distance via l’interface ZOOM avec un suivi et une pédagogie tout aussi rigoureuse et soignée.</Text>
        <ZoomIcon src={zoomLogo} />
      </ContentWrapper>
      <ImageWrapper>
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
    background: rgb(112,194,225);
background: radial-gradient(circle, rgba(112,194,225,1) 14%, rgba(0,148,190,1) 49%);
    height: 43em;

    @media (max-width: ${breakpoints.l}px) {
      height: 38em;
      padding: 5em 2em 0 2em;
  }
`

export const ContentWrapper = styled.div`
    width: 44%;
    text-align: right;
    margin-right: 2em;
`

export const Title = styled.p`
    font-family: 'Avenir Next Bold';
    font-size: 3.5em;
    margin: 0;
    margin-bottom: ${props => (props.sub ? '0.7em' : '0')};
    color: ${props => (props.sub ? secondaryColor : 'white')};
    line-height: 1;
`

export const Text = styled.p`
    color: white;
`

export const ZoomIcon = styled.img`
    height: 3em;
    margin: 2em 2em 0 0;
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
`

export const RightImage = styled.img`
    
`

export const Wave = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`
