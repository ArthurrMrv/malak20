
  // Set your password here
const birthdayPassword = process.env.PASSWORD;

function validatePassword() {
  const enteredPassword = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Check if the password is correct
  if (enteredPassword === birthdayPassword) {
    // Hide the login form and show the birthday content
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("birthdayContainer").style.display = "block";
  } else {
    // Display an error message
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
}

function showPDF() {
    window.open("Cards_on_the_table.pdf", "_blank");
  }
