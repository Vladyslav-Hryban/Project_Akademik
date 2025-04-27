// Анімація елементів при завантаженні
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const breadcrumbBar = document.querySelector(".breadcrumb-bar");
    const loginImage = document.querySelector(".login-image");

    loginForm.classList.add("fade-in");
    breadcrumbBar.classList.add("fade-in");
    loginImage.classList.add("zoom-in");
});

// Валідація форми логіну
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!email.value || !password.value) {
        event.preventDefault();
        alert("Proszę wypełnić wszystkie pola!");
        if (!email.value) email.classList.add("is-invalid");
        if (!password.value) password.classList.add("is-invalid");
    }
});

// Показ/приховання пароля через іконку
const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("bi-eye");
        togglePassword.classList.add("bi-eye-slash");
    } else {
        passwordField.type = "password";
        togglePassword.classList.remove("bi-eye-slash");
        togglePassword.classList.add("bi-eye");
    }
});

// Анімація кнопки при наведенні
const loginButton = document.querySelector(".btn-primary");
loginButton.addEventListener("mouseover", function() {
    loginButton.style.transform = "scale(1.05)";
});
loginButton.addEventListener("mouseout", function() {
    loginButton.style.transform = "scale(1)";
});
