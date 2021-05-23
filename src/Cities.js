import React from 'react';
import Title from './title';
import Card from './Articles/Cities/Cards/Cards'
import NavbarPage from './Navbar'
import Footer from './Footer'

function Cities() {
    return(
        <div>
            <Title title="Cities" sustitle="list of cities" />
            <NavbarPage />
            <Card />
            <Footer />
        </div>
    );
}

export default Cities;