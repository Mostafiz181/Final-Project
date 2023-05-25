import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Boss from '../Boss/Boss';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Chef from '../Chef/Chef';
import Feature from '../Feature/Feature';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Chef></Chef>
            <Feature></Feature>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;