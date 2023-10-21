<?php
	include 'database.php';

		//$query = "SELECT f.idfactura, f.cod_factura, c.nombre_cliente, c.apellido_cliente, f.fecha_factura, f.pago_factura FROM factura f, cliente c WHERE c.idcliente = f.FK_idcliente AND `estado_factura` = 0 ORDER BY f.fecha_factura ASC";
		
		$query = "SELECT c.idcompra,c.cod_compra,p.nombre_proveedor,c.fecha_odc,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.estado_odc = 0 AND c.FK_idproveedor = p.idproveedor GROUP BY cod_compra HAVING COUNT(cod_compra) > 0 ORDER BY c.fecha_odc ASC";
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