import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movie => (
    <Link key={movies[movie].id} to={`/movies/${movies[movie].id}`}>
      <li>{movies[movie].title + " "}</li>
    </Link>
  ));

  return <div>{renderMovies}</div>;
};

export default MoviesList;
