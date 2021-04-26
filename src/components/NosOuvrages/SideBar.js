import React from 'react'
import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'

const SideBar = ({ handleFilterOuvrages, age, level, handleReset }) => {
  return (
    <Container>
      <Wrapper>
        <SortTitle>Par age</SortTitle>
        <Separator />
        <SortBox>
          <SortText
            selected={age === 'Maternelles'}
            onClick={() => handleFilterOuvrages('age', 'Maternelles')}
          >
            Maternelles
          </SortText>
          <SortText
            selected={age === 'Enfant'}
            onClick={() => handleFilterOuvrages('age', 'Enfant')}
          >
            Enfant
          </SortText>
          <SortText
            selected={age === 'Collèges'}
            onClick={() => handleFilterOuvrages('age', 'Collèges')}
          >
            Collèges
          </SortText>
          <SortText
            selected={age === 'Adultes'}
            onClick={() => handleFilterOuvrages('age', 'Adultes')}
          >
            Adultes
          </SortText>
        </SortBox>
      </Wrapper>

      <Wrapper style={{ marginTop: '3em' }}>
        <SortTitle>Par niveau</SortTitle>
        <Separator />
        <SortBox>
          <SortText
            selected={level === 'Débutant'}
            onClick={() => handleFilterOuvrages('level', 'Débutant')}
          >
            Débutant
          </SortText>
          <SortText
            selected={level === 'Intermédiaire'}
            onClick={() => handleFilterOuvrages('level', 'Intermédiaire')}
          >
            Intermédiaire
          </SortText>
          <SortText
            selected={level === 'Confirmé'}
            onClick={() => handleFilterOuvrages('level', 'Confirmé')}
          >
            Confirmé
          </SortText>
        </SortBox>
      </Wrapper>

      <Wrapper>
        <p
          style={{
            cursor: 'pointer',
            fontFamily: 'Avenir Next Bold, sans-serif',
            fontSize: '0.9em'
          }}
          onClick={handleReset}
        >
          Réinitialiser
        </p>
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
  border-right: 2px solid #00a1c6;

  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: 70%;
  color: #00a1c6;
`

export const Separator = styled.div`
  border-top: 2px solid #00a1c6;
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
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
  text-decoration-thickness: 3.5px;
`
