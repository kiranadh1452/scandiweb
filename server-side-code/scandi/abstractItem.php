<?php

abstract class Product{
  public $sku;
  public $type;
  public $name;
  public $price;
  public $values;

  function __construct($sku,$name,$price,$type,$values) {
    $this->sku = $sku;
    $this->type = $type;
    $this->name = $name;
    $this->price = $price;
    $this->values= $values;
  }

  abstract public function convertTypeToString(): string;

  public function saveItem($conn){
    $typeSelector = $this->convertTypeToString();
    $qry = "INSERT INTO items (sku, prname, price, type) VALUES ('$this->sku', '$this->name', '$this->price', '$typeSelector')";
    $result = $conn->query($qry);
    return $result;
  }
}

?>