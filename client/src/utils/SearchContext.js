import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "search":
            return {
                ...state,
                results: []
            };
        default:
            return state;
    }
}

const SearchContext = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        search: "",
        results: [],
        saved: []
    })
    return <Provider value={[state, dispatch]} {...props} />
};

export default SearchContext;
