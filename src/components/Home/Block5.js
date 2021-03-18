import styled from '@emotion/styled'
import React from 'react'
import arabicIcon from '../../assets/images/home/block5/arabic.png'
import boardIcon from '../../assets/images/home/block5/board.png'
import booksSvg from '../../assets/images/home/block5/books_large.svg'
import quranIcon from '../../assets/images/home/block5/quran.png'
import salatIcon from '../../assets/images/home/block5/salat.png'
import { breakpoints, primaryColor, secondaryColor } from '../../utils/styles.js'

const Block5 = () => {
  return (
    <Container>
      <Title>L’Apprentissage de la </Title>
      <Title sub>langue Arabe</Title>
      <Text>L’arche de Noé enseigne l’arabe suivant la méthode des livres de la Madrassah de Cheikh Ayoub Leseur.</Text>
      <Text>Les supports utilisés sont les manuels de la Madrassah. Une de nos principales activités est l’enseignement de la langue arabe. Nous portons une attention particulière à cet héritage culturel et religieux car il est le vecteur d’une religion ainsi que de toute une civilisation qui existe encore aujourd’hui.</Text>
      <BooksImage src={booksSvg} />
      <SubTitle>Ce que me permet l’apprentissage <br /> de la langue Arabe</SubTitle>
      <IconsWrapper>
        <IconBox data-aos='fade-right' data-aos-delay='100' data-aos-duration='2000'>
          <Icon src={quranIcon} />
          <Separator />
          <IconText>POUVOIR LIRE LE <br /> SAINT CORAN</IconText>
        </IconBox>

        <IconBox data-aos='fade-left' data-aos-delay='200' data-aos-duration='2000'>
          <Icon src={arabicIcon} />
          <Separator primary='true' />
          <IconText primary>COMMUNIQUER AVEC DES <br /> MILLIONS DE PERSONNES</IconText>
        </IconBox>

        <IconBox data-aos='fade-right' data-aos-delay='300' data-aos-duration='2000'>
          <Icon src={salatIcon} style={{ height: '4em' }} />
          <Separator primary='true' />
          <IconText primary>UN TREMPLIN VERS L’ETUDE DE LA <br /> SCIENCE RELIGIEUSE.</IconText>
        </IconBox>

        <IconBox data-aos='fade-left' data-aos-delay='400' data-aos-duration='2000'>
          <Icon src={boardIcon} />
          <Separator />
          <IconText>ENSEIGNER AUX MEMBRES DE <br /> MA COMMUNAUTÉ</IconText>
        </IconBox>
      </IconsWrapper>
      <Button>Les formations de langue Arabe</Button>
    </Container>
  )
}

export default Block5

export const Container = styled.div`
    width: 45%;
    margin: 5em auto;
    text-align: center;

    @media (max-width: ${breakpoints.m}px) {
      width: 80%;
  }

  @media (max-width: ${breakpoints.s}px) {
   width: 90%;
   margin: 2em auto;
  }
`

export const Title = styled.p`
    font-size: 3em;
    font-family: 'Avenir Next Bold';
    margin: 0;
    margin-bottom: ${props => (props.sub ? '1em' : '0')};
    color: ${props => (!props.sub ? secondaryColor : primaryColor)};

    @media (max-width: ${breakpoints.s}px) {
      font-size: 2.4em;
  }
`

export const Text = styled.p`
    color: #195780;
`

export const BooksImage = styled.img`
    margin: 2.5em 0;
`

export const SubTitle = styled.p`
    font-family: 'Avenir Next Bold';
    color: ${secondaryColor};
    font-size: 2em;
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: ${breakpoints.s}px) {
      width: 100%;
      justify-content: center;
      align-items: center;

      & :nth-of-type(3) { 
        order: 4; 
        }
  }
`

export const IconBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 12em;

    @media (max-width: ${breakpoints.s}px) {
      width: 80%;
      justify-content: center;
      margin-bottom: 1em;
  }
`

export const Icon = styled.img`
    height: 5em;
`

export const Separator = styled.div`
    border-bottom: 2px solid ${props => (props.primary ? primaryColor : secondaryColor)};
    width: 8em;
    margin: 1em 0;
`

export const IconText = styled.p`
    margin: 0;
    color: ${props => (props.primary ? primaryColor : secondaryColor)};
    font-family: 'Avenir Next Bold Demi';

    @media (max-width: ${breakpoints.m}px) {
      font-size: 0.9em;
  }
`

export const Button = styled.button`
    margin-top: 4em;
    background-color: ${secondaryColor};
    border-radius: 30px;
    border: 2px solid transparent;
    padding: .2em 1.5em;
    color: white;
    font-family: 'Avenir Next Bold Demi';
    font-size: 1.1em;

    :hover {
        border: 2px solid ${secondaryColor};
        cursor: pointer;
        color: ${secondaryColor};
        background-color: transparent;
    }
`
