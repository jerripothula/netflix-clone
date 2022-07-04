import React, { useState, useEffect } from "react";
import { getData } from "../get-Data";
import "../CSS/Row.css";

//const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  //var url = fetchUrl;
  console.log(title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(`${fetchUrl}.json`, "json");
        setMovies(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
