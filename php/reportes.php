<?php
	include 'database.php';

  	if(isset($_POST['f1'])){
	  	$query = "SELECT f.idfactura,f.cod_factura,c.nombre_cliente,c.apellido_cliente,f.fecha_factura,f.pago_factura,f.estado_factura, COUNT(f.cod_factura) AS numero_pagos FROM factura f, cliente c WHERE f.FK_idcliente = c.idcliente GROUP BY cod_factura HAVING COUNT(cod_factura) > 0 ORDER BY f.fecha_factura ASC";
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
  	if(isset($_POST['f2'])){
	  	$query = "SELECT f.idfactura,f.cod_factura,c.nombre_cliente,c.apellido_cliente,f.fecha_factura,f.pago_factura,f.estado_factura, COUNT(f.cod_factura) AS numero_pagos FROM factura f, cliente c WHERE f.estado_factura = 1 AND f.FK_idcliente = c.idcliente GROUP BY cod_factura HAVING COUNT(cod_factura) > 0 ORDER BY f.fecha_factura ASC";
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

  	if(isset($_POST['c1'])){
	  	$query = "SELECT * FROM cliente";
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

  	if(isset($_POST['c2'])){
	  	$query = "SELECT c.cedula_cliente,c.nombre_cliente,c.apellido_cliente,c.fecha_cliente,c.direccion_cliente,c.telefono_cliente,c.email_cliente, COUNT(f.FK_idcliente) AS frecuencia FROM factura f, cliente c WHERE f.FK_idcliente = c.idcliente GROUP BY FK_idcliente HAVING COUNT(FK_idcliente) > 0 ORDER BY f.fecha_factura ASC";
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

  	if(isset($_POST['p1'])){
	  	$query = "SELECT * FROM producto";
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

  	if(isset($_POST['p2'])){
	  	$query = "SELECT p.codigo_producto, p.descripcion_producto, p.precio_producto, p.existencia_producto, COUNT(df.FK_idproducto) AS frecuencia FROM detalle_factura df, producto p WHERE df.FK_idproducto = p.idproducto GROUP BY FK_idproducto HAVING COUNT(FK_idproducto) > 0 ORDER BY frecuencia ASC LIMIT 1";
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

  	if(isset($_POST['p3'])){
  		$query = "SELECT p.codigo_producto, p.descripcion_producto, p.precio_producto, p.existencia_producto, COUNT(df.FK_idproducto) AS frecuencia FROM detalle_factura df, producto p WHERE df.FK_idproducto = p.idproducto GROUP BY FK_idproducto HAVING COUNT(FK_idproducto) > 0 ORDER BY frecuencia DESC LIMIT 1";
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

	if(isset($_POST['p4'])){
	  	$query = "SELECT * FROM `producto` ORDER BY `producto`.`precio_producto` ASC LIMIT 1";
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

  	if(isset($_POST['p5'])){
	  	$query = "SELECT * FROM `producto` ORDER BY `producto`.`precio_producto` DESC LIMIT 1";
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
  	
  	if(isset($_POST['p6'])){
	  	$query = "SELECT * FROM `producto` ORDER BY `producto`.`existencia_producto` DESC LIMIT 1";
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

  	if(isset($_POST['p7'])){
	  	$query = "SELECT * FROM `producto` ORDER BY `producto`.`existencia_producto` ASC LIMIT 1";
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

  	if(isset($_POST['cp1'])){
	  	$query = "SELECT c.idcompra,c.cod_compra,p.nombre_proveedor,c.fecha_odc,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.FK_idproveedor = p.idproveedor GROUP BY cod_compra HAVING COUNT(cod_compra) > 0";
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

  	if(isset($_POST['cp2'])){
	  	$query = "SELECT c.idcompra,c.cod_compra,p.nombre_proveedor,c.fecha_odc,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.FK_idproveedor = p.idproveedor AND c.estado_odc = 0 GROUP BY cod_compra HAVING COUNT(cod_compra) > 0";
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

  	if(isset($_POST['pr1'])){
	  	$query = "SELECT * FROM proveedor";
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

  	if(isset($_POST['pr2'])){
	  	$query = "SELECT p.identificacion_proveedor, p.nombre_proveedor, p.registro_proveedor, p.direccion_proveedor, p.telefono_proveedor, p.email_proveedor, COUNT(c.FK_idproveedor) AS frecuencia FROM compra c, proveedor p WHERE c.FK_idproveedor = p.idproveedor GROUP BY FK_idproveedor HAVING COUNT(FK_idproveedor) > 0 ORDER BY c.fecha_recibido DESC";
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