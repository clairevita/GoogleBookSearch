import React from 'react';
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useSearchContext } from '../../utils/SearchContext';
import './SavedBooks.css';
import API from '../../utils/API';

function SavedBooks() {
    const [state, dispatch] = useSearchContext();
    
    return (
        <Jumbotron className="Container">
            {!state.saved ?
            <h5 style={{ color: "#2ab4e3" }}>When You Save a Book You'll Find it Here!</h5>
            :
            saved.map((book) => (
                <Card className="justify-content-sm-center m-3 p-3" key={book.volumeInfo.link}>
                    <Row>
                        <Col sm={2} className="text-center p-2">
                            <Image
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt={book.volumeInfo.title}
                                rounded
                                fluid
                            />
                        </Col>
                        <Col sm={10} className="p-2">
                            <h5>{book.volumeInfo.title}</h5>
                            <h6>by {book.volumeInfo.authors}</h6>
                            <p>{book.volumeInfo.description}</p>
                            <Button
                                href={book.volumeInfo.infoLink}
                                target="blank"
                                className="mr-2 mb-2"
                            >More Info</Button>
                            <Button
                                // onClick={() => this.handleDelete(book)}
                                className="mr-2 mb-2"
                            >Delete Book</Button>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Jumbotron>
    )
}
export default SavedBooks;