import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import selectArrow from './../../assets/icons/select-arrow.png'

const MobileSort = () => {
  return (
    <Container>
      <SelectInput arrow={selectArrow}>
        <option value='arabic'>Langue Arabe</option>
        <option value='quran'>Coran</option>
        <option value='science'>Sciences Islamiques</option>
      </SelectInput>

      <SelectInput arrow={selectArrow}>
        <option defaultValue='default' disabled selected>Sélectionner un age</option>
        <option value='maternelles'>Maternelles</option>
        <option value='enfant'>Enfant</option>
        <option value='collèges'>Collèges</option>
        <option value='adultes'>Adultes</option>
      </SelectInput>

      <SelectInput arrow={selectArrow}>
        <option value='default' disabled selected>Sélectionner un niveau</option>
        <option value='debutant'>Débutant</option>
        <option value='intermediaire'>Intermédiaire</option>
        <option value='confirmé'>Confirmé</option>
      </SelectInput>

      <Reset>Reset</Reset>
    </Container>
  )
}

export default MobileSort

export const Container = styled.div`
  margin: 3em auto;
  width: 20em;
  font-family: 'Avenir Next Bold', sans-serif;

  @media (min-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const SelectInput = styled.select`
  width: 100%;
  height: 3em;
  border-radius: 30px;
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.2em;
  border: 2px solid #00A1C6;
  outline: none;
  color: #00A1C6;
  text-align: center;
  text-align-last: center;
  -moz-text-align-last: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('${props => props.arrow}');
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 15px;
  margin-bottom: 1em;
  
  option {
    width: 10em;
  }
`

export const Reset = styled.p`
  text-align: center;
  color: #00A1C6;
`
