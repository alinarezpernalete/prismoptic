<?php

	require('fpdf/fpdf.php');

	class PDF extends FPDF{
		function Header(){
			$this->Image('logo.png',10,8,60);
			$this->SetFont('Helvetica','',8);
			$this->Ln(10);
			$this->Cell(0,10,utf8_decode('Reporte de Proveedores. Ordenados por el primero más frecuente al menos frecuente.'),'C');
			$this->Ln(10);
			$this->Cell(25,10,utf8_decode('Identificación'),1,0,'C',0);
			$this->Cell(35,10,utf8_decode('Nombre'),1,0,'C',0);
			$this->Cell(30,10,'Registro',1,0,'C',0);
			$this->Cell(50,10,utf8_decode('Dirección'),1,0,'C',0);
			$this->Cell(20,10,utf8_decode('Teléfono'),1,0,'C',0);
			$this->Cell(30,10,utf8_decode('Email'),1,1,'C',0);
		}
		
	}

	$connection = mysqli_connect('localhost', 'root', '', 'prismoptico');
	$consulta = "SELECT p.identificacion_proveedor, p.nombre_proveedor, p.registro_proveedor, p.direccion_proveedor, p.telefono_proveedor, p.email_proveedor, COUNT(c.FK_idproveedor) AS frecuencia FROM compra c, proveedor p WHERE c.FK_idproveedor = p.idproveedor GROUP BY FK_idproveedor HAVING COUNT(FK_idproveedor) > 0 ORDER BY c.fecha_recibido DESC";
	$resultado = $connection->query($consulta);

	$pdf = new PDF();
	$pdf->AddPage();
	$pdf->SetFont('Helvetica','',8);

	while($row = $resultado->fetch_assoc()){
		$pdf->Cell(25,10,$row['identificacion_proveedor'],1,0,'L',0);
		$pdf->Cell(35,10,utf8_decode($row['nombre_proveedor']),1,0,'L',0);
		$pdf->Cell(30,10,utf8_decode($row['registro_proveedor']),1,0,'C',0);
		$pdf->Cell(50,10,utf8_decode($row['direccion_proveedor']),1,0,'L',0);
		$pdf->Cell(20,10,utf8_decode($row['telefono_proveedor']),1,0,'C',0);
		$pdf->Cell(30,10,utf8_decode($row['email_proveedor']),1,1,'L',0);
	}

	$pdf->Output();

?>