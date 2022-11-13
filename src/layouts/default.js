import React from 'react'
import Footer from '../components/GlobalComponents/Footer/Footer'
import { GlobalStyle } from '../utils/styles'
import Header from '../components/GlobalComponents/Header'
import BurgerMenu from '../components/GlobalComponents/Header/BurgerMenu'
import PushUp from '../components/pushUp'
import Block6Bis from '../components/Home/Block6Bis'
import { graphql, useStaticQuery } from 'gatsby'
// import PopUp from '../components/GlobalComponents/PopUp'

const DefaultLayout = ({ children }) => {
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
      <GlobalStyle />
      <div id="app">
        {/* <PopUp /> */}
        <BurgerMenu inscriptionActivated={inscriptionActivated} />
        <Header inscriptionActivated={inscriptionActivated} />
        {children}
        <PushUp />
        <Block6Bis />
        <Footer inscriptionActivated={inscriptionActivated} />
      </div>
    </>
  )
}

export default DefaultLayout
