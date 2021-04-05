import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  query ($name: String!) {
  allMarkdownRemark(
    filter: {frontmatter: {templateKey: {eq: "shop"}, name: {eq:  $name}}}
  ) {
    edges {
      node {
        frontmatter {
          templateKey
          thumbnail
          price
          name
          draft
          description
          avaible
        }
      }
    }
  }
}
`

const ProductTemplate = ({ data }) => {
  const { avaible, description, draft, name, price, thumbnail } = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log(name, description)
  return (
        <div>
            <p>{name}</p>
            <p>{price} €</p>
            <p>{description}</p>
            <img src={thumbnail} alt=""/>
            <button disabled={!avaible}>ajouter au panier</button>
        </div>
  )
}

export default ProductTemplate
