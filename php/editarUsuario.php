<?php
  include "database.php";
  
  if(isset($_POST['json'])){
    $datosUsuario = json_decode( $_POST['json'] );

    $query = "UPDATE `usuario` SET `nombre_usuario` = '$datosUsuario->nombre_usuario', `contrasena_usuario`= '$datosUsuario->contrasena_usuario', `pregunta_seguridad` = '$datosUsuario->pregunta_usuario', `respuesta_seguridad`= '$datosUsuario->respuesta_usuario', `fecha_registro`= '$datosUsuario->fecha_registro' WHERE `idusuario` = '$datosUsuario->idusuario'";  

    $result = mysqli_query($connection, $query);

    if (!$result){
      die("Query failed");
    }

    echo 'Added Successfully';
  }


?>