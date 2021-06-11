import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './../components/Planning/Header'
import Main from './../components/Planning/Main'

const EmploiDuTemps = () => {
  return (
    <>
      <Helmet>
        <title>Emplois du temps | Arche de noé</title>
      </Helmet>
      <Header />
      <Main />
    </>
  )
}

export default EmploiDuTemps
