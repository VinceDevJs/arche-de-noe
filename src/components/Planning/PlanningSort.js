import React from 'react'
import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'
import selectArrow from './../../assets/icons/select-arrow.png'

const PlanningSort = ({ setFormationSelectorList, setFormationSelected, setPublicSelected, formationSelected, publicSelected, formationSelectorList }) => {
  return (
    <Container>
      <BoxSelector>
        <TitleSelector>Public</TitleSelector>
        <SelectInput
          value={publicSelected}
          arrow={selectArrow}
          onChange={(e) => setPublicSelected(e.target.value)}
        >
          <option value='enfant'>Enfant</option>
          <option value='adulte'>Adulte</option>
        </SelectInput>
      </BoxSelector>

      <BoxSelector>
        <TitleSelector>La formation</TitleSelector>
        <SelectInput
          value={formationSelected}
          arrow={selectArrow}
          onChange={(e) => setFormationSelected(e.target.value)}
        >
          {
            formationSelectorList.sort().map(name => (
              <option key={name} value={name}>{name}</option>
            ))
          }
        </SelectInput>
      </BoxSelector>
    </Container>
  )
}

export default PlanningSort

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3em;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BoxSelector = styled.div`
  @media (max-width: ${breakpoints.s}px) {
    margin-bottom: 1em;
    width: 95%;
  }
`

export const TitleSelector = styled.p`
    margin:0 0 0.5em 2em;
    color: #29ABE2;
    font-size: 1.1em;

  @media (max-width: ${breakpoints.s}px) {
    margin: 0 0 0.5em 1.3em;
  }
`

export const SelectInput = styled.select`
  width: 13em;
  height: 2em;
  border-radius: 30px;
  background-color: white;
  font-family: 'Avenir Next Bold', sans-serif;
  font-size: 1.2em;
  border: 2px solid #00A1C6;
  text-transform: capitalize;
  outline: none;
  color: #00A1C6;
  text-align: left;
  text-align-last: left;
  padding-left: 1em;
  -moz-text-align-last: left;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('${props => props.arrow}');
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 15px;
  margin: 0 1em;
  
  option {
    width: 10em;
    text-transform: capitalize;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    margin: 0;
    padding: 0 0 0 1em;
    height: 2.5em;
    font-size: 1.5em;
    background-color: white;
  }
`
