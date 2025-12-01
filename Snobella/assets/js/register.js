const nameInput = document.getElementById("name");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!nameInput.value || !usernameInput.value || !emailInput.value || !passwordInput.value) {
        return Toastify({
            text: "All fields are required!",
            backgroundColor: "linear-gradient(to right,#ff416c,#ff4b2b)",
        }).showToast();
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.username === usernameInput.value.trim())) {
        return Toastify({
            text: "This username is already taken!",
            backgroundColor: "linear-gradient(to right,#ff416c,#ff4b2b)",
        }).showToast();
    }

    const newUser = {
        id: crypto.randomUUID(),
        name: nameInput.value.trim(),
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    Toastify({
        text: "Successfully registered!",
        backgroundColor: "linear-gradient(to right,#00b09b,#96c93d)",
    }).showToast();

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1200);
});
