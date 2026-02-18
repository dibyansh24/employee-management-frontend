function validateLogin() {

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var errorMsg = document.getElementById("error-msg");

    var correctUsername = "admin";
    var correctPassword = "admin123";

    errorMsg.textContent = "";

    if (username === "") {
        errorMsg.textContent = "Username cannot be empty";
        return false;
    }

    if (password === "") {
        errorMsg.textContent = "Password cannot be empty";
        return false;   
    }

   if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    window.location.href = "employee.html";
    return false;
    } else {
        errorMsg.textContent = "Invalid username or password";
        return false;
    }
}

function togglePassword() {
    var pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
}
