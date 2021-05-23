import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardmd from'./Cards/cardmad'
import Footer from './Footer'

function spa() {
    
    return(
        <div>
            <Title title="Madrid" sustitle="City in Spain!"/>
            <NavbarPage />
            <Cardmd />
            <Footer />
        </div>
    );
}

export default spa;