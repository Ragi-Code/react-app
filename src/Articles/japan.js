import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardjp from'./Cards/cardjap'
import Footer from './Footer'

function japan() {
    
    return(
        <div>
            <Title title="Japan" sustitle="Kawaii neko"/>
            <NavbarPage />
            <Cardjp />
            <Footer />
        </div>
    );
}

export default japan;