import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import AudioLayout from '../layouts/audios'
import { convertToSlug } from './../utils/functions'

const Audios = () => {
  const data = useStaticQuery(graphql`
      {
          allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "audioBook"}}}) {
              edges {
                  node {
                      frontmatter {
                          audio {
                              audioLink
                              audioTitle
                          }
                          bookTitle
                          thumbnail
                          templateKey
                      }
                  }
              }
          }
      }
  `)

  const allAudioBooks = data.allMarkdownRemark.edges

  // console.log(allAudioBooks)
  return (
    <AudioLayout>
      <Container>
        <PageTitle>Liste des livres audio</PageTitle>
        <BookLinkTitleContainer>
          {
            allAudioBooks.map(({ node: audioBook }) => (
              <BookLinkTitle to={`#${audioBook.frontmatter.bookTitle}`} key={audioBook.frontmatter.bookTitle}>
                - {audioBook.frontmatter.bookTitle} <br />
              </BookLinkTitle>
            ))
          }
        </BookLinkTitleContainer>

        {
          allAudioBooks.map(({ node: audioBook }, index) => (

            <AudioBookContainer id={audioBook.frontmatter.bookTitle} key={audioBook.frontmatter.bookTitle + index}>
              <AudioBookTitle>{audioBook.frontmatter.bookTitle}</AudioBookTitle>
              {
                audioBook.frontmatter.audio.map((audio, index) => (
                  <div key={audio.audioTitle} style={{ marginBottom: '0.3em' }}>
                    <AudioLink to={`/audios/${convertToSlug(audioBook.frontmatter.bookTitle)}-${convertToSlug(audio.audioTitle)}`}>
                      {index + 1} - {audio.audioTitle}
                    </AudioLink>
                    <br />
                  </div>
                ))
              }
            </AudioBookContainer>
          ))
        }
      </Container>
    </AudioLayout>
  )
}

export default Audios

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  text-transform: capitalize;
`

export const PageTitle = styled.p`
  color: #297daf;
  font-size: 3em;
  font-weight: bold;
`

export const BookLinkTitleContainer = styled.div`
  margin: 1em 0 3em;
  text-align: center;
`

export const BookLinkTitle = styled(Link)`
  font-size: 2em;
`

export const AudioBookContainer = styled.div`
  text-align: center;
`

export const AudioBookTitle = styled.p`
  font-size: 1.4em;
`

export const AudioLink = styled(Link)`

`
