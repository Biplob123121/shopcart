import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import MenuBar from './MenuBar'
import Banner from './Banner'
import HotDeals from './HotDeals'
import SearchItem from './SearchItem'
import Furniture from './Furniture'
import Footer from './Footer'

function Home() {
  return (
    <div className='px-6'>
        <Header />
        <hr />
        <SearchBar />
        <MenuBar />
        <Banner />
        <HotDeals />
        <SearchItem />
        <Furniture />
        <Footer />
    </div>
  )
}

export default Home