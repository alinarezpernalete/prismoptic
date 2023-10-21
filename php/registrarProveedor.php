<?php
	include "database.php";
	
	$datosProveedor = json_decode( $_POST['json'] );

	$query = "INSERT INTO `proveedor`(`idproveedor`, `identificacion_proveedor`, `nombre_proveedor`, `registro_proveedor`, `direccion_proveedor`, `telefono_proveedor`, `email_proveedor`) VALUES ('', '$datosProveedor->identificacion_proveedor', '$datosProveedor->nombre_proveedor', CURRENT_TIMESTAMP, '$datosProveedor->direccion_proveedor', '$datosProveedor->telefono_proveedor', '$datosProveedor->email_proveedor')";	

	$result = mysqli_query($connection, $query);

	if (!$result){
		die("Query failed");
	}

	echo 'Added Successfully';


?>