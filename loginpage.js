const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const userpassBlankMsg = document.getElementById("user-pass-blank-msg");
const userBlankMsg = document.getElementById("user-blank-msg");
const passBlankMsg = document.getElementById("password-blank-msg");
const loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    }
	else if (username === "" && password === "") {
        loginErrorMsg.style.opacity = 0;
		userBlankMsg.style.opacity = 0;
		passBlankMsg.style.opacity = 0;
		userpassBlankMsg.style.opacity = 1;
    }

	else if(username ==""){
		loginErrorMsg.style.opacity = 0;
		userBlankMsg.style.opacity = 1;
		passBlankMsg.style.opacity = 0;
		userpassBlankMsg.style.opacity = 0;
		}
	else if(password ==""){
		loginErrorMsg.style.opacity = 0;
		userBlankMsg.style.opacity = 0;
		passBlankMsg.style.opacity = 1;	
		userpassBlankMsg.style.opacity = 0;
		}
	else {
        loginErrorMsg.style.opacity = 1;
		userBlankMsg.style.opacity = 0;
		passBlankMsg.style.opacity = 0;
		userpassBlankMsg.style.opacity = 0;

    }
}) 	