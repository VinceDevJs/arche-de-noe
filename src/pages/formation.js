import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import Header from './../components/Formation/Header'
import SideBar from '../../src/components/Formation/SideBar'
import Main from '../../src/components/Formation/Main'
import MobileSort from '../components/Formation/MobileSort'
import { graphql, useStaticQuery, navigate } from 'gatsby'

import { breakpoints } from '../utils/styles'
// import waves from '../assets/images/formation/waves_2.png'
import DefaultLayout from '../layouts/default'

const Formation = () => {
  const data = useStaticQuery(graphql`
    {
      formations: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "formation" } } }
      ) {
        edges {
          node {
            frontmatter {
              templateKey
              thumbnail
              price
              sub_title
              discipline
              show_formation
              level
              formation_name
              subjects
              age
              place_avaible
            }
          }
        }
      },
       inscription: allMarkdownRemark(
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

  const formations = data.formations.edges
  const [discipline, setDiscipline] = useState('arabe')
  const [age, setAge] = useState()
  const [level, setLevel] = useState()
  const [formationFiltered, setFormationFiltered] = useState(formations)

  const inscriptionActivated = data.inscription.edges[0].node.frontmatter.activated

  useEffect(() => {
    if (inscriptionActivated === false) {
      navigate('/')
    }
  }, [inscriptionActivated])

  const handleFilterFormations = (type, name) => {
    if (type === 'discipline') {
      setDiscipline(name)
    } else if (type === 'age') {
      setAge(name)
    } else {
      setLevel(name)
    }
  }

  const handleReset = () => {
    setDiscipline('arabe')
    setLevel('')
    setAge('')
  }

  useEffect(() => {
    if (formations) {
      const result = formations
        .filter(({ node: el }) => el.frontmatter.discipline === discipline)
        .filter(({ node: el }) =>
          level ? el.frontmatter.level === level : el.frontmatter.level
        )
        .filter(({ node: el }) =>
          age ? el.frontmatter.age === age : el.frontmatter.age
        )

      setFormationFiltered(result)
    }
  }, [discipline, age, level])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Formation | Arche de noé</title>
      </Helmet>
      <Header />
      <MobileSort
        handleFilterFormations={handleFilterFormations}
        handleReset={handleReset}
        age={age}
        discipline={discipline}
        level={level}
      />
      <MainContainer>
        <SideBar
          handleFilterFormations={handleFilterFormations}
          age={age}
          discipline={discipline}
          level={level}
          handleReset={handleReset}
        />
        <Main allFormations={formationFiltered} />
      </MainContainer>
      {/*  <img src={waves} style={{ width: '100%', marginTop: '3.5em', transform: 'rotate(180deg) scaleX(-1)' }} alt='' /> */}
    </DefaultLayout>
  )
}

export default Formation

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10em auto;
  max-width: 80%;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 95%;
    margin: 8em auto;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 4em auto;
  }
`
