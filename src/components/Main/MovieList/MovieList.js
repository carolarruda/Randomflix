import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.scss";
import { get } from "../../../api/index";
import Loader from '../../icons/Loader'

const MovieList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const uniqueMovieIds = new Set();

  async function fetchMovies() {
    try {


      setLoading(true);
      

      const response = await get("popular", { page });

      const newMovies = response.data.results.filter(
        (movie) => !uniqueMovieIds.has(movie.id)
      );

      setData((prevData) => [...prevData, ...newMovies]);
      newMovies.forEach((movie) => {
        uniqueMovieIds.add(movie.id);
      });

      setPage((prevPage) => prevPage + 1);

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
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight - 100 
      ) {
        fetchMovies();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [page]);



  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       fetchMovies();
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [page]);

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
              <div></div>
            </div>
          </div>
        ))}
        {loading && <Loader/>}
      </div>
    </section>
  );
};

export default MovieList;
