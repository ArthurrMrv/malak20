// Import the necessary functions from the Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyC5DAEThBJYWQALlhnhGTYZ5IwJaHX5rS4",
    authDomain: "malak20-31319.firebaseapp.com",
    projectId: "malak20-31319",
    storageBucket: "malak20-31319.appspot.com",
    messagingSenderId: "508834742165",
    appId: "1:508834742165:web:5d6772132556ef7317809c"
    // measurementId: "G-CEQL12VVX2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get instances of Firebase services
const auth = getAuth(app);
const storage = getStorage(app);

// Export the auth and storage instances for use in other modules
export { auth, storage };
