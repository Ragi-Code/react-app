import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardpk from'./Cards/cardpek'
import Footer from './Footer'

function peki() {
    
    return(
        <div>
            <Title title="Pekin" sustitle="City in China!"/>
            <NavbarPage />
            <Cardpk />
            <Footer />
        </div>
    );
}

export default peki;