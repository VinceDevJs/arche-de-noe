import React from 'react'
import styled from '@emotion/styled'

import quranLogo from '../../assets/images/formation/quran.svg'
import salatLogo from '../../assets/images/formation/salat.svg'
import arabicLogo from '../../assets/images/formation/arabic.svg'

const CursesSubject = () => {
  return (
        <Container>
            <ImgBox>
                <SubjectImg src={arabicLogo} alt='arabe'/>
                <SubjectTitle>Langue Arabe</SubjectTitle>
            </ImgBox>
            <Separator />
            <ImgBox style={{ width: '24%' }}>
                <SubjectImg src={quranLogo} alt='coran'/>
                <SubjectTitle>Coran</SubjectTitle>
            </ImgBox>
            <Separator />
            <ImgBox>
                <SubjectImg style={{ width: '12em' }} src={salatLogo} alt='science islamique'/>
                <SubjectTitle>Sciences Islamiques</SubjectTitle>
            </ImgBox>
        </Container>
  )
}

export default CursesSubject

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    margin: 0 auto 4em auto;
`

export const ImgBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    font-size: 1.2em;
    color: #007CAD;
    font-family: 'Avenir Next Bold', sans-serif;
    width: 33%;
    height: 12em;
    cursor: pointer;
`

export const SubjectImg = styled.img`
    max-width: 7em;
    max-height: 6em;
`

export const Separator = styled.div`
    border-left: 2px solid #00A1C6;
    height: 6em;
`

export const SubjectTitle = styled.p`
    bottom: 0;
    font-size: 1.2em;
    margin-bottom: 0;
`
