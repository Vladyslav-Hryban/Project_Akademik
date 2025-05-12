

// Walidacja i wysyłanie danych
const form = document.querySelector("form");

form?.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const room = document.getElementById("room");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    // Walidacja
    if (!firstName.value || !lastName.value || !email.value || !room.value || !password.value || !confirmPassword.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Proszę wypełnić wszystkie wymagane pola!'
        });
        return;
    }

    if (password.value !== confirmPassword.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hasła się nie zgadzają!'
        });
        return;
    }

    if (!terms.checked) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Proszę zaakceptować regulamin!'
        });
        return;
    }

    // Przygotowanie danych i wysyłka
    const formData = new FormData();
    formData.append('firstName', firstName.value.trim());
    formData.append('lastName', lastName.value.trim());
    formData.append('email', email.value.trim());
    formData.append('phone', phone.value.trim());
    formData.append('room', room.value.trim());
    formData.append('password', password.value);
    formData.append('confirmPassword', confirmPassword.value);

    fetch('../../signup.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            if (result === 'OK') {
                Swal.fire({
                    icon: 'success',
                    title: 'Gotowe!',
                    text: 'Twoje konto zostało utworzone!'
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Błąd!',
                    text: result
                });
            }
        })
        .catch(error => {
            console.error('Błąd:', error);
            Swal.fire({
                icon: 'error',
                title: 'Błąd!',
                text: 'Wystąpił problem z serwerem.'
            });
        });
});
