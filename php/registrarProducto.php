<?php
	include "database.php";
	
	$datosProducto = json_decode( $_POST['json'] );

	$query = "INSERT INTO `producto`(`idproducto`, `codigo_producto`, `descripcion_producto`, `precio_producto`, `existencia_producto`, `estado_producto`) VALUES ('','$datosProducto->codigo_producto','$datosProducto->descripcion_producto','$datosProducto->precio_producto','$datosProducto->existencia_producto','1')";	

	$result = mysqli_query($connection, $query);

	if (!$result){
		die("Query failed");
	}

	echo 'Added Successfully';


?>