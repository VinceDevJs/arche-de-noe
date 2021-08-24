import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import LogoIcon from './../assets/icons/header/logo_header.png'

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

const AudioBook = ({ data }) => {
  const { bookTitle, audio } = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log(bookTitle, audio)
  return (
    <Container>
      <Logo src={LogoIcon} />
      <Iframe
        width='100%'
        height='166'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={audio[0].audioLink}
      />
      <ButtonsWrapper>
        <Button to='/'>Acceuil</Button>
        <Button to='/nos-ouvrages'>Boutique</Button>
      </ButtonsWrapper>
    </Container>
  )
}

export default AudioBook

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5em;
`

export const Logo = styled.img`
  width: 10em;
  margin-bottom: 4em;
`

export const Iframe = styled.iframe`
  width: 35em;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3em;
  width: 35em;
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
