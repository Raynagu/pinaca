import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

// let isMounted = true;
const SearchResult = () => {
    let { key } = useParams();
    const [searchResults, setSearchResults] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSearchResult = async (searchKey) => {
            let bUrl = process.env.REACT_APP_BASE_URL;
            let apiKey = process.env.REACT_APP_API_KEY;
            // let localCache = false;
            // https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2

            setIsLoading(true);
            try {
                // if (isMounted) {
                const response = await axios.get(`${bUrl}/recipes/complexSearch?query=${searchKey}&number=20&apiKey=${apiKey}`);
                // console.log(response.data.results);
                setSearchResults(response.data.results);
                // setIsLoading(false);
                // }
            } catch (e) {
                // if (isMounted) {
                console.log(e.message);
                setSearchResults({});
                // setIsLoading(false);
                // }
            }

            setIsLoading(false);
        };

        getSearchResult(key);

        const cleanUp = () => {
            // console.log("cleanUp function");
            setIsLoading(false);
            // isMounted = false;
            // source.cancel();
        };
        return cleanUp;
    }, [key]);

    // console.log(searchResults);
    // console.log(searchResults.length === 0);
    return (
        <div className="flex flex-wrap flex-row justify-around items-center w-full">
            {isLoading ? <h4 className="font-bold text-sky-900 my-3"> Loading Recipes....</h4> : (

                <>
                    {/* {console.log("Data")} */}
                    {
                        searchResults?.length > 0 ?

                            searchResults?.map(recipe => <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />)

                            :
                            <h4 className="font-bold text-sky-900 my-3">No Recipes found </h4>
                    }
                </>

            )}
        </div>
    );
};

export default SearchResult;