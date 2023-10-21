<?php
	include "database.php";

	if(isset($_POST['idproducto'])){
		$idproducto = $_POST['idproducto'];
		$cantidad_producto = $_POST['cantidad_producto'];
		$precio_producto = $_POST['precio_producto'];

		$query = "DELETE FROM `detalle_compra` WHERE `cod_compra` IS NULL AND `FK_idproducto` = $idproducto AND `cantidad_producto` = $cantidad_producto AND `precio_producto` = $precio_producto";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Deleted Successfully';
	}
	
?>