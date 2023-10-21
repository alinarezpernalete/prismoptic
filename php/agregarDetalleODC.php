<?php
	include "database.php";

	if(isset($_POST['idCompra'])){
		$idCompra = $_POST['idCompra'];

		$query = "UPDATE `detalle_compra` SET `cod_compra` = '$idCompra' WHERE `cod_compra` IS NULL";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>