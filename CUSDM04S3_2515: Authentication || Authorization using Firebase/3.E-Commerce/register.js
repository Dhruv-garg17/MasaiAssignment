import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyB57iX9Cc1hrvHKAjPe7Wp8wdlThFJhGoE",
    authDomain: "e-commerce-9bef9.firebaseapp.com",
    projectId: "e-commerce-9bef9",
    storageBucket: "e-commerce-9bef9.firebasestorage.app",
    messagingSenderId: "142525809112",
    appId: "1:142525809112:web:a0dc78b9f2011caa9f32ad",
    measurementId: "G-25GMSLR38R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = user.uid;
            set(ref(db, 'users/' + userId), {
                name: name,
                email: email,
                role: role
            });
            alert("Registration Successful! Please log in.");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
