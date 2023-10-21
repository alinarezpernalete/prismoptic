<?php
  include "database.php";
  
  if(isset($_POST['json'])){
    $datosProductos = json_decode( $_POST['json'] );

    $query = "UPDATE `producto` SET `descripcion_producto`= '$datosProductos->descripcion_producto',`precio_producto` = '$datosProductos->precio_producto' WHERE `codigo_producto` = '$datosProductos->codigo_producto'";  

    $result = mysqli_query($connection, $query);

    if (!$result){
      die("Query failed");
    }

    echo 'Added Successfully';
  }


?>