$(document).ready(function() {
	console.log("JQuery is working");
  //////////////////////////////////////////
  $('select#cmboxOpcion').on('change',function(){
        $('#PDF').html('');
        var value = parseInt($(this).val());
        $('#tableReporte').html('');
        if($("#cmboxOpcion option:selected").text() == "Seleccione una opción"){
            alert("Debe seleccionar una opción");
            let plantilla = '';
            plantilla += `<label class="text-black">Seleccione un filtro</label>`
            $('#filtros').html(plantilla);
            $('#PDF').html('');
        } else {
            if(value == 1){ 
              let plantilla = '';
              plantilla += `<label class="text-black">Seleccione un filtro</label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="f1" value="option1" checked>
                      <label class="form-check-label" for="f1">
                        General (incluye facturas anuladas)
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="f2" value="option2">
                      <label class="form-check-label" for="f2">
                      General (no incluye facturas anuladas)    
                      </label>
                  </div>

                  <div style="margin-top: 1em;">
                    <input type="submit" class="btn btn-success" id="btnBuscar" value="Aceptar"></button>
                  </div>`
                $('#filtros').html(plantilla);
            }
            if(value == 2){ 
              let plantilla = '';
              plantilla += `<label class="text-black">Seleccione un filtro</label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="c1" value="option1" checked>
                      <label class="form-check-label" for="c1">
                        General
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="c2" value="option2">
                      <label class="form-check-label" for="c2">
                        Más frecuentes    
                      </label>
                  </div>

                  <div style="margin-top: 1em;">
                    <input type="submit" class="btn btn-success" id="btnBuscar" value="Aceptar"></button>
                  </div>`
                $('#filtros').html(plantilla);
            }
            if(value == 3){ 
              let plantilla = '';
              plantilla += `<label class="text-black">Seleccione un filtro</label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p1" value="option1" checked>
                      <label class="form-check-label" for="p1">
                        General
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p2" value="option2">
                      <label class="form-check-label" for="p2">
                        Menos vendido    
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p3" value="option2">
                      <label class="form-check-label" for="p3">
                        Más vendido    
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p4" value="option2">
                      <label class="form-check-label" for="p4">
                        Más barato
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p5" value="option2">
                      <label class="form-check-label" for="p5">
                        Más costoso    
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p6" value="option2">
                      <label class="form-check-label" for="p6">
                        Mayor existencia    
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="p7" value="option2">
                      <label class="form-check-label" for="p7">
                        Menor existencia    
                      </label>
                  </div>

                  <div style="margin-top: 1em;">
                    <input type="submit" class="btn btn-success" id="btnBuscar" value="Aceptar"></button>
                  </div>`
                $('#filtros').html(plantilla);
            }
            if(value == 4){ 
              let plantilla = '';
              plantilla += `<label class="text-black">Seleccione un filtro</label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="cp1" value="option1" checked>
                      <label class="form-check-label" for="cp1">
                        General
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="cp2" value="option2">
                      <label class="form-check-label" for="cp2">
                        Pendientes
                      </label>
                  </div>

                  <div style="margin-top: 1em;">
                    <input type="submit" class="btn btn-success" id="btnBuscar" value="Aceptar"></button>
                  </div>`
                $('#filtros').html(plantilla);
            }

            if(value == 5){ 
              let plantilla = '';
              plantilla += `<label class="text-black">Seleccione un filtro</label>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="pr1" value="option1" checked>
                      <label class="form-check-label" for="pr1">
                        General
                      </label>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="pr2" value="option2">
                      <label class="form-check-label" for="pr2">
                        Más frecuentes
                      </label>
                  </div>

                  <div style="margin-top: 1em;">
                    <input type="submit" class="btn btn-success" id="btnBuscar" value="Aceptar"></button>
                  </div>`
                $('#filtros').html(plantilla);
            }

        }
    });

  $('#filtros').change(function() {
      $('#tableReporte').html('');
      $('#PDF').html('');
  });

  $(document).on('click', '#btnBuscar', function(){
      if($('#f1').is(":checked")){
          var f1 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { f1 },
            success : function(response){
                console.log(response);
                datos = JSON.parse(response);
                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_factura;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    let hora = temporal.substring(11,19);  
                    var fecha = dia+"-"+mes+"-"+año+"-"+hora;

                    if(resultado.pago_factura == 1){ var descripcion_pago = "Efectivo"; }
                    if(resultado.pago_factura == 2){ var descripcion_pago = "Débito"; }
                    if(resultado.pago_factura == 3){ var descripcion_pago = "Crédito"; }
                    if(resultado.pago_factura == 4){ var descripcion_pago = "Transferencia"; }
                    if(resultado.estado_factura == 0){ var estado_factura = "Anulada"; } else { estado_factura = "-"; }

                    if(resultado.numero_pagos > 1){
                        plantilla += `
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Cliente</th>
                              <th>Fecha</th>
                              <th>Pago</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody id="tableProducto" class="table table-hover">
                          <tr>
                            <td class="cod_factura">${resultado.cod_factura}</td>
                            <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                            <td>${fecha}</td>
                            <td>Varios</td>
                            <td class="text-danger">${estado_factura}</td>
                          </tr>
                          </tbody>`
                    } else {
                        if(resultado.numero_pagos == 1){
                            plantilla += `
                            <thead>
                              <tr>
                                <th>Código</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Pago</th>
                                <th>Estado</th>
                              </tr>
                            </thead>
                            <tbody id="tableProducto" class="table table-hover">
                              <tr>
                                <td>${resultado.cod_factura}</td>
                                <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                <td>${fecha}</td>
                                <td>${descripcion_pago}</td>
                                <td class="text-danger">${estado_factura}</td>
                              </tr>
                            </tbody>`
                        }
                    }

                });
                $('#tableReporte').html(plantilla);
                $('#PDF').html('<form action="php/PDF/f1.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');
              }
          });
      }
      if($('#f2').is(":checked")){
          var f2 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { f2 },
            success : function(response){
                console.log(response);
                datos = JSON.parse(response);
                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_factura;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    let hora = temporal.substring(11,19);  
                    var fecha = dia+"-"+mes+"-"+año+"-"+hora;

                    if(resultado.pago_factura == 1){ var descripcion_pago = "Efectivo"; }
                    if(resultado.pago_factura == 2){ var descripcion_pago = "Débito"; }
                    if(resultado.pago_factura == 3){ var descripcion_pago = "Crédito"; }
                    if(resultado.pago_factura == 4){ var descripcion_pago = "Transferencia"; }

                    if(resultado.numero_pagos > 1){
                        plantilla += `
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Cliente</th>
                              <th>Fecha</th>
                              <th>Pago</th>
                            </tr>
                          </thead>
                          <tbody id="tableProducto" class="table table-hover">
                          <tr>
                            <td class="cod_factura">${resultado.cod_factura}</td>
                            <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                            <td>${fecha}</td>
                            <td>Varios</td>
                          </tr>
                          </tbody>`
                    } else {
                        if(resultado.numero_pagos == 1){
                            plantilla += `
                            <thead>
                              <tr>
                                <th>Código</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Pago</th>
                              </tr>
                            </thead>
                            <tbody id="tableProducto" class="table table-hover">
                              <tr>
                                <td>${resultado.cod_factura}</td>
                                <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                <td>${fecha}</td>
                                <td>${descripcion_pago}</td>
                              </tr>
                            </tbody>`
                        }
                    }

                });
                $('#tableReporte').html(plantilla);
                $('#PDF').html('<form action="php/PDF/f2.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');
              }
          });
      }
      if($('#c1').is(":checked")){
          var c1 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { c1 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_cliente;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);  
                    var fecha = dia+"-"+mes+"-"+año;

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Cédula</th>
                        <th>Cliente</th>
                        <th>Nacimiento</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.cedula_cliente}</td>
                      <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                      <td><div style="width: 7em;">${fecha}</div></td>
                      <td>${resultado.direccion_cliente}</td>
                      <td>${resultado.telefono_cliente}</td>
                      <td><div style="width: 13em;"><small>${resultado.email_cliente}</small></div></td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);   
                $('#PDF').html('<form action="php/PDF/c1.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>'); 
            }
          });
      }
      if($('#c2').is(":checked")){
          var c2 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { c2 },
            success : function(response){
              datos = JSON.parse(response); 
              datosSuma = JSON.parse(response); 

              var suma = 0;
              datosSuma.forEach(resultado => {
                suma += parseInt(resultado.frecuencia);
              });
              console.log(suma);

                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_cliente;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);  
                    var fecha = dia+"-"+mes+"-"+año;
                    var porcentaje = (parseInt(resultado.frecuencia)/parseInt(suma))*100;

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Cédula</th>
                        <th>Cliente</th>
                        <th>Nacimiento</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Porcentaje</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.cedula_cliente}</td>
                      <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                      <td><div style="width: 7em;">${fecha}</div></td>
                      <td>${resultado.direccion_cliente}</td>
                      <td>${resultado.telefono_cliente}</td>
                      <td><div style="width: 13em;"><small>${resultado.email_cliente}</small></div></td>
                      <td><div style="width: 8em;"><small>Representa el: ${Math.round(porcentaje,2)} % de las ventas</small></div></td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);    
                $('#PDF').html('<form action="php/PDF/c2.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>'); 
            }
          });
      }
      if($('#p1').is(":checked")){
          var p1 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p1 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla); 
                $('#PDF').html('<form action="php/PDF/p1.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');    
            }
          });
      }
      if($('#p2').is(":checked")){
        var p2 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p2 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                        <th>Veces vendido</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                      <td>${resultado.frecuencia}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);  
                $('#PDF').html('<form action="php/PDF/p2.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');  
            }
          });
      }

      if($('#p3').is(":checked")){
        var p3 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p3 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                        <th>Veces vendido</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                      <td>${resultado.frecuencia}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);    
                $('#PDF').html('<form action="php/PDF/p3.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');
            }
          });
      }

      if($('#p4').is(":checked")){
          var p4 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p4 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla); 
                $('#PDF').html('<form action="php/PDF/p4.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');   
            }
          });
      }

      if($('#p5').is(":checked")){
          var p5 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p5 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);    
                $('#PDF').html('<form action="php/PDF/p5.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>'); 
            }
          });
      }

      if($('#p6').is(":checked")){
          var p6 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p6 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);    
                $('#PDF').html('<form action="php/PDF/p6.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>'); 
            }
          });
      }

      if($('#p7').is(":checked")){
          var p7 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { p7 },
            success : function(response){
              datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td>${resultado.codigo_producto}</td>
                      <td>${resultado.descripcion_producto}</td>
                      <td>${resultado.existencia_producto}</td>
                      <td>${resultado.precio_producto}</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);   
                $('#PDF').html('<form action="php/PDF/p7.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');  
            }
          });
      }

      if($('#cp1').is(":checked")){
          var cp1 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { cp1 },
            success : function(response){
              console.log(response);
                datos = JSON.parse(response);
                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_odc;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    let hora = temporal.substring(11,19);  
                    var fecha = dia+"-"+mes+"-"+año+"-"+hora;

                    if(resultado.pago_compra == 1){ var descripcion_pago = "Efectivo"; }
                    if(resultado.pago_compra == 2){ var descripcion_pago = "Débito"; }
                    if(resultado.pago_compra == 3){ var descripcion_pago = "Crédito"; }
                    if(resultado.pago_compra == 4){ var descripcion_pago = "Transferencia"; }
                    if(resultado.estado_odc == 0){ var estado_compra = "Pendiente"; } else { var estado_compra = "-"; }

                    if(resultado.numero_pagos > 1){
                        plantilla += `
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Proveedor</th>
                              <th>Fecha</th>
                              <th>Pago</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody id="tableProducto" class="table table-hover">
                          <tr>
                            <td class="cod_factura">${resultado.cod_compra}</td>
                            <td>${resultado.nombre_proveedor}</td>
                            <td>${fecha}</td>
                            <td>Varios</td>
                            <td class="text-danger">${estado_compra}</td>
                          </tr>
                          </tbody>`
                    } else {
                        if(resultado.numero_pagos == 1){
                            plantilla += `
                            <thead>
                              <tr>
                                <th>Código</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Pago</th>
                                <th>Estado</th>
                              </tr>
                            </thead>
                            <tbody id="tableProducto" class="table table-hover">
                              <tr>
                                <td>${resultado.cod_compra}</td>
                                <td>${resultado.nombre_proveedor}</td>
                                <td>${fecha}</td>
                                <td>${descripcion_pago}</td>
                                <td class="text-danger">${estado_compra}</td>
                              </tr>
                            </tbody>`
                        }
                    }
                });

                $('#tableReporte').html(plantilla);    
                $('#PDF').html('<form action="php/PDF/cp1.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');  
            }
          });
      }
      if($('#cp2').is(":checked")){
          var cp2 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { cp2 },
            success : function(response){
              console.log(response);
                datos = JSON.parse(response);
                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_odc;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    let hora = temporal.substring(11,19);  
                    var fecha = dia+"-"+mes+"-"+año+"-"+hora;

                    if(resultado.pago_compra == 1){ var descripcion_pago = "Efectivo"; }
                    if(resultado.pago_compra == 2){ var descripcion_pago = "Débito"; }
                    if(resultado.pago_compra == 3){ var descripcion_pago = "Crédito"; }
                    if(resultado.pago_compra == 4){ var descripcion_pago = "Transferencia"; }

                    if(resultado.numero_pagos > 1){
                        plantilla += `
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Proveedor</th>
                              <th>Fecha</th>
                              <th>Pago</th>
                            </tr>
                          </thead>
                          <tbody id="tableProducto" class="table table-hover">
                          <tr>
                            <td class="cod_factura">${resultado.cod_compra}</td>
                            <td>${resultado.nombre_proveedor}</td>
                            <td>${fecha}</td>
                            <td>Varios</td>
                          </tr>
                          </tbody>`
                    } else {
                        if(resultado.numero_pagos == 1){
                            plantilla += `
                            <thead>
                              <tr>
                                <th>Código</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Pago</th>
                              </tr>
                            </thead>
                            <tbody id="tableProducto" class="table table-hover">
                              <tr>
                                <td>${resultado.cod_compra}</td>
                                <td>${resultado.nombre_proveedor}</td>
                                <td>${fecha}</td>
                                <td>${descripcion_pago}</td>
                              </tr>
                            </tbody>`
                        }
                    }
                });

                $('#tableReporte').html(plantilla);  
                $('#PDF').html('<form action="php/PDF/cp2.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');    
            }
          });
      }
      //cp3
      if($('#pr1').is(":checked")){
          var pr1 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { pr1 },
            success : function(response){
              console.log(response);
                datos = JSON.parse(response);
                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.registro_proveedor;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    let hora = temporal.substring(11,19);  
                    var fecha = dia+"-"+mes+"-"+año+"-"+hora;

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Identificación</th>
                        <th>Nombre</th>
                        <th>Registro</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td><div style="width: 7em;">${resultado.identificacion_proveedor}</div></td>
                      <td>${resultado.nombre_proveedor}</td>
                      <td><div style="width: 7em;">${fecha}</div></td>
                      <td>${resultado.direccion_proveedor}</td>
                      <td>${resultado.telefono_proveedor}</td>
                      <td><div style="width: 10em;"><small>${resultado.email_proveedor}</small></div></td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);  
                $('#PDF').html('<form action="php/PDF/pr1.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');   
            }
          });
      }
      if($('#pr2').is(":checked")){
          var pr2 = 1;
          $.ajax({ 
            url : 'php/reportes.php',
            type : 'POST',
            data : { pr2 },
            success : function(response){
                datosSuma = JSON.parse(response); 

                var suma = 0;
                datosSuma.forEach(resultado => {
                  suma += parseInt(resultado.frecuencia);
                });

                datos = JSON.parse(response);
                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.registro_proveedor;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    let hora = temporal.substring(11,19);  
                    var fecha = dia+"-"+mes+"-"+año+"-"+hora;
                    var porcentaje = (parseInt(resultado.frecuencia)/parseInt(suma))*100;

                    plantilla += `
                    <thead>
                      <tr>
                        <th>Identificación</th>
                        <th>Nombre</th>
                        <th>Registro</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Porcentaje</th>
                      </tr>
                    </thead>
                    <tbody id="tableProducto" class="table table-hover">
                    <tr>
                      <td><div style="width: 7em;">${resultado.identificacion_proveedor}</div></td>
                      <td>${resultado.nombre_proveedor}</td>
                      <td><div style="width: 7em;">${fecha}</div></td>
                      <td>${resultado.direccion_proveedor}</td>
                      <td>${resultado.telefono_proveedor}</td>
                      <td><div style="width: 10em;"><small>${resultado.email_proveedor}</small></div></td>
                      <td>Representa el: ${Math.round(porcentaje,2)} % de las compras</td>
                    </tr>
                    </tbody>`
                });

                $('#tableReporte').html(plantilla);  
                $('#PDF').html('<form action="php/PDF/pr2.php">'+
                  '<div style="margin-left: 4.5em; margin-top: -1em;">'+
                  '<input type="submit" class="btn btn-success" value="Generar PDF"></button>'+
                  '</div>'+
                  '</form>');     
            }
          });
      }

  })
});