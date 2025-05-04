import { useMovies } from "./MovieContext";
import MovieItem from "./MovieItem";

function MovieList() {
  const { movies } = useMovies();
  return (
    <div>
      {Object.entries(movies).map(([id, movie]) => (
        <MovieItem key={id} id={id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
