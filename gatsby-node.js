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
              show_formation
              formation_name
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
              templateKey
              name
              show
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

  // CREATION DE PAGE AUDIO DES LIVRES
  const audioBook = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "audioBook"}}}) {
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
    }
  `)
  audioBook.data.allMarkdownRemark.edges.forEach(edge => {
    const audioBook = edge.node.frontmatter
    const audioBookTitle = convertToSlug(audioBook.bookTitle)

    audioBook.audio.forEach(audio => {
      const audioTitle = convertToSlug(audio.audioTitle)

      createPage({
        path: `/audios/${audioBookTitle}-${audioTitle}`,
        component: require.resolve('./src/templates/AudioBook.js'),
        context: {
          title: audio.audioTitle,
          audioBookTitle
        }
      })
    })
  })
}
