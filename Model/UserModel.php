<?php
require_once __DIR__ . '/../config.php';

class User {
    private $pdo;

    public function __construct() {
        global $pdo;
        $this->pdo = $pdo;
    }

    public function register(string $firstName, string $lastName, string $email, string $password, string $phone, string $room): bool {
    try {
    $username = $firstName . ' ' . $lastName;
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $this->pdo->prepare("INSERT INTO users (username, email, password, phone, room) VALUES (?, ?, ?, ?, ?)");
    return $stmt->execute([$username, $email, $hashedPassword, $phone, $room]);
} catch (PDOException $e) {

        error_log("Błąd rejestracji: " . $e->getMessage());
        return false;

    }
}
}
