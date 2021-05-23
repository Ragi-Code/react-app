import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardsao from'./Cards/cardsaoui'
import Footer from './Footer'

function essaoui() {
    
    return(
        <div>
            <Title title="Essaouira" sustitle="City in Morocco"/>
            <NavbarPage />
            <Cardsao />
            <Footer />
        </div>
    );
}

export default essaoui;