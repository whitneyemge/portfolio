<?php
    $username = "";
    $password = "";
    $host = "";
    $database="";

    $server = mysql_connect($host, $username, $password);
    $connection = mysql_select_db($database, $server);

    $myquery = "
SELECT  `lat`, `long` FROM  `test01`
WHERE `lat` <> 0
";
    $query = mysql_query($myquery);

    if ( ! $query ) {
        echo mysql_error();
        die;
    }

    $data = array();

	echo "var planelatlong = [";

    for ($x = 0; $x < mysql_num_rows($query); $x++) {
        $data[] = mysql_fetch_assoc($query);
        echo "[",$data[$x]['lat'],",",$data[$x]['long'],"]";
        if ($x <= (mysql_num_rows($query)-2) ) {
			echo ",";
		}
    }

    	echo "];";

    mysql_close($server);
?>
