import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// let isMounted = true;
const Details = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const [recipeCard, setRecipeCard] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const summary = info?.summary;
    useEffect(() => {
        let bUrl = process.env.REACT_APP_BASE_URL;
        let apiKey = process.env.REACT_APP_API_KEY;
        // let localCache = JSON.parse(localStorage.getItem("details"));
        // let localCacheCard = JSON.parse(localStorage.getItem("detailsCard"));

        // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
        const getRecipeInfo = async (id) => {
            // setIsLoading(true);
            // id = 632573;
            try {
                // if (isMounted) {
                const response = await axios.get(`${bUrl}recipes/${id}/information?includeNutrition=false&&apiKey=${apiKey}`);
                // console.log(response.data);
                setInfo(response.data);
                // localStorage.setItem("details", JSON.stringify(response.data));
                // }
            } catch (e) {
                // if (isMounted) {
                console.log(e.message);

                // localStorage.removeItem("details");
                // }
            }
            // setIsLoading(false);
        };

        const getRecipeCard = async (id) => {
            // https://api.spoonacular.com/recipes/4632/card
            // setIsLoading(true);
            // https://api.spoonacular.com/recipes/641166/nutritionLabel
            try {
                const resp = await axios.get(`${bUrl}recipes/${id}/nutritionWidget?apiKey=${apiKey}`);
                console.log(resp.data);
                setRecipeCard(resp.data);
                // localStorage.setItem("detailsCard", JSON.stringify(resp.data.url));

            } catch (e) {
                console.log(e.message);
                // localStorage.removeItem("detailsCard");

            }
            // setIsLoading(false);
        };


        setIsLoading(true);
        getRecipeInfo(id);
        getRecipeCard(id);
        setIsLoading(false);

        const cleanUp = () => {
            // console.log("cleanUp function");
            setIsLoading(false);
            // isMounted = false;
            // source.cancel();
        };
        return cleanUp;

    }, [id]);

    return (
        <div className='m-5'>
            {isLoading ?
                <h4>Loading recipe informations</h4>
                : (
                    <div className="flex flex-col md:flex-row rounded-xl shadow-md border overflow-hidden p-4">
                        <div className="flex flex-1">
                            {/* <img src={recipeCard} alt={info && info.title} /> */}
                            <div dangerouslySetInnerHTML={{ __html: recipeCard }}></div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-1 p-1 px-2">
                            <h2 className='font-bold underline text-lg my-2 mt-5 md:mt-0 text-sky-900'>{info.title}</h2>

                            <h4 dangerouslySetInnerHTML={{ __html: summary }} className="text-justify"></h4>
                        </div>
                    </div>
                )
            }
        </div>
    );
};




export default Details;