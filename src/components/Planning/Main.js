import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PlanningSort from './PlanningSort'
import { breakpoints } from '../../utils/styles'

import leftArow from '../../assets/icons/left_arrow.png'
import rightArow from '../../assets/icons/right_arrow.png'
import lampIcon from '../../assets/images/planning/lamp-icon.png'
import clockIcon from '../../assets/images/planning/clock-icon.png'
import roomIcon from '../../assets/images/planning/room-icon.png'

const Main = () => {
  const planningData = useStaticQuery(graphql`
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
                  curse_link
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
                                curse_link
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
  const [dayListToShow, setDayListToShow] = useState([])
  const [daySelected, setDaySelected] = useState(dayListToShow[0])
  const [formationToShow, setFormationToShow] = useState()

  const [formationData, setFormationData] = useState()

  const [matieresListData, setMatieresListData] = useState()

  useEffect(() => {
    // console.log(planningData)
    const allChildrenData = planningData.enfant.edges
    const allAdulteData = planningData.adulte.edges

    const childrenMatieresList = []
    const childrenFormationData = []

    allChildrenData.map(({ node: matiere }) => {
      const { frontmatter } = matiere
      const dayPerFormation = frontmatter.day.map(day => day.daySelected.toLowerCase())
      childrenFormationData.push({
        daysPerFormation: dayPerFormation,
        public: frontmatter.templateKey,
        title: frontmatter.title,
        formationData: frontmatter.day
      })
      childrenMatieresList.push(frontmatter.title.toLowerCase())
    })

    const adulteMatieresList = []
    const adulteFormationData = []

    allAdulteData.map(({ node: matiere }) => {
      const { frontmatter } = matiere
      const dayPerFormation = frontmatter.day.map(day => day.daySelected.toLowerCase())
      adulteFormationData.push({
        daysPerFormation: dayPerFormation,
        public: frontmatter.templateKey,
        title: frontmatter.title,
        formationData: frontmatter.day
      })
      adulteMatieresList.push(frontmatter.title.toLowerCase())
    })

    setFormationData({
      enfant: childrenFormationData,
      adulte: adulteFormationData
    })

    setMatieresListData({
      adulte: adulteMatieresList,
      enfant: childrenMatieresList
    })
  }, [])

  // console.log(formationData)

  const handleSetDayList = () => {
    const dayList = formationData[publicSelected].find(day => day.title.toLowerCase() === formationSelected)
    if (dayList) {
      setDayListToShow(dayList.daysPerFormation)
      setDaySelected(dayList.daysPerFormation[0])
      const getFormationsToShow = dayList.formationData.find(el => el.daySelected === dayList.daysPerFormation[0])
      setFormationToShow(getFormationsToShow.cours)
      console.log('daylist', formationSelected, dayList)
    }
  }

  const handleSetFormationsToShow = () => {
    console.log(formationSelectorList)
    if (formationSelected) {
      const dayList = formationData[publicSelected].find(day => day.title.toLowerCase() === formationSelected)
      if (dayList) {
        const getFormationsToShow = dayList.formationData.find(el => el.daySelected === daySelected)
        console.log('day', getFormationsToShow)
        if (getFormationsToShow) {
          setFormationToShow(getFormationsToShow.cours)
        }
      }
    } else {
      setFormationSelected(formationSelectorList.sort()[0])
    }
  }

  useEffect(() => {
    if (matieresListData) {
      handleSetDayList()
    }
  }, [formationSelected])

  useEffect(() => {
    // console.log(matieresListData)
    if (matieresListData) {
      setFormationSelectorList(matieresListData[publicSelected])
      // console.log(formationSelectorList)
      if (formationSelectorList) {
        setFormationSelected(formationSelectorList[0])
        handleSetDayList()
      }
    }
  }, [publicSelected, matieresListData])

  useEffect(() => {
    if (matieresListData) {
      handleSetFormationsToShow()
    }
  }, [daySelected])

  // console.log(formationData)

  // console.log(planningData)
  // console.log(publicSelected)
  // console.log(formationToShow)
  // console.log(formationSelectorList)
  // console.log(dayListToShow)

  const handleSetNextDay = () => {
    if (daySelected === dayListToShow[dayListToShow.length - 1]) return

    const dayIndex = dayListToShow.indexOf(daySelected)

    setDaySelected(dayListToShow[dayIndex + 1])
  }

  const handleSetPreviousDay = () => {
    if (daySelected === dayListToShow[0]) return

    const dayIndex = dayListToShow.indexOf(daySelected)

    setDaySelected(dayListToShow[dayIndex - 1])
  }

  return (
    <Container>
      <DayContainer id='main_time'>
        <ArrowIcon onClick={handleSetPreviousDay} src={leftArow} />
        <DayText>{daySelected}</DayText>
        <ArrowIcon onClick={handleSetNextDay} src={rightArow} />
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

        {
          formationToShow && formationToShow.map((cour, index) => {
            return (
              <PlanningFormationBox
                color={index % 2}
                key={`${cour.daySelected}-${cour.curse_name}-${cour.level}`}
                data-aos='fade-left'
                data-aos-duration='2000'
              >
                <ContentBox>
                  <Icon src={lampIcon} />
                  <InfoTitle size={cour.curse_name.length > 10 || cour.level.length > 10}>{cour.curse_name} <br /> {cour.level}</InfoTitle>
                  <InfoAge>{cour.title ? cour.title : ''}</InfoAge>
                </ContentBox>

                <Separator />

                <ContentBox center>
                  <Icon src={clockIcon} />
                  <InfoTime>{cour.curse_hour}</InfoTime>
                  <FornmationLinkButton to={cour.curse_link ? `/formation/${cour.curse_link}` : '/formation'}>La formation</FornmationLinkButton>
                </ContentBox>

                <Separator />

                <ContentBox>
                  <Icon src={roomIcon} />
                  <RoomText>{cour.room}</RoomText>
                </ContentBox>
              </PlanningFormationBox>
            )
          })
        }

      </PlanningFormationWrapper>
    </Container>
  )
}

export default Main

export const Container = styled.div`
  max-width: 55em;
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    max-width: 95%;
  }
`

export const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 35em;
  margin: 5em auto;

  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
    margin: 7em auto 5em auto;
  }
`

export const DayText = styled.p`
  font-size: 3.3em;
  margin: 0;
  font-family: 'Avenir Next Bold', sans-serif;
  color: #35ACD0;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2.4em;
  }
`

export const ArrowIcon = styled.img`
  width: auto;
  height: 3.4em;
  cursor: pointer;
`

export const PlanningFormationWrapper = styled.div`
  margin-bottom: 10em;
`

export const PlanningFormationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15em;
  background-color: ${props => !props.color ? '#35ACD0' : '#3285a0'};
  border-radius: 30px;
  color: white;
  margin-bottom: 2em;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding: 2em 0;
  }
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  font-family: 'Avenir Next Bold', sans-serif;
  width: ${props => props.center ? '' : '10em'};

  @media (max-width: ${breakpoints.m}px) {
    width: ${props => props.center ? '' : '9em'};
  }

  @media (max-width: ${breakpoints.s}px) {
  margin: 0.5em 0;
  }
`

export const Separator = styled.div`
  border-right: 2px solid white;
  height: 8em;
  margin: 0 3.5em;

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`

export const Icon = styled.img`
  max-width: 3.2em;

  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`

export const InfoTitle = styled.p`
  font-size: ${props => props.size ? '1.6em' : '2.1em'};
  margin: 0.2em 0;
  text-align: center;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2em;
  }
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
  border-radius: 30px;
  padding: 0.2em 3.3em ;
  text-align: center;

  :hover {
    background-color: white;
    color: #35ACD0;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0.6em 4em;
    font-size: 1.3em;
    margin-top: 0.4em;
  }
`

export const RoomText = styled(InfoTime)`
  margin-top: 0.5em;
`
