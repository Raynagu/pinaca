import React from 'react';
import Popular from '../components/Popular';
import Trending from '../components/Trending';

const Home = () => {
    return (
        <div className='flex flex-col  p-2 grow'>
            <Trending />
            <div className="m-2"></div>
            <Popular />
        </div>
    );
};

export default Home;