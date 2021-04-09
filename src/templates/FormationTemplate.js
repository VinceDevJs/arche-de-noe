import React from 'react'
import { graphql, Link } from 'gatsby'
import waves from './../assets/images/formation/waves_2.png'
import styled from '@emotion/styled'
import { breakpoints } from '../utils/styles'

import cerveauIcon from './../assets/images/formation/template/cerveau.svg'
import bookIcon from './../assets/images/formation/template/books.svg'
import cibleIcon from './../assets/images/formation/template/cible.svg'
import programmeIcon from './../assets/images/formation/template/programme.svg'
import calendarIcon from './../assets/images/formation/template/calendar.svg'
import levelIcon from './../assets/images/formation/level.svg'
import priceIcon from './../assets/images/formation/price.svg'
import tableIcon from './../assets/images/formation/table.svg'
import exempleImg from './../assets/images/formation/template/image-exemple.svg'
import facebookIcon from './../assets/images/formation/template/facebook.svg'
import twitterIcon from './../assets/images/formation/template/twitter.svg'

export const query = graphql`
  query($name: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "formation" }
          formation_name: { eq: $name }
        }
      }
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
            prerequis
            ouvrages
            objectifs
            programme
          }
        }
      }
    }
  }
`

const FormationTemplate = ({ data, path }) => {
  console.log(data, path)
  const {
    templateKey,
    thumbnail,
    price,
    sub_title,
    show_formation,
    level,
    formation_name,
    subjects,
    age,
    place_avaible,
    prerequis,
    ouvrages,
    objectifs,
    programme
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <Container>
      <img src={waves} style={{ width: '100%', marginBottom: '2.5em' }} alt='' />

      <TitleWrapper>
        <ReturnLink to='/formation'>Revenir à la page des formations</ReturnLink>
        <Title>{subjects.toUpperCase()} {sub_title}</Title>
      </TitleWrapper>

      <ContentWrapper>
        <ContainerLeft>
          <Img src={thumbnail} />
          <IconsWrapper>
            <IconBox>
              <Icon src={priceIcon} />
              <IconText>{price}€</IconText>
            </IconBox>

            <IconBox>
              <Icon src={levelIcon} />
              <IconText>{level}</IconText>
            </IconBox>

            <IconBox>
              <Icon src={tableIcon} />
              <IconText>{place_avaible} places</IconText>
            </IconBox>
          </IconsWrapper>
          <Link to='/emplois-du-temps' style={{ textDecoration: 'none' }}>
            <PlanningButton>
              <PlanningIcon src={calendarIcon} />
              <p>Emploi du temps</p>
            </PlanningButton>
          </Link>
        </ContainerLeft>

        <ContainerRight>
          <RightContentContainer>
            <RightContentWrapper>
              <ContentIcon alt='' src={cerveauIcon} />
              <ContentBox>
                <RightContentTitle>Prérequis</RightContentTitle>
                <RightContentText>{prerequis}</RightContentText>
              </ContentBox>
            </RightContentWrapper>

            <RightContentWrapper>
              <ContentIcon alt='' src={cibleIcon} />
              <ContentBox>
                <RightContentTitle>Objectif(s)</RightContentTitle>
                <RightContentText>{objectifs}</RightContentText>
              </ContentBox>
            </RightContentWrapper>

            <RightContentWrapper>
              <ContentIcon alt='' src={programmeIcon} />
              <ContentBox>
                <RightContentTitle>Programme</RightContentTitle>
                <RightContentText>{programme}</RightContentText>
              </ContentBox>
            </RightContentWrapper>

            <RightContentWrapper>
              <ContentIcon alt='' src={bookIcon} />
              <ContentBox>
                <RightContentTitle>Ouvrage(s) utilisé(s)</RightContentTitle>
                <RightContentText>{ouvrages}</RightContentText>
              </ContentBox>
            </RightContentWrapper>
          </RightContentContainer>

          <LinkContainer>
            <LinkButton to='/inscription' fontSize='true'>Connaitre les modalités <br /> d’inscription</LinkButton>
            <LinkButton to='/nos-ouvrages' color='true'>Nos ouvrages</LinkButton>
            <LinkButton to='/contact'>J’ai une question</LinkButton>

            <SocialText>J’informe une connaissance <br /> de la formation</SocialText>
            <SocialBox>
              <a href='https://fr-fr.facebook.com/institutarchedenoe'>
                <SocialIcon src={facebookIcon} />
              </a>
              <a href='https://twitter.com'>
                <SocialIcon src={twitterIcon} />
              </a>
            </SocialBox>
          </LinkContainer>

        </ContainerRight>
      </ContentWrapper>
      <img src={waves} style={{ width: '100%', marginTop: '3.5em', transform: 'rotate(180deg) scaleX(-1)' }} alt='' />
    </Container>
  )
}

export default FormationTemplate

export const Container = styled.div`
  
`

export const TitleWrapper = styled.div`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00A1C6;
  margin-left: 4em;

  @media (max-width: ${breakpoints.s}px) {
    margin-left: 0;
  }
`

export const Title = styled.p`
  font-size: 4em;
  margin: 0;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 3em;
    text-align: center;
    margin-top: 1em;
  }
`

export const ReturnLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  color: #00A1C6;
  
  :hover {
    color: #007bac;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-left: 1em;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8em;
  margin: 4em 0 3em;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 3em;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0 1em;
  }
`

export const ContainerLeft = styled.div`
  width: 50%;
  max-width: 30em;
  font-family: 'Avenir Next Bold', sans-serif;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 25em;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.s}px) {
    max-width: 45em;
    width: 90%;
  }
`

export const Img = styled.img`
 width: 100%;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  margin: 2em auto 0;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  height: 8em;
  color: #00A1C6;
`

export const IconText = styled.p`
  font-size: 1.1em;
`

export const Icon = styled.img``

export const PlanningButton = styled.div`
  border: 2px solid #007CAD;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 13em;
  margin: .5em auto 0;
  padding: 0 1.2em;
  p {
    color: #007CAD;
    font-size: 1.1em;
  }
`

export const PlanningIcon = styled.img`
  width: 3em;
`

export const ContainerRight = styled.div`
  width: 50%;

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    margin-top: 3em;
  }
`

export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d9f1f7;
  padding: 2.5em;
  border-radius: 35px;
  height: 44em;

  @media (max-width: ${breakpoints.l}px) {
    height: fit-content;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 1.5em;
  }
`

export const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const ContentIcon = styled.img`
  width: 5em;
  margin-right: 2em;

  @media (max-width: ${breakpoints.s}px) {
    width: 4em;
  }
`

export const ContentBox = styled.div``

export const RightContentTitle = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 2em;
  margin: 0;
  color: #00A1C6;
`

export const RightContentText = styled.p``

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;

  @media (max-width: ${breakpoints.m}px) {
    align-items: center;
  }
`

export const LinkButton = styled(Link)`
  font-family: 'Avenir Next Bold', sans-serif;
  background-color: ${props => props.color ? '#007CAD' : '#00A1C6'};
  color: white;
  margin-bottom: .5em;
  display: inline-block;
  width: 17em;
  border-radius: 30px;
  height: 2.7em;
  padding: 0.2em 0;
  text-align: center;
  line-height: ${props => props.fontSize ? '1.3' : '2.7'};
  text-decoration: none;
`

export const SocialText = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  color: #00A1C6;
  font-size: 1.7em;

  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
  }
`

export const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 7em;
`

export const SocialIcon = styled.img`
  width: 3em;
`
