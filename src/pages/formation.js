import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import Header from './../components/Formation/Header'
import CursesSubject from './../components/Formation/CursesSubject'
import SideBar from '../../src/components/Formation/SideBar'
import Main from '../../src/components/Formation/Main'

const Formation = () => {
  return (
    <>
      <Helmet>
        <title>Formation | Arche de noé</title>
      </Helmet>
      <Header />
      <CursesSubject />
      <MainContainer>
        <SideBar />
        <Main />
      </MainContainer>
    </>
  )
}

export default Formation

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9em 0;
`
