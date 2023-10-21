<?php

	require('fpdf/fpdf.php');

	class PDF extends FPDF{
		function Header(){
			$this->Image('logo.png',10,8,60);
			$this->SetFont('Helvetica','',15);
			$this->Ln(10);
			$this->Cell(0,10,utf8_decode('Reporte de Productos. Menos vendido'),'C');
			$this->Ln(15);
			$this->Cell(25,10,'Cod',1,0,'C',0);
			$this->Cell(75,10,utf8_decode('Descripción'),1,0,'C',0);
			$this->Cell(30,10,'Existencia',1,0,'C',0);
			$this->Cell(25,10,'Precio',1,0,'C',0);
			$this->Cell(37,10,'Veces vendido',1,1,'C',0);
		}
		
	}

	$connection = mysqli_connect('localhost', 'root', '', 'prismoptico');
	$consulta = "SELECT p.codigo_producto, p.descripcion_producto, p.precio_producto, p.existencia_producto, COUNT(df.FK_idproducto) AS frecuencia FROM detalle_factura df, producto p WHERE df.FK_idproducto = p.idproducto GROUP BY FK_idproducto HAVING COUNT(FK_idproducto) > 0 ORDER BY frecuencia ASC LIMIT 1";
	$resultado = $connection->query($consulta);

	$pdf = new PDF();
	$pdf->AddPage();
	$pdf->SetFont('Helvetica','',12);

	while($row = $resultado->fetch_assoc()){
		$pdf->Cell(25,10,$row['codigo_producto'],1,0,'L',0);
		$pdf->Cell(75,10,utf8_decode($row['descripcion_producto']),1,0,'L',0);
		$pdf->Cell(30,10,utf8_decode($row['existencia_producto']),1,0,'C',0);
		$pdf->Cell(25,10,utf8_decode($row['precio_producto']),1,0,'C',0);
		$pdf->Cell(37,10,utf8_decode($row['frecuencia']),1,1,'C',0);
	}

	$pdf->Output();

?>