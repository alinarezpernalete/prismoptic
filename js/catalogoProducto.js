$(document).ready(function() {
	console.log("JQuery is working");
    
    listarProducto();

    $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarProducto();
    })

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
                                    <td>${resultado.precio_producto}</td>
                                </tr>`
                });

                $('#tableProducto').html(plantilla);
            }
        })
    }

    //////////////////////VALIDACIONES BASICAS///////////////////////////////

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
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
        }

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
                                                <td>${resultado.precio_producto}</td>
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
                                                <td>${resultado.precio_producto}</td>
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

    //////////////////////VALIDACIONES BASICAS///////////////////////////////

});