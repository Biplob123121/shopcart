import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MenuBar from './MenuBar'

function Home() {
  return (
    <div className='px-6'>
        <Header />
        <hr />
        <SearchBar />
        <MenuBar />
    </div>
  )
}

export default Home