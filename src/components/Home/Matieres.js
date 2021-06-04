import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles.js'
import arabicIcon from '../../assets/images/home/block3/arabic.png'
import booksIcon from '../../assets/images/home/block3/books_lamp.png'
import hadithIcon from '../../assets/images/home/block3/hadith.png'
import handIcon from '../../assets/images/home/block3/hand.png'
import quranIcon from '../../assets/images/home/block3/quran.png'
import salatIcon from '../../assets/images/home/block3/salat.png'

const Matieres = () => {
  return (
    <Container id='matieres'>
      <Title style={{ color: '#00A1C6' }}>Les matières enseignées</Title>
      <Title style={{ color: '#007CAD' }}>au sein de l’institut</Title>

      <ContentContainer>
        <ColBox>
          <ContentBox
            data-aos='fade-right'
            data-aos-easing='slide'
            data-aos-delay='250'
            data-aos-duration='1200'
          >
            <IconBox>
              <Icon style={{ width: '4em' }} src={quranIcon} />
            </IconBox>
            <Text color>Coran</Text>
          </ContentBox>
          <Separator />
          <ContentBox
            data-aos='fade-right'
            data-aos-easing='slide'
            data-aos-delay='250'
            data-aos-duration='1500'
          >
            <IconBox>
              <Icon style={{ width: '6.5em', marginTop: '1.5em' }} src={salatIcon} />
            </IconBox>
            <Text>Sciences Islamiques</Text>
          </ContentBox>
        </ColBox>

        <ColBox>
          <ContentBox
            data-aos='fade-right'
            data-aos-easing='slide'
            data-aos-delay='250'
            data-aos-duration='1200'
          >
            <IconBox>
              <Icon style={{ width: '5.5em' }} src={arabicIcon} />
            </IconBox>
            <Text>Langue Arabe</Text>
          </ContentBox>
          <Separator />
          <ContentBox
            data-aos='fade-right'
            data-aos-easing='slide'
            data-aos-delay='250'
            data-aos-duration='1500'
          >
            <IconBox>
              <Icon style={{ width: '5em' }} src={handIcon} />
            </IconBox>
            <Text color>Grammaire Arabe</Text>
          </ContentBox>
        </ColBox>

        <ColBox>
          <ContentBox
            data-aos='fade-right'
            data-aos-easing='slide'
            data-aos-delay='250'
            data-aos-duration='1200'
          >
            <IconBox>
              <Icon style={{ width: '5em' }} src={hadithIcon} />
            </IconBox>
            <Text color>Hadith</Text>
          </ContentBox>
          <Separator />
          <ContentBox
            data-aos='fade-right'
            data-aos-easing='slide'
            data-aos-delay='250'
            data-aos-duration='1500'
          >
            <IconBox>
              <Icon style={{ width: '5.5em' }} src={booksIcon} />
            </IconBox>
            <Text>Conjugaison Arabe</Text>
          </ContentBox>
        </ColBox>
      </ContentContainer>

      <Button to='/formation'>
        Accéder à nos formations
      </Button>
    </Container>
  )
}

export default Matieres

export const Container = styled.div`
  max-width: 38em;
  margin: 0 auto 4em auto;

  @media (max-width: ${breakpoints.m}px) {
    max-width: 35em;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-top: 3em;
  }
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold',serif ;
  margin: 0;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2em;
  }
`

export const ContentContainer = styled.div`
  margin: 4em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ColBox = styled.div`
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4em;
  }
`

export const ContentBox = styled.div`
  width: 10em;
`

export const IconBox = styled.div`
  height: 7em;
  width: 10em;
  text-align: center;

  @media (max-width: ${breakpoints.s}px) {
    max-width: 100%;
    min-height: 12em;
  }
`

export const Icon = styled.img`
  margin: 0 auto;

  @media (max-width: ${breakpoints.s}px) {
    min-width: 80%;
  }
`

export const Text = styled.p`
  text-align: center;
  margin: .5em 0;
  font-family: 'Avenir Next Bold',serif ;
  color: ${props => props.color ? '#007CAD' : '#00A1C6'}
`

export const Separator = styled.div`
  width: 3em;
  border-top: 3px solid #007CAD;
  margin: 2.5em auto;

  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`

export const Button = styled(Link)`
  margin: 0 auto;
  display: block;
  padding: 0.5em 2em;
  font-size: 1.1em;
  border: 1.5px solid #00A1C6;
  border-radius: 30px;
  font-family: 'Avenir Next Bold',serif ;
  color: #00A1C6;
  width: 13em;
  text-align: center;
  text-decoration: none;

  :hover {
    background-color: #00A1C6;
    color: white;
  }
`
