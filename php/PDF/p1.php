<?php

	require('fpdf/fpdf.php');

	class PDF extends FPDF{
		function Header(){
			$this->Image('logo.png',10,8,60);
			$this->SetFont('Helvetica','',15);
			$this->Ln(10);
			$this->Cell(0,10,utf8_decode('Reporte de Productos (incluye los desactivados en sistema)'),'C');
			$this->Ln(15);
			$this->Cell(25,10,'Cod',1,0,'C',0);
			$this->Cell(75,10,utf8_decode('Descripción'),1,0,'C',0);
			$this->Cell(50,10,'Existencia',1,0,'C',0);
			$this->Cell(40,10,'Precio',1,1,'C',0);
		}
		
	}

	$connection = mysqli_connect('localhost', 'root', '', 'prismoptico');
	$consulta = "SELECT * FROM producto";
	$resultado = $connection->query($consulta);

	$pdf = new PDF();
	$pdf->AddPage();
	$pdf->SetFont('Helvetica','',12);

	while($row = $resultado->fetch_assoc()){
		$pdf->Cell(25,10,$row['codigo_producto'],1,0,'L',0);
		$pdf->Cell(75,10,utf8_decode($row['descripcion_producto']),1,0,'L',0);
		$pdf->Cell(50,10,utf8_decode($row['existencia_producto']),1,0,'C',0);
		$pdf->Cell(40,10,utf8_decode($row['precio_producto']),1,1,'C',0);
	}

	$pdf->Output();

?>