import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { breakpoints } from '../../utils/styles'
import { convertToSlug } from './../../utils/functions'

import books from '../../assets/images/formation/books.svg'
import twitter from '../../assets/images/formation/twitter.svg'
import facebook from '../../assets/images/formation/facebook.svg'
import table from '../../assets/images/formation/table.svg'
import level from '../../assets/images/formation/level.svg'
import price from '../../assets/images/formation/price.svg'

const Main = ({ allFormations }) => {
  console.log(allFormations)
  return (
    <Container>
      {allFormations &&
        allFormations.map(({ node: data }, index) => {
          const formation = data.frontmatter
          const formationSlug = convertToSlug(formation.formation_name)
          const slideTime = `${index}00`
          return (
            <FormationBox
              key={formation.formation_name}
              data-aos='fade-left'
              data-aos-duration='2000'
              data-aos-delay={slideTime}
            >
              <ImgWrapper>
                <FormationImg src={books} alt='formation book' />
                <FormationTitle small={formation.subjects.length > 7}>
                  {formation.subjects} <br />
                  <span>
                    {formation.sub_title !== 'vide' ? formation.sub_title : ''}
                  </span>
                </FormationTitle>
              </ImgWrapper>
              <IconsWrapper>
                <IconBox>
                  <Icon src={price} />
                  <IconText>{formation.price}€</IconText>
                </IconBox>
                <IconBox>
                  <Icon src={level} />
                  <IconText>{formation.level}</IconText>
                </IconBox>
                <IconBox>
                  <Icon src={table} />
                  <IconText>{formation.place_avaible} Places</IconText>
                </IconBox>
              </IconsWrapper>
              <Button to={`/formation/${formationSlug}`}>En savoir plus</Button>
              <SocialBox>
                <SocialIcon src={facebook} />
                <SocialIcon src={twitter} />
              </SocialBox>
            </FormationBox>
          )
        })}
      {!allFormations.length && (
        <p
          style={{
            fontSize: '2em',
            margin: '0 auto',
            color: '#00a1c6',
            fontFamily: 'Avenir Next Bold, sans-serif',
            textAlign: 'center'
          }}
        >
          Aucune formation disponible pour cette sélection
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
  width: 80%;

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
  width: 40%;
  max-width: 19em;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FormationImg = styled.img`
  width: 12em;

  @media (max-width: ${breakpoints.m}px) {
    width: 10em;
  }
`

export const FormationTitle = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: ${props => (props.small ? '1.8em' : '2.2em')};
  margin-left: -0.8em;
  color: #00a1c6;

  span {
    -webkit-text-stroke: 2px #00a1c6;
    color: white;
    font-size: 40px;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
  }
`

export const IconBox = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5em 0;
`

export const Icon = styled.img`
  width: 3em;
`

export const IconText = styled.p`
  color: #007cad;
  font-size: 0.9em;
  font-family: 'Avenir Next Bold', sans-serif;
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
