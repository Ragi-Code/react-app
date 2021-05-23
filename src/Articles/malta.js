import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardmal from'./Cards/cardmal'
import Footer from './Footer'

function malta() {
    
    return(
        <div>
            <Title title="Malta" sustitle="A beautiful island!" />
            <NavbarPage />
            <Cardmal />
            <Footer />
        </div>
    );
}

export default malta;