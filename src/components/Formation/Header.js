import React from 'react'
import styled from '@emotion/styled'
import wave from '../../assets/images/formation/wave.svg'
import computer from '../../assets/images/formation/computer.svg'

const Header = () => {
  return (
        <Container>
            <Wave src={wave} alt='wave logo'/>
            <ComputerImg src={computer} alt='çomputer logo' />
            <TitleWrapper>
                <Title>Nos <br/>Formations</Title>
                <Separator />
                <SubTitle>L’Institut l’arche de Noé propose 3 types de formations adaptés à différentes tranches d’âges, que vous pouvez consulter ci-dessous</SubTitle>
            </TitleWrapper>
        </Container>
  )
}

export default Header

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 37em;
    background: rgb(112,194,225);
    background: radial-gradient(circle, rgba(112,194,225,1) 0%, rgba(0,148,190,1) 58%);
    margin: 0 0 5em;
`

export const Wave = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`

export const ComputerImg = styled.img`
    width: 60%;
    max-width: 40em;
    margin-top: 12em;
    z-index: 20;
`

export const TitleWrapper = styled.div`
    color: white;
    width: 35%;
    max-width: 25em;
    margin-left: 3em;
`

export const Title = styled.p`
    font-size: 4em;
    margin: 0;
    font-family: 'Avenir Next Bold', sans-serif;
`

export const Separator = styled.div`
    border-bottom: 1px solid white;
    width: 8em;
    margin: 2em 0;
`

export const SubTitle = styled.p``
