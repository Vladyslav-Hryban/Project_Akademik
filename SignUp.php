<?php
require_once __DIR__ . '/model/UserModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'] ?? '';
    $lastName = $_POST['lastName'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $room = $_POST['room'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirmPassword'] ?? '';

    // Walidacja minimalna
    if (empty($firstName) || empty($lastName) || empty($email) || empty($password) || empty($confirmPassword)) {
        echo "Wszystkie wymagane pola muszą być wypełnione.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Nieprawidłowy adres e-mail.";
        exit;
    }

    if ($password !== $confirmPassword) {
        echo "Hasła się nie zgadzają.";
        exit;
    }

    $user = new User();
    $success = $user->register($firstName, $lastName, $email, $password, $phone, $room);

    echo $success ? 'OK' : 'Rejestracja nie powiodła się.';
}
