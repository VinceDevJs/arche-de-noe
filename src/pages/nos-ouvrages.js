import React from 'react'
import { Helmet } from 'react-helmet'
import AllProducts from '../components/NosOuvrages/AllProducts'

const NosOuvrages = () => {
  return (
    <>
      <Helmet>
        <title>Nos ouvrages | Arche de noé</title>
      </Helmet>
      <h1>Nos ouvrages</h1>
      <AllProducts />
    </>
  )
}

export default NosOuvrages
