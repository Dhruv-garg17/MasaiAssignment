import { useMovies } from "../context/MovieContext";
import { Link } from "react-router-dom";

function MovieItem({ id, movie }) {
  const { deleteMovie } = useMovies();
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>{movie.year}</p>
      <Link to={`/add-movie/${id}`}>Edit</Link>
      <button onClick={() => deleteMovie(id)}>Delete</button>
    </div>
  );
}

export default MovieItem;
