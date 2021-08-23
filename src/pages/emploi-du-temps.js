import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './../components/Planning/Header'
import Main from './../components/Planning/Main'
import DefaultLayout from '../layouts/default'

const EmploiDuTemps = () => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Emplois du temps | Arche de noé</title>
      </Helmet>
      <Header />
      <Main />
    </DefaultLayout>
  )
}

export default EmploiDuTemps
