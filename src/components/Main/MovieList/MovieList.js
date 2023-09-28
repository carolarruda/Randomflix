import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../../../api/index';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
console.log(getPopularMovies());    

  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {/* <ul>
        {movies.length >0 && movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default MovieList;
