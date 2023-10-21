<?php
	include "database.php";

	if(isset($_POST['codigo_producto'])){
		$codigo_producto = $_POST['codigo_producto'];
		$nuevaExistencia = $_POST['nuevaExistencia'];

		$query = "UPDATE `producto` SET `existencia_producto` = '$nuevaExistencia' WHERE `idproducto` = '$codigo_producto'";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>