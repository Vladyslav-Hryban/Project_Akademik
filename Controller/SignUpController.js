// Animacja elementów przy ładowaniu strony
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector(".login-form");
    const breadcrumbBar = document.querySelector(".breadcrumb-bar");
    const loginImage = document.querySelector(".login-image");

    registerForm.classList.add("fade-in");
    breadcrumbBar.classList.add("fade-in");
    loginImage.classList.add("zoom-in");
});

// Walidacja formularza rejestracji
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const room = document.getElementById("room");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    // Sprawdzenie wymaganych pól
    if (!firstName.value || !lastName.value || !email.value || !room.value || !password.value || !confirmPassword.value) {
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Proszę wypełnić wszystkie wymagane pola!'
        });
        return;
    }

    // Sprawdzenie czy hasła się zgadzają
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hasła się nie zgadzają!'
        });
        return;
    }

    // Sprawdzenie czy regulamin został zaakceptowany
    if (!terms.checked) {
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Proszę zaakceptować regulamin!'
        });
        return;
    }

    // W przypadku sukcesu
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Gotowe!',
        text: 'Twoje konto zostało utworzone!'
    });
});

// Pokazywanie/ukrywanie hasła
const passwordFields = document.querySelectorAll(".input-password-wrapper");

passwordFields.forEach(wrapper => {
    const input = wrapper.querySelector("input");
    const toggle = wrapper.querySelector(".toggle-password");

    toggle.addEventListener("click", function() {
        if (input.type === "password") {
            input.type = "text";
            toggle.classList.remove("bi-eye");
            toggle.classList.add("bi-eye-slash");
        } else {
            input.type = "password";
            toggle.classList.remove("bi-eye-slash");
            toggle.classList.add("bi-eye");
        }
    });
});