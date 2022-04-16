import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;