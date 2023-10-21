<?php
	include "database.php";

	if(isset($_POST['cantidad_producto'])){
		$cantidad_producto = $_POST['cantidad_producto'];
		$idproducto = $_POST['idproducto'];

		$query = "UPDATE `producto` SET `existencia_producto` = `existencia_producto`-'$cantidad_producto' WHERE `producto`.`idproducto` = $idproducto";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}

	if(isset($_POST['cantidad'])){
		$cantidad = $_POST['cantidad'];
		$idproducto = $_POST['idproducto'];

		$query = "UPDATE `producto` SET `existencia_producto` = `existencia_producto`+'$cantidad' WHERE `producto`.`idproducto` = $idproducto";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>