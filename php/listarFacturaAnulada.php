<?php
	include 'database.php';

		//$query = "SELECT f.idfactura, f.cod_factura, c.nombre_cliente, c.apellido_cliente, f.fecha_factura, f.pago_factura FROM factura f, cliente c WHERE c.idcliente = f.FK_idcliente AND `estado_factura` = 0 ORDER BY f.fecha_factura ASC";
		
		$query = "SELECT f.idfactura,f.cod_factura,c.nombre_cliente,c.apellido_cliente,f.fecha_factura,f.pago_factura,f.estado_factura, COUNT(f.cod_factura) AS numero_pagos FROM factura f, cliente c WHERE f.estado_factura = 0 AND f.FK_idcliente = c.idcliente GROUP BY cod_factura HAVING COUNT(cod_factura) > 0 ORDER BY f.fecha_factura ASC";
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

	

?>