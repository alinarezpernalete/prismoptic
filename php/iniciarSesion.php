<?php
	include 'database.php';

	if(isset($_POST['nombre_usuario'])){
		$nombre_usuario = $_POST['nombre_usuario'];
		$contrasena_usuario = $_POST['contrasena_usuario'];

		$query = "SELECT `nombre_usuario`, `contrasena_usuario` FROM `usuario` WHERE `nombre_usuario` = '$nombre_usuario' AND `contrasena_usuario` = '$contrasena_usuario'";
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