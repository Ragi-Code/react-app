import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardsao from'./Cards/cardshag'
import Footer from './Footer'

function shang() {
    
    return(
        <div>
            <Title title="Shanghai" sustitle="City in China!"/>
            <NavbarPage />
            <Cardsao />
            <Footer />
        </div>
    );
}

export default shang;