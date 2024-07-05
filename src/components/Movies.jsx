import { useEffect, useState } from "react";

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA3MmE4NGM3OTJiMDUyMGEyYzg2NDg3Mjc1Y2IwMCIsIm5iZiI6MTcyMDE5MzMwNS42NjM2MDgsInN1YiI6IjY2ODdmMGU5NzkxYzIyNzcyNDkzNzAzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MMjX5LMKvviAsSLkBulv6CR2SS4TBNnZwjZM8T1t8JA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);
  return (
    <div>
      {movieList.map((movie) => {
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}
`}
        />;
        <h1>{movie.title}</h1>;
      })}
    </div>
  );
};

export default Movies;
