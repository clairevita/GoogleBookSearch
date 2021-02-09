import React from "react";
import { Card, Row, Col, Button, Image } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useSearchContext } from '../../utils/SearchContext';
import './Results.css';
import API from '../../utils/API';

function Results() {
    const [state, dispatch] = useSearchContext();
    let results = state.results;

    function handleSave(book) {
        API.saveBook(book);
        console.log(book)
    }

    return (
        <div>
            <Jumbotron className="Container">
                {!state.search ?
                    <h5 style={{ color: "#2ab4e3" }}>Search for a Book</h5>
                    :
                    !state.results ?
                    <h5 style={{ color: "#2ab4e3" }}>No Results Were Found</h5>
                    :
                    results.map((book) => (
                        
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
                                        onClick={() => handleSave(book)}
                                        className="mr-2 mb-2"
                                    >Save Book</Button>
                                </Col>
                            </Row>
                        </Card>
                    ))}
            </Jumbotron>
        </div>
    );
}
export default Results;