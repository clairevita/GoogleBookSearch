import React, { createContext } from "react";

const SearchContext = createContext({
    search: "",
    results: [],
    saved: []
});

export default SearchContext;
