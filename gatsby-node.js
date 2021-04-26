const { convertToSlug } = require('./src/utils/functions')

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // CREATION DES PAGES FORMATIONS
  const formations = await graphql(`
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
  formations.data.allMarkdownRemark.edges.forEach(edge => {
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

  // CREATION DE PAGE PRODUIT DU SHOP
  const products = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "shop" } } }
      ) {
        edges {
          node {
            frontmatter {
              name
            }
          }
        }
      }
    }
  `)

  products.data.allMarkdownRemark.edges.forEach(edge => {
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
