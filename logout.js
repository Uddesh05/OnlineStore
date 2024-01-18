// Add an event listener to the "Return Home" button
alert("Logout successful!");
document.getElementById("returnHomeButton").addEventListener("click", function () {
    // Redirect to the home page or any desired destination
    
    window.location.href = "login.html";
});
