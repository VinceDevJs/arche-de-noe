import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import closeCross from '../../assets/icons/Close-cross.png'
import { breakpoints } from '../../utils/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState()

  const image = useStaticQuery(graphql`
      query {
          popUp: file(relativePath: { eq: "images/pop-up/pop-up-rentree.png" }) {
              childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
    `)

  console.log(image)

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
            <ImagePopUp fluid={image.popUp.childImageSharp.fluid} />
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
  padding: 0;
  max-width: 40em;
  height: 23em;
  border: 6px solid white;
  border-radius: 21px;

  @media (max-width: ${breakpoints.m}px) {
    width: 85%;
    max-height: 20em;
    margin-top: 4em;
    margin-bottom: 2em;
  }

  @media (max-width: ${breakpoints.s}px) {
    max-height: 12em;
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
  z-index: 100;
  
  img {
    width: 15px;
  }
`

export const ImagePopUp = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`
