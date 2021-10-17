import React from 'react'
import Filmlist from '../components/Filmlist';
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <Filmlist/>
    </main>
  )
}

export default Home
