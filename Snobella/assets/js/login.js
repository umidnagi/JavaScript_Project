const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
        u => u.username === usernameInput.value.trim() &&
             u.password === passwordInput.value.trim()
    );

    if (!user) {
        return Toastify({
            text: "Incorrect username or password!",
            backgroundColor: "linear-gradient(to right,#ff416c,#ff4b2b)",
        }).showToast();
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));

    Toastify({
        text: "Login Successful!",
        backgroundColor: "linear-gradient(to right,#00b09b,#96c93d)",
    }).showToast();

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
});
