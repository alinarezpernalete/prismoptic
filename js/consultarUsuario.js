$(document).ready(function() {
	console.log("JQuery is working");

    $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarUsuario();
    })
    
    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    listarUsuario();

    function listarUsuario(){
        $.ajax({
          url: 'php/listarUsuario.php',
          type: 'GET',
            success: function(response){
                datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_registro;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);
                    var fecha = dia+"-"+mes+"-"+año;

                    plantilla += `<tr>
                                    <td hidden="hidden">${resultado.idusuario}</td>
                                    <td hidden="hidden">${resultado.nivel_seguridad}</td>
                                    <td hidden="hidden">${resultado.fecha_registro}</td>
                                    <td>${resultado.nombre_usuario}</td>
                                    <td>${resultado.contrasena_usuario}</td>
                                    <td>${fecha}</td>
                                    <td>${resultado.pregunta_seguridad}</td>
                                    <td>${resultado.respuesta_seguridad}</td>
                                    <td>
                                        <div>
                                            <button style="width: 15vh;" class="btn btn-success btnEditar"> Editar </button> 
                                        </div>
                                    </td>
                                </tr>`
                });

                $('#tableUsuario').html(plantilla);
            }
        })
    }

    $('#busqueda').keypress(function(e){
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
        }  
    });

    $('#cmboxOpcion').change(function(e){
        listarUsuario();
        $('#busqueda').val('');
        $('#busqueda').focus();
            
    })

    $('#busqueda').keypress(function(e){
            if($('#cmboxOpcion').val() == 1){
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
            listarUsuario();
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
                listarUsuario();
            } else {
                if($('#cmboxOpcion').val() == 1){
                        var fecha = $("#busqueda").val();
                        var dia = fecha.substring(0,2);
                        var mes = fecha.substring(3,5); 
                        var ano = fecha.substring(6,10);
                        $.ajax({ 
                                url : 'php/busquedaUsuario.php',
                                type : 'POST',
                                data : { dia, mes, ano },
                                success : function(response){
                                    datos = JSON.parse(response);

                                let plantilla = '';
                                datos.forEach(resultado => {
                                    var temporal = resultado.fecha_registro;
                                    let año = temporal.substring(0,4); 
                                    let mes = temporal.substring(5,7); 
                                    let dia = temporal.substring(8,10);
                                    let hora = temporal.substring(11,19);  
                                    var fecha = dia+"-"+mes+"-"+ano;
                                    
                                    plantilla += `<tr>
                                    <td hidden="hidden">${resultado.idusuario}</td>
                                    <td hidden="hidden">${resultado.nivel_seguridad}</td>
                                    <td hidden="hidden">${resultado.fecha_registro}</td>
                                    <td>${resultado.nombre_usuario}</td>
                                    <td>${resultado.contrasena_usuario}</td>
                                    <td>${fecha}</td>
                                    <td>${resultado.pregunta_seguridad}</td>
                                    <td>${resultado.respuesta_seguridad}</td>
                                    <td>
                                        <div>
                                            <button style="width: 15vh;" class="btn btn-success btnEditar"> Editar </button> 
                                        </div>
                                    </td>
                                </tr>`

                                });
                                $('#tableUsuario').html(plantilla);
                                    
                                }
                            });
                    }

            }
        }
    })

    $('#nombreUsuario').keypress(function(e){
        $('#nombreUsuario').attr("class", "form-control form-control-sm");
        $('#nombreUsuario').attr("maxlength", "15");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "abcdefghijklmnopqrstuvwxyz1234567890";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#preguntaUsuario').keypress(function(e){
        $('#preguntaUsuario').attr("class", "form-control form-control-sm");
        $('#preguntaUsuario').attr("maxlength", "30");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "abcdefghijklmnopqrstuvwxyz1234567890 ";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#contrasenaUsuario').keypress(function(e){
        $('#contrasenaUsuario').attr("class", "form-control form-control-sm");
        $('#contrasenaUsuario').attr("maxlength", "15");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "abcdefghijklmnopqrstuvwxyz1234567890 ";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#respuestaUsuario').keypress(function(e){
        $('#respuestaUsuario').attr("class", "form-control form-control-sm");
        $('#respuestaUsuario').attr("maxlength", "30");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "abcdefghijklmnopqrstuvwxyz1234567890 ";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL AGREGAR///////////////////////////////////////

    $(document).on('click', '#btnAgregar', function(){
        $("#modalUsuario").modal("show");
    })

    $(document).on('click', '#btnRegistrarUsuario', function(){
        if($('#nombreUsuario').val() == "" || $('#contrasenaUsuario').val() == "" || $('#preguntaUsuario').val() == "" || 
            $('#respuestaUsuario').val() == "" || $('#nombreUsuario').val().length < 3 || $('#contrasenaUsuario').val().length < 3 
            || $('#preguntaUsuario').val().length < 3 || $('#respuestaUsuario').val().length < 3) {
            alert("Ingrese información válida");

            if($('#nombreUsuario').val() == "" || $('#nombreUsuario').val().length < 3){
                $('#nombreUsuario').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#nombreUsuario').attr("class", "form-control form-control-sm"); 
            }

            if($('#contrasenaUsuario').val() == "" || $('#contrasenaUsuario').val().length < 3){
                $('#contrasenaUsuario').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#contrasenaUsuario').attr("class", "form-control form-control-sm"); 
            }

            if($('#preguntaUsuario').val() == "" || $('#preguntaUsuario').val().length < 3){
                $('#preguntaUsuario').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#preguntaUsuario').attr("class", "form-control form-control-sm"); 
            }

            if($('#respuestaUsuario').val() == "" || $('#respuestaUsuario').val().length < 3){
                $('#respuestaUsuario').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#respuestaUsuario').attr("class", "form-control form-control-sm"); 
            }
        } else {
            if ($('#nombreUsuario').val() != "" || $('#contrasenaUsuario').val() != "" || $('#preguntaUsuario').val() != "" || 
                $('#respuestaUsuario').val() != "" || $('#nombreUsuario').val().length > 3 || $('#contrasenaUsuario').val().length > 3 
                || $('#preguntaUsuario').val().length > 3 || $('#respuestaUsuario').val().length > 3) {
                    const datosUsuario = {
                        nombre_usuario : $('#nombreUsuario').val(),
                        contrasena_usuario : $('#contrasenaUsuario').val(),
                        pregunta_usuario : $('#preguntaUsuario').val(),
                        respuesta_usuario : $('#respuestaUsuario').val()
                    };

                    var json = JSON.stringify(datosUsuario);

                    $.ajax({
                        url: 'php/registrarUsuario.php',
                        type: 'POST',
                        data : { json },
                        success: function(response){
                            console.log(response);  
                        }   
                    })
                    alert("Usuario registrado");
                    listarUsuario();
                    $("#modalUsuario").modal("hide");
                    $('#nombreUsuario').val("");
                    $('#contrasenaUsuario').val("");
                    $('#preguntaUsuario').val("");
                    $('#respuestaUsuario').val("");
            }
        }
    })
    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL AGREGAR///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL EDITAR///////////////////////////////////////

    var idUsuario = "";
    var fechaRegistro = "";
    $(document).on('click', '.btnEditar', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        $("#nombreUsuarioEditar").val($(info).find("td:eq(3)").text());
        $("#contrasenaUsuarioEditar").val($(info).find("td:eq(4)").text());
        $("#preguntaUsuarioEditar").val($(info).find("td:eq(6)").text());
        $("#respuestaUsuarioEditar").val($(info).find("td:eq(7)").text())
        $("#modalUsuarioEditar").modal("show");
        idUsuario = $(info).find("td:eq(0)").text();
        fechaRegistro = $(info).find("td:eq(2)").text();
    })

    $(document).on('click', '#btnEditarUsuario', function(){
        if($('#nombreUsuarioEditar').val() == "" || $('#contrasenaUsuarioEditar').val() == "" || $('#preguntaUsuarioEditar').val() == "" || 
            $('#respuestaUsuarioEditar').val() == "" || $('#nombreUsuarioEditar').val().length < 3 || $('#contrasenaUsuarioEditar').val().length < 3 
            || $('#preguntaUsuarioEditar').val().length < 3 || $('#respuestaUsuarioEditar').val().length < 3) {
            alert("Ingrese información válida");

            if($('#nombreUsuarioEditar').val() == "" || $('#nombreUsuarioEditar').val().length < 3){
                $('#nombreUsuarioEditar').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#nombreUsuarioEditar').attr("class", "form-control form-control-sm"); 
            }

            if($('#contrasenaUsuarioEditar').val() == "" || $('#contrasenaUsuarioEditar').val().length < 3){
                $('#contrasenaUsuarioEditar').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#contrasenaUsuarioEditar').attr("class", "form-control form-control-sm"); 
            }

            if($('#preguntaUsuarioEditar').val() == "" || $('#preguntaUsuarioEditar').val().length < 3){
                $('#preguntaUsuarioEditar').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#preguntaUsuarioEditar').attr("class", "form-control form-control-sm"); 
            }

            if($('#respuestaUsuarioEditar').val() == "" || $('#respuestaUsuarioEditar').val().length < 3){
                $('#respuestaUsuarioEditar').attr("class", "form-control form-control-sm is-invalid"); 
            } else {
                $('#respuestaUsuarioEditar').attr("class", "form-control form-control-sm"); 
            }
        } else {
            if ($('#nombreUsuarioEditar').val() != "" || $('#contrasenaUsuarioEditar').val() != "" || $('#preguntaUsuarioEditar').val() != "" || 
                $('#respuestaUsuarioEditar').val() != "" || $('#nombreUsuarioEditar').val().length > 3 || $('#contrasenaUsuarioEditar').val().length > 3 
                || $('#preguntaUsuarioEditar').val().length > 3 || $('#respuestaUsuarioEditar').val().length > 3) {
                    const datosUsuario = {
                        idusuario : idUsuario,
                        fecha_registro : fechaRegistro,
                        nombre_usuario : $('#nombreUsuarioEditar').val(),
                        contrasena_usuario : $('#contrasenaUsuarioEditar').val(),
                        pregunta_usuario : $('#preguntaUsuarioEditar').val(),
                        respuesta_usuario : $('#respuestaUsuarioEditar').val()
                    };

                    var json = JSON.stringify(datosUsuario);

                    $.ajax({
                        url: 'php/editarUsuario.php',
                        type: 'POST',
                        data : { json },
                        success: function(response){
                            console.log(response);  
                        }   
                    })
                    alert("Usuario editado");
                    listarUsuario();
                    $("#modalUsuarioEditar").modal("hide");
                    $('#nombreUsuarioEditar').val("");
                    $('#contrasenaUsuarioEditar').val("");
                    $('#preguntaUsuarioEditar').val("");
                    $('#respuestaUsuarioEditar').val("");
            }
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL EDITAR///////////////////////////////////////

    $(document).on('click', '#btnCerrarModalUsuario', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalUsuario").modal("hide");
            $('#nombreUsuario').val("");
            $('#contrasenaUsuario').val("");
            $('#preguntaUsuario').val("");
            $('#respuestaUsuario').val("");
            $('#nombreUsuario').attr("class", "input-width form-control form-control-sm"); 
            $('#contrasenaUsuario').attr("class", "input-width form-control form-control-sm"); 
            $('#preguntaUsuario').attr("class", "input-width form-control form-control-sm");
            $('#respuestaUsuario').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalUsuario").modal("show");
        }
    })

    $(document).on('click', '#btnCerrarModalUsuarioEditar', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalUsuarioEditar").modal("hide");
            $('#nombreUsuarioEditar').val("");
            $('#contrasenaUsuarioEditar').val("");
            $('#preguntaUsuarioEditar').val("");
            $('#respuestaUsuarioEditar').val("");
            $('#nombreUsuarioEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#contrasenaUsuarioEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#preguntaUsuarioEditar').attr("class", "input-width form-control form-control-sm");
            $('#respuestaUsuarioEditar').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalUsuarioEditar").modal("show");
        }
    })

});