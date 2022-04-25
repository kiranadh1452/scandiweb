<?php
include_once 'abstractItem.php';

class Furniture extends product{

  public function convertTypeToString(): string
  {
    $typeValue = "{\"Furniture\":{\"Dimension\":\"".join('X',$this->values)."CM\"}}";

    return $typeValue;
  }

}

?>