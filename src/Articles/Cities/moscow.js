import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardm from'./Cards/cardmos'
import Footer from './Footer'

function mos() {
    
    return(
        <div>
            <Title title="Moscow" sustitle="City in Russia!"/>
            <NavbarPage />
            <Cardm />
            <Footer />
        </div>
    );
}

export default mos;