import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

let isMounted = true;

const Popular = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRecipe = async () => {
        let localCache = JSON.parse(localStorage.getItem("popular"));
        const apiKey = `&apiKey=${process.env.REACT_APP_API_KEY}`;
        const qUrl = 'recipes/random?number=20';
        const url = `${process.env.REACT_APP_BASE_URL}${qUrl}${apiKey}`;

        try {
            if (isMounted && !localCache) {
                const res = await axios.get(url);
                setRecipes(res.data.recipes);
                localStorage.setItem("popular", JSON.stringify(res.data.recipes));
                // console.log(res.data.recipes);
                // console.log("data fetch");
            } else {
                // console.log(localCache);
                setRecipes(localCache);
            }
        } catch (e) {
            if (isMounted) {
                console.log(e.message);
                setRecipes([]);
                localStorage.removeItem("popular");
            }
        }

    };

    useEffect(() => {
        fetchRecipe();
        const cleanUp = () => {
            // console.log("cleanUp function");
            setIsLoading(false);
            isMounted = false;
            // source.cancel();
        };
        return cleanUp;
    }, []);

    console.log(recipes);
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="relative">
                <h2 className='font-bold text-xl my-5 uppercase text-sky-900 after:content-[""] after:absolute after:left-1 after:left-[48%] after:block after:h-[0.2rem] after:w-2/4 after:bg-gradient-to-r  after:from-indigo-700'>
                    <span className="relative mr-1">
                        <span className="block absolute -inset-1 rounded-l-xl active" aria-hidden="true"></span>
                        <span className="relative text-white pl-2">pop</span>
                    </span>
                    ular
                </h2>
            </div>
            {
                isLoading ?
                    <h3>Loading....</h3>
                    : (
                        <div className="flex flex-wrap flex-row justify-around items-center w-full">{
                            recipes && recipes.map((recipe =>
                                <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
                            ))}
                        </div>
                    )
            }
        </div>
    );
};

export default Popular;