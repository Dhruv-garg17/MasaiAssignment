const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
let debounceTimer;

input.addEventListener("input", () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const query = input.value.trim();

    if (query) {
      fetchMovies(query);
    } else {
      resultsDiv.innerHTML = "";
    }
  }, 500);
});

function fetchMovies(query) {
  const apiKey = "6a53bc43"; 
  const url = `https://www.omdbapi.com/?apikey=${6a53bc43}&s=${query}`;
 

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovies(data.Search);
      } else {
        resultsDiv.innerHTML = `<p>No movies found</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultsDiv.innerHTML = `<p>Error fetching movies.</p>`;
    });
}

function displayMovies(movies) {
  resultsDiv.innerHTML = "";
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.textContent = movie.Title;
    resultsDiv.appendChild(div);
  });
}
