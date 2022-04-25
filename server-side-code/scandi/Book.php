<?php
include_once 'abstractItem.php';

class Book extends Product{

  public function convertTypeToString(): string
  {
    $value = $this->values[0];
    $typeValue = "{\"Book\":{\"Weight\":\"{$value}KG\"}}";
    return $typeValue;
  }

}

?>