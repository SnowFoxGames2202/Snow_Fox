<?php

$nome = $_POST['nome'];
$usuario = $_POST['usuario'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$date = date( 'd/m/Y' );

$conn = new  mysqli( "localhost", "root","", "info");

if( $conn->connect_error ) {
    die("Conexão falhou:". $conn->connect_error);
}

$smtp  = $conn -> prepare ("INSERT INTO equipe_snow_fox (Nome, Usuario, Email, Senha, Data) VALUES(?,?,?,?,?)");

if (!$smtp) {
    die('Erro ao preparar a consulta: '. $conn->error);
}

$smtp->bind_param('sssss', $nome, $usuario, $email, $senha, $date);

if(!$smtp->execute() ){
   echo "<script> alert ('Erro no cadastro!'); </script>";
}else{
    echo "<script> alert ('Cadastro realizado com sucesso!'); </script>";
}

$smtp->close();
$conn->close();

?>