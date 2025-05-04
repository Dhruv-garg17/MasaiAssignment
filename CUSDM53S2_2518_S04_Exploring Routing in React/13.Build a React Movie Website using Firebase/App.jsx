import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMoviePage from "./AddMoviePage";
import MoviesPage from "./MoviesPage";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="/add-movie/:id" element={<AddMoviePage />} /> {/* Edit */}
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
