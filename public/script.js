// public/script.js

// Import the necessary Firebase services
import { auth, storage } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Authenticate with Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Hide login and show birthday content
            document.getElementById("loginContainer").style.display = "none";
            document.getElementById("birthdayContainer").style.display = "block";
        })
        .catch((error) => {
            errorMessage.textContent = error.message; // Show error message
        });
}

window.showPDF = () => {
    const pdfRef = ref(storage, 'Cards_on_the_table.pdf'); // Create a reference to the PDF file

    getDownloadURL(pdfRef) // Get the download URL
        .then((url) => {
            const isMobile = /Mobi|Android/i.test(navigator.userAgent); // Detect if the user is on mobile
            
            if (isMobile) {
                // For mobile devices, create a link to trigger download
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Cards_on_the_table.pdf'; // Set the filename
                document.body.appendChild(link);
                link.click(); // Trigger the download
                document.body.removeChild(link); // Remove the link after triggering download
            } else {
                // For desktop, open the PDF in a new tab
                window.open(url, "_blank");
            }
        })
        .catch((error) => {
            console.error("Error fetching PDF: ", error); // Log any errors
            alert("Error fetching PDF. Please try again later."); // Notify user
        });
}

// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginButton').addEventListener('click', login);
});
