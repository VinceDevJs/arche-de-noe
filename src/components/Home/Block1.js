import React from 'react'
import img from 'gatsby-image'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import { primaryColor, secondaryColor } from '../../utils/styles'
import wavesBackground from '../../assets/images/home/block1/waves.png'

const Block1 = () => {
  const images = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/home/block1/logo.png" }) {
        childImageSharp {
            fixed(width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    
      books: file(relativePath: { eq: "images/home/block1/books.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(images)

  return (
    <Container>
      <Waves src={wavesBackground} alt='arche de noe' />
      <LeftBox>
        <Logo fixed={images.logo.childImageSharp.fixed} />
        <Title>L'Arche de Noé</Title>
        <Text>L’Institut l’arche de Noé dispense des cours d’arabe et de culture islamique pour enfants et adultes.</Text>
        <Button>En savoir plus</Button>
      </LeftBox>
      <RightBox>
        <BookImage fluid={images.books.childImageSharp.fluid} />
      </RightBox>
    </Container>
  )
}

export default Block1

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 5em 5em 2em 5em;
  height: 35em;
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 35%;
  padding: 0 1em;
`

export const Logo = styled(img)`
 
`
export const Title = styled.h2`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #007cad;
  font-size: 3.2em;
  font-weight: bold;
  margin: .2em 0;
`

export const Text = styled.p`
  text-align: center;
  color: #195780;
  font-size: 1.1em;
  margin: 0;
`

export const Button = styled.button`
  background-color: transparent;
  border-radius: 30px;
  border: 2.5px solid #007cad;
  font-size: 1.2em;
  color: ${secondaryColor};
  font-weight: bold;
  padding: 2px 20px;
  margin-top: 1.8em;

  :hover {
    background-color: ${secondaryColor};
    color: white;
    cursor: pointer;
  }
`

export const RightBox = styled.div`
position: absolute;
  width: 58%;
  right: 3em;
`

export const BookImage = styled(img)`
  width: 100%;
`

export const Waves = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
