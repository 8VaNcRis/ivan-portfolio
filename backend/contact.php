<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // 1. Insert to DB
    $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        // 2. Send Email
        $to = "1v4ncr1s@gmail.com"; 
        $subject = "New Portfolio Message from $name";
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully and emailed to you!";
        } else {
            echo "Message saved, but email failed to send.";
        }
    } else {
        echo "Error saving message.";
    }

    $stmt->close();
    $conn->close();
}
?>
