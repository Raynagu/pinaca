import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, image }) => {
    return (
        <div className="relative w-64 h-64  rounded-3xl overflow-hidden border drop-shadow-lg my-5" >
            <Link to={`/details/${id}`} replace={true}>
                <img src={image} alt={title} className="h-full" />
                <div className="absolute top-0 left-0 z-10 flex justify-center items-end bg-gradient-to-t from-gray-800 to-transparent h-full w-full flex p-2 pb-4">
                    <h4 className='text-center text-white font-bold'>{title}</h4>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCard;