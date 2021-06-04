import React from 'react'
import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'
import waves from '../../assets/images/footer/footer_bottom.png'
import logo from '../../assets/icons/header/logo_header.png'

const Map = () => {
  return (
    <MapContainer>
      <MapTitle>Nous trouver</MapTitle>
      <GoogleMapBox>
        <GoogleMap
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.209831451531!2d2.412601315662936!3d48.94949027929648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66b9c0dca7879%3A0xf620ea681b83a458!2sAssociation%20culturelle%20des%20Musulmans%20de%20Dugny!5e0!3m2!1sfr!2sfr!4v1619876106798!5m2!1sfr!2sfr'
          frameborder='0'
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'
        />
        <LogoIcon src={logo} />
      </GoogleMapBox>
      <img
        src={waves}
        style={{ width: '100%', position: 'absolute', bottom: '0', left: '0' }}
        alt=''
      />
    </MapContainer>
  )
}

export default Map

export const MapContainer = styled.div`
  position: relative;
  height: 37em;
  background: linear-gradient(to top, #0094be 50%, white 50%);
  margin-bottom: 2em;
`

export const MapTitle = styled.p`
  font-family: 'Avenir Next Bold', sans-serif;
  text-align: center;
  font-size: 3em;
  color: #00a0c5;
  margin-bottom: 1.5em;

  @media (max-width: ${breakpoints.s}px) {
    font-size: 2.5em;
    margin-bottom: 2em;
  }
`

export const GoogleMapBox = styled.div`
  position: relative;
`

export const GoogleMap = styled.iframe`
  display: block;
  width: 80%;
  max-width: 65em;
  margin: 0 auto;
  height: 25em;
  border: none;
  border-radius: 25px;
  -webkit-box-shadow: 1px 2px 8px 8px rgba(7, 52, 68, 0.42);
  box-shadow: 1px 2px 8px 8px rgba(7, 52, 68, 0.42);

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

export const LogoIcon = styled.img`
  position: absolute;
  width: 5em;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
`
