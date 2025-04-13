import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref as dbRef, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBJyRkzdXYi3cYbhXiEPNXbynVYM3twlLM",
  authDomain: "notesapp-1f204.firebaseapp.com",
  databaseURL: "https://notesapp-1f204-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notesapp-1f204",
  storageBucket: "notesapp-1f204.appspot.com",
  messagingSenderId: "1031279050209",
  appId: "1:1031279050209:web:de735f3c932caefc3166a0",
  measurementId: "G-DH97M4WY8Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Fetch all notes
let allNotes = [];

const fetchNotes = async () => {
  const notesRef = dbRef(db, 'notes');
  try {
    const snapshot = await get(notesRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      allNotes = Object.values(data);
      applyFiltersAndDisplay();
    } else {
      document.getElementById("notesDisplay").innerHTML = "<p>No notes found.</p>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const applyFiltersAndDisplay = () => {
  const priorityFilter = document.getElementById("priorityFilter").value.toLowerCase();
  const tagsFilter = document.getElementById("tagsFilter").value.toLowerCase();
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const sortBy = document.getElementById("sortBy").value;

  let filteredNotes = allNotes.filter(note => {
    const matchesPriority = !priorityFilter || note.priority.toLowerCase() === priorityFilter;
    const matchesTags = !tagsFilter || note.tags?.toLowerCase().includes(tagsFilter);
    const matchesSearch = !searchInput || note.title.toLowerCase().includes(searchInput);
    return matchesPriority && matchesTags && matchesSearch;
  });

  // Sorting
  if (sortBy === "priority") {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    filteredNotes.sort((a, b) => priorityOrder[a.priority.toLowerCase()] - priorityOrder[b.priority.toLowerCase()]);
  } else if (sortBy === "date") {
    filteredNotes.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  displayNotes(filteredNotes);
};

const displayNotes = (notes) => {
  const notesDisplay = document.getElementById("notesDisplay");
  notesDisplay.innerHTML = "";

  if (notes.length === 0) {
    notesDisplay.innerHTML = "<p>No notes match your filter.</p>";
    return;
  }

  notes.forEach(note => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note-box");

    noteElement.innerHTML = `
      <h2>${note.title}</h2>
      <p><strong>Priority:</strong> ${note.priority}</p>
      <p><strong>Tags:</strong> ${note.tags}</p>
      <p><strong>Description:</strong><br> ${note.description || "No description provided."}</p>
    `;

    notesDisplay.appendChild(noteElement);
  });
};


document.addEventListener("DOMContentLoaded", () => {
  fetchNotes();
  document.getElementById("priorityFilter").addEventListener("change", applyFiltersAndDisplay);
  document.getElementById("tagsFilter").addEventListener("change", applyFiltersAndDisplay);
  document.getElementById("sortBy").addEventListener("change", applyFiltersAndDisplay);
  document.getElementById("searchInput").addEventListener("input", applyFiltersAndDisplay);
});

