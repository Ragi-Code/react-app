import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardphk from'./Cards/cardphuk'
import Footer from './Footer'

function phuk() {
    
    return(
        <div>
            <Title title="Phuket" sustitle="City in Thailand!"/>
            <NavbarPage />
            <Cardphk />
            <Footer />
        </div>
    );
}

export default phuk;