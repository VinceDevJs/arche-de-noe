import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import Header from './../components/NosOuvrages/Header'
import SideBar from '../../src/components/NosOuvrages/SideBar'
import Main from '../../src/components/NosOuvrages/Main'
import MobileSort from '../components/NosOuvrages/MobileSort'
import { graphql, useStaticQuery } from 'gatsby'

import { breakpoints } from '../utils/styles'
import waves from '../assets/images/formation/waves_2.png'
import DefaultLayout from '../layouts/default'

const NosOuvrages = () => {
  const data = useStaticQuery(graphql`
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
              productPrice
              name
              show
              level
              age
              description
              pointsForts
              avaible
              title
              subTitle
            }
          }
        }
      }
    }
  `)
  const ouvrages = data.allMarkdownRemark.edges
  const [age, setAge] = useState()
  const [level, setLevel] = useState()
  const [ouvragesFiltered, setOuvragesFiltered] = useState(ouvrages)

  const handleFilterOuvrages = (type, name) => {
    // console.log(type, name)
    if (type === 'age') {
      setAge(name)
    } else {
      setLevel(name)
    }
  }

  const handleReset = () => {
    setLevel('')
    setAge('')
  }

  useEffect(() => {
    if (ouvrages) {
      const result = ouvrages
        .filter(({ node: el }) =>
          level ? el.frontmatter.level === level : el.frontmatter.level
        )
        .filter(({ node: el }) =>
          age ? el.frontmatter.age === age : el.frontmatter.age
        )

      setOuvragesFiltered(result)
    }
  }, [age, level])

  return (
    <DefaultLayout>
      <Helmet>
        <title>Formation | Arche de noé</title>
      </Helmet>
      <Header />
      <MobileSort
        handleFilterOuvrages={handleFilterOuvrages}
        handleReset={handleReset}
        age={age}
        level={level}
      />
      <MainContainer>
        <SideBar
          handleFilterOuvrages={handleFilterOuvrages}
          age={age}
          level={level}
          handleReset={handleReset}
        />
        <Main age={age} level={level} allOuvrages={ouvragesFiltered} />
      </MainContainer>
      <img
        src={waves}
        style={{
          width: '100%',
          marginTop: '3.5em',
          transform: 'rotate(180deg) scaleX(-1)'
        }}
        alt=''
      />
    </DefaultLayout>
  )
}

export default NosOuvrages

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 14em auto;
  max-width: 80%;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 95%;
    margin: 14em auto;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 4em auto;
  }
`
