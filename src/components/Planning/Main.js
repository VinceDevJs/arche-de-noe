import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PlanningSort from './PlanningSort'

import leftArow from '../../assets/icons/left_arrow.png'
import rightArow from '../../assets/icons/right_arrow.png'
import lampIcon from '../../assets/images/planning/lamp-icon.png'
import clockIcon from '../../assets/images/planning/clock-icon.png'
import roomIcon from '../../assets/images/planning/room-icon.png'

const Main = () => {
  const childrenPlanning = useStaticQuery(graphql`
    {
      enfant: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "enfant"}}}) {
        edges {
          node {
            frontmatter {
              templateKey
              title
              day {
                daySelected
                show
                cours {
                  curse_hour
                  curse_name
                  level
                  room
                  title
                }
              }
            }
          }
        }
      },
        adulte: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "adulte"}}}) {
            edges {
                node {
                    frontmatter {
                        templateKey
                        title
                        day {
                            daySelected
                            show
                            cours {
                                curse_hour
                                curse_name
                                level
                                room
                                title
                            }
                        }
                    }
                }
            }
        }
    }
  `)

  const [formationSelectorList, setFormationSelectorList] = useState([])
  const [publicSelected, setPublicSelected] = useState('enfant')
  const [formationSelected, setFormationSelected] = useState('arabe')
  const [daySelected, setDaySelected] = useState('samedi')
  const [dayList, setDayList] = useState([])
  const [formationToShow, setFormationToShow] = useState([])

  useEffect(() => {
    if (childrenPlanning) {
      if (publicSelected === 'enfant') {
        console.log(childrenPlanning.enfant.edges)
        const matieresList = []
        childrenPlanning.enfant.edges.forEach(({ node: matiere }) => matieresList.push(matiere.frontmatter.title.toLowerCase()))
        const formationFilteredByMatiere = childrenPlanning.enfant.edges.find(({ node: formation }) => formation.frontmatter.title.toLowerCase() === formationSelected)
        const formationFilteredByDay = formationFilteredByMatiere.node.frontmatter.day.find(formation => formation.daySelected === daySelected)
        setFormationSelectorList(matieresList)
        setFormationToShow(formationFilteredByDay)
      } else {
        const matieresList = []
        childrenPlanning.adulte.edges.forEach(({ node: matiere }) => matieresList.push(matiere.frontmatter.title.toLowerCase()))
        const formationFilteredByMatiere = childrenPlanning.adulte.edges.find(({ node: formation }) => formation.frontmatter.title.toLowerCase() === formationSelected)
        const formationFilteredByDay = formationFilteredByMatiere.node.frontmatter.day.find(formation => formation.daySelected === daySelected)
        setFormationSelectorList(matieresList)
        setFormationToShow(formationFilteredByDay)
      }
    }
  }, [daySelected, publicSelected, formationSelected])

  console.log(childrenPlanning)
  console.log(publicSelected)
  console.log(formationToShow)
  console.log(formationSelectorList)

  return (
    <Container>
      <DayContainer>
        <ArrowIcon src={leftArow} />
        <DayText>Mercredi</DayText>
        <ArrowIcon src={rightArow} />
      </DayContainer>

      <PlanningSort
        setPublicSelected={setPublicSelected}
        setFormationSelected={setFormationSelected}
        setFormationSelectorList={setFormationSelectorList}
        formationSelected={formationSelected}
        formationSelectorList={formationSelectorList}
        publicSelected={publicSelected}
      />

      <PlanningFormationWrapper>

        <PlanningFormationBox>
          <ContentBox>
            <Icon src={lampIcon} />
            <InfoTitle>Enfant <br /> Niv.1A</InfoTitle>
            <InfoAge>7-8 ans</InfoAge>
          </ContentBox>

          <Separator />

          <ContentBox>
            <Icon src={clockIcon} />
            <InfoTime>15:00 - 18:00</InfoTime>
            <FornmationLinkButton to='/'>La formation</FornmationLinkButton>
          </ContentBox>

          <Separator />

          <ContentBox>
            <Icon src={roomIcon} />
            <RoomText>Salle 1</RoomText>
          </ContentBox>
        </PlanningFormationBox>

      </PlanningFormationWrapper>
    </Container>
  )
}

export default Main

export const Container = styled.div`
  max-width: 55em;
  margin: 0 auto;
`

export const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 35em;
  margin: 5em auto;
`

export const DayText = styled.p`
  font-size: 3.3em;
  margin: 0;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #35ACD0;
`

export const ArrowIcon = styled.img`
  width: auto;
  height: 3.4em;
  cursor: pointer;
`

export const PlanningFormationWrapper = styled.div``

export const PlanningFormationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15em;
  background-color: #35ACD0;
  border-radius: 30px;
  color: white;
  margin-bottom: 2em;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  font-family: 'Avenir Next Bold', sans-serif;
`

export const Separator = styled.div`
  border-right: 2px solid white;
  height: 8em;
  margin: 0 3.5em;
`

export const Icon = styled.img`
  max-width: 3.2em;
`

export const InfoTitle = styled.p`
  font-size: 2.1em;
  margin: 0.2em 0;
`

export const InfoAge = styled.p`
  margin: 0;
`

export const InfoTime = styled.p`
  font-size: 1.5em;
  margin: 0.5em 0 0.2em;
`

export const FornmationLinkButton = styled(Link)`
  border: 1px solid white;
  text-decoration: none;
  color: white;
  border-radius: 20px;
  padding: 0.2em 3.3em ;

  :hover {
    background-color: white;
    color: #35ACD0;
  }
`

export const RoomText = styled(InfoTime)`
  margin-top: 0.5em;
`
