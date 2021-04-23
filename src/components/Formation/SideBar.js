import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'

const SideBar = ({ handleFilterFormations, age, discipline, level, handleReset }) => {
  return (
    <Container>
      <Wrapper>
        <SortTitle>Par matière</SortTitle>
        <Separator />
        <SortBox>
          <SortText selected={discipline === 'arabe'} onClick={() => handleFilterFormations('discipline', 'arabe')}>Langue arabe</SortText>
          <SortText selected={discipline === 'coran'} onClick={() => handleFilterFormations('discipline', 'coran')}>Coran</SortText>
          <SortText selected={discipline === 'science islamique'} onClick={() => handleFilterFormations('discipline', 'science islamique')}>Science religieuse</SortText>
        </SortBox>
      </Wrapper>

      <Wrapper style={{ marginTop: '3em' }}>
        <SortTitle>Par age</SortTitle>
        <Separator />
        <SortBox>
          <SortText selected={age === 'Maternelles'} onClick={() => handleFilterFormations('age', 'Maternelles')} >Maternelles</SortText>
          <SortText selected={age === 'Enfant'} onClick={() => handleFilterFormations('age', 'Enfant')}>Enfant</SortText>
          <SortText selected={age === 'Collèges'} onClick={() => handleFilterFormations('age', 'Collèges')}>Collèges</SortText>
          <SortText selected={age === 'Adultes'} onClick={() => handleFilterFormations('age', 'Adultes')}>Adultes</SortText>
        </SortBox>
      </Wrapper>

      <Wrapper style={{ marginTop: '3em' }}>
        <SortTitle>Par niveau</SortTitle>
        <Separator />
        <SortBox>
          <SortText selected={level === 'Débutant'} onClick={() => handleFilterFormations('level', 'Débutant')}>Débutant</SortText>
          <SortText selected={level === 'Intermédiaire'} onClick={() => handleFilterFormations('level', 'Intermédiaire')}>Intermédiaire</SortText>
          <SortText selected={level === 'Confirmé'} onClick={() => handleFilterFormations('level', 'Confirmé')}>Confirmé</SortText>
        </SortBox>
      </Wrapper>

      <Wrapper>
        <p style={{ cursor: 'pointer' }} onClick={handleReset}>reset</p>
      </Wrapper>
    </Container>
  )
}

export default SideBar

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    max-width: 17em;
    border-right: 2px solid #00A1C6;
  
  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const Wrapper = styled.div`
    width: 70%;
    color: #00A1C6;
`

export const Separator = styled.div`
    border-top: 2px solid #00A1C6;
    width: 2em;
`

export const SortTitle = styled.p`
    margin-top: 0;
    font-size: 1em;
    `

export const SortBox = styled.ul`
    padding: 0;
`

export const SortText = styled.p`
    cursor: pointer;
    font-size: 1.2em;
    width: fit-content;
    font-family: 'Avenir Next Bold', sans-serif;
    border-bottom: ${props => props.selected ? '3px solid #00A1C6' : '3px solid transparent'}
`
