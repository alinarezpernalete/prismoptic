<?php
	include "database.php";

	if(isset($_POST['codigo'])){
		$codigo = $_POST['codigo'];

		$query = "SELECT c.idcompra,c.cod_compra,p.nombre_proveedor,c.fecha_recibido,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.estado_odc = 1 AND c.FK_idproveedor = p.idproveedor AND c.cod_compra LIKE '%$codigo%' GROUP BY cod_compra HAVING COUNT(cod_compra) > 0 ORDER BY c.fecha_recibido ASC";

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

	if(isset($_POST['proveedor'])){
		$proveedor = $_POST['proveedor'];

		$query = "SELECT c.idcompra,c.cod_compra, p.nombre_proveedor,c.fecha_recibido,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.estado_odc = 1 AND c.FK_idproveedor = p.idproveedor AND p.nombre_proveedor LIKE '%$proveedor%' GROUP BY cod_compra HAVING COUNT(cod_compra) > 0 ORDER BY c.fecha_recibido ASC";

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

	if(isset($_POST['dia'])){
		$dia = $_POST['dia'];
		$mes = $_POST['mes'];
		$año = $_POST['año'];

		$query = "SELECT c.idcompra,c.cod_compra, p.nombre_proveedor,c.fecha_recibido,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.estado_odc = 1 AND c.FK_idproveedor = p.idproveedor AND c.fecha_recibido LIKE '%$año-$mes-$dia%' GROUP BY cod_compra HAVING COUNT(cod_compra) > 0 ORDER BY c.fecha_recibido ASC";

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

	

	/////////////

	if(isset($_POST['codigoPendiente'])){
		$codigoPendiente = $_POST['codigoPendiente'];

		$query = "SELECT c.idcompra,c.cod_compra,p.nombre_proveedor,c.fecha_odc,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.estado_odc = 0 AND c.FK_idproveedor = p.idproveedor AND c.cod_compra LIKE '%$codigoPendiente%' GROUP BY cod_compra HAVING COUNT(cod_compra) > 0 ORDER BY c.fecha_odc ASC";

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