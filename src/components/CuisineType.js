import { Link } from 'react-router-dom';

const CuisineType = ({ cuisineType, cuisine }) => {
  return (
    <div className="w-full md:w-1/4 self-start p-2 mt-4">
      <ul className='flex flex-row md:flex-col justify-center items-end'>
        <Link to={`/cuisines/${cuisineType}?cuisine=American`} className={`text-sky-900 font-medium ${cuisine.toLowerCase() === "american" && 'active text-white'} px-2 rounded-lg shadow m-1`}>American</Link>
        <Link to={`/cuisines/${cuisineType}?cuisine=Indian`} className={`text-sky-900 font-medium ${cuisine.toLowerCase() === "indian" && 'active text-white'} px-2 rounded-lg shadow m-1`}>Indian</Link>
        {/* <Link to={`/cuisines/${cuisineType}?cuisine=French`} className={`text-sky-900 font-medium ${cuisine.toLowerCase() ==="french" && 'active text-white'} px-2 rounded-lg shadow m-1`}>French</Link> */}
        <Link to={`/cuisines/${cuisineType}/?cuisine=Italian`} className={`text-sky-900 font-medium ${cuisine.toLowerCase() === "italian" && 'active text-white'} px-2 rounded-lg shadow m-1`}>Italian</Link>
        {/* <Link to={`/cuisines/${cuisineType}/?cuisine=Mexican`} className={`text-sky-900 font-medium ${cuisine.toLowerCase() ==="mexican" && 'active text-white'} px-2 rounded-lg shadow m-1`}>Mexican</Link> */}
      </ul>
    </div>
  );
};

export default CuisineType;