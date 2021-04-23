import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import selectArrow from './../../assets/icons/select-arrow.png'

const MobileSort = ({ handleFilterFormations, handleReset, age, level, discipline }) => {
  return (
    <Container>
      <SelectInput value={discipline} arrow={selectArrow} onChange={(e) => handleFilterFormations('discipline', e.target.value)}>
        <option value='arabe'>Langue Arabe</option>
        <option value='coran'>Coran</option>
        <option value='science islamique'>Sciences Islamiques</option>
      </SelectInput>

      <SelectInput value={!age ? 'default' : age} arrow={selectArrow} onChange={(e) => handleFilterFormations('age', e.target.value)}>
        <option value='default' disabled selected>Sélectionner un age</option>
        <option value='Maternelles'>Maternelles</option>
        <option value='Enfant'>Enfant</option>
        <option value='Collèges'>Collèges</option>
        <option value='Adultes'>Adultes</option>
      </SelectInput>

      <SelectInput value={!level ? 'default' : level} arrow={selectArrow} onChange={(e) => handleFilterFormations('level', e.target.value)}>
        <option value='default' disabled selected>Sélectionner un niveau</option>
        <option value='Débutant'>Débutant</option>
        <option value='Intermédiaire'>Intermédiaire</option>
        <option value='Confirmé'>Confirmé</option>
      </SelectInput>

      <Reset onClick={handleReset}>Reset</Reset>
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
