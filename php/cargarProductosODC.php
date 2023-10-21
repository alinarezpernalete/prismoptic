<?php
	include 'database.php';

	if(isset($_POST['idODC'])){
		$idODC = $_POST['idODC'];

		$query = "SELECT c.iddetallec, c.cod_compra, p.idproducto, p.codigo_producto, p.descripcion_producto, p.existencia_producto, c.cantidad_producto, c.precio_producto FROM detalle_compra c, producto p WHERE c.FK_idproducto = p.idproducto AND c.cod_compra = $idODC";
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