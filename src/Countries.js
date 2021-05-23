import React from 'react';
import Title from './title';
import Card from './Cards/Cards'
import NavbarPage from './Navbar'
import Footer from './Footer'

function Countries() {
    return(
        <div>
           <Title title="Countries" sustitle="list of countries" />
           <NavbarPage />
           <Card />
           <Footer />
        </div>
    );
}

export default Countries;