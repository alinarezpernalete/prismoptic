<?php
	include 'database.php';

	if(isset($_POST['codigoOC'])){
		$codigoOC = $_POST['codigoOC'];

		$query = "SELECT c.idcompra,c.cod_compra,p.identificacion_proveedor,p.nombre_proveedor,p.telefono_proveedor, p.email_proveedor,p.direccion_proveedor,c.encargado_compra,c.fecha_odc,c.fecha_recibido,c.pago_compra,c.estado_odc, COUNT(c.pago_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.FK_idproveedor = p.idproveedor AND c.cod_compra = '$codigoOC' AND c.estado_odc = 0 GROUP BY c.cod_compra HAVING COUNT(c.cod_compra) > 0";
		$result = mysqli_query($connection, $query);

		/* Si no existe la consulta en la BD*/
		if(!$result){
			$x = 0;
			echo json_encode($x);
			return;
		}

		/* Si no hay coincidencias en la tabla */
		$rows = mysqli_num_rows($result);
		if($rows == 0){
			$x = 1;
			echo json_encode($x);
			return;
		}

		/* Si hay coincidencias en la tabla */
		$json = [];
		if($rows > 0){
			while ($row = mysqli_fetch_object($result)){
				array_push($json, $row);
			}
			echo json_encode($json);

		}
	}

	

?>