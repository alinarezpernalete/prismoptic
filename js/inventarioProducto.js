$(document).ready(function() {
	console.log("JQuery is working");

    $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarProducto();
    })

    listarProducto();

    function listarProducto(){
        $.ajax({
          url: 'php/listarCatalogo.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                    plantilla += `<tr>
                                    <td>${resultado.codigo_producto}</td>
                                    <td>${resultado.descripcion_producto}</td>
                                    <td>${resultado.existencia_producto}</td>
                                    <td>${resultado.precio_producto}</td>
                                    <td>
                                        <button style="margin: 1vh;" class="btn btn-success col-md-5 btnMostrarProducto"> Editar </button> 
                                        <button style="margin: 1vh;" class="btn btn-danger col-md-5 btnDesactivarProducto"> Desactivar </button> 
                                    </td>
                                </tr>`
                });

                $('#tableProducto').html(plantilla);
            }
        })
    }

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    $('#busqueda').keypress(function(e){
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
        }  
    });

    $('#cmboxOpcion').change(function(e){
        listarProducto();
        $('#busqueda').val('');
        $('#busqueda').focus();
            
    })

    $('#busqueda').keypress(function(e){
            if($('#cmboxOpcion').val() == 1){
                $('#busqueda').attr("maxlength", "7");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }

            }
            
            if($('#cmboxOpcion').val() == 2){
                $('#busqueda').attr("maxlength", "35");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "áéíóúabcdefghijklmnñopqrstuvwxyz ";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }
            }

            if($('#cmboxOpcion').val() == 3){
                $('#busqueda').attr("maxlength", "7");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "0123456789,.";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }
            }
    });

    $("#busquedaProductoDesactivado").keyup(function(e){ 
        
        var codigoDesactivado = $("#busquedaProductoDesactivado").val();
        $.ajax({ 
            url : 'php/busquedaCatalogo.php',
            type : 'POST',
            data : { codigoDesactivado },
            success : function(response){
                datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {

                plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idproducto}</td>
                                            <td> <div style="width: 5em;">${resultado.codigo_producto}</div></td>
                                            <td> <div style="width: 15em;">${resultado.descripcion_producto}</div></td>
                                            <td> <div style="width: 5em;">${resultado.existencia_producto}</div></td>
                                            <td> <div style="width: 5em;">${resultado.precio_producto}</div></td>
                                            <td>
                                                <div>
                                                    <button style="width: 10em;" class="btn btn-success btnActivarProducto"> Activar </button> 
                                                </div>
                                            </td>
                                        </tr>`
                        });

                        $('#tableProductoDesactivado').html(plantilla);
                          }
                        });
                   
    });

    $("#busqueda").keyup(function(e){ 
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
            listarProducto();
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
                listarProducto();
            } else {
                if($('#busqueda').val()){
                    if($('#cmboxOpcion').val() == 1){
                        var codigo = $("#busqueda").val();
                        $.ajax({ 
                          url : 'php/busquedaCatalogo.php',
                          type : 'POST',
                          data : { codigo },
                          success : function(response){
                            datos = JSON.parse(response); 

                            let plantilla = '';
                            datos.forEach(resultado => {

                                plantilla += `<tr>
                                    <td>${resultado.codigo_producto}</td>
                                    <td>${resultado.descripcion_producto}</td>
                                    <td>${resultado.existencia_producto}</td>
                                    <td>${resultado.precio_producto}</td>
                                    <td>
                                        <button style="margin: 1vh;" class="btn btn-success col-md-5 btnMostrarProducto"> Editar </button> 
                                        <button style="margin: 1vh;" class="btn btn-danger col-md-5 btnDesactivarProducto"> Desactivar </button> 
                                    </td>
                                </tr>`
                            });

                            $('#tableProducto').html(plantilla);
                          }
                        });
                    }
                    if($('#cmboxOpcion').val() == 2){
                        var descripcion = $("#busqueda").val();
                        $.ajax({ 
                          url : 'php/busquedaCatalogo.php',
                          type : 'POST',
                          data : { descripcion },
                          success : function(response){
                            datos = JSON.parse(response); 

                            let plantilla = '';
                            datos.forEach(resultado => {

                                plantilla += `<tr>
                                    <td>${resultado.codigo_producto}</td>
                                    <td>${resultado.descripcion_producto}</td>
                                    <td>${resultado.existencia_producto}</td>
                                    <td>${resultado.precio_producto}</td>
                                    <td>
                                        <button style="margin: 1vh;" class="btn btn-success col-md-5 btnMostrarProducto"> Editar </button> 
                                        <button style="margin: 1vh;" class="btn btn-danger col-md-5 btnDesactivarProducto"> Desactivar </button> 
                                    </td>
                                </tr>`
                            });

                            $('#tableProducto').html(plantilla);
                          }
                        });
                    }
                }
            }
        }
    });

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL REGISTRO///////////////////////////////////////

    $(document).on('click', '#btnModalRegistro', function(){
        $("#modalRegistro").modal("show");

    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL REGISTRO///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - VALIDACIÓN DE DATOS DEL PRODUCTO ///////////////////////////////////////
    
    $('#codigoProducto').keypress(function(e){
        $('#codigoProducto').attr("class", "form-control form-control-sm");
        $('#codigoProducto').attr("maxlength", "7");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#descripcionProducto').keypress(function(e){
        $('#descripcionProducto').attr("class", "form-control form-control-sm");
        $('#descripcionProducto').attr("maxlength", "90");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "áéíóúabcdefghijklmnñopqrstuvwxyz ";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#existenciaProducto').keypress(function(e){
        $('#existenciaProducto').attr("class", "form-control form-control-sm");
        $('#existenciaProducto').attr("maxlength", "2");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "1234567890";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#precioProducto').keypress(function(e){
        $('#precioProducto').attr("class", "form-control form-control-sm");
        $('#precioProducto').attr("maxlength", "15");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "1234567890.,";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#descripcionProductoEditar').keypress(function(e){
        $('#descripcionProductoEditar').attr("class", "form-control form-control-sm");
        $('#descripcionProductoEditar').attr("maxlength", "90");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "áéíóúabcdefghijklmnñopqrstuvwxyz ";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });
    
    $('#precioProductoEditar').keypress(function(e){
        $('#precioProductoEditar').attr("class", "form-control form-control-sm");
        $('#precioProductoEditar').attr("maxlength", "15");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "1234567890.,";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    //////////////////////VALIDACIONES DE INFORMACIÓN - VALIDACIÓN DE DATOS DEL PRODUCTO ///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - AGREGAR PRODUCTO///////////////////////////////////////

    $(document).on('click', '#btnAgregarProducto', function(){
        if($('#codigoProducto').val() == "" || $('#descripcionProducto').val() == "" || $('#existenciaProducto').val() == ""
         || $('#precioProducto').val() == "" || parseFloat($('#precioProducto').val()) == 0 || 
         parseInt($('#existenciaProducto').val()) == 0) {
            document.getElementById("invalido1").innerHTML = "Introduzca información válida";
            $('#invalido1').toast('show');

            if($('#codigoProducto').val() == ""){
                $('#codigoProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#codigoProducto').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#descripcionProducto').val() == ""){
                $('#descripcionProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#descripcionProducto').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#existenciaProducto').val() == "" || parseInt($('#existenciaProducto').val()) == 0
                || parseInt($('#existenciaProducto').val()) < 10){
                $('#existenciaProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#existenciaProducto').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#precioProducto').val() == "" || parseFloat($('#precioProducto').val()) == 0
                || parseFloat($('#precioProducto').val()) < 1.00){
                $('#precioProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#precioProducto').attr("class", "input-width form-control form-control-sm"); 
            }
        } else {
            if($('#codigoProducto').val().length < 3 || $('#descripcionProducto').val().length < 8 || 
                parseInt($('#existenciaProducto').val()) == 0 || parseFloat($('#precioProducto').val()) == 0 || 
                parseInt($('#existenciaProducto').val()) < 10 || parseFloat($('#precioProducto').val()) < 1.00){

                $('#invalido1').toast('show');

                if($('#codigoProducto').val().length < 3){
                    $('#codigoProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#codigoProducto').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#descripcionProducto').val().length < 8){
                    $('#descripcionProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#descripcionProducto').attr("class", "input-width form-control form-control-sm"); 
                }

               if(parseInt($('#existenciaProducto').val()) == 0 || parseInt($('#existenciaProducto').val()) < 10){
                    $('#existenciaProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
                    document.getElementById("invalido2").innerHTML = "La cantidad debe ser mayor a 10";
                    $('#invalido2').toast('show');
                } else {
                    $('#existenciaProducto').attr("class", "input-width form-control form-control-sm"); 
                }

                if(parseFloat($('#precioProducto').val()) == 0 || parseFloat($('#precioProducto').val()) < 1.00){
                    $('#precioProducto').attr("class", "input-width form-control form-control-sm is-invalid"); 
                    document.getElementById("invalido2").innerHTML = "Introduzca información válida";
                    $('#invalido2').toast('show');
                } else {
                    $('#precioProducto').attr("class", "input-width form-control form-control-sm"); 
                }

            } else {
                const datosProducto = {
                    codigo_producto : $('#codigoProducto').val(),
                    descripcion_producto : $('#descripcionProducto').val(),
                    existencia_producto : $('#existenciaProducto').val(),
                    precio_producto : $('#precioProducto').val()
                  };

                  console.log(datosProducto);
                  var json = JSON.stringify(datosProducto);
                  console.log(json);

                  $.ajax({
                      url: 'php/registrarProducto.php',
                      type: 'POST',
                      data : { json },
                      success: function(response){
                        console.log(response);  
                      }   
                  })
                alert("Producto registrado");
                listarProducto();
                $("#modalRegistro").modal("hide");
                $('#codigoProducto').val("");
                $('#descripcionProducto').val("");
                $('#existenciaProducto').val("");
                $('#precioProducto').val("");
            }
        }

    })

    $(document).on('click', '#btnCerrarModalRegistro', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalRegistro").modal("hide");
            $('#codigoProducto').val("");
            $('#descripcionProducto').val("");
            $('#existenciaProducto').val("");
            $('#precioProducto').val("");
            $('#codigoProducto').attr("class", "input-width form-control form-control-sm"); 
            $('#descripcionProducto').attr("class", "input-width form-control form-control-sm"); 
            $('#existenciaProducto').attr("class", "input-width form-control form-control-sm");
            $('#precioProducto').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalRegistro").modal("show");
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - AGREGAR PRODUCTO///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - CONSULTAR DICCIONARIO ///////////////////////////////////////

    $(document).on('click', '#btnModalDiccionario', function(){
        $("#modalDiccionario").modal("show");

    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - CONSULTAR DICCIONARIO ///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - CONSULTAR PRODUCTOS DESACTIVADOS///////////////////////////////////////

    function listarProductoDesactivado(){
        $.ajax({
          url: 'php/listarCatalogoDesactivados.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                    
                if(response == 1){
                    alert("No hay productos desactivados");
                    $("#modalDesactivados").modal("hide");
                } else {
                    if(response != 1){
                        datos = JSON.parse(response); 
                        let plantilla = '';
                        datos.forEach(resultado => {

                            plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idproducto}</td>
                                            <td> <div style="width: 5em;">${resultado.codigo_producto}</div></td>
                                            <td> <div style="width: 15em;">${resultado.descripcion_producto}</div></td>
                                            <td> <div style="width: 5em;">${resultado.existencia_producto}</div></td>
                                            <td> <div style="width: 5em;">${resultado.precio_producto}</div></td>
                                            <td>
                                                <div>
                                                    <button style="width: 10em;" class="btn btn-success btnActivarProducto"> Activar </button> 
                                                </div>
                                            </td>
                                        </tr>`
                        });

                        $('#tableProductoDesactivado').html(plantilla);
                        $("#modalDesactivados").modal("show");
                    }
                }

            }
        })

    }

    $(document).on('click', '#btnModalDesactivados', function(){
        listarProductoDesactivado();        
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - CONSULTAR PRODUCTOS DESACTIVADOS///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR PRODUCTO PARA MODIFICAR///////////////////////////////////////

    $(document).on('click', '.btnMostrarProducto', function(){
        var info = $(this)[0].parentElement.parentElement;
        $('#codigoProductoEditar').val($(info).find("td:eq(0)").text());
        document.getElementById("codigoProductoEditar").disabled = true;
        $('#descripcionProductoEditar').val($(info).find("td:eq(1)").text());
        $('#existenciaProductoEditar').val($(info).find("td:eq(2)").text());
        document.getElementById("existenciaProductoEditar").disabled = true;
        $('#precioProductoEditar').val($(info).find("td:eq(3)").text());
        $("#modalProducto").modal("show");

    })

    $(document).on('click', '#btnCerrarModalProducto', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalProducto").modal("hide");
            $('#codigoProductoEditar').val("");
            $('#descripcionProductoEditar').val("");
            $('#existenciaProductoEditar').val("");
            $('#precioProductoEditar').val("");
            $('#codigoProductoEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#descripcionProductoEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#existenciaProductoEditar').attr("class", "input-width form-control form-control-sm");
            $('#precioProductoEditar').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalProducto").modal("show");
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR PRODUCTO PARA MODIFICAR///////////////////////////////////////

     //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR PRODUCTO///////////////////////////////////////

    $(document).on('click', '#btnEditarProducto', function(){
        if($('#descripcionProductoEditar').val() == ""
         || $('#precioProductoEditar').val() == "" || parseFloat($('#precioProductoEditar').val()) == 0) {
            
            $('#invalido2').toast('show');


            if($('#descripcionProductoEditar').val() == ""){
                $('#descripcionProductoEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#descripcionProductoEditar').attr("class", "input-width form-control form-control-sm"); 
            }
            

            if($('#precioProductoEditar').val() == "" || parseFloat($('#precioProductoEditar').val()) == 0
                || parseFloat($('#precioProductoEditar').val()) < 1.00){
                $('#precioProductoEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#precioProductoEditar').attr("class", "input-width form-control form-control-sm"); 
            }
        } else {
            if($('#descripcionProductoEditar').val().length < 8 || 
                parseFloat($('#precioProductoEditar').val()) == 0 || parseFloat($('#precioProductoEditar').val()) < 1.00){
                
                $('#invalido2').toast('show');

                if($('#descripcionProductoEditar').val().length < 8){
                    $('#descripcionProductoEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#descripcionProductoEditar').attr("class", "input-width form-control form-control-sm"); 
                }

                if(parseFloat($('#precioProductoEditar').val()) == 0 || parseFloat($('#precioProductoEditar').val()) < 1.00){
                    $('#precioProductoEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                    document.getElementById("invalido2").innerHTML = "Introduzca información válida";
                    $('#invalido2').toast('show');
                } else {
                    $('#precioProductoEditar').attr("class", "input-width form-control form-control-sm"); 
                }

            } else {
                const datosProducto = {
                    codigo_producto : $('#codigoProductoEditar').val(),
                    descripcion_producto : $('#descripcionProductoEditar').val(),
                    existencia_producto : $('#existenciaProductoEditar').val(),
                    precio_producto : $('#precioProductoEditar').val()
                  };

                  console.log(datosProducto);
                  var json = JSON.stringify(datosProducto);
                  console.log(json);

                  $.ajax({
                      url: 'php/editarProducto.php',
                      type: 'POST',
                      data : { json },
                      success: function(response){
                        console.log(response);  
                      }   
                  })

                alert("Producto Editado");
                listarProducto();
                $("#modalProducto").modal("hide");
                $('#codigoProductoEditar').val("");
                $('#descripcionProductoEditar').val("");
                $('#existenciaProductoEditar').val("");
                $('#precioProductoEditar').val("");
            }
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR PRODUCTO///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - DESACTIVAR PRODUCTO///////////////////////////////////////

    $(document).on('click', '.btnDesactivarProducto', function(){

        var info = $(this)[0].parentElement.parentElement;
        var codigo_producto = $(info).find("td:eq(0)").text();
        var statusConfirm = confirm("¿Desea desactivar el producto: "+codigo_producto+"?");
        
        if (statusConfirm == true){
            $.ajax({
                  url : 'php/desactivarProducto.php',
                  type : 'POST',
                  data : { codigo_producto },
                  success : function(response){
                    console.log(response);
                    listarProducto();
                  }
            })
        } 

    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - DESACTIVAR PRODUCTO//////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - ACTIVAR PRODUCTO//////////////////////////////////////

    $(document).on('click', '.btnActivarProducto', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var codigo_producto = $(info).find("td:eq(1)").text();
        var statusConfirm = confirm("¿Desea activar el producto: "+codigo_producto+"?");
        
        if (statusConfirm == true){
            var idproducto = $(info).find("td:eq(0)").text();
            $.ajax({
                  url : 'php/activarProducto.php',
                  type : 'POST',
                  data : { idproducto },
                  success : function(response){
                    console.log(response);
                    listarProductoDesactivado();
                    listarProducto();
                  }
            })
        } 
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - ACTIVAR PRODUCTO//////////////////////////////////////

});