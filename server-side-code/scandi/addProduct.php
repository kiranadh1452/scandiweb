<?php

header('Access-Control-Allow-Origin: *');

require 'config.php';
require_once 'classes.php';

foreach($_POST as $dataSetString){
  $dataSet = explode("***",$dataSetString);
  $itemClass = createNewClass($dataSet);
  // echo $itemClass->name;
  // echo $name;

  $result =  $itemClass->saveItem($conn);
  if($result){
    echo "Successfully added the product";
  }
  else{
    echo "Couldn't add the product";
  }
}

function createNewClass($dataSet){
  $sku = $dataSet[0];
  $name = $dataSet[1];
  $price = $dataSet[2];
  $type = $dataSet[3];
  $values =explode(",",$dataSet[4]);

  if($type == 'Book'){
    return new Book($sku,$name,$price,$type,$values);
  }
  if($type == 'DVD'){
    return new Dvd($sku,$name,$price,$type,$values);
  }
  if($type == 'Furniture'){
    return new Furniture($sku,$name,$price,$type,$values);
  }
}


?>