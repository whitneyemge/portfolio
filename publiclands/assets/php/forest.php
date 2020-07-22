<!-- The Net Ninja on YouTube: https://www.youtube.com/watch?v=3B-CnezwEeo -->
<!-- https://www.w3schools.com/php/php_mysql_connect.asp -->
<?php

  //run dbconnect from dbconnect.php file
  include('../..config/dbconnect.php');

  //set empty variable for use type for error message
  $useType = '';
  $errors = array('useType' => '');

  //if user clicks save button
  // if(isset($_POST['submit'])){

    //check useType - if empty, post a message saying land use selection is required
    if(empty($_POST['useType'])){
      $errors['useType' = 'A land use type selection is required <br />';
    }  else {
        $useType = echo htmlspecialchars($_POST['useType']);
      }

      if(array_filter($errors)){
        //echo 'errors in the form';
      } else {
        //$drawnItems = ST_GeomFromGeoJson($conn, $_POST['drawnItems']);
        $useType = mysqli_real_escape_string($conn, $_POST['useType']);
        $useValues = mysqli_real_escape_string($conn, $_POST['useValues']);
        $useComments = mysqli_real_escape_string($conn, $_POST['useComments']);

        //insert data into the table
        $sql = "INSERT INTO use_preferences(shape,use_type,use_values,use_comments) VALUES('$drawnItems',  '$useType', '$useValues', '$useComments')";

        //save to database and check if it worked
        if(mysqli_query($conn, $sql)){
          //success
          echo 'success'
        } else {
          //error
          echo 'query error: ' . mysqli_error($conn);
        }
      }

?>
