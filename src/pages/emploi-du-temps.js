import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import Header from './../components/Planning/Header'
import Main from './../components/Planning/Main'
import DefaultLayout from '../layouts/default'

const EmploiDuTemps = () => {
  const inscription = useStaticQuery(graphql`
  {
      allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "inscription" } } }
      ) {
          edges {
              node {
                  frontmatter {
                      templateKey
                      activated
                  }
              }
          }
      }
  }
`)

  const inscriptionActivated = inscription.allMarkdownRemark.edges[0].node.frontmatter.activated

  useEffect(() => {
    if (inscriptionActivated === false) {
      navigate('/')
    }
  }, [inscriptionActivated])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Emplois du temps | Arche de noé</title>
      </Helmet>
      <Header />
      <Main />
    </DefaultLayout>
  )
}

export default EmploiDuTemps
