<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";
if (isset($_POST['to'])) {
    $to = $_POST['to'];
        sendMail($to);
    }

    function sendMail($to) {
       //PHPMailer Object
        $mail = new PHPMailer(true); //Argument true in constructor enables exceptions
        //Enable SMTP debugging.
        $mail->SMTPDebug = 3;                               
        //Set PHPMailer to use SMTP.
        $mail->isSMTP(); 
        $mail->Host = "smtp.gmail.com";
        //Set this to true if SMTP host requires authentication to send email
        $mail->SMTPAuth = true;   

        $mail->Username = "info.onlinedisruptor@gmail.com";                 
        $mail->Password = "Arijeet@123";                           
        //If SMTP requires TLS encryption then set it
        $mail->SMTPSecure = "tls";                           
        //Set TCP port to connect to
        $mail->Port = 587;   

        //From email address and name
        $mail->From = "info.onlinedisruptor@gmail.com";
        $mail->FromName = "onlinedisruptor";

        //To address and name
        $mail->addAddress("ari123acess@gmail.com", "Arijeet");
        $mail->addAddress($to); //Recipient name is optional

        //Address to which recipient will reply
        //$mail->addReplyTo("reply@yourdomain.com", "Reply");

        //CC and BCC
        //$mail->addCC("cc@example.com");
        //$mail->addBCC("bcc@example.com");

        //Send HTML or Plain Text email
        $mail->isHTML(true);

        $mail->Subject = "Subject Text";
        $mail->Body = "<i>Mail body in HTML</i>";
        $mail->AltBody = "This is the plain text version of the email content";

        try {
            $mail->send();
            echo "Message has been sent successfully";
        } catch (Exception $e) {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }
        exit;
    }

   