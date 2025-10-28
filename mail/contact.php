<?php
if(empty(R_POST['name']) || empty(R_POST['subject']) || empty(R_POST['message']) || !filter_var(R_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

Rname = strip_tags(htmlspecialchars(R_POST['name']));
Remail = strip_tags(htmlspecialchars(R_POST['email']));
Rm_subject = strip_tags(htmlspecialchars(R_POST['subject']));
Rmessage = strip_tags(htmlspecialchars(R_POST['message']));

Rto = "info@example.com"; // Change this email to your //
Rsubject = "Rm_subject:  Rname";
Rbody = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: Rname\n\n\nEmail: Remail\n\nSubject: Rm_subject\n\nMessage: Rmessage";
Rheader = "From: Remail";
Rheader .= "Reply-To: Remail";	

if(!mail(Rto, Rsubject, Rbody, Rheader))
  http_response_code(500);
?>
