<?php

	require('fpdf/fpdf.php');

	class PDF extends FPDF{
		function Header(){
			$this->Image('logo.png',10,8,60);
			$this->SetFont('Helvetica','',9);
			$this->Ln(10);
			$this->Cell(0,10,utf8_decode('Reporte de Clientes. Ordenados por el primero más frecuente al menos frecuente.'),'C');
			$this->Ln(15);
			$this->Cell(20,10,utf8_decode('Cédula'),1,0,'C',0);
			$this->Cell(28,10,'Cliente',1,0,'C',0);
			$this->Cell(20,10,'Nacimiento',1,0,'C',0);
			$this->Cell(50,10,utf8_decode('Dirección'),1,0,'C',0);
			$this->Cell(25,10,utf8_decode('Teléfono'),1,0,'C',0);
			$this->Cell(50,10,'Email',1,1,'C',0);
		}
		
	}

	$connection = mysqli_connect('localhost', 'root', '', 'prismoptico');
	$consulta = "SELECT c.cedula_cliente,c.nombre_cliente,c.apellido_cliente,c.fecha_cliente,c.direccion_cliente,c.telefono_cliente,c.email_cliente, COUNT(f.FK_idcliente) AS frecuencia FROM factura f, cliente c WHERE f.FK_idcliente = c.idcliente GROUP BY FK_idcliente HAVING COUNT(FK_idcliente) > 0 ORDER BY f.fecha_factura ASC";
	$resultado = $connection->query($consulta);

	$pdf = new PDF();
	$pdf->AddPage();
	$pdf->SetFont('Helvetica','',9);

	while($row = $resultado->fetch_assoc()){
		$pdf->Cell(20,10,$row['cedula_cliente'],1,0,'L',0);
		$pdf->Cell(28,10,utf8_decode($row['nombre_cliente']." ".$row['apellido_cliente']),1,0,'L',0);
		$pdf->Cell(20,10,utf8_decode($row['fecha_cliente']),1,0,'L',0);
		$pdf->Cell(50,10,utf8_decode($row['direccion_cliente']),1,0,'L',0);
		$pdf->Cell(25,10,utf8_decode($row['telefono_cliente']),1,0,'L',0);
		$pdf->Cell(50,10,utf8_decode($row['email_cliente']),1,1,'L',0);
		
	}

	$pdf->Output();

?>