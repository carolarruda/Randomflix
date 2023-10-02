import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.scss";
import { get } from "../../../api/index";

const MovieList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await get("popular");
        setData(response.data.results);
        console.log(data);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    }

    fetchMovies();
  }, [data]);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className={classes.movieGrid}>
        {data.length > 0 &&
          data.map((movie) => (
            <div className={classes.poster}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="img"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
