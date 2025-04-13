import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
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

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = user.uid;
            get(ref(db, 'users/' + userId)).then((snapshot) => {
                const role = snapshot.val().role;
                localStorage.setItem("role", role);
                if (role === "admin") {
                    window.location.href = "admin-dashboard.html";
                } else {
                    window.location.href = "user-dashboard.html";
                }
            });
        })
        .catch((error) => {
            alert("Incorrect email or password!");
        });
});
