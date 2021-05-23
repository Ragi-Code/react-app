import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardrus from'./Cards/cardrus'
import Footer from './Footer'

function russia() {
    
    return(
        <div>
            <Title title="Russia" sustitle="The Mob paradise!"/>
            <NavbarPage />
            <Cardrus />
            <Footer />
        </div>
    );
}

export default russia;