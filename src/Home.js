import React from 'react';
import Card from './Cards/Cards'
import Title from './title';
import NavbarPage from './Navbar'
import Footer from './Footer'
function Home() {
    return(
        <div>
            <Title title="World Gallery " sustitle=" A wide variety of pictures from around the wolrd!" />
            <NavbarPage />
            <Card />
            <Footer />
        </div>
    );
}

export default Home;