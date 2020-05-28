<?php 


if(isset($_POST['submit'])){

    // Form data
    $to = "aga.labonarska@outlook.com"; // my Email address
    $from = $_POST['e-mail']; // the sender's Email address
    $full_name = $_POST['full-name'];
    $pref_name = $_POST['pref_name'];
    $subject = $_POST['subject'];
    // $employer = $_POST['employer'];
    // $company_name = $_POST['company-name'];
    // $company_url = $_POST['company-url'];
    // $message = $_POST['message'];
    
    
    // todo: fix below

    $topic = "Form submission to A. Łabonarska";
    // $topic2 = "Copy of your form submission to A. Łabonarska";
    $message = $full_name . " " . $pref_name . " wrote the following:" . "\n\n" . $_POST['message'];
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    // $headers2 = "From:" . $to;

    mail($to,$topic,$message,$headers);
    // mail($from,$topic2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $pref_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>