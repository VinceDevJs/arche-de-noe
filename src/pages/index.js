import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

// import Block1 from '../components/Home/Block1'
import Block2 from '../components/Home/Block2'
import Block4 from '../components/Home/Block4'
import Block3Bis from '../components/Home/Block3Bis'
import MatieresBis from './../components/Home/MatieresBis'
import DefaultLayout from '../layouts/default'
import TopSlider from './../components/Home/TopSlider'
import Block5Bis from './../components/Home/Block5Bis'

const IndexPage = () => {
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

  return (
    <>
      <DefaultLayout>
        <Helmet>
          <title>Accueil | Arche de noé</title>
        </Helmet>
        <TopSlider />
        {/* <Block1 /> */}
        <Block2 />
        <Block3Bis />
        <MatieresBis inscriptionActivated={inscriptionActivated} />
        <Block4 />
        <Block5Bis inscriptionActivated={inscriptionActivated} />
      </DefaultLayout>
    </>
  )
}

export default IndexPage
