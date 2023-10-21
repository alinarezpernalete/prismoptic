<?php
	include "database.php";

	if(isset($_POST['codigo_producto'])){
		$codigo_producto = $_POST['codigo_producto'];

		$query = "UPDATE `producto` SET `estado_producto`= 0 WHERE `codigo_producto` = '$codigo_producto'";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>