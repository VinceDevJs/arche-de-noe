module.exports = {
  siteMetadata: {
    title: 'arche-de-noe',
    siteUrl: 'http://arche-de-noe.fr'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Oswald\: 300,400,700'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'enfant',
        path: './content/enfant'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'adulte',
        path: './content/adulte'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: './content/'
      }
    }
  ]
}
