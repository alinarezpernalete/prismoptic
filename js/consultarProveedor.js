$(document).ready(function() {
	console.log("JQuery is working");
    emailEditar();
    listarProveedor();

    $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarProveedor();
    })

    function listarProveedor(){
        $.ajax({
          url: 'php/listarProveedor.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.registro_proveedor;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);  
                    var fecha = dia+"-"+mes+"-"+año;

                    plantilla += `<tr>
                                    <td><div style="width: 7em;">${resultado.identificacion_proveedor}</div></td>
                                    <td>${resultado.nombre_proveedor}</td>
                                    <td><div style="width: 7em;">${fecha}</div></td>
                                    <td>${resultado.direccion_proveedor}</td>
                                    <td>${resultado.telefono_proveedor}</td>
                                    <td><div style="width: 10em;"><small>${resultado.email_proveedor}</small></div></td>
                                    <td>
                                        <div>
                                            <button style="width: 15vh;" class="btn btn-success btnEditar"> Editar </button> 
                                        </div>
                                    </td>
                                </tr>`
                });

                $('#tableProveedor').html(plantilla);
            }
        })
    }

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    $('#cmboxOpcion').change(function(e){
        listarProveedor();
        $('#busqueda').val('');
        $('#busqueda').focus();
            
    })

    $('#busqueda').keypress(function(e){
      if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
        } 
            if($('#cmboxOpcion').val() == 1){
                $('#busqueda').attr("maxlength", "12");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "vjer-1234567890";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }
            }

            if($('#cmboxOpcion').val() == 2 || $('#cmboxOpcion').val() == 3){
                $('#busqueda').attr("maxlength", "40");
                var key = e.keyCode || e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = "áéíóúabcdefghijklmnñopqrstuvwxyz 1234567890";

                if(letras.indexOf(tecla) == -1){
                    return false;
                }

            }
    });

     $("#busqueda").keyup(function(e){ 
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
            listarProveedor();
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
                listarProveedor();
            } else {
                if($('#busqueda').val()){
                  if($('#cmboxOpcion').val() == 1){
                    var identificacion = $("#busqueda").val();
                    $.ajax({ 
                      url : 'php/busquedaProveedor.php',
                      type : 'POST',
                      data : { identificacion },
                      success : function(response){
                        datos = JSON.parse(response); 

                        let plantilla = '';
                        datos.forEach(resultado => {
                            var temporal = resultado.registro_proveedor;
                            let año = temporal.substring(0,4); 
                            let mes = temporal.substring(5,7); 
                            let dia = temporal.substring(8,10);  
                            var fecha = dia+"-"+mes+"-"+año;

                            plantilla += `<tr>
                                    <td><div style="width: 7em;">${resultado.identificacion_proveedor}</div></td>
                                    <td>${resultado.nombre_proveedor}</td>
                                    <td><div style="width: 7em;">${fecha}</div></td>
                                    <td>${resultado.direccion_proveedor}</td>
                                    <td>${resultado.telefono_proveedor}</td>
                                    <td><div style="width: 10em;"><small>${resultado.email_proveedor}</small></div></td>
                                    <td>
                                        <div>
                                            <button style="width: 15vh;" class="btn btn-success btnEditar"> Editar </button> 
                                        </div>
                                    </td>
                                </tr>`
                        });

                        $('#tableProveedor').html(plantilla);
                      }
                    });
                  }
                  if($('#cmboxOpcion').val() == 2){
                    var nombre = $("#busqueda").val();
                    $.ajax({ 
                      url : 'php/busquedaProveedor.php',
                      type : 'POST',
                      data : { nombre },
                      success : function(response){
                        datos = JSON.parse(response); 

                        let plantilla = '';
                        datos.forEach(resultado => {
                            var temporal = resultado.registro_proveedor;
                            let año = temporal.substring(0,4); 
                            let mes = temporal.substring(5,7); 
                            let dia = temporal.substring(8,10);  
                            var fecha = dia+"-"+mes+"-"+año;

                            plantilla += `<tr>
                                    <td><div style="width: 7em;">${resultado.identificacion_proveedor}</div></td>
                                    <td>${resultado.nombre_proveedor}</td>
                                    <td><div style="width: 7em;">${fecha}</div></td>
                                    <td>${resultado.direccion_proveedor}</td>
                                    <td>${resultado.telefono_proveedor}</td>
                                    <td><div style="width: 10em;"><small>${resultado.email_proveedor}</small></div></td>
                                    <td>
                                        <div>
                                            <button style="width: 15vh;" class="btn btn-success btnEditar"> Editar </button> 
                                        </div>
                                    </td>
                                </tr>`
                        });

                        $('#tableProveedor').html(plantilla);
                      }
                    });
                  }
                  if($('#cmboxOpcion').val() == 2){
                    var direccion = $("#busqueda").val();
                    $.ajax({ 
                      url : 'php/busquedaProveedor.php',
                      type : 'POST',
                      data : { direccion },
                      success : function(response){
                        datos = JSON.parse(response); 

                        let plantilla = '';
                        datos.forEach(resultado => {
                            var temporal = resultado.registro_proveedor;
                            let año = temporal.substring(0,4); 
                            let mes = temporal.substring(5,7); 
                            let dia = temporal.substring(8,10);  
                            var fecha = dia+"-"+mes+"-"+año;

                            plantilla += `<tr>
                                    <td><div style="width: 7em;">${resultado.identificacion_proveedor}</div></td>
                                    <td>${resultado.nombre_proveedor}</td>
                                    <td><div style="width: 7em;">${fecha}</div></td>
                                    <td>${resultado.direccion_proveedor}</td>
                                    <td>${resultado.telefono_proveedor}</td>
                                    <td><div style="width: 10em;"><small>${resultado.email_proveedor}</small></div></td>
                                    <td>
                                        <div>
                                            <button style="width: 15vh;" class="btn btn-success btnEditar"> Editar </button> 
                                        </div>
                                    </td>
                                </tr>`
                        });

                        $('#tableProveedor').html(plantilla);
                      }
                    });
                  }
                }
              }
          }
      });

    $('#identificacionProveedor').keypress(function(e){
      $('#identificacionProveedor').attr("maxlength", "12");
      $('#identificacionProveedor').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = "0123456789-jveJVE";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#nombreProveedor').keypress(function(e){
      $('#nombreProveedor').attr("maxlength", "50");
      $('#nombreProveedor').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#telefonoProveedor').keypress(function(e){
      $('#telefonoProveedor').attr("maxlength", "11");
      $('#telefonoProveedor').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });
    
    document.getElementById('emailProveedor').addEventListener('input', function() {
        campo = event.target;
        valido = document.getElementById('email_verificar');
            
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(campo.value)) {
            $('#emailProveedor').attr("class", "input-width form-control form-control-sm");
        } else {
            $('#emailProveedor').attr("class", "input-width form-control form-control-sm is-invalid");
        }
    });

    $('#emailProveedor').keypress(function(e){
      $('#emailProveedor').attr("class", "input-width form-control form-control-sm");
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = "@_-&/'¿?áéíóúabcdefghijklmnñopqrstuvwxyz,.123456789";

      if(letras.indexOf(tecla) == -1){
        return false;
      }
    });

    $('#direecionProveedor').keypress(function(e){
      $('#direecionProveedor').attr("maxlength", "45");
      $('#direecionProveedor').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz,./123456789";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#identificacionProveedorEditar').keypress(function(e){
      $('#identificacionProveedorEditar').attr("maxlength", "12");
      $('#identificacionProveedorEditar').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = "0123456789-jveJVE";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#nombreProveedorEditar').keypress(function(e){
      $('#nombreProveedorEditar').attr("maxlength", "30");
      $('#nombreProveedorEditar').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#telefonoProveedorEditar').keypress(function(e){
      $('#telefonoProveedorEditar').attr("maxlength", "11");
      $('#telefonoProveedorEditar').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    function emailEditar(){
        document.getElementById('emailProveedorEditar').addEventListener('input', function() {
            campo = event.target;
            valido = document.getElementById('email_verificar');
            
            emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            //Se muestra un texto a modo de ejemplo, luego va a ser un icono
            if (emailRegex.test(campo.value)) {
                $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm");
            } else {
                $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid");
            }
        });

    }

    $('#emailProveedorEditar').keypress(function(e){
      $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm");
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = "@_-&/'¿?áéíóúabcdefghijklmnñopqrstuvwxyz,.123456789";

      if(letras.indexOf(tecla) == -1){
        return false;
      }
    });

    $('#direecionProveedorEditar').keypress(function(e){
      $('#direecionProveedorEditar').attr("maxlength", "45");
      $('#direecionProveedorEditar').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz,./123456789";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL///////////////////////////////////////

    $(document).on('click', '#btnAgregar', function(){
        $("#modalProveedor").modal("show");

    })

    $(document).on('click', '#btnCerrarModalRegistro', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalProveedor").modal("hide");
            $('#identificacionProveedor').val("");
            $('#telefonoProveedor').val("");
            $('#nombreProveedor').val("");
            $('#direecionProveedor').val("");
            $('#emailProveedor').val("");

            $('#identificacionProveedor').attr("class", "input-width form-control form-control-sm"); 
            $('#telefonoProveedor').attr("class", "input-width form-control form-control-sm"); 
            $('#nombreProveedor').attr("class", "input-width form-control form-control-sm");
            $('#direecionProveedor').attr("class", "input-width form-control form-control-sm"); 
            $('#emailProveedor').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalProveedor").modal("show");
        }

    })

    $(document).on('click', '#btnRegistrarProveedor', function(){
        if($('#identificacionProveedor').val() == "" || $('#telefonoProveedor').val() == "" || $('#nombreProveedor').val() == ""
         || $('#direecionProveedor').val() == "" || $('#emailProveedor').val() == "") {
            
            $('#invalido2').toast('show');
            
            if($('#identificacionProveedor').val() == ""){
                $('#identificacionProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#identificacionProveedor').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#telefonoProveedor').val() == ""){
                $('#telefonoProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#telefonoProveedor').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#nombreProveedor').val() == ""){
                $('#nombreProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#nombreProveedor').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#direecionProveedor').val() == ""){
                $('#direecionProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#direecionProveedor').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#emailProveedor').val() == ""){
                $('#emailProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#emailProveedor').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#emailProveedor').val() == ""){
                $('#emailProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                if($('#emailProveedor').val().length < 10){
                    $('#emailProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    document.getElementById('emailProveedor').addEventListener('input', function() {
                    campo = event.target;
              
                    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
                    if (emailRegex.test(campo.value)) {
                        $('#emailProveedor').attr("class", "input-width form-control form-control-sm");
                    } else {
                        $('#emailProveedor').attr("class", "input-width form-control form-control-sm is-invalid");
                    }
                    });
                }
            }

        } else {
            if($('#identificacionProveedor').val().length < 9 || $('#telefonoProveedor').val().length < 10 ||
                $('#nombreProveedor').val().length < 5 || $('#emailProveedor').val().length < 13 ||
                 $('#direecionProveedor').val().length < 10 ){

                $('#invalido2').toast('show');

                if($('#identificacionProveedor').val().length < 9){
                    $('#identificacionProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#identificacionProveedor').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#telefonoProveedor').val().length < 10){
                    $('#telefonoProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#telefonoProveedor').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#nombreProveedor').val().length < 5){
                    $('#nombreProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#nombreProveedor').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#emailProveedor').val().length < 13){
                    email();
                    $('#emailProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#emailProveedor').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#direecionProveedor').val().length < 10){
                    $('#direecionProveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#direecionProveedor').attr("class", "input-width form-control form-control-sm"); 
                }

            } else {
                const datosProveedor = {
                    identificacion_proveedor : $('#identificacionProveedor').val(),
                    nombre_proveedor : $('#nombreProveedor').val(),
                    direccion_proveedor : $('#direecionProveedor').val(),
                    telefono_proveedor : $('#telefonoProveedor').val(),
                    email_proveedor : $('#emailProveedor').val()
                  };

                  console.log(datosProveedor);
                  var json = JSON.stringify(datosProveedor);
                  console.log(json);

                  $.ajax({
                      url: 'php/registrarProveedor.php',
                      type: 'POST',
                      data : { json },
                      success: function(response){
                            console.log(response);  
                            alert("Proveedor registrado");
                            listarProveedor();
                            $("#modalProveedor").modal("hide");
                            $('#identificacionProveedor').val("");
                            $('#telefonoProveedor').val("");
                            $('#nombreProveedor').val("");
                            $('#emailProveedor').val("");
                            $('#direecionProveedor').val("");
                      }   
                  })
            }
        }

    })


    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL AGREGAR///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL EDITAR///////////////////////////////////////

    $(document).on('click', '.btnEditar', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        $("#identificacionProveedorEditar").val($(info).find("td:eq(0)").text());
        $("#nombreProveedorEditar").val($(info).find("td:eq(1)").text());
        $("#direecionProveedorEditar").val($(info).find("td:eq(3)").text());
        $("#telefonoProveedorEditar").val($(info).find("td:eq(4)").text());
        $("#emailProveedorEditar").val($(info).find("td:eq(5)").text());
        $("#modalProveedorEditar").modal("show");
    })

    $(document).on('click', '#btnCerrarModalEditar', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalProveedorEditar").modal("hide");
            $('#identificacionProveedorEditar').val("");
            $('#telefonoProveedorEditar').val("");
            $('#nombreProveedorEditar').val("");
            $('#direecionProveedorEditar').val("");
            $('#emailProveedor').val("");

            $('#identificacionProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#telefonoProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#nombreProveedorEditar').attr("class", "input-width form-control form-control-sm");
            $('#direecionProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalProveedorEditar").modal("show");
        }

    })

    $(document).on('click', '#btnEditarProveedor', function(){
        if($('#identificacionProveedorEditar').val() == "" || $('#telefonoProveedorEditar').val() == "" || $('#nombreProveedorEditar').val() == ""
         || $('#direecionProveedorEditar').val() == "" || $('#emailProveedorEditar').val() == "") {
            
            $('#invalido3').toast('show');
            
            if($('#identificacionProveedorEditar').val() == ""){
                $('#identificacionProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#identificacionProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#telefonoProveedorEditar').val() == ""){
                $('#telefonoProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#telefonoProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#nombreProveedorEditar').val() == ""){
                $('#nombreProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#nombreProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#direecionProveedorEditar').val() == ""){
                $('#direecionProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#direecionProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            }

            if($('#emailProveedorEditar').val() == ""){
                emailEditar();
                $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
            } else {
                $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
            }
        } else {
            if($('#identificacionProveedorEditar').val().length < 9 || $('#telefonoProveedorEditar').val().length < 10 ||
                $('#nombreProveedorEditar').val().length < 5 || $('#emailProveedorEditar').val().length < 10 ||
                $('#direecionProveedorEditar').val().length < 13){

                $('#invalido3').toast('show');

                if($('#identificacionProveedorEditar').val().length < 9){
                    $('#identificacionProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#identificacionProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#telefonoProveedorEditar').val().length < 10){
                    $('#telefonoProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#telefonoProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#nombreProveedorEditar').val().length < 5){
                    $('#nombreProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#nombreProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#emailProveedorEditar').val().length < 13){
                    emailEditar();
                    $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#emailProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#direecionProveedorEditar').val().length < 10){
                    $('#direecionProveedorEditar').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#direecionProveedorEditar').attr("class", "input-width form-control form-control-sm"); 
                }

            } else {
                const datosProveedor = {
                    identificacion_proveedor : $('#identificacionProveedorEditar').val(),
                    nombre_proveedor : $('#nombreProveedorEditar').val(),
                    direccion_proveedor : $('#direecionProveedorEditar').val(),
                    telefono_proveedor : $('#telefonoProveedorEditar').val(),
                    email_proveedor : $('#emailProveedorEditar').val()
                  };

                  console.log(datosProveedor);
                  var json = JSON.stringify(datosProveedor);
                  console.log(json);

                  $.ajax({
                      url: 'php/editarProveedor.php',
                      type: 'POST',
                      data : { json },
                      success: function(response){
                            console.log(response);  
                            alert("Proveedor Editado");
                            listarProveedor();
                            $("#modalProveedorEditar").modal("hide");
                            $('#identificacionProveedorEditar').val("");
                            $('#telefonoProveedorEditar').val("");
                            $('#nombreProveedorEditar').val("");
                            $('#emailProveedorEditar').val("");
                            $('#direecionProveedorEditar').val("");
                      }   
                  })
            }
        }

    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL EDITAR///////////////////////////////////////
});