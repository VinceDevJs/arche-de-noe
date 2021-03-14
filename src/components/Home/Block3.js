import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { breakpoints, primaryColor, secondaryColor } from '../../utils/styles.js'

const Block3 = () => {
  const image = useStaticQuery(graphql`
    query {
      books: file(relativePath: { eq: "images/home/block3/books.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(image)

  return (
    <Container>
      <BooksImg fluid={image.books.childImageSharp.fluid} />
      <ContentWrapper>
        <TitleBox>
          <Title title>Nos Domaines</Title>
          <Title>d’enseignement</Title>
          <TextContent>L’Institut l’Arche de Noé a développé, au ﬁl des ans une réelle expertise dans différents domaines relatifes à la culture Islamique ainsi qu’à la langue Arabe en général.</TextContent>
        </TitleBox>
        <Button>Accéder à nos formations</Button>
      </ContentWrapper>
    </Container>
  )
}

export default Block3

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2em 5em;
    justify-items: center;
`

export const BooksImg = styled(Img)`
    width: 35%;
    margin-right: 1em;
`

export const ContentWrapper = styled.div`
    width: 65%;
    padding-top: 4em;
`
export const TitleBox = styled.div`

`

export const Title = styled.p`
    font-size: 3.5em;
    margin: 0;
    font-weight: bold;
    color: ${props => (props.title ? primaryColor : secondaryColor)};
    font-family: 'Avenir Next Bold';
    line-height: 1.1;
`

export const TextContent = styled.p`
    display: block;
    width: 30em;
    color: #195780;
    margin-top: 2em;
`

export const Button = styled.button`
    background-color: ${secondaryColor};
    color: white;
    border-radius: 30px;
    font-size: 1em;
    border: 2px solid transparent;
    padding: .2em 1.3em;
    font-weight: bold;
`
