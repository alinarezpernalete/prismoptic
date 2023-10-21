-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-07-2020 a las 19:15:57
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prismoptico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `idcliente` int(11) NOT NULL,
  `cedula_cliente` varchar(45) NOT NULL,
  `nombre_cliente` varchar(45) NOT NULL,
  `apellido_cliente` varchar(45) NOT NULL,
  `fecha_cliente` date DEFAULT NULL,
  `direccion_cliente` varchar(90) DEFAULT NULL,
  `telefono_cliente` varchar(11) DEFAULT NULL,
  `email_cliente` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idcliente`, `cedula_cliente`, `nombre_cliente`, `apellido_cliente`, `fecha_cliente`, `direccion_cliente`, `telefono_cliente`, `email_cliente`) VALUES
(1, '27142711', 'Angel', 'Linarez', '2000-05-11', 'Urb. Obelisco', '04245739234', 'angeled.pernalete@gmail.com'),
(2, '9848854', 'Flor', 'Pernalete', '1970-01-10', 'Urb. Obelisco', '04121742651', 'florpernalete@gmail.com'),
(3, '27884648', 'Fabiola', 'Guevara', '2000-03-30', 'Avenida Venezuela entre calle 15', '04145746444', 'fabiolaguevara@gmail.com'),
(4, '27197355', 'Miguel', 'Freitez', '1999-10-20', 'Urb. Obelisco', '04268635543', 'miguelfreitez@gmail.com'),
(5, '30105897', 'Christian', 'LÃ³pez', '2002-10-07', 'Urb Obelisco', '04143947847', 'chrislopez@gmail.com'),
(6, '25847388', 'Jorge', 'Colmenarez', '1998-11-10', 'La Antena', '04145784847', 'jorgecol@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `idcompra` int(11) NOT NULL,
  `cod_compra` varchar(45) NOT NULL,
  `FK_idproveedor` int(11) NOT NULL,
  `encargado_compra` varchar(90) NOT NULL,
  `fecha_odc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fecha_recibido` datetime DEFAULT NULL,
  `pago_compra` int(11) NOT NULL,
  `estado_odc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`idcompra`, `cod_compra`, `FK_idproveedor`, `encargado_compra`, `fecha_odc`, `fecha_recibido`, `pago_compra`, `estado_odc`) VALUES
