import React from 'react'
import Block1 from './Block1'
import { graphql, useStaticQuery } from 'gatsby'

const TopSlider = () => {
  const slider = useStaticQuery(graphql`
      {
          allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "slider" } } }
          ) {
              edges {
                  node {
                      frontmatter {
                          templateKey
                          
                      }
                  }
              }
          }
      }
  `)

  console.log(slider)

  return (
    <div>
      <Block1 />
    </div>
  )
}

export default TopSlider
