import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import closeCross from '../../assets/icons/Close-cross.png'
import logo from '../../assets/images/inscription/Logo-inscription.svg'
import { breakpoints } from '../../utils/styles'
import { Link } from 'gatsby'

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState()

  useEffect(() => {
    setShowPopUp(!!((typeof window !== 'undefined' && window.sessionStorage.getItem('popup'))))
  }, [])

  const handleClosePopUp = () => {
    console.log('test')
    if (typeof window !== 'undefined') window.sessionStorage.setItem('popup', 'closed')
    setShowPopUp(!!((typeof window !== 'undefined' && window.sessionStorage.getItem('popup'))))
  }
  return (
    <>
      {!showPopUp &&
        <Container>
          <BoxContainer>
            <CrossContainer onClick={() => handleClosePopUp()}>
              <img src={closeCross} alt='' />
            </CrossContainer>
            <Logo src={logo} />
            <TextContent>
              L’institut l’Arche de Noé a le plaisir de vous informer que les
              inscriptions pour l’année 2021 | 2022 se dérouleront les jours suivants
              :
            </TextContent>
            <DateContent>SAMEDI 4 & DIMANCHE 5 SEPTEMBRE 2021
            </DateContent>

            <ButtonsBox>
              <Button
                onClick={() => handleClosePopUp()}
                to='/inscription#main_inscription'
              >
                Connaître les modalités
              </Button>
              <Button
                to='/formation'
                color='true'
                onClick={() => handleClosePopUp()}
              >
                Nos formations
              </Button>
            </ButtonsBox>
          </BoxContainer>
        </Container>}
    </>
  )
}

export default PopUp

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.507);
  z-index: 2050;
  animation: lightboxin 0.3s;
  overflow: auto;
  transition: opacity 0.3s;
  @keyframes lightboxin {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const BoxContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: #297daf;
  width: 70%;
  padding: 2em 0;
  max-width: 40em;
  height: 21em;
  border: 6px solid white;
  border-radius: 15px;

  @media (max-width: ${breakpoints.m}px) {
    width: 85%;
    max-height: 20em;
    margin-top: 4em;
    margin-bottom: 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    max-height: 23em;
    margin-top: 4em;
  }
`

export const CrossContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: -20px;
  right: -20px;
  background-color: #297daf;
  border-radius: 50%;
  width: 2.3em;
  height: 2.3em;
  border: 4px solid white;
  color: white;
  
  img {
    width: 15px;
  }
`

export const Logo = styled.img`
  position: absolute;
  width: 17em;
  z-index: 10;
  opacity: 0.4;
`

export const TextContent = styled.p`
  display: inline-block;
  color: white;
  font-size: 1.3em;
  text-align: center;
  margin: 0 auto 0.4em;
  max-width: 80%;
  z-index: 11;

  @media (max-width: ${breakpoints.l}px) {
    
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
    font-size: 1.1em;
  }
`

export const DateContent = styled.p`
  display: inline-block;
  font-size: 1.5em;
  text-align: center;
  color: #6cdcef;
  font-family: 'Avenir Next Bold', monospace;
  max-width: 85%;
  z-index: 11;

  @media (max-width: ${breakpoints.l}px) {
   
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 35em;
  margin: 1em auto 0;
  z-index: 11;

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

export const Button = styled(Link)`
  border-radius: 40px;
  font-family: 'Avenir Next Bold', monospace;
  border: ${props => (props.color ? '2px solid #6CDCEF' : '2px solid white')};
  background-color: ${props => (props.color ? '#6CDCEF' : 'transparent')};
  width: 14em;
  padding: 0.4em 0;
  text-align: center;
  font-size: 1.2em;
  color: ${props => (props.color ? '#007CAD' : 'white')};
  text-decoration: none;

  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: ${props => (props.color ? '0' : '1em')};
  }

  :hover {
    border: ${props =>
  !props.color ? '2px solid #6CDCEF' : '2px solid white'};
    cursor: pointer;
  }
`
