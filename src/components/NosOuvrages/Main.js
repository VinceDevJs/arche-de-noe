import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints } from '../../utils/styles'
import { convertToSlug } from './../../utils/functions'

import twitter from '../../assets/images/formation/twitter.svg'
import facebook from '../../assets/images/formation/facebook.svg'

const Main = ({ allOuvrages }) => {
  console.log(allOuvrages)
  return (
    <Container>
      {allOuvrages &&
        allOuvrages.map(({ node: data }, index) => {
          const ouvrage = data.frontmatter
          const ouvrageSlug = convertToSlug(ouvrage.name)
          const slideTime = `${index}00`
          return (
            <FormationBox
              key={ouvrage.name}
              data-aos='fade-left'
              data-aos-duration='2000'
              data-aos-delay={slideTime}
            >
              <ImgWrapper>
                <FormationImg
                  src={ouvrage.images[0].image}
                  alt='formation book'
                />
                <FormationTitle>
                  {ouvrage.title} <br />
                  <span>
                    {ouvrage.subTitle.length !== 0 ? ouvrage.subTitle : ''}
                  </span>
                </FormationTitle>
                <Price>{ouvrage.productPrice} €</Price>
              </ImgWrapper>
              <Button to={`/nos-ouvrages/${ouvrageSlug}`}>
                En savoir plus
              </Button>
              <SocialBox>
                <a
                  target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//institutarchedenoe.fr
/nos-ouvrages/${ouvrageSlug}`}
                >
                  <SocialIcon src={facebook} />
                </a>
                <a target='_blank' href={`https://twitter.com/intent/tweet?url=https://institutarchedenoe.fr/nos-ouvrages/${ouvrageSlug}&text=`}>
                  <SocialIcon src={twitter} />
                </a>
              </SocialBox>
            </FormationBox>
          )
        })}
      {!allOuvrages.length && (
        <p
          style={{
            fontSize: '2em',
            margin: '0 auto',
            color: '#00a1c6',
            fontFamily: 'Avenir Next Bold, sans-serif',
            textAlign: 'center'
          }}
        >
          Aucun ouvrage disponible pour cette sélection
        </p>
      )}
    </Container>
  )
}

export default Main

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 4em;
  width: 90%;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 1em;
    width: 100%;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0 auto;
  }
`

export const FormationBox = styled.div`
  width: 50%;
  max-width: 22em;
  margin: 0 0 4em;

  @media (max-width: ${breakpoints.m}px) {
    width: 47%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const FormationImg = styled.img`
  width: 14em;

  @media (max-width: ${breakpoints.m}px) {
    width: 14em;
  }
`

export const FormationTitle = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.7em;
  color: #00a1c6;
  margin: 0.8em 0;

  span {
    font-family: 'Avenir Next', sans-serif;
    font-size: 22px;
    text-transform: uppercase;
  }
`

export const Price = styled.p`
  margin: 0 0 1em;
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.4em;
`

export const Button = styled(Link)`
  display: block;
  text-align: center;
  width: 8em;
  margin: 0 auto;
  color: white;
  background-color: #00a1c6;
  border-radius: 50px;
  padding: 0.4em 1.5em;
  font-size: 1.3em;
  font-family: 'Avenir Next Bold', sans-serif;
  text-decoration: none;
`

export const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6em;
  margin: 1em auto;
`

export const SocialIcon = styled.img``
