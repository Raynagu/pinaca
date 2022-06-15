import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import Details from './Details';
import SearchResult from './SearchResult';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='search/:key' element={<SearchResult />} />
            <Route path='cuisines/:type' element={<Cuisines />} />
            <Route path="details/:id" element={<Details />} />
            <Route path='*' element={<h4 className='text-center font-bold text-sky-700'>Page not found</h4>} />
        </Routes>
    );
};

export default Router;