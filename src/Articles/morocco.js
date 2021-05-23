import React from 'react';

import Title from './title';
import NavbarPage from './Navbar'
import Cardo from'./Cards/cardmoro'
import Footer from './Footer'

function morocco() {
    
    return(
        <div>
            <Title title="Morocco" sustitle="The ultimate gate to Europe" />
            <NavbarPage />
            <Cardo />
            <Footer />
        </div>
    );
}

export default morocco;