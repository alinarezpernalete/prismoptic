$(document).ready(function() {
    console.log("JQuery is working");
    listarFactura();

    $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarFactura();
    })

    function listarFactura(){
        $.ajax({
          url: 'php/listarFactura.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
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
                        plantilla += `<tr>
                                    <td hidden="hidden">${resultado.idfactura}</td>
                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                    <td class="cod_factura">${resultado.cod_factura}</td>
                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                    <td>${fecha}</td>
                                    <td>Varios</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                        </div>
                                    </td>
                                </tr>`
                    } else {
                        if(resultado.numero_pagos == 1){
                            plantilla += `<tr>
                                    <td hidden="hidden">${resultado.idfactura}</td>
                                    <td>${resultado.cod_factura}</td>
                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                    <td>${fecha}</td>
                                    <td>${descripcion_pago}</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                        </div>
                                    </td>
                                </tr>`
                        }
                    }

                });
                $('#tableFacturas').html(plantilla);


            }
        })
    }

    /////////////////////////////VALIDACIONES BASICAS//////////////////////////////////////

    $('#cmboxOpcion').change(function(e){
        listarFactura();
        if($('#cmboxOpcion').val() == 1){
            $('#busqueda').val("F00");
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
                $('#busqueda').attr("maxlength", "6");
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

    /////////////////////////////VALIDACIONES BASICAS//////////////////////////////////////

    /////////////////////////////BUSQUEDA/////////////////////////////////////////////////

    /*$(document).on('click', '#btnBuscar', function(){
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
            } else {
                if($('#busqueda').val()){
                    var busqueda = $('#busqueda').val();    
                }
            }
        }
    })

    var busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("keyup", function(event) {
        if(event.keyCode === 13){
            event.preventDefault();
            document.getElementById("btnBuscar").click();
        }
    })*/   

    $("#busqueda").keyup(function(e){ 
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
            listarFactura();
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
                listarFactura();
            } else {
                if($('#busqueda').val()){
                    if($('#cmboxOpcion').val() == 1){
                        var codigo = $("#busqueda").val();
                        $.ajax({ 
                                url : 'php/busquedaFactura.php',
                                type : 'POST',
                                data : { codigo },
                                success : function(response){
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
                                        plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idfactura}</td>
                                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                                    <td class="cod_factura">${resultado.cod_factura}</td>
                                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                                    <td>${fecha}</td>
                                                    <td>Varios</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                    } else {
                                        if(resultado.numero_pagos == 1){
                                            plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idfactura}</td>
                                                    <td>${resultado.cod_factura}</td>
                                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                                    <td>${fecha}</td>
                                                    <td>${descripcion_pago}</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                        }
                                    }

                                });
                                $('#tableFacturas').html(plantilla);
                                    
                                }
                            });
                    }
                    if($('#cmboxOpcion').val() == 2){
                        var cliente = $("#busqueda").val();
                        $.ajax({ 
                                url : 'php/busquedaFactura.php',
                                type : 'POST',
                                data : { cliente },
                                success : function(response){
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
                                        plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idfactura}</td>
                                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                                    <td class="cod_factura">${resultado.cod_factura}</td>
                                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                                    <td>${fecha}</td>
                                                    <td>Varios</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                    } else {
                                        if(resultado.numero_pagos == 1){
                                            plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idfactura}</td>
                                                    <td>${resultado.cod_factura}</td>
                                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                                    <td>${fecha}</td>
                                                    <td>${descripcion_pago}</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                        }
                                    }

                                });
                                $('#tableFacturas').html(plantilla);
                                    
                                }
                            });
                    }
                    if($('#cmboxOpcion').val() == 3){
                        var fecha = $("#busqueda").val();
                        var dia = fecha.substring(0,2);
                        var mes = fecha.substring(3,5); 
                        var año = fecha.substring(6,10);
                        $.ajax({ 
                                url : 'php/busquedaFactura.php',
                                type : 'POST',
                                data : { dia, mes, año },
                                success : function(response){
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
                                        plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idfactura}</td>
                                                    <td hidden="hidden">${resultado.numero_pagos}</td>
                                                    <td class="cod_factura">${resultado.cod_factura}</td>
                                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                                    <td>${fecha}</td>
                                                    <td>Varios</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                    } else {
                                        if(resultado.numero_pagos == 1){
                                            plantilla += `<tr>
                                                    <td hidden="hidden">${resultado.idfactura}</td>
                                                    <td>${resultado.cod_factura}</td>
                                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                                    <td>${fecha}</td>
                                                    <td>${descripcion_pago}</td>
                                                    <td>
                                                        <div>
                                                            <button class="btn btn-success col-md-5 btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                            <button class="btn btn-danger col-md-5 btnAnularFactura" style="margin: 1vh;"> Anular </button> 
                                                        </div>
                                                    </td>
                                                </tr>`
                                        }
                                    }

                                });
                                $('#tableFacturas').html(plantilla);
                                    
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

    /////////////////////////////BUSQUEDA/////////////////////////////////////////////////

    ////////////////////////VALIDACIONES DE INFORMACIÓN - OPERACIONES CON MODAL FACTURA///////////////////////////

    $(document).on('click', '.btnMostrarFactura', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var idfactura = $(info).find("td:eq(0)").text();
        var numero_pagos = $(info).find("td:eq(1)").text();
        var cod_factura = $(info).find("td:eq(2)").text();
        var indiceTable = document.getElementById("tableDetalles").rows.length;

        if (numero_pagos > 1) {
            $.ajax({ 
                url : 'php/listarDetallePago.php',
                type : 'POST',
                data : { cod_factura },
                success : function(response){
                    console.log(response);
                    
                    datos = JSON.parse(response); 
                    let plantilla_pagos = '';  

                    var ef = "";
                    var db = "";
                    var cr = "";
                    var tr = "";

                    datos.forEach(resultado => {
                        if(resultado.pago_factura == 1){ ef = "Efectivo"; }
                        if(resultado.pago_factura == 2){ db = "Débito"; }
                        if(resultado.pago_factura == 3){ cr = "Crédito"; }
                        if(resultado.pago_factura == 4){ tr = "Transferencia"; }
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
              url : 'php/listarDetalle.php',
              type : 'POST',
              data : { idfactura },
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
            if (indiceTable == 0) { alert("Error al cargar detalles. Selecione otra factura y reintente"); }
            else { $("#modalDetalle").modal("show"); }
        } else {
            if (numero_pagos = 1){
                let plantilla_pagos = '';
                $('#detalle_pagos').html(plantilla_pagos);

                $.ajax({
                  url : 'php/listarDetalle.php',
                  type : 'POST',
                  data : { idfactura },
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

    $(document).on('click', '.btnAnularFactura', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var cod_factura = $(info).find("td:eq(2)").text();
        var statusConfirm = confirm("¿Desea anular la factura: "+cod_factura+"?");
        
        if (statusConfirm == true){
            $.ajax({
                  url : 'php/anularFactura.php',
                  type : 'POST',
                  data : { cod_factura },
                  success : function(response){
                    console.log(response);
                    listarFactura();
                  }
            })
        } 
    })

    ////////////////////////VALIDACIONES DE INFORMACIÓN - OPERACIONES CON MODAL FACTURA///////////////////////////

    function listarFacturaAnulada(){
        $.ajax({
          url: 'php/listarFacturaAnulada.php',
          type: 'GET',
            success: function(response){
                //console.log(response);

                if(response == 1){
                    alert("No hay facturas anuladas");
                    $("#modalFacturasAnuladas").modal("hide");
                } else {
                    if(response != 1){
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
                                plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idfactura}</td>
                                            <td hidden="hidden">${resultado.numero_pagos}</td>
                                            <td style="width: 5em;">${resultado.cod_factura}</td>
                                            <td style="width: 10em;">${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td style="width: 15em;">${fecha}</td>
                                            <td style="width: 5em;">Varios</td>
                                            <td>
                                                <div>
                                                    <button style="width: 10em;" class="btn btn-success btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                </div>
                                            </td>
                                        </tr>`
                            } else {
                                if(resultado.numero_pagos == 1){
                                    plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idfactura}</td>
                                            <td style="width: 5em;">${resultado.cod_factura}</td>
                                            <td style="width: 10em;">${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td style="width: 15em;">${fecha}</td>
                                            <td style="width: 5em;">${descripcion_pago}</td>
                                            <td>
                                                <div>
                                                    <button style="width: 10em;" class="btn btn-success btnMostrarFactura" style="margin: 1vh;"> Ver </button>  
                                                </div>
                                            </td>
                                        </tr>`
                                }
                            }

                        });

                        $('#tableFacturasAnuladas').html(plantilla);
                        $("#modalFacturasAnuladas").modal("show");
                    }
                }
            }
        })
    }
    
    $(document).on('click', '#btnModalFacturasAnuladas', function(){
        listarFacturaAnulada();
    })

    $("#busquedaAnulada").keyup(function(e){
        var codigoAnulada = $("#busquedaAnulada").val();
            $.ajax({ 
                url : 'php/busquedaFactura.php',
                type : 'POST',
                data : { codigoAnulada },
                success : function(response){
                    datos = JSON.parse(response);

                    if(response == 1){
                        alert("No existe factura");
                        listarFacturaAnulada();
                    } else {

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
                            plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idfactura}</td>
                                            <td hidden="hidden">${resultado.numero_pagos}</td>
                                            <td style="width: 5em;">${resultado.cod_factura}</td>
                                            <td style="width: 10em;">${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td style="width: 15em;">${fecha}</td>
                                            <td style="width: 5em;">Varios</td>
                                            <td>
                                                <div>
                                                    <button style="width: 10em;" class="btn btn-success btnMostrarFactura" style="margin: 1vh;"> Ver </button> 
                                                </div>
                                            </td>
                                        </tr>`
                        } else {
                            if(resultado.numero_pagos == 1){
                                plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idfactura}</td>
                                            <td style="width: 5em;">${resultado.cod_factura}</td>
                                            <td style="width: 10em;">${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td style="width: 15em;">${fecha}</td>
                                            <td style="width: 5em;">${descripcion_pago}</td>
                                            <td>
                                                <div>
                                                    <button style="width: 10em;" class="btn btn-success btnMostrarFactura" style="margin: 1vh;"> Ver </button>  
                                                </div>
                                            </td>
                                        </tr>`
                            }
                        }

                    });
                    $('#tableFacturasAnuladas').html(plantilla);
                }
            }
        });
        
    })

})