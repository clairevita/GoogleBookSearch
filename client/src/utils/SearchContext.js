import React, { createContext, useContext, useReducer } from "react";

const SearchContext = createContext(
 {
    search: "fuck",
    results: [],
    saved: []
}
);
const { Provider } = SearchContext;

function reducer (state, action) {
    switch (action.type) {
        case "search":
            return {
                search: action.search,
                results: action.results,
                saved: action.saved
            };
        default:
            return state
        }
}

function SearchProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
    return <Provider value={[state, dispatch]} {...props} />
};

function useSearchContext() {
    return useContext(SearchContext);
}

export { SearchProvider, useSearchContext };
