import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyAh5oSKhR_dMqfaN5-PJ9naLHNL25d71vc",
  authDomain: "moviesreact-3a47d.firebaseapp.com",
  databaseURL: "https://moviesreact-3a47d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "moviesreact-3a47d",
  storageBucket: "moviesreact-3a47d.firebasestorage.app",
  messagingSenderId: "146690935541",
  appId: "1:146690935541:web:22520522311267c24853bc",
  measurementId: "G-83Z4HJE2Q4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

export { database };
