import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MovieCard = ({ item }) => {
    return (
        <Card className="mt-3 " style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={item.Poster} style={{ maxHeight: '300px', objectFit: 'cover' }} />
            <Card.Body style={{ overflow: 'hidden' }}>
                <strong> <Card.Title className="cardTitle">{item.Title}</Card.Title></strong>
                <Card.Text style={{ color: '#f5f5f5', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.Released}
                    <br/>
                    {item?.Plot && item.Plot.length > 27 ? `${item.Plot.slice(0, 24)}...` : item.Plot}
                </Card.Text>
                <div className="text-center">
                    <Link to={`/view/${item.imdbID}`}>
                        <Button variant="success" className="w-100 text-center">
                            Details
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
