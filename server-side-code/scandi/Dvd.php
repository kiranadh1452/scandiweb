<?php

include_once 'abstractItem.php';

class Dvd extends Product{
  public function convertTypeToString(): string
  {
    $value = $this->values[0];
    $typeValue = "{\"DVD-DISC\":{\"Size\":\"{$value}MB\"}}";
    return $typeValue;
  }
}

?>