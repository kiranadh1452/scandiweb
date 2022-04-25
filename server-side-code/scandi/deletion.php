<?php

header('Access-Control-Allow-Origin: *');

require 'config.php';

foreach($_POST as $dataSetString){

  $dataSet = explode("-",$dataSetString);

  $idCollection = join(",",$dataSet);
}
$str ="(".$idCollection.")";

// echo $str;
$qry = "DELETE FROM items WHERE pid IN ".$str;
$result = $conn->query($qry);

if($result){
  echo "Successfully deleted";
}
else{
  echo "Couldn't delete at the moment";
}

?>