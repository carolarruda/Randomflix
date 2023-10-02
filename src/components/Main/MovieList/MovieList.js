import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.scss";
import { get } from "../../../api/index";

const MovieList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchMovies() {
    try {
      setLoading(true);
      const response = await get("popular", { page });
      setData((prevData) => [...prevData, ...response.data.results]);
      setPage((prevPage) => prevPage + 1); 
console.log(data);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <section className={classes.main}>
      <h1>Popular Movies</h1>
      <div className={classes.movieGrid}>
        {data.map((movie) => (
          <div key={movie.id} className={classes.poster}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="img"
            />
            <div>
              <h2>{movie.title}</h2>
              <h3>{movie.release_date.slice(0, 4)}</h3>
              <span>{movie.vote_average}</span>
              <div>
           
              </div>
            </div>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </section>
  );
};

export default MovieList;
