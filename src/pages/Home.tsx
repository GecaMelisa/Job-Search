import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Jobs from '../components/Jobs'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <NavBar />
      <Search />
      <Jobs />
    </>
  )
}

export default Home