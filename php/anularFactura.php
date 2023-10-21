<?php
	include "database.php";

	if(isset($_POST['cod_factura'])){
		$cod_factura = $_POST['cod_factura'];

		$query = "UPDATE `factura` SET `estado_factura`= 0 WHERE `cod_factura` = '$cod_factura'";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>