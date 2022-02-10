<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        //fwrite($myfile, 'Options received ');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);
        $email = $params->email;
        $name = $params->name;
        $message = "
        <html>
        <head>
        <title>Javier Tresaco contact form</title>
        </head>
        <body>
        <p>From: ". $params->name. " (".$email.")</p>
        <p>Company: ".$params->company. "</p>
        <hr/>
        <h4>Message:</h4>
        <p>".$params->message. "</p>
        </body>
        </html>
        ";

        $recipient = 'jtresaco@gmail.com';
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: <'.$email.'>' . "\r\n";
        $subject = "Javier Tresaco Contact Form";
        
        
        try {
            $sent = mail($recipient, $subject, $message, $headers);
        } catch (Exception $e) {
            // $myfile = fopen("emailErrors.txt", "a");
            // fwrite($myfile, 'Message not sent '.$e);
            // fwrite($myfile, 'Message  '.var_dump($params));
            // fwrite($myfile, "\r\n");
            // fclose($myfile);
        }
        

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}