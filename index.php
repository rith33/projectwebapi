<?php
  $con = mysql_connect('localhost','root','');
  $db = mysql_select_db('flipjob');

  if($con){
    echo 'Successfully connect to database.';
  } else {
    die('Error.');
  }

  if($db){
      echo 'Successfully found the database';
  } else {
        die('Error.');
  }
?>
