import React from 'react';
import { GoHeart } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='bg-sky-900 text-white'>
            <div className='flex flex-row justify-center items-center text-sm text-sky-300'>@copyright 2022. Made by: Nagaraj Koti. &nbsp; <GoHeart className='text-red-600' /> spoonacular food API </div>
        </div>
    );
};

export default Footer;