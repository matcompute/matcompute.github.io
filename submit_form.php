<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Handle file upload
    if (isset($_FILES['cv']) {
        $cv_name = $_FILES['cv']['name'];
        $cv_tmp = $_FILES['cv']['tmp_name'];
        $cv_path = "uploads/" . basename($cv_name);

        if (move_uploaded_file($cv_tmp, $cv_path)) {
            // File uploaded successfully
        } else {
            echo "Failed to upload CV.";
            exit;
        }
    }

    $to = "m.tiruye3@gmail.com";
    $subject = "New Contact Form Message";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n\nCV: $cv_path";

    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
