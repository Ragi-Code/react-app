import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardth from'./Cards/cardth'

import Footer from './Footer'
function thailand() {
    
    return(
        <div>
            <Title title="Thailand" sustitle="Happy ending!" />
            <NavbarPage />
            <Cardth />
            <Footer />
        </div>
    );
}

export default thailand;