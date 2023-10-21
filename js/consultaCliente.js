    $(document).ready(function() {
	console.log("JQuery is working");
  email();
  listarCliente();

  $(document).on('click', '#btnLimpiar', function(){
        $('#busqueda').val("");
        listarCliente();
    })

  function listarCliente(){
        $.ajax({
          url: 'php/listarCliente.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                datos = JSON.parse(response); 

                let plantilla = '';
                datos.forEach(resultado => {
                    var temporal = resultado.fecha_cliente;
                    let año = temporal.substring(0,4); 
                    let mes = temporal.substring(5,7); 
                    let dia = temporal.substring(8,10);  
                    var fecha = dia+"-"+mes+"-"+año;

                    plantilla += `<tr>
                                    <td>${resultado.cedula_cliente}</td>
                                    <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                    <td><div style="width: 7em;">${fecha}</div></td>
                                    <td>${resultado.direccion_cliente}</td>
                                    <td>${resultado.telefono_cliente}</td>
                                    <td><div style="width: 13em;"><small>${resultado.email_cliente}</small></div></td>
                                    <td>
                                      <div>
                                        <button style="width: 6em;" class="btn btn-success btnMostrarCliente"> Editar </button> 
                                      </div>
                                    </td>
                                </tr>`
                });

                $('#tableCliente').html(plantilla);
            }
        })
    }

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    $('#cmboxOpcion').change(function(e){
      listarCliente();
      $('#busqueda').val('');
      $('#busqueda').focus();
            
    })

    $('#busqueda').keypress(function(e){
      if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
        } 
        if($('#cmboxOpcion').val() == 1){
          $('#busqueda').attr("maxlength", "9");
          var key = e.keyCode || e.which;
          var tecla = String.fromCharCode(key).toLowerCase();
          var letras = "0987654321";

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
          $('#busqueda').attr("maxlength", "90");
          var key = e.keyCode || e.which;
          var tecla = String.fromCharCode(key).toLowerCase();
          var letras = "áéíóúabcdefghijklmnñopqrstuvwxyz, .1234567890";

          if(letras.indexOf(tecla) == -1){
            return false;
          }
        }
    });

    $("#busqueda").keyup(function(e){ 
        if($('#cmboxOpcion').val() == 0){
            $('#cmboxOpcion').focus();
            $('#invalido').toast('show');
            listarCliente();
        } else {
            if(!$('#busqueda').val()){
                alert("Ingrese una busqueda válida");
                listarCliente();
            } else {
                if($('#busqueda').val()){
                  if($('#cmboxOpcion').val() == 1){
                    var cedula = $("#busqueda").val();
                    $.ajax({ 
                      url : 'php/busquedaCliente.php',
                      type : 'POST',
                      data : { cedula },
                      success : function(response){
                        datos = JSON.parse(response); 

                        let plantilla = '';
                        datos.forEach(resultado => {
                            var temporal = resultado.fecha_cliente;
                            let año = temporal.substring(0,4); 
                            let mes = temporal.substring(5,7); 
                            let dia = temporal.substring(8,10);  
                            var fecha = dia+"-"+mes+"-"+año;

                            plantilla += `<tr>
                                            <td>${resultado.cedula_cliente}</td>
                                            <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td><div style="width: 7em;">${fecha}</div></td>
                                            <td>${resultado.direccion_cliente}</td>
                                            <td>${resultado.telefono_cliente}</td>
                                            <td><div style="width: 13em;"><small>${resultado.email_cliente}</small></div></td>
                                            <td>
                                              <div>
                                                <button style="width: 6em;" class="btn btn-success btnMostrarCliente"> Editar </button> 
                                              </div>
                                            </td>
                                        </tr>`
                        });

                        $('#tableCliente').html(plantilla);
                      }
                    });
                  }
                  if($('#cmboxOpcion').val() == 2){
                    var cliente = $("#busqueda").val();
                    $.ajax({ 
                      url : 'php/busquedaCliente.php',
                      type : 'POST',
                      data : { cliente },
                      success : function(response){
                        datos = JSON.parse(response); 

                        let plantilla = '';
                        datos.forEach(resultado => {
                            var temporal = resultado.fecha_cliente;
                            let año = temporal.substring(0,4); 
                            let mes = temporal.substring(5,7); 
                            let dia = temporal.substring(8,10);  
                            var fecha = dia+"-"+mes+"-"+año;

                            plantilla += `<tr>
                                            <td>${resultado.cedula_cliente}</td>
                                            <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td><div style="width: 7em;">${fecha}</div></td>
                                            <td>${resultado.direccion_cliente}</td>
                                            <td>${resultado.telefono_cliente}</td>
                                            <td><div style="width: 13em;"><small>${resultado.email_cliente}</small></div></td>
                                            <td>
                                              <div>
                                                <button style="width: 6em;" class="btn btn-success btnMostrarCliente"> Editar </button> 
                                              </div>
                                            </td>
                                        </tr>`
                        });

                        $('#tableCliente').html(plantilla);
                      }
                    });
                  }

                  if($('#cmboxOpcion').val() == 3){
                    var direccion = $("#busqueda").val();
                    $.ajax({ 
                      url : 'php/busquedaCliente.php',
                      type : 'POST',
                      data : { direccion },
                      success : function(response){
                        datos = JSON.parse(response); 

                        let plantilla = '';
                        datos.forEach(resultado => {
                            var temporal = resultado.fecha_cliente;
                            let año = temporal.substring(0,4); 
                            let mes = temporal.substring(5,7); 
                            let dia = temporal.substring(8,10);  
                            var fecha = dia+"-"+mes+"-"+año;

                            plantilla += `<tr>
                                            <td>${resultado.cedula_cliente}</td>
                                            <td>${resultado.nombre_cliente} ${resultado.apellido_cliente}</td>
                                            <td><div style="width: 7em;">${fecha}</div></td>
                                            <td>${resultado.direccion_cliente}</td>
                                            <td>${resultado.telefono_cliente}</td>
                                            <td><div style="width: 13em;"><small>${resultado.email_cliente}</small></div></td>
                                            <td>
                                              <div>
                                                <button style="width: 6em;" class="btn btn-success btnMostrarCliente"> Editar </button> 
                                              </div>
                                            </td>
                                        </tr>`
                        });

                        $('#tableCliente').html(plantilla);
                      }
                    });
                  }
              }
            }
        }
    });

    $('#cedula_cliente').keypress(function(e){
        $('#cedula_cliente').attr("maxlength", "8");
        $('#cedula_cliente').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#nombre_cliente').keypress(function(e){
      $('#nombre_cliente').attr("maxlength", "15");
      $('#nombre_cliente').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#apellido_cliente').keypress(function(e){
      $('#apellido_cliente').attr("maxlength", "15");
      $('#apellido_cliente').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#telefono_cliente').keypress(function(e){
      $('#telefono_cliente').attr("maxlength", "11");
      $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#direccion_cliente').keypress(function(e){
      $('#direccion_cliente').attr("maxlength", "45");
      $('#direccion_cliente').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz,.123456789";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    function email(){
      document.getElementById('email_cliente').addEventListener('input', function() {
        campo = event.target;
        valido = document.getElementById('email_verificar');
                      
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(campo.value)) {
          $('#email_cliente').attr("class", "input-width form-control form-control-sm");
        } else {
          $('#email_cliente').attr("class", "input-width form-control form-control-sm is-invalid");
        }
      });
    }

      $('#email_cliente').keypress(function(e){
        $('#email_cliente').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();
        var letras = "@_-&/'¿?áéíóúabcdefghijklmnñopqrstuvwxyz,.123456789";

        if(letras.indexOf(tecla) == -1){
          return false;
        }
      });

    //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL ///////////////////////////////////////

    $(document).on('click', '.btnMostrarCliente', function(){
        var info = $(this)[0].parentElement.parentElement.parentElement;
        var temporal = ($(info).find("td:eq(2)").text());
        var año = temporal.substring(6,11);
        var mes = temporal.substring(3,5);
        var dia = temporal.substring(0,2);        
        $('#cedula_cliente').val($(info).find("td:eq(0)").text());
        $('#nombre_cliente').val($(info).find("td:eq(1)").text());
        $('#fecha_cliente').val(año+"-"+mes+"-"+dia);
        $('#direccion_cliente').val($(info).find("td:eq(3)").text());
        $('#telefono_cliente').val($(info).find("td:eq(4)").text());
        $('#email_cliente').val($(info).find("td:eq(5)").text());
        $("#modalCliente").modal("show");
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - MOSTRAR MODAL ///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - OPERACIONES DEL MODAL///////////////////////////////////////

    $(document).on('click', '#btnCerrarModal', function(){
        var statusConfirm = confirm("¿Desea cancelar el registro?");
        if (statusConfirm == true){
            $("#modalCliente").modal("hide");
            $('#cedula_cliente').val("");
            $('#nombre_cliente').val("");
            $('#fecha_cliente').val("");
            $('#direccion_cliente').val("");
            $('#telefono_cliente').val("");
            $('#email_cliente').val("");

            $('#cedula_cliente').attr("class", "input-width form-control form-control-sm");
            $('#nombre_cliente').attr("class", "input-width form-control form-control-sm");
            $('#fecha_cliente').attr("class", "input-width form-control form-control-sm");
            $('#direccion_cliente').attr("class", "input-width form-control form-control-sm");
            $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
            $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
        } else {
            $("#modalCliente").modal("show");
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - OPERACIONES DEL MODAL///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - VALIDACION DE FECHA///////////////////////////////////////
    
    function fecha(){
            var fecha = new Date();
            var diaActual =  parseInt(fecha.getDate());
            var mesActual = parseInt(fecha.getMonth()+1);
            var añoActual = parseInt(fecha.getFullYear());
            
            console.log(diaActual+"-"+mesActual+"-"+añoActual);
            
            //////

            var fechaCliente = $('#fecha_cliente').val();
                
            var dia = parseInt(fechaCliente.substring(8,10));
            var mes = parseInt(fechaCliente.substring(5,7));
            var año = parseInt(fechaCliente.substring(0,4));
            console.log(dia+"-"+mes+"-"+año);

            //////
        if(año > añoActual){
          console.log("Año inválido");
          $('#fecha_cliente').attr("class", "form-control form-control-sm is-invalid"); 
        } else {
          if(año == añoActual && mes < mesActual && dia < diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año == añoActual && mes == mesActual && dia < diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año == añoActual && mes == mesActual && dia == diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año == añoActual && mes < mesActual && dia > diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año == añoActual && mes < mesActual && dia == diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año == añoActual && mes == mesActual && dia > diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm is-invalid"); 
          }

          if(año == añoActual && mes > mesActual && dia > diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm is-invalid"); 
          }

          if(año == añoActual && mes > mesActual && dia == diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm is-invalid"); 
          }

          if(año == añoActual && mes > mesActual && dia < diaActual){
            console.log("Mismo año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm is-invalid"); 
          }

          /////////////////////////////////////////////////

          if(año < añoActual && mes == mesActual && dia == diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes < mesActual && dia == diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes < mesActual && dia < diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes > mesActual && dia > diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes > mesActual && dia == diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes == mesActual && dia > diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes == mesActual && dia < diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes < mesActual && dia > diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }

          if(año < añoActual && mes > mesActual && dia < diaActual){
            console.log("Pasado año");
            $('#fecha_cliente').attr("class", "form-control form-control-sm"); 
          }


        }
    }

    $(".fecha").change(function(e){
        fecha($(this),e)
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - VALIDACION DE FECHA///////////////////////////////////////

    //////////////////////VALIDACIONES DE INFORMACIÓN - GUARDAR CLIENTE///////////////////////////////////////

    $(document).on('click', '#btnGuardarCliente', function(){
        if($('#nombre_cliente').val() == "" || $('#cedula_cliente').val() == "" || $('#fecha_cliente').val() == ""
          || $('#direccion_cliente').val() == "" || $('#telefono_cliente').val() == "" || $('#email_cliente').val() == "") { 
          
          document.getElementById("invalido2").innerHTML = "Introduzca información válida";
          $('#invalido2').toast('show');

          if($('#nombre_cliente').val() == ""){
            $('#nombre_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
          } else {
            $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
          }

          if($('#cedula_cliente').val() == ""){
            $('#cedula_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
          } else {
            $('#cedula_cliente').attr("class", "input-width form-control form-control-sm"); 
          }

          if($('#fecha_cliente').val() == ""){
            $('#fecha_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
          } else {
            $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
          }

          if($('#direccion_cliente').val() == ""){
            $('#direccion_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
          } else {
            $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
          }

          if($('#telefono_cliente').val() == ""){
            $('#telefono_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
          } else {
            $('#telefono_cliente').attr("class", "input-width form-control form-control-sm"); 
          }

          if($('#email_cliente').val() == ""){
            $('#email_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
          } else {
            $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
          }

        } else {

          if($('#nombre_cliente').val().length < 3 ||
                $('#direccion_cliente').val().length < 10 || $('#email_cliente').val().length < 13 ||
                 $('#telefono_cliente').val().length < 11 ){

                $('#invalido2').toast('show');

                if($('#nombre_cliente').val().length < 3){
                    $('#nombre_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#cedula_cliente').val().length < 6){
                    $('#cedula_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#cedula_cliente').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#direccion_cliente').val().length < 10){
                    $('#direccion_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#email_cliente').val().length < 13){
                  email();
                  $('#email_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                  $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
                }

                if($('#telefono_cliente').val().length < 11){
                    $('#telefono_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
                } else {
                    $('#telefono_cliente').attr("class", "input-width form-control form-control-sm"); 
                }

            } else {
              const datosCliente = {
                cedula_cliente : $('#cedula_cliente').val(),
                direccion_cliente : $('#direccion_cliente').val(),
                telefono_cliente : $('#telefono_cliente').val(),
                email_cliente : $('#email_cliente').val()
              };

              console.log(datosCliente);
              var json = JSON.stringify(datosCliente);
              console.log(json);

              $.ajax({
                  url: 'php/editarCliente.php',
                  type: 'POST',
                  data : { json },
                  success: function(response){
                    console.log(response);  
                  }   
              })

                alert("Cliente Editado");
                listarCliente();
                $("#modalCliente").modal("hide");
                $('#cedula_cliente').val("");
                $('#nombre_cliente').val("");
                $('#fecha_cliente').val("");
                $('#direccion_cliente').val("");
                $('#telefono_cliente').val("");
                $('#email_cliente').val("");

                $('#cedula_cliente').attr("class", "input-width form-control form-control-sm"); 
                $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
                $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
                $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
                $('#telefono_cliente').attr("class", "input-width form-control form-control-sm"); 
                $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
            }
          
        }
    })

    //////////////////////VALIDACIONES DE INFORMACIÓN - GUARDAR CLIENTE///////////////////////////////////////
});
