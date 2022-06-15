import React from 'react';
import { useParams } from 'react-router-dom';

const SearchResult = () => {
    let { key } = useParams();
    return (
        <div>Search for - {key}</div>
    );
};

export default SearchResult;