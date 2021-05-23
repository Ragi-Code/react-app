import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardch from'./Cards/cardch'
import Footer from './Footer'

function china() {
    
    return(
        <div>
            <Title title="China" sustitle="A rising Economy!"/>
            <NavbarPage />
            <Cardch />
            <Footer />
        </div>
    );
}

export default china;