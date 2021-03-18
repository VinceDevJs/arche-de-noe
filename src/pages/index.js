import * as React from 'react'
import waves from '../assets//images/home/waves_2.png'
import Block1 from '../components/Home/Block1'
import Block2 from '../components/Home/Block2'
import Block3 from '../components/Home/Block3'
import Block4 from '../components/Home/Block4'
import Block5 from '../components/Home/Block5'
import Block6 from '../components/Home/Block6'
import Layout from '../Layouts/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const IndexPage = () => {
  return (
    <Layout>
      <Block1 />
      <Block2 />
      <Block3 />
      <img src={waves} style={{ width: '100%', marginTop: '2.5em' }} alt='' />
      <Block4 />
      <Block5 />
      <img src={waves} style={{ width: '100%', marginTop: '2.5em' }} alt='' />
      <Block6 />
    </Layout>
  )
}

export default IndexPage
