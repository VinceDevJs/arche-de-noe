import React from 'react'
import { Helmet } from 'react-helmet'
import waves from '../assets/images/home/waves_2.png'
// import Block1 from '../components/Home/Block1'
import Block2 from '../components/Home/Block2'
import Block4 from '../components/Home/Block4'
import Block3Bis from '../components/Home/Block3Bis'
import MatieresBis from './../components/Home/MatieresBis'
import DefaultLayout from '../layouts/default'
import TopSlider from './../components/Home/TopSlider'
import Block5Bis from './../components/Home/Block5Bis'

const IndexPage = () => {
  return (
    <>
      <DefaultLayout>
        <Helmet>
          <title>Accueil | Arche de noé</title>
        </Helmet>
        <TopSlider />
        {/* <Block1 /> */}
        <Block2 />
        <Block3Bis />
        <MatieresBis />
        <Block4 />
        <Block5Bis />
      </DefaultLayout>
    </>
  )
}

export default IndexPage
