
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  import { database } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJyRkzdXYi3cYbhXiEPNXbynVYM3twlLM",
    authDomain: "notesapp-1f204.firebaseapp.com",
    databaseURL: "https://notesapp-1f204-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "notesapp-1f204",
    storageBucket: "notesapp-1f204.firebasestorage.app",
    messagingSenderId: "1031279050209",
    appId: "1:1031279050209:web:de735f3c932caefc3166a0",
    measurementId: "G-DH97M4WY8Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db=firebaseConfig.database();

  document.getElementById('notes-form').addEventListener("submit", function(event){
    event.preventDefault();

    const tittle=document.getElementById("tittle").ariaValueMax;
    const description=document.getElementById("description").ariaValueMax;
    const tags=Array.from(document.getElementById("tags").selectedOptions).map(option=>option.value);
    const priority=document.getElementById("priority").value;
    const image = document.getElementById("image").files[0];

    if(!tittle || description){
        alert("Please fill in all requires fields.");
        return;
    }

    const note={
        tittle,
        description,
        tags,
        priority,
    }

    if(image){
        const storageRef=storage.ref('note-image/' + image,name);
        const uploadTask=storageRef.put(image);

        uploadTask.on('state_changed',
            (snapshot)=>{
                console.log("image uploaded");
            },(error)=>{
                console.error("Image upload failed",error);
            },
            ()=>{
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                    note.imageUrl=downloadURL;
                    saveNoteToFirebase(note);
                })
            }
        )
    }else{
        saveNoteToFirebase(note);
    }
    document.getElementById("notes-form").reset();
    document.getElementById("success-message").classList.remove("hidden");

    setTimeout(()=>{
        document.getElementById("success-message").classList.add("hidden");
    },3000)
  })

  function saveNoteToFirebase(note){
    const noteId=Date.now();
    const noteRef=db.ref('notes/'+noteId);
    noteRef.set(note,(error)=>{
        if(error){
            console.error("Error saving note to firebase:",error);
        }else{
            console.log("Note saves to firebase successfully!");
        }
    })
  }
