import React from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';

const Cuisines = () => {
    let { type } = useParams();
    const [searchParams] = useSearchParams();
    const cuisineType = searchParams.get("cuisine");

    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <div className=" bg-gray-100 md:w-1/4">
                <ul className='flex flex-col'>
                    <Link to={`/cuisines/${type}?cuisine="list1"`}>list1</Link>
                    <Link to={`/cuisines/${type}?cuisine="list2"`}>list2</Link>
                    <Link to={`/cuisines/${type}?cuisine="list3"`}>list3</Link>
                    <Link to={`/cuisines/${type}/hi/?cuisine="list5"`}>no link</Link>
                </ul>

            </div>
            <div className="p-2 w-full text-center bg-gray-100 p-2">
                <h4>Contents type {type}</h4>
                {cuisineType && <h4>Contents type {cuisineType}</h4>}
            </div>
        </div>
    );
};

export default Cuisines;