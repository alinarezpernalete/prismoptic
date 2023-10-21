<?php
	include "database.php";

	if(isset($_POST['cod_compra'])){
		$cod_compra = $_POST['cod_compra'];

		$query = "UPDATE `compra` SET `estado_odc` = 0 WHERE `cod_compra` = '$cod_compra'";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>