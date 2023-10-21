<?php
	include 'database.php';

	if(isset($_POST['cod_factura'])){
		$cod_factura = $_POST['cod_factura'];

		$query = "SELECT pago_factura FROM factura WHERE cod_factura = '$cod_factura'";
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