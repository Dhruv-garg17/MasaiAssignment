import { useState, useEffect } from "react";
import { useMovies } from "./MovieContext";
import { useNavigate, useParams } from "react-router-dom";

function AddMovie() {
  const { id } = useParams();
  const { movies, addMovie, editMovie } = useMovies();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", description: "", year: "" });

  useEffect(() => {
    if (id && movies[id]) {
      setForm(movies[id]);
    }
  }, [id, movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description || isNaN(form.year)) {
      alert("Please fill all fields correctly.");
      return;
    }
    if (id) {
      editMovie(id, form);
    } else {
      addMovie(form);
    }
    navigate("/movies");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="year" value={form.year} onChange={handleChange} placeholder="Release Year" />
      <button type="submit">{id ? "Update" : "Add"} Movie</button>
    </form>
  );
}

export default AddMovie;
