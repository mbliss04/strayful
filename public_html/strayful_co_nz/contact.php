<?php
if(isset($_POST['email'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "hello@strayful.co.nz";
    $email_subject = "Contact Form";
     
     
    function died($error) {
        // your error code can go here
        echo "Sorry man, but there were a couple boo boos found with the form you submitted. ";
        echo "These guys:<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and double check!<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email)) {
    $error_message .= 'Not actually an email address!<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'Is that actually your name?<br />';
  }
  if(strlen($message) < 2) {
    $error_message .= 'Maybe try typing some more characters.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
     
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="Products and media from Stray co.">
    <title>Stray | Thanks</title>
    <script type="text/javascript" src="js/jquery-1.6.2.min.js"></script>
    <script type="text/javascript" src="js/ga.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <link rel="shortcut icon" href="images/favicon.ico"> 
    <link rel="stylesheet" href="stylesheets/css/reset.css">
    <link rel="stylesheet" href="amaticfont/stylesheet.css">
    <link rel="stylesheet" href="stylesheets/css/style.css">
  </head>
  <body>
    <div class="left-line"></div>
    <div class="right-line"></div>
    <div class="menu-bar opened">
      <div class="menu-nav">
        <ul>
          <li><a href="gallery.html" class="transition">Gallery</a></li>
          <li><a href="values.html" class="transition">Values</a></li>
          <li><a href="media.html" class="transition">#Strayful</a></li>
          <li><a href="contact.html" class="transition">Contact</a></li>
        </ul>
      </div>
      <div class="logo"></div>
      <div class="close"></div>
    </div>
    <div class="menu-open closed"></div>
    <div class="thanks">
      <h1>Thanks for getting in touch!</h1>
      <h2>We'll contact you back as soon as humanly possible.</h2>
    </div>
  </body>
</html>

<?php
}
?>