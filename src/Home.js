import React from 'react';
import Produkter from './Components/produkter/Produkter';
import Rejser from './Components/rejser/Rejser';
import DykkerKort from './Components/dykkeceritfinkat/DykkerKort';
import Footer from './Components/footer';
import Header from './Components/navbar/Header.js';

function Home() {
    return (
        <div className="Home">
            <Header />
            <Produkter />
            <Rejser />
            <DykkerKort />
            <Footer />


        </div>
    )
}

export default Home;