(1, 'OC001', 2, 'Ana Perez', '2020-07-11 21:16:50', '2020-07-16 05:56:04', 1, 1),
(2, 'OC001', 2, 'Ana Perez', '2020-07-11 21:16:50', '2020-07-16 05:56:04', 3, 1),
(3, 'OC001', 2, 'Ana Perez', '2020-07-11 21:16:50', '2020-07-16 05:56:04', 2, 1),
(4, 'OC001', 2, 'Ana Perez', '2020-07-11 21:16:50', '2020-07-16 05:56:04', 4, 1),
(14, 'OC002', 2, 'Juan Perez', '2020-07-19 20:27:45', '2020-07-19 15:58:02', 1, 1),
(15, 'OC003', 2, 'Gabriel Jimenez', '2020-07-19 14:38:10', '2020-07-19 16:04:19', 1, 1),
(16, 'OC003', 2, 'Gabriel Jimenez', '2020-07-19 14:38:10', '2020-07-19 16:04:19', 2, 1),
(22, 'OC004', 4, 'Fabiola Guevara', '2020-07-19 21:42:42', NULL, 1, 0),
(23, 'OC005', 4, 'Angel Linarez', '2020-07-19 21:44:40', NULL, 1, 0),
(24, 'OC006', 4, 'Angel Linarez', '2020-07-19 21:45:24', NULL, 2, 0),
(25, 'OC006', 4, 'Angel Linarez', '2020-07-19 21:45:25', NULL, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_compra`
--

CREATE TABLE `detalle_compra` (
  `iddetallec` int(11) NOT NULL,
  `cod_compra` int(11) DEFAULT NULL,
  `FK_idproducto` int(11) NOT NULL,
  `cantidad_producto` int(11) NOT NULL,
  `precio_producto` decimal(19,2) NOT NULL,
  `cantidad_pendiente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_compra`
--

INSERT INTO `detalle_compra` (`iddetallec`, `cod_compra`, `FK_idproducto`, `cantidad_producto`, `precio_producto`, `cantidad_pendiente`) VALUES
(1, 1, 1, 20, '100.00', 0),
(8, 1, 3, 20, '200.00', 0),
(11, 1, 1, 20, '100.00', 0),
(12, 1, 1, 20, '100.00', 0),
(23, 14, 3, 20, '200.00', 0),
(24, 15, 4, 12, '235.00', 0),
(25, 15, 1, 10, '100.00', 0),
(32, 22, 1, 10, '100.00', 10),
(33, 23, 3, 10, '200.00', 10),
(34, 24, 3, 10, '200.00', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_factura`
--

CREATE TABLE `detalle_factura` (
  `iddetallef` int(11) NOT NULL,
  `cod_factura` int(11) DEFAULT NULL,
  `FK_idproducto` int(11) NOT NULL,
  `cantidad_producto` int(11) NOT NULL,
  `precio_producto` decimal(19,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle_factura`
--

INSERT INTO `detalle_factura` (`iddetallef`, `cod_factura`, `FK_idproducto`, `cantidad_producto`, `precio_producto`) VALUES
(1, 1, 1, 1, '100.00'),
(2, 1, 3, 1, '200.00'),
(111, 72, 3, 1, '200.00'),
(112, 73, 3, 1, '200.00'),
(113, 73, 2, 1, '200.00'),
(114, 74, 3, 1, '200.00'),
(115, 74, 1, 2, '100.00'),
(116, 75, 4, 1, '235.00'),
(117, 75, 3, 1, '200.00'),
(118, 75, 1, 2, '100.00'),
(119, 76, 1, 1, '100.00'),
(120, 76, 1, 1, '100.00'),
(121, 76, 3, 1, '200.00'),
(122, 76, 4, 1, '235.00'),
(128, 77, 3, 1, '200.00'),
(129, 77, 3, 1, '200.00'),
(130, 77, 1, 1, '100.00'),
(131, 77, 4, 1, '235.00'),
(136, 78, 1, 1, '100.00'),
(137, 82, 1, 1, '100.00'),
(138, 85, 1, 1, '100.00'),
(141, 96, 1, 1, '100.00'),
(142, 97, 3, 1, '100.00'),
(144, 98, 1, 1, '100.00'),
(145, 101, 1, 1, '100.00'),
(146, 104, 1, 1, '100.00'),
(147, 104, 3, 1, '200.00'),
(148, 106, 3, 1, '200.00'),
(149, 106, 1, 2, '100.00'),
(150, 107, 1, 1, '100.00'),
(151, 107, 3, 1, '200.00'),
(152, 108, 1, 1, '100.00'),
(153, 108, 1, 1, '100.00'),
(154, 108, 1, 1, '100.00'),
(172, 110, 3, 1, '200.00'),
(173, 109, 4, 1, '235.00'),
(174, 111, 1, 2, '100.00'),
(175, 111, 3, 1, '200.00'),
(176, 113, 1, 2, '100.00'),
(177, 113, 3, 1, '200.00'),
(178, 113, 4, 1, '235.00'),
(203, 113, 1, 1, '100.00'),
(220, 115, 1, 2, '100.00'),
(223, 116, 1, 2, '100.00'),
(224, 117, 1, 2, '100.00'),
(226, 118, 1, 1, '100.00'),
(227, 120, 1, 2, '100.00'),
(228, 121, 1, 1, '100.00'),
(229, 122, 1, 2, '100.00'),
(237, 124, 1, 2, '100.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `idfactura` int(11) NOT NULL,
  `cod_factura` varchar(45) NOT NULL,
  `FK_idcliente` int(11) NOT NULL,
  `fecha_factura` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pago_factura` int(11) NOT NULL,
  `estado_factura` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`idfactura`, `cod_factura`, `FK_idcliente`, `fecha_factura`, `pago_factura`, `estado_factura`) VALUES
(1, 'F001', 1, '2020-06-16 23:08:29', 1, 1),
(72, 'F002', 1, '2020-06-18 19:17:05', 1, 0),
(73, 'F003', 2, '2020-06-18 19:18:40', 1, 1),
(74, 'F004', 3, '2020-06-18 22:17:08', 1, 1),
(75, 'F005', 4, '2020-06-20 19:08:13', 1, 1),
(76, 'F006', 2, '2020-06-20 19:09:59', 1, 0),
(77, 'F007', 3, '2020-06-21 22:17:43', 1, 0),
(78, 'F008', 1, '2020-06-30 17:59:21', 1, 1),
(79, 'F008', 1, '2020-06-30 17:59:21', 2, 1),
(80, 'F008', 1, '2020-06-30 17:59:21', 3, 1),
(81, 'F008', 1, '2020-06-30 17:59:21', 4, 1),
(82, 'F009', 2, '2020-06-30 18:09:05', 3, 1),
(83, 'F009', 2, '2020-06-30 18:09:05', 1, 1),
(84, 'F009', 2, '2020-06-30 18:09:05', 2, 1),
(85, 'F0010', 1, '2020-06-30 18:13:13', 2, 1),
(86, 'F0010', 1, '2020-06-30 18:13:13', 3, 1),
(87, 'F0010', 1, '2020-06-30 18:13:13', 4, 1),
(94, 'F0011', 1, '2020-06-30 18:22:46', 2, 0),
(95, 'F0011', 1, '2020-06-30 18:22:46', 4, 0),
(96, 'F0011', 1, '2020-06-30 18:22:46', 1, 0),
(97, 'F0012', 3, '2020-06-30 18:26:38', 1, 1),
(98, 'F0013', 1, '2020-06-30 18:28:13', 4, 1),
(99, 'F0013', 1, '2020-06-30 18:28:13', 2, 1),
(100, 'F0013', 1, '2020-06-30 18:28:13', 1, 1),
(101, 'F0014', 4, '2020-06-30 18:30:17', 4, 1),
(102, 'F0014', 4, '2020-06-30 18:30:17', 1, 1),
(103, 'F0014', 4, '2020-06-30 18:30:17', 3, 1),
(104, 'F0015', 1, '2020-06-30 18:57:49', 3, 1),
(105, 'F0015', 1, '2020-06-30 18:57:49', 2, 1),
(106, 'F0016', 2, '2020-06-30 19:02:32', 1, 1),
(107, 'F0017', 3, '2020-06-30 19:04:11', 3, 1),
(108, 'F0018', 4, '2020-06-30 19:05:49', 1, 1),
(109, 'F0019', 3, '2020-06-30 22:09:27', 1, 1),
(110, 'F0019', 3, '2020-06-30 22:09:27', 4, 1),
(111, 'F0020', 1, '2020-06-30 22:11:50', 2, 1),
(112, 'F0020', 1, '2020-06-30 22:11:50', 1, 1),
(113, 'F0021', 5, '2020-07-02 14:29:21', 2, 0),
(114, 'F0021', 5, '2020-07-02 14:29:21', 1, 0),
(115, 'F0022', 1, '2020-07-18 22:20:32', 1, 1),
(116, 'F0023', 5, '2020-07-18 22:24:05', 2, 1),
(117, 'F0024', 2, '2020-07-18 22:30:12', 3, 1),
(118, 'F0025', 2, '2020-07-18 22:32:52', 4, 1),
(119, 'F0025', 2, '2020-07-18 22:32:52', 3, 1),
(120, 'F0026', 4, '2020-07-18 22:35:12', 2, 1),
(121, 'F0027', 3, '2020-07-18 22:38:01', 1, 1),
(122, 'F0028', 1, '2020-07-18 22:40:03', 1, 1),
(123, 'F0028', 1, '2020-07-18 22:40:03', 3, 1),
(124, 'F0029', 5, '2020-07-18 22:50:00', 2, 1),
(125, 'F0029', 5, '2020-07-18 22:50:00', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formula`
--

CREATE TABLE `formula` (
  `idformula` int(11) NOT NULL,
  `esf_oi` decimal(3,2) DEFAULT NULL,
  `cil_oi` decimal(3,2) DEFAULT NULL,
  `eje_oi` decimal(3,2) DEFAULT NULL,
  `esf_od` decimal(3,2) DEFAULT NULL,
  `cil_od` decimal(3,2) DEFAULT NULL,
  `eje_od` decimal(3,2) DEFAULT NULL,
  `FK_idcliente` int(11) NOT NULL,
  `FK_idfactura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `formula`
--

INSERT INTO `formula` (`idformula`, `esf_oi`, `cil_oi`, `eje_oi`, `esf_od`, `cil_od`, `eje_od`, `FK_idcliente`, `FK_idfactura`) VALUES
(1, '-3.90', '9.00', '0.00', '-3.90', '9.00', '0.00', 1, 115),
(2, '0.00', '2.00', '0.00', '-2.00', '0.00', '0.00', 5, 116),
(3, '3.00', '0.00', '0.00', '3.00', '0.00', '0.00', 2, 117),
(4, '3.00', '0.00', '0.00', '3.00', '0.00', '0.00', 4, 120),
(5, '0.00', '-2.00', '0.00', '0.00', '-2.00', '0.00', 3, 121),
(6, '0.00', '0.00', '1.90', '0.00', '0.00', '1.90', 1, 122);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `idpago` int(11) NOT NULL,
  `cod_pago` varchar(45) NOT NULL,
  `descripcion_pago` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pago`
--

INSERT INTO `pago` (`idpago`, `cod_pago`, `descripcion_pago`) VALUES
(1, 'EF', 'Efectivo'),
(2, 'DB', 'Débito'),
(3, 'CR', 'Crédito'),
(4, 'TR', 'Transferencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idproducto` int(11) NOT NULL,
  `codigo_producto` varchar(45) NOT NULL,
  `descripcion_producto` varchar(45) NOT NULL,
  `precio_producto` decimal(19,2) NOT NULL,
  `existencia_producto` int(11) NOT NULL,
  `estado_producto` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idproducto`, `codigo_producto`, `descripcion_producto`, `precio_producto`, `existencia_producto`, `estado_producto`) VALUES
(1, 'CM001', 'Cristal monofocal de policarbonato', '100.00', 74, 1),
(2, 'CM002', 'Cristal monofocal de vidrio', '200.00', 20, 0),
(3, 'MAD2221', 'Montura Adidas blanca de plastico', '200.00', 40, 1),
(4, 'MPO0002', 'Montura Polar negra de metal', '235.00', 32, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `idproveedor` int(11) NOT NULL,
  `identificacion_proveedor` varchar(45) NOT NULL,
  `nombre_proveedor` varchar(45) NOT NULL,
  `registro_proveedor` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `direccion_proveedor` varchar(90) DEFAULT NULL,
  `telefono_proveedor` varchar(11) NOT NULL,
  `email_proveedor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`idproveedor`, `identificacion_proveedor`, `nombre_proveedor`, `registro_proveedor`, `direccion_proveedor`, `telefono_proveedor`, `email_proveedor`) VALUES
(1, 'J-84609274-1', 'Laboratorio Leones', '2020-06-21 20:14:10', 'Av. Venezuela entre calle 15, Bqto', '02512733497', 'lableones@info.ve'),
(2, 'J-84662910-1', 'Laboratorio OftalmolÃ³gico', '2020-06-21 20:14:20', 'CC Paris, local M33, Bqto', '02518812603', 'clinicaoftal@gmail.com'),
(3, 'J-27992933-1', 'Instituto Universitario de OptometrÃ­a', '2020-06-21 20:14:28', 'Carrera 2 con calle 14, Bqto', '02512389938', 'iuoptometria@gmai.com'),
(4, 'J-65529100-3', 'Oaps CA', '2020-06-21 18:53:57', 'Ca.Santa Ana, Edf.Opas, Boleita Sur, Caracas', '02122346431', 'oapca@info.ve');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre_usuario` varchar(45) NOT NULL,
  `contrasena_usuario` varchar(45) NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `pregunta_seguridad` varchar(45) NOT NULL,
  `respuesta_seguridad` varchar(45) NOT NULL,
  `nivel_seguridad` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre_usuario`, `contrasena_usuario`, `fecha_registro`, `pregunta_seguridad`, `respuesta_seguridad`, `nivel_seguridad`) VALUES
(1, 'ADMI', '123', '2020-07-20 02:33:11', 'Codigo', '123', 1),
(2, 'ANGEL', '0511', '2020-07-20 13:50:54', 'Cumpleanos', '0511', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idcliente`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`idcompra`,`FK_idproveedor`),
  ADD KEY `fk_compra_proveedor` (`FK_idproveedor`),
  ADD KEY `fk_compra_pago` (`pago_compra`);

--
-- Indices de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD PRIMARY KEY (`iddetallec`,`FK_idproducto`),
  ADD KEY `fk_detallecompra_compra` (`cod_compra`),
  ADD KEY `fk_detallecompra_producto` (`FK_idproducto`);

--
-- Indices de la tabla `detalle_factura`
--
ALTER TABLE `detalle_factura`
  ADD PRIMARY KEY (`iddetallef`,`FK_idproducto`),
  ADD KEY `fk_detalle_factura_producto1` (`FK_idproducto`),
  ADD KEY `fk_detalle_factura_factura1` (`cod_factura`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`idfactura`,`FK_idcliente`),
  ADD KEY `fk_factura_cliente1` (`FK_idcliente`),
  ADD KEY `fk_factura_iva1` (`pago_factura`);

--
-- Indices de la tabla `formula`
--
ALTER TABLE `formula`
  ADD PRIMARY KEY (`idformula`,`FK_idcliente`),
  ADD KEY `fk_formula_cliente` (`FK_idcliente`),
  ADD KEY `fk_formula_factura` (`FK_idfactura`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`idpago`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idproducto`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`idproveedor`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idcliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `idcompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  MODIFY `iddetallec` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `detalle_factura`
--
ALTER TABLE `detalle_factura`
  MODIFY `iddetallef` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=238;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `idfactura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT de la tabla `formula`
--
ALTER TABLE `formula`
  MODIFY `idformula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `pago`
--
ALTER TABLE `pago`
  MODIFY `idpago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idproducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `idproveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `fk_compra_pago` FOREIGN KEY (`pago_compra`) REFERENCES `pago` (`idpago`),
  ADD CONSTRAINT `fk_compra_proveedor` FOREIGN KEY (`FK_idproveedor`) REFERENCES `proveedor` (`idproveedor`);

--
-- Filtros para la tabla `detalle_compra`
--
ALTER TABLE `detalle_compra`
  ADD CONSTRAINT `fk_detallecompra_compra` FOREIGN KEY (`cod_compra`) REFERENCES `compra` (`idcompra`),
  ADD CONSTRAINT `fk_detallecompra_producto` FOREIGN KEY (`FK_idproducto`) REFERENCES `producto` (`idproducto`);

--
-- Filtros para la tabla `detalle_factura`
--
ALTER TABLE `detalle_factura`
  ADD CONSTRAINT `fk_detalle_factura_factura1` FOREIGN KEY (`cod_factura`) REFERENCES `factura` (`idfactura`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_detalle_factura_producto1` FOREIGN KEY (`FK_idproducto`) REFERENCES `producto` (`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_cliente1` FOREIGN KEY (`FK_idcliente`) REFERENCES `cliente` (`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_factura_iva1` FOREIGN KEY (`pago_factura`) REFERENCES `pago` (`idpago`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `formula`
--
ALTER TABLE `formula`
  ADD CONSTRAINT `fk_formula_cliente` FOREIGN KEY (`FK_idcliente`) REFERENCES `cliente` (`idcliente`),
  ADD CONSTRAINT `fk_formula_factura` FOREIGN KEY (`FK_idfactura`) REFERENCES `factura` (`idfactura`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
