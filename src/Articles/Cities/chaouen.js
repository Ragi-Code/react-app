import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardche from'./Cards/cardcha'
import Footer from './Footer'

function chaou() {
    
    return(
        <div>
            <Title title="Chefchaouen" sustitle="City in Morocco"/>
            <NavbarPage />
            <Cardche />
            <Footer />
        </div>
    );
}

export default chaou;