import React from 'react'
import Footer from '../components/Footer'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import Carousel from './CarouselSlider'

function Home() {
    return (
        <div>
            <Carousel/>
            <AboutUs/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default Home
