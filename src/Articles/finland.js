import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardfin from'./Cards/cardfin'
import Footer from './Footer'

function finland() {
    
    return(
        <div>
            <Title title="Finland" sustitle="Always snowing!" />
            <NavbarPage />
            <Cardfin />
            <Footer />
        </div>
    );
}

export default finland;
