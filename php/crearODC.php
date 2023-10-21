<?php
	include "database.php";

	if(isset($_POST['cod_compra'])){
		$cod_compra = $_POST['cod_compra'];
		$cmboxProveedor = $_POST['cmboxProveedor'];
		$encargado_compra = $_POST['encargado_compra'];
		$pago_compra = $_POST['pago_compra'];

		$query = "INSERT INTO `compra`(`idcompra`, `cod_compra`, `FK_idproveedor`, `encargado_compra`, `fecha_odc`, `fecha_recibido`, `pago_compra`, `estado_odc`) VALUES ('','$cod_compra','$cmboxProveedor','$encargado_compra',CURRENT_TIMESTAMP,NULL,'$pago_compra','0')";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>