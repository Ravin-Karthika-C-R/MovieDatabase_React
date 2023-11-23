import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import './Home.css';

const API_URL = "https://www.omdbapi.com/?apikey=89df110f";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch default movies when the component mounts
    fetchDefaultMovies();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      // Fetch movies based on the search query
      fetch(`${API_URL}&s=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            const promises = data.Search.map((movie) =>
              fetch(`${API_URL}&i=${movie.imdbID}`).then((res) => res.json())
            );

            Promise.all(promises)
              .then((detailedMovies) => {
                setMovies(detailedMovies);
              })
              .catch((error) => {
                console.error("Error fetching detailed data:", error);
                setMovies([]);
              });
          } else {
            setMovies([]);
          }
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
          setMovies([]);
        });
    } else {
      // If there is no search query, fetch default movies
      fetchDefaultMovies();
    }
  }, [searchQuery]);

  const fetchDefaultMovies = () => {
    const defaultMovies = ["oppenheimer", "the creator", "five nights", "expend4bles","harry potter","loki","mission impossible","Avatar"];
  
    const promises = defaultMovies.map((title) =>
      fetch(`${API_URL}&t=${title}`).then((res) => res.json())
    );
  
    Promise.all(promises)
      .then((detailedMovies) => {
        setMovies(detailedMovies);
      })
      .catch((error) => {
        console.error("Error fetching detailed data:", error);
        setMovies([]);
      });
  };

  return (
    <div className="Home container">
      <h2 className="text-center mt-3">The Movie Database</h2>
      <input
        className="form-control text-white"
        placeholder="Start typing to show results..."
        id="inputBox"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row>
        {movies.map((movie) => (
          <Col key={movie.imdbID} className="ps-3 mt-3 p-2" lg={3} md={4} sm={6}>
            <MovieCard item={movie}></MovieCard>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
