<?php
	include "database.php";

	if(isset($_POST['idproducto'])){
		//$idfactura = $_POST['idfactura'];
		$idproducto = $_POST['idproducto'];
		$cantidad_producto = $_POST['cantidad_producto'];
		$precio_producto = $_POST['precio_producto'];

		$query = "INSERT INTO `detalle_factura`(`iddetallef`, `cod_factura`, `FK_idproducto`, `cantidad_producto`, `precio_producto`) VALUES (NULL,NULL,'$idproducto','$cantidad_producto','$precio_producto')";

		//$query = "INSERT INTO `detalle_factura`(`iddetallef`, `FK_idproducto`, `cantidad_producto`, `precio_producto`) VALUES (NULL,'$idproducto','$cantidad_producto','$precio_producto')";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>