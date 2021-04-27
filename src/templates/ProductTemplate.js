import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

export const query = graphql`
  query($name: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "shop" }, name: { eq: $name } }
      }
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            productPrice
            name
            pointsForts
            subTitle
            description
            title
            avaible
            images {
              image
            }
          }
        }
      }
    }
  }
`

const ProductTemplate = ({ data, path }) => {
  const {
    avaible,
    description,
    name,
    title,
    productPrice,
    images
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  console.log(path)
  return (
    <div>
      <Helmet>
        <title>{title} | Arche de noé</title>
      </Helmet>
      <p>{name}</p>
      <p>{productPrice} €</p>
      <p>{description}</p>
      <img src={images[0].image} alt='' />
      <button
        disabled={!avaible}
        className='snipcart-add-item'
        data-item-id={name}
        data-item-price={productPrice}
        data-item-url={`http://localhost:8000/${path}`}
        data-item-description={description}
        data-item-image={images && images[0].image}
        data-item-name={name}
        data-item-quantity='1'
      >
        ajouter au panier
      </button>
    </div>
  )
}

export default ProductTemplate
