import {useState} from 'react';
import { GiFoodTruck } from 'react-icons/gi';
import {GoSearch} from 'react-icons/go';
import { Link, useNavigate   } from 'react-router-dom';

const Header = () => {
    const [searchKey, setSearchKey] = useState('')
    let navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // searchKey && console.log(searchKey);
        if(searchKey){
        navigate(`/search/${searchKey}`, {replace:true})
        setSearchKey('');
        }
        }
    return (
        <header className='flex flex-col md:flex-row justify-center items-center p-2 text-sky-900'>
            <Link to="/" className='flex justify-center items-baseline justify-self-start'>
                <div className="font-bold text-3xl uppercase font-Covered">pinaca</div>
                <GiFoodTruck className='text-4xl' />
            </Link>
            <div className="flex  justify-center items-center flex-1 w-full">
                <input type="search" name="search" id="search" placeholder="Search Recipe" autoComplete="off" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className='w-4/5 md:w-3/5 lg:w-3/6 px-2 h-8 bg-sky-900 bg-slate-700 text-white block border border-gray-500 rounded-lg outline-none 
                focus:drop-shadow-xl focus:border-slate-500 focus:ring-slate-500 focus:ring-1 md:ml-[-95px]' />
                <GoSearch onClick={handleSearch} className='text-4xl mx-2 cursor-pointer rounded-full hover:bg-sky-900 hover:text-white p-2 transition-all duration-300 ease-in-out'/>
            </div>
        </header>
    );
};

export default Header;