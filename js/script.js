welcomeMessage();

// Welcome Message
function welcomeMessage() {
    // Prompt user for their name
    let username = prompt("Enter your name:");
    // Display the name in the welcome message
    if (username) {
        document.getElementById("username").textContent = username;
    } else {
        document.getElementById("username").textContent = "Guest";
    }
}

// Form Validation
function validateForm() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields."); // Alert if any field is empty
    } else {
        alert(`Thanks, ${name}! Form submitted successfully!`); // Thank user by name
    }
}