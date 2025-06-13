<?php
// ***************** Fichier de configuration d'accès à la base de données **********************

// Type de serveur utilisé
$server_type = "mysql";

// Adresse du serveur Docker (nom du service)
$server_host = "db";

// Identifiants
$username = "root";
$password = "";

// Nom de la base de données
$db_name = "todo_db";

try {
    // Construction de la chaîne de connexion PDO
    $dsn = "$server_type:host=$server_host;dbname=$db_name;charset=utf8";
    
    // Création de la connexion PDO
    $conn = new PDO($dsn, $username, $password);
    
    // Configuration des erreurs PDO en exceptions
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    // Affichage de l'erreur et arrêt du script
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>
