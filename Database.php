<?php
require_once 'config.php';

class Database {
    public static function connect() {
        try {
            return new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }
}
