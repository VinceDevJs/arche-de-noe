import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import BooksImg from './../../assets/images/home/block3-bis/books.png'
import waves from './../../assets/images/formation/waves_2.png'
import { breakpoints } from '../../utils/styles.js'

const Block3Bis = () => {
  return (
    <Container id='block3'>
      <img
        src={waves}
        style={{ width: '100%', marginBottom: '2.5em', position: 'absolute', top: '0', left: '0' }}
        alt=''
      />
      <BlockLeft data-aos='fade-right' data-aos-duration='3000'>
        <Image src={BooksImg} alt='arche de noe' />
      </BlockLeft>

      <BlockRight data-aos='fade-left' data-aos-delay='50' data-aos-duration='3000'>
        <Title style={{ color: '#00A1C6' }}>Nos Domaines</Title>
        <Title style={{ color: '#007CAD' }}>d’enseignement</Title>
        <Separator />
        <Text>L’Institut l’Arche de Noé a développé au fil des années une réelle expertise dans différents domaines d’enseignement relatif à la langue arabe et à la culture islamique.</Text>
        <Button to='#matieres'>Les matières enseignées</Button>
      </BlockRight>
    </Container>
  )
}

export default Block3Bis

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: auto;
  align-items: center;
  padding: 3em 0;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`

export const BlockLeft = styled.div`
  width: 50%;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    margin-bottom: 2em;
  }
`

export const Image = styled.img`
  width: 100%;
`

export const BlockRight = styled.div`
  width: 50%;
  margin-left: 2em;

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`

export const Title = styled.p`
  font-family: 'Avenir Next Bold',serif ;
  margin: -0.3em 0;
  font-size: 3.5em;

  @media (max-width: ${breakpoints.l}px) {
    font-size: 2.5em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 2em;
  }

  @media (max-width: ${breakpoints.m}px) {
    font-size: 2.5em;
  }
  
`

export const Separator = styled.div`
  width: 4em;
  border-top: 3px solid #007CAD;
  margin: 2.5em 0;

  @media (max-width: ${breakpoints.m}px) {
    margin: 1.5em 0;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin: 2.5em auto;
  }
`

export const Text = styled.p`
  font-family: 'Avenir Next',serif;
  display: block;
  max-width: 28em;
  color: #195780;
  margin-bottom: 2em;

  @media (max-width: ${breakpoints.l}px) {
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.s}px) {
    max-width: 90%;
    margin: 0 auto 2em auto;
  }
`

export const Button = styled(Link)`
  border: 1px solid #00A1C6;
  border-radius: 30px;
  text-decoration: none;
  color: #00A1C6;
  font-size: 1.1em;
  font-family: 'Avenir Next Bold',serif ;
  padding: 0.3em 2em;
  
  :hover {
    background-color: #00A1C6;
    color: white;
  }
`
