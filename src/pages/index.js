import * as React from 'react'
import Block1 from '../components/Home/Block1'
import Block2 from '../components/Home/Block2'
import Block3 from '../components/Home/Block3'
import Layout from '../Layouts/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <Block1 />
      <Block2 />
      <Block3 />
    </Layout>
  )
}

export default IndexPage
