<!-- The Net Ninja on YouTube: https://www.youtube.com/watch?v=3B-CnezwEeo -->
<!-- https://www.w3schools.com/php/php_mysql_connect.asp -->
<?php

  // Define variables for server name, username, and password to use to connect to database
  $servername = "127.0.0.1";
  $username = "landuse";
  $password = "nf2020";

  // Try to connect to the database and print success or failure message
  try {
   $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
   // set the PDO error mode to exception
   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   echo "Connected successfully";
  } catch(PDOException $e) {
   echo "Connection failed: " . $e->getMessage();
  }

  //set empty variable for use type for error message
  $useType = '';
  
  //if user clicks save button
  if(isset($_POST['submit'])){

    //check useType - if empty, post a message saying land use selection is required
    if(empty($_POST['useType'])){
      $errors['useType' = 'A land use type selection is required <br />';
    }  else {
        echo htmlspecialchars($_POST[useType]); //send to the database with all characters converted to html
    }
    //end of check

    echo htmlspecialchars($_POST[useValues]);
    echo htmlspecialchars($_POST[useComments]);


    }

?>
