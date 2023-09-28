import React, { useEffect, useState } from 'react';
import {get} from '../../../api/index'

const MovieList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await get(
          'popular',
        );
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {data.length > 0 &&
          data.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};

export default MovieList;
