import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './BookSearch.css';
function BookSearch() {
    return (
        <Jumbotron className="Container">
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Book</Form.Label>
                <Form.Control type="text" placeholder="Book Name" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Jumbotron>
    );
}

export default BookSearch;