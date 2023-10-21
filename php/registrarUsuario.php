<?php
	include "database.php";
	
	$datosUsuario = json_decode( $_POST['json'] );

	$query = "INSERT INTO `usuario`(`idusuario`, `nombre_usuario`, `contrasena_usuario`, `fecha_registro`, `pregunta_seguridad`, `respuesta_seguridad`, `nivel_seguridad`) VALUES ('','$datosUsuario->nombre_usuario','$datosUsuario->contrasena_usuario',CURRENT_TIMESTAMP,'$datosUsuario->pregunta_usuario','$datosUsuario->respuesta_usuario','1')";	

	$result = mysqli_query($connection, $query);

	if (!$result){
		die("Query failed");
	}

	echo 'Added Successfully';


?>