<?php
	include "database.php";

	if(isset($_POST['cantidad_pendiente'])){
		$cantidad_pendiente = $_POST['cantidad_pendiente'];
		$idODC = $_POST['idODC'];
		$codigo_producto = $_POST['codigo_producto'];

		$query = "UPDATE `detalle_compra` SET `cantidad_pendiente` = '$cantidad_pendiente' WHERE `cod_compra` = '$idODC' AND `FK_idproducto` = '$codigo_producto'";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>