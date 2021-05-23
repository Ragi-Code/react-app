import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardko from'./Cards/cardhog'
import Footer from './Footer'

function hongo() {
    
    return(
        <div>
            <Title title="HongKong" sustitle="City in China"/>
            <NavbarPage />
            <Cardko />
            <Footer />
        </div>
    );
}

export default hongo;