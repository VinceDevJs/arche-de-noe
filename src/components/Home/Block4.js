import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { breakpoints, primaryColor, secondaryColor } from '../../utils/styles.js'
import zoomLogo from '../../assets/images/home/block4/zoom_icon.png'
import wave from '../../assets/images/home/block4/waves_3.png'

const Block4 = () => {
  const image = useStaticQuery(graphql`
    query {
      computer: file(relativePath: { eq: "images/home/block4/computer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
        <LeftImage fluid={image.computer.childImageSharp.fluid} />
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
`

export const LeftImage = styled(Img)`
    top: -9em;
`

export const Wave = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`
