<?php
	include "database.php";

	if(isset($_POST['idfactura'])){
		$idfactura = $_POST['idfactura'];

		$query = "UPDATE `detalle_factura` SET `cod_factura` = '$idfactura' WHERE `cod_factura` IS NULL";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>