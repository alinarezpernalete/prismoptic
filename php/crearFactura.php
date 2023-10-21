<?php
	include "database.php";

	if(isset($_POST['cod_factura'])){
		$cod_factura = $_POST['cod_factura'];
		$idcliente = $_POST['idcliente'];
		$pago_factura = $_POST['pago_factura'];

		$query = "INSERT INTO factura(`idfactura`, `cod_factura`, `FK_idcliente`, `fecha_factura`, `pago_factura`, `estado_factura`) VALUES ('','$cod_factura','$idcliente',CURRENT_TIMESTAMP,'$pago_factura','1')";

		$result = mysqli_query($connection, $query);

		if(!$result){
			die("Query failed");
		}
		echo 'Added Successfully';
	}
	
?>