import React, { useState, useEffect } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function SingleView() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=89df110f`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <Row className="mt-5 container-fluid">
        <Col className="d-flex align-items-center justify-content-center" md={6}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid mt-5"
            style={{ maxHeight: '100%', width: 'auto', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Col>
        <Col md={5}>
          <h1 className="mt-2 text-center"> <span style={{ color: "#F94C10" }}>Movie: {movie.Title}</span> </h1>
          <ListGroup className="mt-3">
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Released</span>: {movie.Released}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Genre</span>: {movie.Genre}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Director</span>: {movie.Director}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Writer</span>: {movie.Writer}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Actors</span>: {movie.Actors}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Plot</span>: {movie.Plot}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Language</span>: {movie.Language}
            </ListGroup.Item>
            <ListGroup.Item className="mt-3">
              <span style={{ color: "#F94C10" }}>Ratings</span>: {movie.Ratings?.[0]?.Value || "N/A"}
            </ListGroup.Item>
          </ListGroup>
          <Link to={'/'}>
          <Button className="btn btn-secondary mt-3 ">Go Back</Button>

          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default SingleView;
