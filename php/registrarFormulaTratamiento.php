<?php
	include "database.php";

	if(isset($_POST['idcliente'])){
		$idcliente = $_POST['idcliente'];
		$esf_oi = $_POST['esf_oi'];
		$cil_oi = $_POST['cil_oi'];
		$eje_oi = $_POST['eje_oi'];
		$esf_od = $_POST['esf_oi'];
		$cil_od = $_POST['cil_oi'];
		$eje_od = $_POST['eje_oi'];

		$query = "INSERT INTO `formula`(`idformula`, `esf_oi`, `cil_oi`, `eje_oi`, `esf_od`, `cil_od`, `eje_od`, `FK_idcliente`, `FK_idfactura`) VALUES ('','$esf_oi','$cil_oi','$eje_oi','$esf_od','$cil_od','$eje_od',$idcliente,NULL)";

		$result = mysqli_query($connection, $query);

		if (!$result){
			die("Query failed");
		}

		echo 'Added Successfully';
	}

	if(isset($_POST['idfactura2'])){
		$idfactura = $_POST['idfactura2'];

		$query = "UPDATE `formula` SET `FK_idfactura`= $idfactura WHERE `FK_idfactura` IS NULL";

		$result = mysqli_query($connection, $query);

		if (!$result){
			die("Query failed");
		}

		echo 'Added Successfully';
	}
	
?>