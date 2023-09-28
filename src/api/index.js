const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzY4OTQ1NDkxNzI3NTU5NzliYjliZGZhYjI0MDkzZSIsInN1YiI6IjY1MGQ2ZWNiNDRlYTU0MDEwMDEyNDBjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MuCFbw28NkFXcELXABfd0SQHCinns7cubxkIjM2SY68";

const url = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    fetch(`${url}/movie/popular?language=en-US&page=1`, options)
      .then((response) => response.json())
      .then(data => (data.results))
    //   .then((data) => data.results);
  } catch (error) {
    console.log(error);
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};


