import React from 'react'
import { graphql } from 'gatsby'

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
    <div>
      <iframe
        width='100%'
        height='166'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={audio[0].audioLink}
      />
    </div>
  )
}

export default AudioBook
