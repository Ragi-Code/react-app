import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardca from'./Cards/cardcas'
import Footer from './Footer'

function casa() {
    
    return(
        <div>
            <Title title="Casablanca" sustitle="City in Morocco"/>
            <NavbarPage />
            <Cardca />
            <Footer />
        </div>
    );
}

export default casa;