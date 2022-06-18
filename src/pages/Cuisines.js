import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useSearchParams } from 'react-router-dom';
import CuisineType from '../components/CuisineType';
import RecipeCard from '../components/RecipeCard';

// let isMounted = true;
const Cuisines = () => {
    const [info, setInfo] = useState({});
    // const [ccuisineType, setCuisineType] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    let { type } = useParams();
    const [searchParams] = useSearchParams();
    const cuisineType = searchParams.get("cuisine") || 'American';


    useEffect(() => {
        const getCuisines = async (type, cuisine = 0) => {
            let bUrl = process.env.REACT_APP_BASE_URL;
            let apiKey = process.env.REACT_APP_API_KEY;
            let localCache = false;

            setIsLoading(true);

            try {
                if (!localCache) {
                    const response = await axios.get(`${bUrl}recipes/complexSearch?type=${type}&cuisine='${cuisineType}'&number=20&apiKey=${apiKey}`);
                    // let response = null;
                    // if(cuisineType){
                    //     response = await axios.get(`${bUrl}recipes/complexSearch?type=${type}&cuisine='${cuisineType}'&number=20&apiKey=${apiKey}`);
                    // }else{
                    //     response = await axios.get(`${bUrl}recipes/complexSearch?type=${type}&number=2&apiKey=${apiKey}`);
                    // }
                    // console.log(response.data.results);
                    setInfo(response.data.results);
                } else {
                    setInfo(localCache);
                }
            } catch (e) {
                console.log(e.message);
            }

            setIsLoading(false);
        };


        getCuisines(type, cuisineType && cuisineType);


        const cleanUp = () => {
            // console.log("cleanUp function");
            setIsLoading(false);
            // isMounted = false;
            // source.cancel();
        };
        return cleanUp;
    }, [type, cuisineType]);



    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <CuisineType cuisineType={type} cuisine={cuisineType} />

            <div className="p-2 w-full text-center p-2">
                {
                    !isLoading ?
                        (
                            <div className="flex flex-wrap flex-row justify-around items-center w-full">
                                {
                                    info.length === 0 && <h4 className="font-bold text-sky-900 my-3">No Recipes found </h4>
                                }
                                {
                                    info.map(recipe => <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />)
                                }
                            </div>
                        )
                        : <h4 className="font-bold text-sky-900 my-3"> Loading....</h4>
                }
            </div>
        </div>
    );
};

export default Cuisines;