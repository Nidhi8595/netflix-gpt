import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie?.poster_path) return null;

  // TMDB Watch Provider URL (Shows where movie is available)
  const tmdbWatchURL = `https://www.themoviedb.org/movie/${movie.id}/watch`;

  const handleClick = () => {
    window.open(tmdbWatchURL, "_blank"); // Open in a new tab
  };

  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={handleClick}>
      <img alt={movie.title} src={IMG_CDN_URL + movie.poster_path} />
    </div>
  );
};

export default MovieCard;
