import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMoviePage from "./pages/AddMoviePage";
import MoviesPage from "./pages/MoviesPage";
import { MovieProvider } from "./context/MovieContext";

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
