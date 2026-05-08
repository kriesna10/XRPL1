document.getElementById("form").addEventListener("submit", function(event) 
{
    event.preventDefault(); 
    const jsonString = localStorage.getItem("users");
    const userObject = JSON.parse(jsonString);
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = userObject.find(u => u.username === username && u.password === password);
    if (user) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});