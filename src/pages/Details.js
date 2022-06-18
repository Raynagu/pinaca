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
        let bUrl = process.env.REACT_APP_BASE_URL;
        let apiKey = process.env.REACT_APP_API_KEY;
        const getRecipeInfo = async (id) => {
            try {
                const response = await axios.get(`${bUrl}recipes/${id}/information?includeNutrition=false&&apiKey=${apiKey}`);
                // console.log(response.data);
                setInfo(response.data);

            } catch (e) {
                console.log(e.message);

            }
            // setIsLoading(false);
        };


        setIsLoading(true);
        getRecipeInfo(id);
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
                            <img src={info.image} alt={info && info.title} className="rounded-xl shadow-md" />

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