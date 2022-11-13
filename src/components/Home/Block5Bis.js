import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'

import arabicIcon from '../../assets/images/home/block5/arabic.png'
import boardIcon from '../../assets/images/home/block5/board.png'
import quranIcon from '../../assets/images/home/block5/quran.png'
import salatIcon from '../../assets/images/home/block5/salat.png'
import { breakpoints } from '../../utils/styles.js'

const Block5Bis = ({ inscriptionActivated }) => {
  return (
    <Container>
      <LeftBlock
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <LeftBlockTitle>
          L’Apprentissage de la <br />
          <span style={{ color: '#04b8d7' }}>langue Arabe</span>
        </LeftBlockTitle>

        <LeftBlockText>
          La principale activité de l’Institut l’Arche de Noé est l’enseignement
          de la langue arabe.
        </LeftBlockText>

        <LeftBlockText>
          Nous portons une attention particulière à cet héritage culturel et
          religieux car il est vecteur d’une religion ainsi que de toute une
          civilisation qui existe encore aujourd’hui.
        </LeftBlockText>

        <LeftBlockText>
          Nous enseignons l’Arabe suivant la méthode de la Madrassah de Cheikh
          Mohammad Ayoub Leseur (Qu’Allah le préserve)
        </LeftBlockText>

        <LeftBlockText>
          Les supports pédagogiques utilisés ont été adaptés afin d’être plus
          attrayants et répondre aux besoins et aux attentes des élèves.
        </LeftBlockText>

        {inscriptionActivated && (
          <LeftBlockButton to="/formation">Nos Formations</LeftBlockButton>
        )}

      </LeftBlock>
      <RightBlock
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        <RightBlockTitle>
          Ce que me permet l’apprentissage de la langue Arabe
        </RightBlockTitle>
        <IconsContainer>
          <IconBox>
            <Icon>
              <img
                style={{ width: '3.8em', height: '4.8em' }}
                src={quranIcon}
                alt=""
              />
            </Icon>
            <IconText>
              Pouvoir lire le <br /> saint coran
            </IconText>
          </IconBox>

          <IconBox>
            <Icon>
              <img src={arabicIcon} alt="" />
            </Icon>
            <IconText>
              Communiquer avec des <br /> millions de personnes
            </IconText>
          </IconBox>

          <IconBox>
            <Icon>
              <img style={{ width: '5.5em' }} src={salatIcon} alt="" />
            </Icon>
            <IconText>
              Un tremplin vers <br /> l’étude de la science <br /> religieuse.
            </IconText>
          </IconBox>

          <IconBox>
            <Icon>
              <img src={boardIcon} alt="" />
            </Icon>
            <IconText>
              Enseigner aux <br /> membres de ma <br /> communauté
            </IconText>
          </IconBox>
        </IconsContainer>
      </RightBlock>
    </Container>
  )
}

export default Block5Bis

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 4em;
  margin: 5em auto 0 auto;
  font-family: 'Avenir Next Bold', sans-serif;
  max-width: 1200px;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0 3em;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 45%;
  text-align: right;

  @media (max-width: ${breakpoints.m}px) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

export const LeftBlockTitle = styled.p`
  color: #047bac;
  font-size: 2.2em;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.8em;
  }
`

export const LeftBlockText = styled.p`
  margin: 0.5em 0;
  color: #047bac;
  font-family: 'Avenir Next', sans-serif;
`

export const LeftBlockButton = styled(Link)`
  color: #fff;
  font-size: 1.1em;
  text-decoration: none;
  background-color: #04a0c5;
  border: 2px solid transparent;
  margin: 2em 0;
  padding: 0.3em 2.3em;
  border-radius: 33px;

  :hover {
    background-color: #fff;
    border: 2px solid #04a0c5;
    color: #04a0c5;
  }
`

export const RightBlock = styled.div`
  width: 45%;
  padding: 2em 1em;
  background-color: #ebf5fa;
  border-radius: 20px;

  @media (max-width: ${breakpoints.m}px) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

export const RightBlockTitle = styled.p`
  display: block;
  padding: 0 2em;
  text-align: center;
  color: #047bac;
  margin-bottom: 2.5em;
  font-size: 1.1em;

  @media (max-width: ${breakpoints.m}px) {
    padding: 0 1em;
    font-size: 1em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.1em;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const IconBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;

  img {
    width: 4.5em;
  }
`

export const IconText = styled.p`
  display: block;
  padding: 0 1em;
  font-size: 0.8em;
  text-align: center;
  color: #047bac;

  @media (max-width: ${breakpoints.m}px) {
    font-size: 0.7em;
  }

  @media (max-width: ${breakpoints.s}px) {
    font-size: 0.8em;
  }
`
