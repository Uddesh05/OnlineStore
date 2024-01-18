
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can replace this with your actual authentication logic.
    if (username === "Uddesh123" && password === "1234") {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to the home page
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}


