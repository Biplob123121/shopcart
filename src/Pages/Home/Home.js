import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MenuBar from './MenuBar'
import Banner from './Banner'

function Home() {
  return (
    <div className='px-6'>
        <Header />
        <hr />
        <SearchBar />
        <MenuBar />
        <Banner />
    </div>
  )
}

export default Home