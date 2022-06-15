import React from 'react';
import { MdFoodBank, MdFastfood } from 'react-icons/md';
import { GiCupcake, GiFruitBowl, GiForkKnifeSpoon } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const MealList = () => {
    // const cuisinsList = [{ name: "Main Course", icon: "MdFoodBank" },
    // { name: "BreakFast", icon: "GiForkKnifeSpoon" },
    // { name: "Dessert", icon: "GiCupcake" },
    // { name: "Salad", icon: "GiFruitBowl" },
    // { name: "Drink", icon: "MdFastfood" }];

    return (
        <div className='flex flex-row justify-center items-center mb-5'>
            <MealType type="main-course"><MdFoodBank /></MealType>
            <MealType type="breakfast"><GiForkKnifeSpoon /></MealType>
            <MealType type="dessert"><GiCupcake /></MealType>
            <MealType type="salad"><GiFruitBowl /></MealType>
            <MealType type="drink"><MdFastfood /></MealType>
        </div>
    );
};

const MealType = ({ type, children }) => {
    return (
        <NavLink to={`/cuisines/${type}?cuisine=American`} className="flex flex-col justify-center items-center p-2 rounded-full text-slate-50 bg-sky-900 text-2xl m-2 hover:drop-shadow-3xl">
            {children}
            {/* <span className='text-xs font-semibold'>Main</span> */}
        </NavLink>
    );
};

export default MealList;