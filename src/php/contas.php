<?php

$conn =  mysqli_connect( "localhost", "root","", "info");

if( $conn->connect_error ) {
    die("Conexão falhou:". $conn->connect_error);
}else{
  echo "<script> alert ('Cadastro realizado com sucesso!'); </script>";
}

$smtp->close();
$conn->close();

?>