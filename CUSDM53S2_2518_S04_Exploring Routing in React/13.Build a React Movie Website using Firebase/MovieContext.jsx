import { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase/config";
import { ref, onValue, set, remove, update, push } from "firebase/database";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    const moviesRef = ref(database, "movies/");
    onValue(moviesRef, (snapshot) => {
      setMovies(snapshot.val() || {});
    });
  }, []);

  const addMovie = (movie) => {
    const newMovieRef = push(ref(database, "movies/"));
    set(newMovieRef, movie);
  };

  const editMovie = (id, updatedMovie) => {
    update(ref(database, `movies/${id}`), updatedMovie);
  };

  const deleteMovie = (id) => {
    remove(ref(database, `movies/${id}`));
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, editMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
