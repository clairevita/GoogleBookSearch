import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './BookSearch.css';
import SearchContext from '../../utils/SearchContext';

function BookSearch() {

    const [book, setBook] = useState("");
    const [results, setResults] = useState([]);

    function handleChange(e){
        const book = e.target.value;
        setBook(book);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(book);

    }

    return (
        <Jumbotron className="Container">
            <form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Book</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Book Name" 
                onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </form>
        </Jumbotron>
    );
}

export default BookSearch;