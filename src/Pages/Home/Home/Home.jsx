import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Boss from '../Boss/Boss';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;