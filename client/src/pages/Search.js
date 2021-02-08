import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';
import Results from '../components/Results';

function Search() {
    
    return (
        <>
        <BookSearch />
        <Results />
        </>
    )
}

export default Search;