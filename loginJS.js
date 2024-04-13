function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "klebcahubli" && password === "kle@123") { document.getElementById("result").innerHTML = "Login successful!";
    document.getElementById("result").style.backgroundColor="green";
    }
    else
    {
      document.getElementById("result").innerHTML = "Invalid username or password. Please try again.";
      document.getElementById("result").style.backgroundColor="red";
    }
    }