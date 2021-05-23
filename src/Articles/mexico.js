import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardmex from'./Cards/cardmex'

import Footer from './Footer'
function mexico() {
    
    return(
        <div>
            <Title title="Mexico" sustitle="Tequila nd nachos in cinco de mayo!" />
            <NavbarPage />
            <Cardmex />
            <Footer />
        </div>
    );
}

export default mexico;