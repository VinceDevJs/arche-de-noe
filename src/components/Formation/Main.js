import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import books from '../../assets/images/formation/books.svg'
import twitter from '../../assets/images/formation/twitter.svg'
import facebook from '../../assets/images/formation/facebook.svg'
import table from '../../assets/images/formation/table.svg'
import level from '../../assets/images/formation/level.svg'
import price from '../../assets/images/formation/price.svg'

const Main = () => {
  return (
    <Container>
      <FormationBox>
        <ImgWrapper>
          <FormationImg src={books} alt='formation book' />
          <FormationTitle>
            Arabe <br />
            <span>Niv.4</span>
          </FormationTitle>
        </ImgWrapper>
        <IconsWrapper>
          <IconBox>
            <Icon src={price} />
            <IconText>250€</IconText>
          </IconBox>
          <IconBox>
            <Icon src={level} />
            <IconText>Intermédiaire</IconText>
          </IconBox>
          <IconBox>
            <Icon src={table} />
            <IconText>24 Places</IconText>
          </IconBox>
        </IconsWrapper>
        <Button to='/'>En savoir plus</Button>
        <SocialBox>
          <SocialIcon src={facebook} />
          <SocialIcon src={twitter} />
        </SocialBox>
      </FormationBox>

      <FormationBox>
        <ImgWrapper>
          <FormationImg src={books} alt='formation book' />
          <FormationTitle>
            Arabe <br />
            <span>Niv.4</span>
          </FormationTitle>
        </ImgWrapper>
        <IconsWrapper>
          <IconBox>
            <Icon src={price} />
            <IconText>250€</IconText>
          </IconBox>
          <IconBox>
            <Icon src={level} />
            <IconText>Intermédiaire</IconText>
          </IconBox>
          <IconBox>
            <Icon src={table} />
            <IconText>24 Places</IconText>
          </IconBox>
        </IconsWrapper>
        <Button to='/'>En savoir plus</Button>
        <SocialBox>
          <SocialIcon src={facebook} />
          <SocialIcon src={twitter} />
        </SocialBox>
      </FormationBox>
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
  padding: 0em 6em;
  width: 75%;
`

export const FormationBox = styled.div`
  width: 40%;
`

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const FormationImg = styled.img`
    width: 13em;
`

export const FormationTitle = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 2.2em;
  margin-left: -.8em;
  color: #00a1c6;

  span {
    -webkit-text-stroke: 2px #00a1c6;
    color: white;
  }
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
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
    color: #007CAD;
    font-family: 'Avenir Next Bold', sans-serif;
`

export const Button = styled(Link)`
    display: block;
    text-align: center;
    width: 8em;
    margin: 0 auto;
    color: white;
    background-color: #00A1C6;
    border-radius: 50px;
    padding: .4em 1.5em;
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
