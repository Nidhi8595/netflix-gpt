import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" -mt-5 md:-mt-56 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Latest"} movies={movies.latestMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcoming} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;