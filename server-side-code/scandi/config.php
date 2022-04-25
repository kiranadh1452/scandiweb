<?php

class databaseConnection{
  public $conn;
  protected $username;
  protected $password;
  protected $servername;

  public function makeConnection(){
    try {
      $conn = new PDO("mysql:host=$this->servername;dbname=scandiweb", $this->username, $this->password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
    }
    
    return $conn;
  }

  function __construct($servername, $username, $password){
    $this->servername = $servername;
    $this->username = $username;
    $this->password = $password;
    $this->conn = $this->makeConnection();
  }
}

$username = "provided-by-000webhost"; //"root"
$password = "provided-by-000webhost";
$servername = "localhost"; //localhost

$connection = new databaseConnection($servername,$username,$password);
$conn = $connection->conn;

?>