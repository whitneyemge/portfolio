<!-- The Net Ninja on YouTube: https://www.youtube.com/watch?v=3B-CnezwEeo -->
<!-- https://www.w3schools.com/php/php_mysql_connect.asp -->
<?php
$servername = "127.0.0.1";
$username = "landuse";
$password = "nf2020";

try {
 $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
 // set the PDO error mode to exception
 $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 echo "Connected successfully";
} catch(PDOException $e) {
 echo "Connection failed: " . $e->getMessage();
}
?>
