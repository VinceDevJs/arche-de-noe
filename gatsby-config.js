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
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-K7S1720TJ0',
        // this option places the tracking script into the head of the DOM
        head: true
        // other options
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Oswald: 300,400,700'],
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
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://gmail.us1.list-manage.com/subscribe/post?u=c1df17cce4a530a5a12d7189a&amp;id=db5ca6de4a', // string; add your MC list endpoint here; see instructions below
        timeout: 3500 // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        version: '3.0.29',
        publicApiKey:
          'ZGRmZjIwYmItZjNmMy00ODIyLWE4YmItYmIxMGNiNzllZTQ4NjM3NTMyNjE1OTkwMzQxOTM4', // use public api key here or in environment variable
        defaultLang: 'fr-FR',
        currency: 'eur',
        openCartOnAdd: true,
        useSideCart: true
      }
    }
  ]
}
