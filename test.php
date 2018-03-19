<?php

$user = "tochukwu";
$host = "localhost";
$db = "userdata";
//$password = "phpexec";

 $mysqli = new mysqli($host, $user, $db) ;

 if($mysqli->connect_error ) {
 	printf("connection failed: %s\n", $mysqli->connect_error);
 	die();
 }
 else {
 	echo "connected succesfully";
 }