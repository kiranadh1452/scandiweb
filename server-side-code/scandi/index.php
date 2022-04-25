<?php

require 'config.php';

header('Access-Control-Allow-Origin: *');

class CustomItem {
  public $sku;
  public $prname;
  public $price;
  public $type;
   
  public function info()
  {
      return '#'.$this->id.': '.$this->name;
  }
}


$qry = "SELECT * FROM items";
$result = $conn->query($qry);
$result->setFetchMode(PDO::FETCH_CLASS, 'CustomItem');

echo json_encode($result->fetchAll());

?>