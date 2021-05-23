import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardsp from'./Cards/cardsp'
import Footer from './Footer'

function spain() {
    
    return(
        <div>
            <Title title="Spain" sustitle="The only thing good about it is soccer!" />
            <NavbarPage />
            <Cardsp />
            <Footer />
        </div>
    );
}

export default spain;