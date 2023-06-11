import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { breakpoints } from '../../src/utils/styles'

import LogoIcon from './../assets/icons/header/logo_header.png'
import AudioLayout from '../layouts/audios'

export const query = graphql`
    query($audioBookTitle: String!, $title: String!) {
        allMarkdownRemark(
            filter: {
                frontmatter: {
                    templateKey: {eq: "audioBook"},
                    bookTitle: {eq: $audioBookTitle},
                    audio: {
                        elemMatch: { audioTitle: {eq: $title} }
                    }
                }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        bookTitle
                        thumbnail
                        audio {
                            audioLink
                            audioTitle
                        }
                        templateKey
                    }
                }
            }
        }
    }`

const AudioBook = ({ data, pageContext }) => {
  const { bookTitle, thumbnail, audio } = data.allMarkdownRemark.edges[0].node.frontmatter

  const audioToPlay = audio.find((value) => value.audioTitle === pageContext.title)

  return (
    <AudioLayout>
      <Wrapper>
        <Container>
          <Logo src={LogoIcon} />
          <Iframe
            id="iFrame"
            width="100%"
            height="20"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={audioToPlay.audioLink}
          />
          <ButtonsWrapper>
            <Button to="/">Acceuil</Button>
            <Button to="/nos-ouvrages">Boutique</Button>
          </ButtonsWrapper>
        </Container>
      </Wrapper>
    </AudioLayout>
  )
}

export default AudioBook

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Container = styled.div`
  height: 25em;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.img`
  width: 10em;
  margin-bottom: 4em;
`

export const Iframe = styled.iframe`
  width: 30em;

  @media (max-width: ${breakpoints.s}px) {
    width: 80vw;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3em;
  width: 35em;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 8em;
  }
`

export const Button = styled(Link)`
  width: 12em;
  background-color: #00a0c5;
  color: white;
  font-weight: bold;
  line-height: 1.5;
  font-family: 'Avenir Next Bold', sans-serif;
  text-align: center;
  height: 1.6em;
  border-radius: 30px;
  border: 2px solid #00a0c5;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: white;
    color: #00a0c5;
  }
`
