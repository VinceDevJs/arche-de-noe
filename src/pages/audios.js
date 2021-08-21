import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

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
                            templateKey
                        }
                    }
                }
            }
        }
    `)

  const allAudioBooks = data.allMarkdownRemark.edges

  console.log(allAudioBooks)
  return (
    <>
      <div>
        {
          allAudioBooks.map(({ node: audioBook }, index) => (
            <Link to={`#${audioBook.frontmatter.bookTitle}`} key={audioBook.frontmatter.bookTitle}>
              <p>{index} - {audioBook.frontmatter.bookTitle}</p>
            </Link>
          ))
        }

        {
          allAudioBooks.map(({ node: audioBook }, index) => (
            <div id={audioBook.frontmatter.bookTitle} key={audioBook.frontmatter.bookTitle + index}>
              <p>{index} - {audioBook.frontmatter.bookTitle}</p>
              {
                audioBook.frontmatter.audio.map(audio => (
                  <Link key={audio.audioTitle} to={`/audios/${audioBook.frontmatter.bookTitle}/${audio.audioTitle}`}>
                    <p>{audio.audioTitle}</p>
                  </Link>
                ))
                }
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Audios
