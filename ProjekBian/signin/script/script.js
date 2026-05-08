document.getElementById("form").addEventListener("submit", function(event) 
{
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(!username.trim() || !password.trim())
    {
        alert("Please fill in all fields.");
        return;
    }
    const users=JSON.parse(localStorage.getItem("users")) || [];
    const newuser={
        username:username,
        password:password
    }
    users.push(newuser);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Sign in is successful!");
    window.location.href="../login/index.html";
});