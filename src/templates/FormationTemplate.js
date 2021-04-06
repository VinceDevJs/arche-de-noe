import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query($name: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "formation" }
          formation_name: { eq: $name }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            thumbnail
            price
            sub_title
            show_formation
            level
            formation_name
            subjects
            age
            place_avaible
          }
        }
      }
    }
  }
`

const FormationTemplate = ({ data, path }) => {
  console.log(data, path)
  const {
    templateKey,
    thumbnail,
    price,
    sub_title,
    show_formation,
    level,
    formation_name,
    subjects,
    age,
    place_avaible
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return <div>formation</div>
}

export default FormationTemplate
