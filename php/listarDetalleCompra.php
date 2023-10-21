<?php
	include 'database.php';

	if(isset($_POST['idcompra'])){
		$idcompra = $_POST['idcompra'];

		$query = "SELECT c.cod_compra, p.codigo_producto, p.descripcion_producto, d.cantidad_producto, d.precio_producto FROM detalle_compra d, compra c, producto p WHERE d.cod_compra = c.idcompra AND d.FK_idproducto = p.idproducto AND d.cod_compra = $idcompra";
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