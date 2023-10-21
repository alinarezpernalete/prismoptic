<?php
	include "database.php";
	
	$datosCliente = json_decode( $_POST['json'] );

	$query = "INSERT INTO `cliente`(`idcliente`, `cedula_cliente`, `nombre_cliente`, `apellido_cliente`, `fecha_cliente`, `direccion_cliente`, `telefono_cliente`, `email_cliente`) VALUES ('', '$datosCliente->cedula_cliente','$datosCliente->nombre_cliente', '$datosCliente->apellido_cliente', '$datosCliente->fecha_cliente', '$datosCliente->direccion_cliente', '$datosCliente->telefono_cliente', '$datosCliente->email_cliente')";	

	$result = mysqli_query($connection, $query);

	if (!$result){
		die("Query failed");
	}

	echo 'Added Successfully';


?>