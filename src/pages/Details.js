import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// let isMounted = true;
const Details = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const summary = info?.summary;
    useEffect(() => {
        // let localCache = JSON.parse(localStorage.getItem("item"));
        let localCache = false;
        let bUrl = process.env.REACT_APP_BASE_URL;
        let apiKey = process.env.REACT_APP_API_KEY;
        const getRecipeInfo = async (id) => {
            setIsLoading(true);
            try {
                if (!localCache) {
                    const response = await axios.get(`${bUrl}recipes/${id}/information?includeNutrition=false&&apiKey=${apiKey}`);
                    console.log(response.data);
                    setInfo(response.data);
                    localStorage.setItem("item", JSON.stringify(response.data));
                } else {
                    setInfo(localCache);
                    console.log(localCache);
                }

            } catch (e) {
                console.log(e.message);
                localStorage.removeItem("item");
            }
            setIsLoading(false);
        };



        getRecipeInfo(id);

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
                <h4 className='font-bold text-lg text-sky-900 text-center'>Loading recipe details..</h4>
                : (<div className='flex flex-col justify-center items-center rounded-xl shadow-md border overflow-hidden'>
                    <h2 className='font-bold text-xl my-2 mt-5 md:mt-0 text-sky-900'>{info.title}</h2>
                    <div className="flex flex-col md:flex-row p-4">
                        <div className="flex-1">
                            <img src={info.image} alt={info && info.title} className="rounded-xl shadow-md" />
                            <h2 className='font-bold underline text-md my-2 mt-5 text-sky-900'>Ingredients:</h2>
                            <ol className='flex flex-wrap justify-start'>
                                {
                                    info.extendedIngredients.map((ingredient) => <li key={ingredient.id} className="text-md p-1 shadow-md rounded-md m-1">{ingredient.original}</li>)
                                }
                            </ol>

                        </div>
                        <div className="flex flex-col justify-start items-start flex-1 p-1 px-2">
                            <h2 className='font-bold underline text-md my-2 mt-5 md:mt-0 text-sky-900'>Summary:</h2>

                            <h4 dangerouslySetInnerHTML={{ __html: summary }} className="text-justify"></h4>

                            <h2 className='font-bold underline text-md my-2 mt-5 text-sky-900'>Instructions:</h2>
                            <div dangerouslySetInnerHTML={{ __html: info.instructions }} className="instructions px-4"></div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};




export default Details;