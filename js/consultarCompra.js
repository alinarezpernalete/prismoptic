$(document).ready(function() {
	console.log("JQuery is working");
    listarCompra();
    $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarCompra();
    })
    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////
    function listarCompra(){
        $.ajax({
          url: 'php/listarCompra.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                datos = JSON.parse(response);

                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_recibido;
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
                        plantilla += `<tr>
                                    <td hidden="hidden">${resultado.idcompra}</td>
                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                    <td>${resultado.cod_compra}</td>
                                    <td>${resultado.nombre_proveedor}</td>
                                    <td>${fecha}</td>
                                    <td>Varios</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-success col-md-5 btnMostrarCompra" style="margin: 1vh;"> Ver </button> 
                                            <button class="btn btn-danger col-md-5 btnAnularCompra" style="margin: 1vh;"> Anular </button> 
                                        </div>
                                    </td>
                                </tr>`
                    } else {
                        if(resultado.numero_pagos == 1){
                            plantilla += `<tr>
                                    <td hidden="hidden">${resultado.idcompra}</td>
                                    <td>${resultado.cod_compra}</td>
                                    <td>${resultado.nombre_proveedor}</td>
                                    <td>${fecha}</td>
                                    <td>${descripcion_pago}</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-success col-md-5 btnMostrarCompra" style="margin: 1vh;"> Ver </button> 
                                            <button class="btn btn-danger col-md-5 btnAnularCompra" style="margin: 1vh;"> Anular </button> 
                                        </div>
                                    </td>
                                </tr>`
                        }
                    }

                });
                $('#tableCompra').html(plantilla);

            }
        })
    }

    ////////////////////

    $('#cmboxOpcion').change(function(e){
        listarCompra();
        if($('#cmboxOpcion').val() == 1){
            $('#busqueda').val("OC00");
        } else {
            $('#busqueda').val("");
        }
        $('#busqueda').focus();
            
    })

    $('#busqueda').keypress(function(e){
            if($('#cmboxOpcion').val() == 0){
                $('#cmboxOpcion').focus();
                $('#invalido').toast('show');
            }

            if($('#cmboxOpcion').val() == 1){
                $('#busqueda').attr("maxlength", "7");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "f0123456789";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }
            }

            if($('#cmboxOpcion').val() == 2){
                $('#busqueda').attr("maxlength", "35");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }

            }

            if($('#cmboxOpcion').val() == 4){
                $('#busqueda').attr("maxlength", "35");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "efctivodbrans";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }

            }

            if($('#cmboxOpcion').val() == 3){
                $('#busqueda').attr("maxlength", "10");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "0123456789-";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }

            }
    });

    $("#busqueda").keyup(function(e){ 
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
            listarCompra();
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
                listarCompra();
            } else {
                if($('#busqueda').val()){
                    if($('#cmboxOpcion').val() == 1){
                        var codigo = $("#busqueda").val();
                        $.ajax({ 
                                url : 'php/busquedaCompra.php',
                                type : 'POST',
                                data : { codigo },
                                success : function(response){
                                    datos = JSON.parse(response);

                                let plantilla = '';
                                datos.forEach(resultado => {
                                    var temporal = resultado.fecha_recibido;
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
                                        plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idcompra}</td>
                                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                                    <td class="cod_compra">${resultado.cod_compra}</td>
                                                    <td>${resultado.nombre_proveedor}</td>
                                                    <td>${fecha}</td>
                                                    <td>Varios</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarcompra" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularcompra" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                    } else {
                                        if(resultado.numero_pagos == 1){
                                            plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idcompra}</td>
                                                    <td>${resultado.cod_compra}</td>
                                                    <td>${resultado.nombre_proveedor}</td>
                                                    <td>${fecha}</td>
                                                    <td>${descripcion_pago}</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarcompra" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularcompra" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                        }
                                    }

                                });
                                $('#tableCompra').html(plantilla);
                                    
                                }
                            });
                    }
                    if($('#cmboxOpcion').val() == 2){
                        var proveedor = $("#busqueda").val();
                        $.ajax({ 
                                url : 'php/busquedaCompra.php',
                                type : 'POST',
                                data : { proveedor },
                                success : function(response){
                                    datos = JSON.parse(response);

                                let plantilla = '';
                                datos.forEach(resultado => {
                                    var temporal = resultado.fecha_recibido;
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
                                        plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idcompra}</td>
                                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                                    <td class="cod_compra">${resultado.cod_compra}</td>
                                                    <td>${resultado.nombre_proveedor}</td>
                                                    <td>${fecha}</td>
                                                    <td>Varios</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarcompra" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularcompra" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                    } else {
                                        if(resultado.numero_pagos == 1){
                                            plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idcompra}</td>
                                                    <td>${resultado.cod_compra}</td>
                                                    <td>${resultado.nombre_proveedor}</td>
                                                    <td>${fecha}</td>
                                                    <td>${descripcion_pago}</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarcompra" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularcompra" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                        }
                                    }

                                });
                                $('#tableCompra').html(plantilla);
                                    
                                }
                            });
                    }
                    if($('#cmboxOpcion').val() == 3){
                        var fecha = $("#busqueda").val();
                        var dia = fecha.substring(0,2);
                        var mes = fecha.substring(3,5); 
                        var año = fecha.substring(6,10);
                        $.ajax({ 
                                url : 'php/busquedaCompra.php',
                                type : 'POST',
                                data : { dia, mes, año },
                                success : function(response){
                                    datos = JSON.parse(response);

                                let plantilla = '';
                                datos.forEach(resultado => {
                                    var temporal = resultado.fecha_recibido;
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
                                        plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idcompra}</td>
                                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                                    <td class="cod_compra">${resultado.cod_compra}</td>
                                                    <td>${resultado.nombre_proveedor}</td>
                                                    <td>${fecha}</td>
                                                    <td>Varios</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarcompra" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularcompra" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                    } else {
                                        if(resultado.numero_pagos == 1){
                                            plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idcompra}</td>
                                                    <td>${resultado.cod_compra}</td>
                                                    <td>${resultado.nombre_proveedor}</td>
                                                    <td>${fecha}</td>
                                                    <td>${descripcion_pago}</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarcompra" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularcompra" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                        }
                                    }

                                });
                                $('#tableCompra').html(plantilla);
                                    
                                }
                            });
                    }
                    if($('#cmboxOpcion').val() == 4){
                         $('#busqueda').keyup(function () {
                     
                                 var rex = new RegExp($(this).val(), 'gi');
                     
                                 $('.buscar tr').hide();
                     
                                 $('.buscar tr').filter(function () {
                                   return rex.test($(this).text());
                                 }).show();
                     
                            })
                    }
                    

                }
            }
        }
        
    })

    /////////////////

    $(document).on('click', '.btnMostrarCompra', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var idcompra = $(info).find("td:eq(0)").text();
        var numero_pagos = $(info).find("td:eq(1)").text();
        var cod_compra = $(info).find("td:eq(2)").text();
        var indiceTable = document.getElementById("tableDetalles").rows.length;

        if (numero_pagos > 1) {
            $.ajax({ 
                url : 'php/listarDetallePagoCompra.php',
                type : 'POST',
                data : { cod_compra },
                success : function(response){
                    console.log(response);
                    
                    datos = JSON.parse(response); 
                    let plantilla_pagos = '';  

                    var ef = "";
                    var db = "";
                    var cr = "";
                    var tr = "";

                    datos.forEach(resultado => {
                        if(resultado.pago_compra == 1){ ef = "Efectivo"; }
                        if(resultado.pago_compra == 2){ db = "Débito"; }
                        if(resultado.pago_compra == 3){ cr = "Crédito"; }
                        if(resultado.pago_compra == 4){ tr = "Transferencia"; }
                    });
                    plantilla_pagos += `
                        <label>Métodos de pago:</label>
                        <div style="margin-bottom: 0.5em; margin-top:-0.5em; margin-left:0.5em;">${ef}</div>
                        <div style="margin-bottom: 0.5em; margin-top:-0.5em; margin-left:0.5em;">${db}</div>
                        <div style="margin-bottom: 0.5em; margin-top:-0.5em; margin-left:0.5em;">${cr}</div>
                        <div style="margin-bottom: 0.5em; margin-top:-0.5em; margin-left:0.5em;">${tr}</div>`
                    $('#detalle_pagos').html(plantilla_pagos);
                }
            });

            ////////////////////////////////////////////////////////////

            $.ajax({
              url : 'php/listarDetalleCompra.php',
              type : 'POST',
              data : { idcompra },
              success : function(response){
                //console.log(response);
                let plantilla = '';
                let plantilla2 = '';
                let total = 0;
                datos = JSON.parse(response); 
                datos.forEach(resultado => {
                    plantilla += `<tr>
                                    <td>${resultado.codigo_producto}</td>
                                    <td>${resultado.descripcion_producto}</td>
                                    <td>${resultado.cantidad_producto}</td>
                                    <td>${resultado.precio_producto}</td>
                                </tr>`

                    total += parseInt(resultado.precio_producto)*parseInt(resultado.cantidad_producto);
                });

                plantilla2 += `<tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>${total}.00</td>
                    </tr>`
                $('#tableDetalles').html(plantilla);
                $('#footerTableDetalles').html(plantilla2);
              }
            })

            ////////////////////////////////////////////////////////////
            if (indiceTable == 0) { alert("Error al cargar detalles. Selecione otra compra y reintente"); }
            else { $("#modalDetalle").modal("show"); }
        } else {
            if (numero_pagos = 1){
                let plantilla_pagos = '';
                $('#detalle_pagos').html(plantilla_pagos);

                $.ajax({
                  url : 'php/listarDetalleCompra.php',
                  type : 'POST',
                  data : { idcompra },
                  success : function(response){
                    //console.log(response);
                    let plantilla = '';
                    let plantilla2 = '';
                    let total = 0;
                    datos = JSON.parse(response); 
                    datos.forEach(resultado => {
                        plantilla += `<tr>
                                        <td>${resultado.codigo_producto}</td>
                                        <td>${resultado.descripcion_producto}</td>
                                        <td>${resultado.cantidad_producto}</td>
                                        <td>${resultado.precio_producto}</td>
                                    </tr>`

                        total += parseInt(resultado.precio_producto)*parseInt(resultado.cantidad_producto);
                    });

                    plantilla2 += `<tr>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>${total}.00</td>
                        </tr>`
                    $('#tableDetalles').html(plantilla);
                    $('#footerTableDetalles').html(plantilla2);
                  }
                })

                ////////////////////////////////////////////////////////////

                $("#modalDetalle").modal("show");
            }
        }
    })

    $(document).on('click', '.btnAnularCompra', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var cod_compra = $(info).find("td:eq(1)").text();
        var statusConfirm = confirm("¿Desea anular la compra: "+cod_compra+"?");
        
        if (statusConfirm == true){
            $.ajax({
                  url : 'php/anularCompra.php',
                  type : 'POST',
                  data : { cod_compra },
                  success : function(response){
                    console.log(response);
                    listarCompra();
                  }
            })
        } 
    })


    /////////////////////////////////////////////////////////////////////////////////

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL REGISTRO///////////////////////////////////////

    $(document).on('click', '#btnRegistrarCompra', function(){
        $("#modalRegistrarCompra").modal("show");

    })

    $('#codigoOC').keypress(function(e){
          
        $('#codigoOC').attr("class", "form-control form-control-sm");
        $('#codigoOC').attr("maxlength", "7");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
        
    });

    function cargarODC(){
        let codigoOC = $("#codigoOC").val();
            if(!$("#codigoOC").val()){
                alert("Ingrese un código");
            } else {
                $.ajax({
                  url: 'php/cargarODC.php',
                  type: 'POST',
                  data : { codigoOC },
                  success: function(response){
                    if(response == 0){
                        alert("Error en base de datos");
                    }

                    if(response == 1){
                        alert("Ingrese un código válido");
                        $('#codigoOC').val("");
                    } else {
                        if(response != 1 || response != 0){ 
                            //console.log(response); 
                            datos = JSON.parse(response);

                            var temporal = datos[0].fecha_odc;
                            let fecha_odc = temporal.substring(0,10); 
                            $('#fecha_odc').val(fecha_odc);
                            document.getElementById("fechaODC").innerHTML = datos[0].fecha_odc;
                            n =  new Date(); y = n.getFullYear(); m = n.getMonth() + 1; d = n.getDate();
                            if(d<10){ d='0'+d; } if(m<10){ m='0'+m; }
                            $('#fecha_entrega').val(y+"-"+m+"-"+d);
                            $('#identificacion_proveedor').val(datos[0].identificacion_proveedor);
                            $('#nombre_proveedor').val(datos[0].nombre_proveedor);
                            $('#email_proveedor').val(datos[0].email_proveedor);
                            $('#telefono_proveedor').val(datos[0].telefono_proveedor);
                            $('#direccion_proveedor').val(datos[0].direccion_proveedor);
                            $('#encargado_compra').val(datos[0].encargado_compra);
                            document.getElementById("idODC").innerHTML = datos[0].idcompra;
                            document.getElementById("codigoOC").disabled = true;
                            document.getElementById("btnCargarODC").disabled = true;
                            document.getElementById("btnCancelarODC").disabled = false;
                            document.getElementById("btnCargarProductosODC").disabled = false;
                        }
                    }
                  }
                });
            }
    }

    function cargarProductosODC(){
        var idODC = $("#idODC").text();
            $.ajax({
                url: 'php/cargarProductosODC.php',
                type: 'POST',
                data : { idODC },
                success: function(response){
                    
                console.log(response, idODC); 
                if(response == 0){
                    cargarProductosODC();
                } else {
                    var indiceTable = document.getElementById("tableProductosODC").rows.length;
                    if (indiceTable > 0) {
                        cargarProductosODC();
                    }
                }
                    
                datos = JSON.parse(response); 
                let plantilla = '';
                datos.forEach(resultado => { 
                    let precioTotal = parseInt(resultado.precio_producto)*parseInt(resultado.cantidad_producto);
                    plantilla += 
                            `<tr>
                                <td hidden="hidden">${resultado.idproducto}</td>
                                <td hidden="hidden">${resultado.existencia_producto}</td>
                                <td>${resultado.codigo_producto}</td>
                                <td>${resultado.descripcion_producto}</td>
                                <td><div style="width: 5vh;">${resultado.cantidad_producto}</div></td>
                                <td><div style="width: 12vh;"><input class="input-width form-control form-control-sm inputEntregado" type="text" placeholder="Cantidad"></div></td>
                                <td><div style="width: 5vh;">${resultado.precio_producto}</div></td>
                                <td><div style="width: 10vh;">${precioTotal}.00</div></td>
                                <td>
                                    <div>
                                        <button style="width: 13vh;" class="btn btn-success productoRecibido"> Recibido </button>
                                        <button style="width: 13vh; margin-top: 2vh" class="btn btn-danger productoPendiente"> Pendiente </button> 
                                    </div>
                                </td>
                            </tr>`
                })
                    $('#tableProductosODC').html(plantilla);
                    document.getElementById("btnCargarProductosODC").disabled = true;
                
                }
                    
            });
    }

    $(document).on('click', '#btnCargarODC', function(){
        cargarODC();
    })

    $(document).on('click', '#btnCargarProductosODC', function(){
        cargarProductosODC();
    })

    $(document).on('click', '#btnCancelarODC', function(){
        document.getElementById("codigoOC").disabled = false;
        document.getElementById("btnCargarODC").disabled = false;
        document.getElementById("btnCargarProductosODC").disabled = true;
        document.getElementById("btnCancelarODC").disabled = true;
        $('#codigoOC').val('');
        $('#fecha_odc').val('');
        $('#fecha_entrega').val('');
        $('#identificacion_proveedor').val('');
        $('#nombre_proveedor').val('');
        $('#email_proveedor').val('');
        $('#telefono_proveedor').val('');
        $('#direccion_proveedor').val('');
        $('#encargado_compra').val('');
        $('#tableProductosODC').html(``);
    })

    var codigoOC = document.getElementById("codigoOC");
    codigoOC.addEventListener("keyup", function(event) {
        if(event.keyCode === 13){
            event.preventDefault();
            document.getElementById("btnCargarODC").click();
        }
    })

    ////////////////////////////////////////////////////////////////////
    
        $(document).on('keypress', '.inputEntregado', function (e) {
            
            $('.inputEntregado').attr("maxlength", "2");
            $('.inputEntregado').attr("class", "input-width form-control form-control-sm inputEntregado");
            var key = e.keyCode || e.which;
            var tecla = String.fromCharCode(key).toLowerCase();

            var numeros = "0123456789";

            if(numeros.indexOf(tecla) == -1){
                return false;
            }
            
        })
    
    $(document).on('click', '.productoRecibido', function () {
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var cantidad = $(info).find("td:eq(4)").text();
        ///////////////////////////////////////////////////////////////
        var entregado = $(info).find("td:eq(5)").children(":first").children(":first").val();
        var inputEntregado = $(info).find("td:eq(5)").children(":first").children(":first");
        //////////////////////////////////////////////////////////////////////////////////////
        var btnProductoRecibido = $(this)[0].closest('button');
        var btnProductoPendiente = $(this)[0].parentElement.firstChild.nextSibling.nextSibling.nextSibling;
        //////////////////////////////////////////
        if(entregado == ""){
            alert("Ingrese un valor válido");
            inputEntregado.focus();
        } else {
            if((parseInt(entregado) < parseInt(cantidad)) || (parseInt(entregado) == 0)){
                alert("Seleccione la opción: Pendiente");
            }

            if(parseInt(entregado) > parseInt(cantidad)){
                alert("Verifique la cantidad: entregado");
                $(info).find("td:eq(3)").children(":first").children(":first").val("");
                inputEntregado.focus();
                inputEntregado.attr("class", "input-width form-control form-control-sm is-invalid inputEntregado");
            }

            if(parseInt(entregado) == parseInt(cantidad)){
                var codigo_producto = $(info).find("td:eq(0)").text();
                var viejaCantidad = $(info).find("td:eq(1)").text();
                var nuevaExistencia = parseInt(viejaCantidad)+parseInt(entregado);
                var cantidad_pendiente = parseInt(cantidad)-parseInt(entregado);
                var idODC = $("#idODC").text();
                console.log(cantidad_pendiente, idODC, codigo_producto);
                console.log("Vieja cantidad: "+viejaCantidad+", Suma de la nueva existencia con la vieja: "+nuevaExistencia
                    +". Queda pendiente: "+cantidad_pendiente);
                $.ajax({
                    url: 'php/actualizarCantidadProducto.php',
                    type: 'POST',
                    data : { codigo_producto, nuevaExistencia },
                    success: function(response){
                        if(response == 0){ alert("Error en base de datos"); }
                        if(response == 1){ alert("Error al cargar. Intente luego"); }
                        if(response != 0 || response != 1){ 
                            console.log(response);
                        }
                    }
                });
                $.ajax({
                    url: 'php/registrarCantidadPendiente.php',
                    type: 'POST',
                    data : { cantidad_pendiente, idODC, codigo_producto },
                    success: function(response){
                        if(response == 0){ alert("Error en base de datos"); }
                        if(response == 1){ alert("Error al cargar. Intente luego"); }
                        if(response != 0 || response != 1){ 
                            console.log(response);
                        }
                    }
                });
                document.getElementById("btnRegistroODC").disabled = false;
                inputEntregado.attr("class", "input-width form-control form-control-sm inputEntregado");
                $(btnProductoRecibido).attr("disabled", "true");
                $(btnProductoPendiente).attr("disabled", "true");
                $(inputEntregado).attr("disabled", "true");
            }
        }
    })

    $(document).on('click', '.productoPendiente', function () {
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var cantidad = $(info).find("td:eq(4)").text();
        ///////////////////////////////////////////////////////////////
        var entregado = $(info).find("td:eq(5)").children(":first").children(":first").val();
        var inputEntregado = $(info).find("td:eq(5)").children(":first").children(":first");
        //////////////////////////////////////////////////////////////////////////////////////
        var btnProductoPendiente = $(this)[0].closest('button');
        var btnProductoRecibido = $(this)[0].parentElement.firstChild.nextSibling;
        //////////////////////////////////////////
        if(entregado == ""){
            alert("Ingrese valor válido");
        } else {
            if((parseInt(entregado) > -1) && (parseInt(entregado) < parseInt(cantidad))){
                var codigo_producto = $(info).find("td:eq(0)").text();
                var viejaCantidad = $(info).find("td:eq(1)").text();
                var nuevaExistencia = parseInt(viejaCantidad)+parseInt(entregado);
                var cantidad_pendiente = parseInt(cantidad)-parseInt(entregado);
                var idODC = $("#idODC").text();
                console.log(cantidad_pendiente, idODC, codigo_producto);
                console.log("Vieja cantidad: "+viejaCantidad+", Suma de la nueva existencia con la vieja: "+nuevaExistencia
                    +". Queda pendiente: "+cantidad_pendiente);
                $.ajax({
                    url: 'php/actualizarCantidadProducto.php',
                    type: 'POST',
                    data : { codigo_producto, nuevaExistencia },
                    success: function(response){
                        if(response == 0){ alert("Error en base de datos"); }
                        if(response == 1){ alert("Error al cargar. Intente luego"); }
                        if(response != 0 || response != 1){ 
                            console.log(response);
                        }
                    }
                });
                $.ajax({
                    url: 'php/registrarCantidadPendiente.php',
                    type: 'POST',
                    data : { cantidad_pendiente, idODC, codigo_producto },
                    success: function(response){
                        if(response == 0){ alert("Error en base de datos"); }
                        if(response == 1){ alert("Error al cargar. Intente luego"); }
                        if(response != 0 || response != 1){ 
                            console.log(response);
                        }
                    }
                });

                alert("Se guardará como pendiente");
                document.getElementById("btnRegistroODC").disabled = false;
                inputEntregado.attr("class", "input-width form-control form-control-sm inputEntregado");
                $(btnProductoRecibido).attr("disabled", "true");
                $(btnProductoPendiente).attr("disabled", "true");
                $(inputEntregado).attr("disabled", "true");
            } else {
                if(parseInt(entregado) > parseInt(cantidad)){
                    alert("Verifique la cantidad: entregado");
                    $(info).find("td:eq(3)").children(":first").children(":first").val("");
                    inputEntregado.focus();
                    inputEntregado.attr("class", "input-width form-control form-control-sm is-invalid inputEntregado");
                }
            }
        }
    })

    $(document).on('click', '#btnRegistroODC', function () {
        var button = 0;
        var input = 0;
        $('#tableProductosODC tr').each(function() {
            let indicador = $(this).find("td:eq(8)").children(":first").children(":first").closest('button');
            if(indicador.prop('disabled') == false){
                button++;
            } 
        });
        $('#tableProductosODC tr').each(function() {
            let entregado = $(this).find("td:eq(5)").children(":first").children(":first").val();
            let cantidad = $(this).find("td:eq(4)").text();
            if(entregado < cantidad){
                input++;
            }
        });
        if(button != 0) {
            alert("Complete los campos pendientes");
        } else {
            if(button == 0){
                if (input > 0) {
                    var activar_compra = 0;
                } else {
                    if (input == 0) {
                        var activar_compra = 1;
                    }
                }
                var codigoOC = $('#codigoOC').val();
                var fechaODC = $('#fechaODC').text();
                /*n =  new Date(); y = n.getFullYear(); m = n.getMonth() + 1; d = n.getDate(); h = n.getHours(); min = n.getMinutes(); s = n.getSeconds();
                if(d<10){ d='0'+d; } if(m<10){ m='0'+m; }
                if(h<10){ h='0'+h; } if(min<10){ min='0'+min; } if(s<10){ s='0'+s; }
                var fecha_recibido = y+"-"+m+"-"+d+" "+h+":"+min+":"+s;*/ 

                $.ajax({
                    url: 'php/registrarCompra.php',
                    type: 'POST',
                    data : { activar_compra, codigoOC, fechaODC },
                    success: function(response){
                        if(response == 0){ alert("Error en base de datos"); }
                        if(response == 1){ alert("Error al cargar. Intente luego"); }
                        if(response != 0 || response != 1){ 
                            console.log(response); 
                            $('#fecha_odc').val('');
                            $('#fecha_entrega').val('');
                            $('#identificacion_proveedor').val('');
                            $('#nombre_proveedor').val('');
                            $('#email_proveedor').val('');
                            $('#telefono_proveedor').val('');
                            $('#direccion_proveedor').val('');
                            $('#encargado_compra').val('');
                            document.getElementById("idODC").innerHTML = "";
                            $('#codigoOC').val("");
                            $('#tableProductosODC').html(``);
                            document.getElementById("btnCargarODC").disabled = false;
                            document.getElementById("btnCancelarODC").disabled = true;
                            document.getElementById("btnCargarProductosODC").disabled = true;
                            document.getElementById("btnRegistroODC").disabled = true;
                            document.getElementById("codigoOC").disabled = false;
                            $("#modalRegistrarCompra").modal("hide");
                            listarCompra();
                        }
                    }
                });  
            }
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL REGISTRO///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL PENDIENTES///////////////////////////////////////

    function listarCompraPendiente(){
        $.ajax({
          url: 'php/listarCompraPendiente.php',
          type: 'GET',
            success: function(response){
                //console.log(response);

                if(response == 1){
                    alert("No hay compras pendientes");
                    $("#modalPedidosPendientes").modal("hide");
                } else {
                    if(response != 1){
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
                            plantilla += `<tr>
                                        <td hidden="hidden">${resultado.idcompra}</td>
                                        <td hidden="hidden">${resultado.numero_pagos}</td>
                                        <td style="width: 5em;">${resultado.cod_compra}</td>
                                        <td style="width: 10em;">${resultado.nombre_proveedor}</td>
                                        <td style="width: 15em;">${fecha}</td>
                                        <td style="width: 5em;">Varios</td>
                                        <td>
                                            <div>
                                                <button style="width: 10em;" class="btn btn-success btnMostrarCompra" style="margin: 1vh;"> Ver </button> 
                                            </div>
                                        </td>
                                    </tr>`
                        } else {
                            if(resultado.numero_pagos == 1){
                                plantilla += `<tr>
                                        <td hidden="hidden">${resultado.idcompra}</td>
                                        <td style="width: 5em;">${resultado.cod_compra}</td>
                                        <td style="width: 10em;">${resultado.nombre_proveedor}</td>
                                        <td style="width: 15em;">${fecha}</td>
                                        <td style="width: 5em;">${descripcion_pago}</td>
                                        <td>
                                            <div>
                                                <button style="width: 10em;" class="btn btn-success btnMostrarCompra" style="margin: 1vh;"> Ver </button> 
                                            </div>
                                        </td>
                                    </tr>`
                            }
                        }

                    });

                        $('#tableCompraPendiente').html(plantilla);
                        $("#modalPedidosPendientes").modal("show");
                    }
                }
            }
        })
    }

    $(document).on('click', '#btnPedidosPendientes', function(){
        listarCompraPendiente();

    })

    $("#busquedaPendiente").keyup(function(e){
        var codigoPendiente = $("#busquedaPendiente").val();
            $.ajax({ 
                url : 'php/busquedaCompra.php',
                type : 'POST',
                data : { codigoPendiente },
                success : function(response){
                    datos = JSON.parse(response);

                    if(response == 1){
                        alert("No existe compra");
                        listarFacturaAnulada();
                    } else {

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
                            plantilla += `<tr>
                                        <td hidden="hidden">${resultado.idcompra}</td>
                                        <td hidden="hidden">${resultado.numero_pagos}</td>
                                        <td style="width: 5em;">${resultado.cod_compra}</td>
                                        <td style="width: 10em;">${resultado.nombre_proveedor}</td>
                                        <td style="width: 15em;">${fecha}</td>
                                        <td style="width: 5em;">Varios</td>
                                        <td>
                                            <div>
                                                <button style="width: 10em;" class="btn btn-success btnMostrarCompra" style="margin: 1vh;"> Ver </button> 
                                            </div>
                                        </td>
                                    </tr>`
                        } else {
                            if(resultado.numero_pagos == 1){
                                plantilla += `<tr>
                                        <td hidden="hidden">${resultado.idcompra}</td>
                                        <td style="width: 5em;">${resultado.cod_compra}</td>
                                        <td style="width: 10em;">${resultado.nombre_proveedor}</td>
                                        <td style="width: 15em;">${fecha}</td>
                                        <td style="width: 5em;">${descripcion_pago}</td>
                                        <td>
                                            <div>
                                                <button style="width: 10em;" class="btn btn-success btnMostrarCompra" style="margin: 1vh;"> Ver </button> 
                                            </div>
                                        </td>
                                    </tr>`
                            }
                        }

                        });
                    $('#tableCompraPendiente').html(plantilla);
                }
            }
        });
        
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL PENDIENTES///////////////////////////////////////

});