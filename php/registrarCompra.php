<?php
	include "database.php";

	if(isset($_POST['activar_compra'])){
		$activar_compra = $_POST['activar_compra'];
		$codigoOC = $_POST['codigoOC'];
		$fechaODC = $_POST['fechaODC'];
		

		$query = "UPDATE `compra` SET `estado_odc` = '$activar_compra', `fecha_recibido` = CURRENT_TIMESTAMP, `fecha_odc` = '$fechaODC' WHERE `cod_compra` = '$codigoOC'";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>