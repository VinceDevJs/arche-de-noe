import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { convertToSlug } from '../../utils/functions'

const AllProducts = () => {
  const data = useStaticQuery(graphql`
      {
          allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "shop" } } }
          ) {
              edges {
                  node {
                      frontmatter {
                          templateKey
                          price
                          name
                          show
                          description
                          avaible
                          images {
                              image
                          }
                      }
                  }
              }
          }
      }
  `)

  // console.log(data.allMarkdownRemark.edges)

  const allProducts = data.allMarkdownRemark.edges

  return (
    <div>
      {allProducts.map(({ node: product }) => {
        const { name, images, price } = product.frontmatter
        return (
          <Link key={name} to={`/nos-ouvrages/${convertToSlug(name)}`}>
            <div>
              <img src={images[0].image} alt='' />
              <p>
                {name} - {price}€
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default AllProducts
