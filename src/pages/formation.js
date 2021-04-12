import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import Header from './../components/Formation/Header'
import CursesSubject from './../components/Formation/CursesSubject'
import SideBar from '../../src/components/Formation/SideBar'
import Main from '../../src/components/Formation/Main'
import MobileSort from '../components/Formation/MobileSort'
import { graphql, useStaticQuery } from 'gatsby'

import { breakpoints } from '../utils/styles'
import waves from '../assets/images/formation/waves_2.png'

const Formation = () => {
  const data = useStaticQuery(graphql`
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
  const formations = data.allMarkdownRemark.edges
  console.log(formations)
  return (
    <>
      <Helmet>
        <title>Formation | Arche de noé</title>
      </Helmet>
      <Header />
      <CursesSubject />
      <MobileSort />
      <MainContainer>
        <SideBar />
        <Main />
      </MainContainer>
      <img src={waves} style={{ width: '100%', marginTop: '3.5em', transform: 'rotate(180deg) scaleX(-1)' }} alt='' />
    </>
  )
}

export default Formation

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9em 0;

  @media (max-width: ${breakpoints.m}px) {
    margin: 4em 0;
  }
`
