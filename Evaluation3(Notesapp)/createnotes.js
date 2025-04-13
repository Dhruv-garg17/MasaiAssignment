// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getDatabase, ref as dbRef, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app);

// Form submit handler
document.getElementById('notes-form').addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("tittle").value.trim();
  const description = document.getElementById("description").value.trim();
  const tags = Array.from(document.getElementById("tags").selectedOptions).map(option => option.value);
  const priority = document.getElementById("priority").value;
  const image = document.getElementById("image").files[0];

  if (!title || !description) {
    alert("Please fill in all required fields.");
    return;
  }

  const note = {
    title,
    description,
    tags,
    priority,
    timestamp: Date.now()
  };

  if (image) {
    const imageRef = storageRef(storage, 'note-images/' + image.name);
    uploadBytes(imageRef, image)
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((downloadURL) => {
        note.imageUrl = downloadURL;
        saveNoteToFirebase(note);
      })
      .catch((error) => {
        console.error("Image upload failed:", error);
        alert("Image upload failed.");
      });
  } else {
    saveNoteToFirebase(note);
  }

  document.getElementById("notes-form").reset();
  const msg = document.getElementById("success-message");
  msg.classList.remove("hidden");

  setTimeout(() => {
    msg.classList.add("hidden");
  }, 3000);
});

// Save to Firebase Realtime Database
function saveNoteToFirebase(note) {
  const noteId = Date.now().toString();
  const noteRef = dbRef(db, 'notes/' + noteId);
  set(noteRef, note)
    .then(() => {
      console.log("Note saved to Firebase successfully!");
    })
    .catch((error) => {
      console.error("Error saving note to Firebase:", error);
    });
}
