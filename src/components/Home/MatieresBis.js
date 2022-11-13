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

const Matieres = ({ inscriptionActivated }) => {
  return (
    <Container id="matieres">
      <Title style={{ color: '#049fc5' }}>Les matières enseignées</Title>
      <Title style={{ color: '#007CAD', marginBottom: '1.5em' }}>au sein de l’institut</Title>

      <ContentBox
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="2000"
      >
        <ContentTitle>
          La langue <br /> arabe
        </ContentTitle>

        <Separator />

        <ContentIconContainer>
          <IconBox>
            <ContentIcon>
              <img src={arabicIcon} alt="" />
            </ContentIcon>
            <ContentIconText> Alphabétisation </ContentIconText>
          </IconBox>

          <IconBox>
            <ContentIcon>
              <img src={handIcon} alt="" />
            </ContentIcon>
            <ContentIconText> Grammaire </ContentIconText>
          </IconBox>

          <IconBox>
            <ContentIcon>
              <img src={booksIcon} alt="" />
            </ContentIcon>
            <ContentIconText> Conjugaison </ContentIconText>
          </IconBox>
        </ContentIconContainer>

      </ContentBox>

      <ContentBox
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="2000"
        dark="true"
      >
        <ContentTitle dark="true">
          Les sciences <br /> Islamiques
        </ContentTitle>

        <Separator />

        <ContentIconContainer>
          <IconBox>
            <ContentIcon>
              <img style={{ height: '4.7em', width: '4em' }} src={quranIcon} alt="" />
            </ContentIcon>
            <ContentIconText dark="true"> Coran </ContentIconText>
          </IconBox>

          <IconBox>
            <ContentIcon>
              <img style={{ width: '6em' }} src={salatIcon} alt="" />
            </ContentIcon>
            <ContentIconText dark="true"> Jurisprudence <br /> (Fiqh) </ContentIconText>
          </IconBox>

          <IconBox>
            <ContentIcon>
              <img style={{ width: '4.3em' }} src={hadithIcon} alt="" />
            </ContentIcon>
            <ContentIconText dark="true"> Sciences du <br /> hadith </ContentIconText>
          </IconBox>
        </ContentIconContainer>

      </ContentBox>

      {inscriptionActivated && (
        <Button to="/formation">
          Nos formations
        </Button>
      )}
    </Container>
  )
}

export default Matieres

export const Container = styled.div`
  margin: 0 auto 8em auto;

  @media (max-width: ${breakpoints.m}px) {
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-top: 3em;
  }
`

export const Title = styled.p`
  display: block;
  font-family: 'Avenir Next Bold',serif;
  max-width: 38em;
  margin: 0;
  padding: 0 .5em;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.8em;
  }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    max-width: 1100px;
    margin: 2em auto;
    padding: 2em 3em;
    border: 2px solid ${props => (props.dark ? 'transparent' : '#049fc5')};
    background-color: ${props => (props.dark ? '#ebf5fa' : 'transparent')};
    border-radius: 20px;

    @media (max-width: ${breakpoints.l}px) {
    width: 85%;
    padding: 1.4em 2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    padding: 1.4em 1em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 80%;
    flex-direction: column;
    text-align: center;
  }
`

const ContentTitle = styled.p`
    display: block;
    width: 8em;
    font-size: 1.6em;
    color: ${props => (props.dark ? '#047bac' : '#049fc5')};
    font-weight: bold;
    font-family: 'Avenir Next Bold', serif;

    @media (max-width: ${breakpoints.m}px) {
    width: 8em;
    font-size: 1.4em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.8em;
    margin: 0;
  }
`

const Separator = styled.div`
    width: 1.5px;
    background-color: #049fc5;
    height: 7em;
    margin: 0 2em;

    @media (max-width: ${breakpoints.s}px) {
    width: 5em;
    height: 1.5px;
    margin: 2em 0;
  }
`

const ContentIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5em;
    width: 70%;

    @media (max-width: ${breakpoints.m}px) {
    width: 80%;
    padding: 0 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    width: 100%;
  }
`

const IconBox = styled.div`
    width: 8em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

const ContentIcon = styled.div`
    height: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    img {
        width: 4.5em;
    }

    @media (max-width: ${breakpoints.s}px) {
        height: 6em;
        margin: 1em 0;

    img {
        width: 6em!important;
        height: auto!important;
    }
  }
`

const ContentIconText = styled.p`
    text-align: center;
    height: 1.3em;
    color: ${props => (props.dark ? '#047bac' : '#049fc5')};
    font-weight: bold;
    font-size: 1.1em;
    font-family: 'Avenir Next Bold', serif;

    @media (max-width: ${breakpoints.s}px) {
    font-size: 1.5em;
    height: 2em;
    width: fit-content;
  }
`

export const Button = styled(Link)`
  margin: 4em auto 0;
  display: block;
  padding: 0.5em 1.3em;
  font-size: 1.1em;
  border: 1.5px solid #049fc5;
  background-color: #049fc5;
  border-radius: 30px;
  font-family: 'Avenir Next Bold',serif ;
  color: #fff;
  width: 13em;
  text-align: center;
  text-decoration: none;

  :hover {
      background-color: #fff;    
    color: #049fc5;
  }
`
