import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './BookSearch.css';
import API from "../../utils/API";
import { useSearchContext } from '../../utils/SearchContext';

function BookSearch() {
    const [search, setSearch] = useState("");
    const [state, dispatch] = useSearchContext();

    function handleChange(e){
        const search = e.target.value;
        setSearch(search);
    }

    function handleSubmit(e){
        e.preventDefault();      
        API.searchBook(search)
            .then(res => {
                const stateResults = res.data.items;
                // console.log(stateResults)
                dispatch({
                    type: "search",
                    search: search,
                    results: stateResults
                });
            console.log(state);
            });
    }

    return (
        <Jumbotron className="Container">
            <form >
            <Form.Group>
                <Form.Label>Book</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Book Name" 
                onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
            </form>
        </Jumbotron>
    );
}

export default BookSearch;