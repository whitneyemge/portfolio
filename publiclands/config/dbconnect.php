<?php

  //connect to database
  $conn = mysqli_connect('localhost', 'landuse', 'natfor*2020', 'forests');

  //check connection
  if(!$conn){ //if there is an error
    echo 'Connection error: ' . mysqli_connect_error();
  }

 ?>
