import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

// import downloadPdf from './../../assets/formulaire_inscription.pdf'
import { breakpoints } from '../../utils/styles'
// import stepOneIcon from '../../assets/images/inscription/step-1.svg'
// import stepTwoIcon from '../../assets/images/inscription/step-2.svg'
// import stepThreeIcon from '../../assets/images/inscription/step-3.svg'
// import stepFourIcon from '../../assets/images/inscription/step-4.svg'

const MainInscription = () => {
  return (
    <Container id="main_inscription">
      <Title>
        Pour vous inscrire et embarquer dans l’Arche de Noé veuillez vous présenter sur place aux dates d’inscription
      </Title>

      <Button to="/contact#form">J’ai une question</Button>
    </Container>
  )
}

export default MainInscription

export const Container = styled.div`
  margin-bottom: 12em;
`

export const Title = styled.p`
  display: block;
  width: 80%;
  max-width: 50em;
  margin: 1em auto 2em;
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 2.5em;
  color: #00a1c6;
  text-align: center;

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto 2em;
    width: 90%;
    font-size: 2.5em;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
    font-size: 2em;
    margin: 0 auto 3em;
  }
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  max-width: 55em;
  margin: 4.5em auto;

  @media (max-width: ${breakpoints.m}px) {
    width: 85%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    margin: 4em auto;
  }
`

export const ContentIconBox = styled.div`
  width: 6em;
  margin-right: 3em;

  @media (max-width: ${breakpoints.s}px) {
    margin-right: 0;
  }
`

export const ContentIcon = styled.img`
  width: 100%;
`

export const ContentText = styled.p`
  font-size: 1.7em;
  color: ${(props) => (!props.color ? '#00a0c5' : '#007bac')};
  font-family: 'Avenir Next Bold', monospace;
  text-align: center;

  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
  }
`

export const ContentLink = styled(Link)`
  color: #8bc53e;
  text-decoration: none;
`

export const ContentLinkDownload = styled.a`
  color: #8bc53e;
  text-decoration: none;
`

export const Button = styled(Link)`
  display: block;
  background-color: #25acd6;
  color: white;
  padding: 0.2em 2em;
  width: fit-content;
  font-size: 1.2em;
  font-family: 'Avenir Next Bold', monospace;
  border-radius: 40px;
  border: 2px solid transparent;
  text-decoration: none;
  margin: 0 auto 3em;

  :hover {
    background-color: transparent;
    color: #25acd6;
    border: 2px solid #25acd6;
  }
`
