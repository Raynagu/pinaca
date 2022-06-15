import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';


let isMounted = true;

const Trending = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRecipe = async () => {
        let localCache = JSON.parse(localStorage.getItem("trending"));
        const apiKey = `&apiKey=${process.env.REACT_APP_API_KEY}`;
        const qUrl = 'recipes/random?number=8&tags=vegetarian,dessert';
        const url = `${process.env.REACT_APP_BASE_URL}${qUrl}${apiKey}`;

        try {
            if (isMounted && !localCache) {
                const res = await axios.get(url);
                setRecipes(res.data.recipes);
                localStorage.setItem("trending", JSON.stringify(res.data.recipes));
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
                localStorage.removeItem("trending");
            }
        }

    };

    useEffect(() => {
        fetchRecipe();

        const cleanUp = () => {
            // console.log("cleanUp function");
            // setTimeout(() => {

            //     setIsLoading(false);
            // }, 2000);
            setIsLoading(false);
            isMounted = false;
            // source.cancel();
        };
        return cleanUp;
    }, []);

    return (
        <div className='flex flex-col justify-center items-center w-full overflow-hidden pb-2 mt-5'>
            <div className="relative">
                <h2 className='font-bold text-xl my-5 uppercase text-sky-900 after:content-[""] after:absolute after:right-1 after:right-[40%] after:block after:h-[0.2rem] after:w-3/5 after:bg-gradient-to-l  after:from-indigo-700'>Trend
                    <span className="relative ml-1">
                        <span className="block absolute -inset-1 rounded-r-xl bg-sky-900 active" aria-hidden="true"></span>
                        <span className="relative text-white pr-2">ing</span>
                    </span>
                </h2>
            </div>
            {
                isLoading ?
                    <h3>Loading....</h3>
                    : (
                        <Splide options={{
                            rewind: false, trimSpace: "move", start: 2, perPage: 4, focus: 'center', width: "100%", pagination: false,
                            padding: "5rem",
                            breakpoints: {
                                640: {
                                    gap: "18rem",
                                },
                                768: {
                                    gap: "15rem"
                                },
                                1024: {
                                    perPage: 2,
                                },
                                1280: {
                                    perPage: 3,
                                }
                            }
                        }} aria-label="React Splide Example">
                            {recipes && recipes.map((recipe) => <SplideSlide key={recipe.id} ><RecipeCard id={recipe.id} title={recipe.title} image={recipe.image} /> </SplideSlide>)}
                        </Splide>
                    )
            }
        </div>
    );
};

export default Trending;