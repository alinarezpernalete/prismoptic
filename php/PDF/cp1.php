<?php

	require('fpdf/fpdf.php');

	class PDF extends FPDF{
		function Header(){
			$this->Image('logo.png',10,8,60);
			$this->SetFont('Helvetica','',8);
			$this->Ln(10);
			$this->Cell(0,10,utf8_decode('Reporte de Compras. General'),'C');
			$this->Ln(10);
			$this->Cell(25,10,utf8_decode('Código'),1,0,'C',0);
			$this->Cell(35,10,utf8_decode('Proveedor'),1,0,'C',0);
			$this->Cell(30,10,'Fecha',1,0,'C',0);
			$this->Cell(40,10,utf8_decode('Pago'),1,0,'C',0);
			$this->Cell(40,10,utf8_decode('Estado'),1,1,'C',0);
		}
		
	}

	$connection = mysqli_connect('localhost', 'root', '', 'prismoptico');
	$consulta = "SELECT c.idcompra,c.cod_compra,p.nombre_proveedor,c.fecha_odc,c.pago_compra,c.estado_odc, COUNT(c.cod_compra) AS numero_pagos FROM compra c, proveedor p WHERE c.FK_idproveedor = p.idproveedor GROUP BY cod_compra HAVING COUNT(cod_compra) > 0 ORDER BY c.fecha_odc ASC";
	$resultado = $connection->query($consulta);

	$pdf = new PDF();
	$pdf->AddPage();
	$pdf->SetFont('Helvetica','',8);

	while($row = $resultado->fetch_assoc()){
		$pdf->Cell(25,10,$row['cod_compra'],1,0,'L',0);
		$pdf->Cell(35,10,utf8_decode($row['nombre_proveedor']),1,0,'L',0);
		$pdf->Cell(30,10,utf8_decode($row['fecha_odc']),1,0,'C',0);
		if($row['pago_compra'] == 1){ $descripcion_pago = "Efectivo"; }
		if($row['pago_compra'] == 2){ $descripcion_pago = "Débito"; }
		if($row['pago_compra'] == 3){ $descripcion_pago = "Crédito"; }
		if($row['pago_compra'] == 4){ $descripcion_pago = "Transferencia"; }
		if($row['numero_pagos'] > 1){ $pdf->Cell(40,10,utf8_decode('Varios'),1,0,'C',0); } else {
			$pdf->Cell(40,10,utf8_decode($descripcion_pago),1,0,'C',0);
		}
		if($row['estado_odc'] == 1){ $estado_odc = "-"; } else {
			if($row['estado_odc'] == 0){ $estado_odc = "Pendiente"; }
		}
		$pdf->Cell(40,10,utf8_decode($estado_odc),1,1,'C',0);
	}

	$pdf->Output();

?>