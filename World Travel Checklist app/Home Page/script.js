//Checks the password from the input field and redirects to the restricted link if the password is correct
// script.js
function checkPasswordAleena() {
    const enteredPassword = document.getElementById("passwordInputAleena").value;
    const correctPassword = "Munchy"; // Replace with your actual password

    if (enteredPassword === correctPassword) {
        // Redirect to the restricted link if the password is correct
        window.location.replace("/Life Experiences/Aleena.html");
    } else {
        // Display an alert if the password is incorrect
        alert("Incorrect password. Please try again.");
    }
}

function checkPasswordMen() {
    const enteredPassword = document.getElementById("passwordInputMen").value;
    const correctPassword = "ZeroBitches"; // Replace with your actual password

    if (enteredPassword === correctPassword) {
        // Redirect to the restricted link if the password is correct
        window.location.replace("/Life Experiences/TheBoys.html");
    } else {
        // Display an alert if the password is incorrect
        alert("Incorrect password. Please try again.");
    }
}


