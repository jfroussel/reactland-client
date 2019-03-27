import React from 'react'
import Header from '../../containers/header'
import Footer from './Footer'
import Prices from './Prices'
import Team from './Team'
const HomePage = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <Team />
            <Prices />
            <Footer />
        </div>
    )
}

export default HomePage