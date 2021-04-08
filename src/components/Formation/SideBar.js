import React from 'react'
import styled from '@emotion/styled'

const SideBar = () => {
  return (
        <Container>
            <Wrapper>
                <SortTitle>Par age</SortTitle>
                <Separator />
                <SortBox>
                    <SortText>Maternelles</SortText>
                    <SortText>Enfant</SortText>
                    <SortText>Collèges</SortText>
                    <SortText>Adultes</SortText>
                </SortBox>
            </Wrapper>

            <Wrapper style={{ marginTop: '3em' }}>
                <SortTitle>Par niveau</SortTitle>
                <Separator />
                <SortBox>
                    <SortText>Débutant</SortText>
                    <SortText>Intermédiaire</SortText>
                    <SortText>Confirmé</SortText>
                </SortBox>
            </Wrapper>
        </Container>
  )
}

export default SideBar

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    min-width: 20em;
    border-right: 2px solid #00A1C6;
`

export const Wrapper = styled.div`
    width: 40%;
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
    font-family: 'Avenir Next Bold', sans-serif;
`
