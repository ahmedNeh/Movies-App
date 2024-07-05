import { useEffect } from "react";

const Movies = () => {
  const getMovie = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b458c5f4t=game")
      .then((resonse) => resonse.json)
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <div>Movies</div>;
};

export default Movies;
