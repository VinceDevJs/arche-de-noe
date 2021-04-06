const { convertToSlug } = require('./src/utils/functions')

// CREATION DE PAGE PRODUIT DU SHOP
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "shop" } } }
      ) {
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

// CREATION DES PAGES FORMATIONS
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "formation" } } }
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
  `)
  results.data.allMarkdownRemark.edges.forEach(edge => {
    const formation = edge.node.frontmatter
    if (!formation.show_formation) return
    const path = convertToSlug(formation.formation_name)

    createPage({
      path: `/formation/${path}`,
      component: require.resolve('./src/templates/FormationTemplate.js'),
      context: {
        name: formation.formation_name
      }
    })
  })
}
