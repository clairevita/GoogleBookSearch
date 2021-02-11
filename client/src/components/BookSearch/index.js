import React, { Component, useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './BookSearch.css';
import API from "../../utils/API";

class BookSearch extends Component {

    state = {
        books: [],
        q: "",
        message: "Search For A Book To Begin!"
    };

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
<<<<<<< HEAD
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getBooks();
    }

=======
    }

    
    handleSubmit(e) {

    }
>>>>>>> cd6b6c2a369c1706f6765ac3c8fc9d9377d158c8
    render() {
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

}

export default BookSearch;