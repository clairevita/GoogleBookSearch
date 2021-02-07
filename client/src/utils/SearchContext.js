import React, { createContext, useContext, useReducer } from "react";

const SearchContext = createContext();
const { Provider } = SearchContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return {
                ...state,
                results: action.results
            };
        default:
            return state;
    }
}

const SearchProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        search: "",
        results: [],
        saved: []
    });
    return <Provider value={[state, dispatch]} {...props} />
};

const useSearchContext = () => {
    return useContext(SearchContext);
}

export { SearchProvider, useSearchContext };
