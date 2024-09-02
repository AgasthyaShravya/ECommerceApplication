import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
        <Hero/><br/><br/><br/>
        <Popular/><br></br>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Shop