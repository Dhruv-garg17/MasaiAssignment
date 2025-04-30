import React, { useState, useEffect } from 'react';
import './App.css';  

function App() {
  const [joke, setJoke] = useState(null); 
  const [loading, setLoading] = useState(true); 

  // Fetch joke from the API
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data); 
    } catch (error) {
      console.error("Error fetching the joke:", error);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <div className="card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>Joke of the Moment</h2>
            <p><strong>Setup:</strong> {joke.setup}</p>
            <p><strong>Punchline:</strong> {joke.punchline}</p>
            <button onClick={fetchJoke}>Get Another Joke</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
