<?php
  include "database.php";
  
  if(isset($_POST['json'])){
    $datosCliente = json_decode( $_POST['json'] );

    $query = "UPDATE `cliente` SET `direccion_cliente`= '$datosCliente->direccion_cliente',`telefono_cliente`= '$datosCliente->telefono_cliente',`email_cliente`= '$datosCliente->email_cliente' WHERE `cedula_cliente` = '$datosCliente->cedula_cliente'";  

    $result = mysqli_query($connection, $query);

    if (!$result){
      die("Query failed");
    }

    echo 'Added Successfully';
  }


?>