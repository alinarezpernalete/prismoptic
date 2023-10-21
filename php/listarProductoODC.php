<?php
	include "database.php";

		//$idfactura = $_POST['idfactura'];
		$idproducto = $_POST['idproducto'];
		$cantidad_producto = $_POST['cantidad_producto'];
		$precio_producto = $_POST['precio_producto'];

		$query = "INSERT INTO `detalle_compra`(`iddetallec`, `cod_compra`, `FK_idproducto`, `cantidad_producto`, `precio_producto`,`cantidad_pendiente`) VALUES (NULL,NULL,'$idproducto','$cantidad_producto','$precio_producto','$cantidad_producto')";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	
?>