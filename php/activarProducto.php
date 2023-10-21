<?php
	include "database.php";

	if(isset($_POST['idproducto'])){
		$idproducto = $_POST['idproducto'];

		$query = "UPDATE `producto` SET `estado_producto`= 1 WHERE `idproducto` = '$idproducto'";
		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>