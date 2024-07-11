import React from 'react'
import Navbar from '../navbar/Navbar'
import Slider from '../slider/Slider'
import NavButtons from '../navButtons/NavButtons'
import ProductSection from '../productSection/ProductSection'
import Footer from '../footer/Footer'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <NavButtons />
            <ProductSection />
            <Footer />
        </div>
    )
}

export default Main
