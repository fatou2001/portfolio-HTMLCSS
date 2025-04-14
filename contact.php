<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["nom"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "tonemail@example.com"; // Remplace par ton adresse
    $subject = "Nouveau message de $nom";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi.";
    }
}
?>
