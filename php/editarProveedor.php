<?php
  include "database.php";
  
  if(isset($_POST['json'])){
    $datosProveedor = json_decode( $_POST['json'] );

    $query = "UPDATE `proveedor` SET `nombre_proveedor`= '$datosProveedor->nombre_proveedor',`direccion_proveedor`= '$datosProveedor->direccion_proveedor',`telefono_proveedor`= '$datosProveedor->telefono_proveedor',`email_proveedor`= '$datosProveedor->email_proveedor' WHERE `identificacion_proveedor` = '$datosProveedor->identificacion_proveedor'";  

    $result = mysqli_query($connection, $query);

    if (!$result){
      die("Query failed");
    }

    echo 'Added Successfully';
  }


?>