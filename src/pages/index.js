import React from 'react'
import { Helmet } from 'react-helmet'
import waves from '../assets/images/home/waves_2.png'
import Block1 from '../components/Home/Block1'
import Block2 from '../components/Home/Block2'
import Block4 from '../components/Home/Block4'
import Block5 from '../components/Home/Block5'
import Block3Bis from '../components/Home/Block3Bis'
import Matieres from './../components/Home/Matieres'
import DefaultLayout from '../layouts/default'

const IndexPage = () => {
  return (
    <>
      <DefaultLayout>
        <Helmet>
          <title>Acceuil | Arche de noé</title>
        </Helmet>
        <Block1 />
        <Block2 />
        <Block3Bis />
        <Matieres />
        <img src={waves} style={{ width: '100%', marginTop: '2.5em' }} alt='' />
        <Block4 />
        <Block5 />
        <img src={waves} style={{ width: '100%', marginTop: '2.5em' }} alt='' />
      </DefaultLayout>
    </>
  )
}

export default IndexPage
