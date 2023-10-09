import React, { useEffect, useState } from "react";
import classes from "./MovieList.module.scss";
import { get } from "../../../api/index";
import Loader from "../../icons/Loader";

const MovieList = ({ search, setSearch }) => {
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const uniqueMovieIds = new Set();
  const [results, setResults] = useState(false);

  async function fetchMovies() {
    try {
      setLoading(true);
      const response = await get("movie/popular", { page });
      console.log("res", response);
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
  async function fetchMoviesSearch() {
    try {
      setData([]);

      console.log("entered movie:");
      setLoading(true);

      const apiKey = "c36894549172755979bb9bdfab24093e";

      const searchQuery = encodeURIComponent(search);
      console.log("after enccoding:", searchQuery);

      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`;

      console.log("after url:", apiUrl);

      const response = await fetch(apiUrl);
      console.log(response);

      if (!response.ok) {
        console.log("here", !response.ok);

        throw new Error(`Error fetching movies. Status: ${response.status}`);
      }
      console.log("Response:");
      const responseData = await response.json();
      console.log("Response:", responseData);

      const newMovies = responseData.results
  

      setDataTwo(newMovies);
      console.log(data);

      newMovies.forEach((movie) => {
        uniqueMovieIds.add(movie.id);
      });

      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (search === "" || !search) {
      fetchMovies();
    } else {
      setResults(true);
      fetchMoviesSearch(search);
    }
  }, [search]);

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

  return (
    <section className={classes.main}>
      {!results ? (
        <>
          <h1>Popular Movies</h1>
          <div className={classes.movieGrid}>
            {data.map((movie) => (
              <div key={movie.id} className={classes.poster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
                <div className={classes.details}>
                  <h2>{movie.title}</h2>
                  <h3>{movie.release_date.slice(0, 4)}</h3>
                  <span>{movie.vote_average}</span>

                  {/* <div>{movie.genre_ids.map((genre)=> (
                <div>{genre}</div>
              ))}</div> */}
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))}
            <div className={classes.loaderContainer}></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <h1>Results</h1>
          <div className={classes.movieGrid}>
            {dataTwo.map((movie) => (
              <div key={movie.id} className={classes.poster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="img"
                />
                <div className={classes.details}>
                  <h2>{movie.title}</h2>
                  <h3>{movie.release_date.slice(0, 4)}</h3>
                  <span>{movie.vote_average}</span>

                  {/* <div>{movie.genre_ids.map((genre)=> (
              <div>{genre}</div>
            ))}</div> */}
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))}
            <div className={classes.loaderContainer}></div>
          </div>
        </>
      )}
      {loading && <Loader />}
    </section>
  );
};

export default MovieList;
