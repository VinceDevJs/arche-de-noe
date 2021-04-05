const { convertToSlug } = require('./src/utils/functions')

// CREATION DE PAGE PRODUIT DU SHOP
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
        {
          allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "shop"}}}) {
            edges {
                node {
                frontmatter {
                    templateKey
                    images {
                      image
                    }
                    price
                    name
                    show
                    description
                    avaible
                  }
                }
              }
            }
        }
    `)
  results.data.allMarkdownRemark.edges.forEach(edge => {
    const product = edge.node.frontmatter
    if (!product.show) return
    const path = convertToSlug(product.name)

    createPage({
      path: `/nos-ouvrages/${path}`,
      component: require.resolve('./src/templates/ProductTemplate.js'),
      context: {
        name: product.name
      }
    })
  })
}
