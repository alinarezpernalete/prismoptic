<?php

	require('fpdf/fpdf.php');

	class PDF extends FPDF{
		function Header(){
			$this->Image('logo.png',10,8,60);
			$this->SetFont('Helvetica','',15);
			$this->Ln(10);
			$this->Cell(0,10,utf8_decode('Reporte de Facturas (incluye facturas anuladas)'),'C');
			$this->Ln(15);
			$this->Cell(20,10,'Cod',1,0,'C',0);
			$this->Cell(40,10,'Cliente',1,0,'C',0);
			$this->Cell(50,10,'Fecha',1,0,'C',0);
			$this->Cell(40,10,'Pago',1,0,'C',0);
			$this->Cell(40,10,'Estado',1,1,'C',0);
		}
		
	}

	$connection = mysqli_connect('localhost', 'root', '', 'prismoptic');
	$consulta = "SELECT f.idfactura,f.cod_factura,c.nombre_cliente,c.apellido_cliente,f.fecha_factura,f.pago_factura,f.estado_factura, COUNT(f.cod_factura) AS numero_pagos FROM factura f, cliente c WHERE f.FK_idcliente = c.idcliente GROUP BY cod_factura HAVING COUNT(cod_factura) > 0 ORDER BY f.fecha_factura ASC";
	$resultado = $connection->query($consulta);

	$pdf = new PDF();
	$pdf->AddPage();
	$pdf->SetFont('Helvetica','',12);

	while($row = $resultado->fetch_assoc()){
		$pdf->Cell(20,10,$row['cod_factura'],1,0,'C',0);
		$pdf->Cell(40,10,utf8_decode($row['nombre_cliente']." ".$row['apellido_cliente']),1,0,'C',0);
		$pdf->Cell(50,10,utf8_decode($row['fecha_factura']),1,0,'C',0);
		if($row['pago_factura'] == 1){ $descripcion_pago = "Efectivo"; }
		if($row['pago_factura'] == 2){ $descripcion_pago = "Débito"; }
		if($row['pago_factura'] == 3){ $descripcion_pago = "Crédito"; }
		if($row['pago_factura'] == 4){ $descripcion_pago = "Transferencia"; }
		if($row['numero_pagos'] > 1){ $pdf->Cell(40,10,utf8_decode('Varios'),1,0,'C',0); } else {
			$pdf->Cell(40,10,utf8_decode($descripcion_pago),1,0,'C',0);
		}
		if($row['estado_factura'] == 1){ $estado_factura = "-"; } else {
			if($row['estado_factura'] == 0){ $estado_factura = "Anulada"; }
		}
		$pdf->Cell(40,10,utf8_decode($estado_factura),1,1,'C',0);
	}

	$pdf->Output();

?>