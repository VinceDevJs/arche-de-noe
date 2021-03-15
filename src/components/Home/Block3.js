import styled from '@emotion/styled'
import React from 'react'
import arabicIcon from '../../assets/images/home/block3/arabic.png'
import booksSvg from '../../assets/images/home/block3/books.svg'
import booksIcon from '../../assets/images/home/block3/books_lamp.png'
import hadithIcon from '../../assets/images/home/block3/hadith.png'
import handIcon from '../../assets/images/home/block3/hand.png'
import quranIcon from '../../assets/images/home/block3/quran.png'
import salatIcon from '../../assets/images/home/block3/salat.png'
import { primaryColor, secondaryColor } from '../../utils/styles.js'

const Block3 = () => {
  return (
    <Container>
      <ImageWrapper>
        <BooksImg src={booksSvg} />
      </ImageWrapper>
      <ContentWrapper>
        <TitleBox>
          <Title title>Nos Domaines</Title>
          <Title>d’enseignement</Title>
          <TextContent>L’Institut l’Arche de Noé a développé, au ﬁl des ans une réelle expertise dans différents domaines relatifes à la culture Islamique ainsi qu’à la langue Arabe en général.</TextContent>
        </TitleBox>

        <IconContainer>
          <IconWrapper left>
            <IconBox>
              <Icon src={quranIcon} alt='arche de noe' />
              <IconText>Coran</IconText>
            </IconBox>

            <Separator />

            <IconBox primary>
              <Icon src={hadithIcon} alt='arche de noe' />
              <IconText>Hadith</IconText>
            </IconBox>

            <Separator />

            <IconBox>
              <Icon src={salatIcon} alt='arche de noe' />
              <IconText>Sciences<br />Islamiques</IconText>
            </IconBox>
          </IconWrapper>

          <IconWrapper>
            <IconBox primary>
              <Icon src={arabicIcon} alt='arche de noe' />
              <IconText>Langue Arabe</IconText>
            </IconBox>

            <Separator />

            <IconBox>
              <Icon src={handIcon} alt='arche de noe' />
              <IconText>Grammaire Arabe</IconText>
            </IconBox>

            <Separator />

            <IconBox primary>
              <Icon src={booksIcon} alt='arche de noe' />
              <IconText>Conjugaison Arabe</IconText>
            </IconBox>
          </IconWrapper>
        </IconContainer>
        <Button>Accéder à nos formations</Button>
      </ContentWrapper>
    </Container>
  )
}

export default Block3

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2em 5em;
    justify-items: center;
`

export const ImageWrapper = styled.div`
    margin-right: 2em;
    width: 50%;
    max-width: 550px;
`

export const BooksImg = styled.img`
`

export const ContentWrapper = styled.div`
    width: 50%;
    padding-top: 4em;
`
export const TitleBox = styled.div`

`

export const Title = styled.p`
    font-size: 3.5em;
    margin: 0;
    font-weight: bold;
    color: ${props => (props.title ? primaryColor : secondaryColor)};
    font-family: 'Avenir Next Bold';
    line-height: 1.1;
`

export const TextContent = styled.p`
    display: block;
    width: 30em;
    color: #195780;
    margin-top: 2em;
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2em;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 27em;
  width: 50%;
`

export const Separator = styled.div`
  border-bottom: 3px solid ${secondaryColor};
  width: 3.5em;
`

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8em;
  color: ${props => (props.primary ? primaryColor : secondaryColor)};
`

export const Icon = styled.img`
  width: 4.5em;
  margin-right: 1.5em;
`

export const IconText = styled.p`
  font-family: 'Avenir Next Bold';
`

export const Button = styled.button`
    background-color: ${secondaryColor};
    color: white;
    border-radius: 30px;
    font-size: 1em;
    border: 2px solid transparent;
    padding: .2em 1.3em;
    font-weight: bold;
    margin: 2em auto 0 auto;
    display: block;

    :hover {
      border: 2px solid ${secondaryColor};
        cursor: pointer;
        color: ${secondaryColor};
        background-color: transparent;
    }
`
