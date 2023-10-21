$(document).ready(function() {
	console.log("JQuery is working");
  noFactura();

//  $('#busqueda').keyup(function(e){if(e.keyCode == 8 || 46)alert('backspace trapped')})  
//BORRADO
  //////////NO FACTURA/////////////
  function noFactura(){
    $.ajax({
      url: 'php/noFactura.php',
      type: 'GET',
        success: function(response){
          datos = JSON.parse(response); 
          var noFactura = datos[0].cod_factura;
          var idFactura = parseInt(datos[0].idfactura)+1;
          var substract = parseInt(noFactura.substring(1,7))+1;

          document.getElementById("noFactura").innerHTML = "F00"+substract;
          document.getElementById("idFactura").innerHTML = idFactura;
        }
    })
  }
  //////////NO FACTURA/////////////

  //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

  $('#cedula_cliente').keypress(function(e){
        $('#cedula_cliente').attr("maxlength", "8");
        $('#cedula_cliente').attr("class", "input-width form-control form-control-sm");
        $('#nombre_cliente').attr("class", "input-width form-control form-control-sm");
        $('#apellido_cliente').attr("class", "input-width form-control form-control-sm"); 
        $('#fecha_cliente').attr("class", "input-width form-control form-control-sm");
        $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
        $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
        $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
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

    $('#email_cliente').keypress(function(e){
      $('#email_cliente').attr("class", "input-width form-control form-control-sm");
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = "@_-&/'¿?áéíóúabcdefghijklmnñopqrstuvwxyz,.123456789";

      if(letras.indexOf(tecla) == -1){
        return false;
      }
    });

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

  //////////////////////VALIDACIONES BÁSICAS///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - BUSQUEDA DE USUSARIO///////////////////////////////////////
  
    $(document).on('click', '#btnBuscar', function(){
      $('#nombre_cliente').attr("class", "input-width form-control form-control-sm");
      $('#apellido_cliente').attr("class", "input-width form-control form-control-sm"); 
      $('#fecha_cliente').attr("class", "input-width form-control form-control-sm");
      $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
      $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
      $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 

      if($('#cedula_cliente').val() == ""){
        document.getElementById("invalido").innerHTML = "Introduzca una cédula válida";
        $('#invalido').toast('show');
        $('#cedula_cliente').attr("class", "input-width form-control form-control-sm is-invalid");
        $('#nombre_cliente').val('');
        $('#apellido_cliente').val('');
        $('#fecha_cliente').val('');
        $('#direccion_cliente').val('');
        $('#telefono_cliente').val('');
        $('#email_cliente').val('');
        document.getElementById("nombre_cliente").disabled = true;
        document.getElementById("apellido_cliente").disabled = true;
        document.getElementById("fecha_cliente").disabled = true;
        document.getElementById("direccion_cliente").disabled = true;
        document.getElementById("telefono_cliente").disabled = true;
        document.getElementById("email_cliente").disabled = true;
        document.getElementById("btnRegistrar").disabled = true;
      } else {
        if($('#cedula_cliente').val().length < 7){
          document.getElementById("invalido").innerHTML = "Introduzca una cédula válida";
          $('#invalido').toast('show');
          $('#cedula_cliente').attr("class", "input-width form-control form-control-sm is-invalid");
          $('#nombre_cliente').val('');
          $('#apellido_cliente').val('');
          $('#fecha_cliente').val('');
          $('#direccion_cliente').val('');
          $('#telefono_cliente').val('');
          $('#email_cliente').val('');
          document.getElementById("nombre_cliente").disabled = true;
          document.getElementById("apellido_cliente").disabled = true;
          document.getElementById("fecha_cliente").disabled = true;
          document.getElementById("direccion_cliente").disabled = true;
          document.getElementById("telefono_cliente").disabled = true;
          document.getElementById("email_cliente").disabled = true;
          document.getElementById("btnRegistrar").disabled = true;
          document.getElementById("btnEditarCliente").disabled = true; 
        } else {
          if($('#cedula_cliente').val().length == 7 || $('#cedula_cliente').val().length == 8)
            $('#cedula_cliente').attr("class", "input-width form-control form-control-sm");
            $('#nombre_cliente').attr("class", "input-width form-control form-control-sm");
            $('#apellido_cliente').attr("class", "input-width form-control form-control-sm"); 
            $('#fecha_cliente').attr("class", "input-width form-control form-control-sm");
            $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
            $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
            $('#email_cliente').attr("class", "input-width form-control form-control-sm");
            $('#invalido').toast('hide');
            document.getElementById("nombre_cliente").disabled = true;
            document.getElementById("apellido_cliente").disabled = true;
            document.getElementById("fecha_cliente").disabled = true;
            document.getElementById("direccion_cliente").disabled = true;
            document.getElementById("telefono_cliente").disabled = true;
            document.getElementById("email_cliente").disabled = true;
            document.getElementById("btnRegistrar").disabled = true;

            ///////////////////BD///////////////////////////////////////
            var cedula_cliente = $('#cedula_cliente').val();
            $.ajax({
              url : 'php/buscarCliente.php',
              type : 'POST',
              data : { cedula_cliente },
              success : function(response){

                if(response == 0){
                  console.log("Error en base de datos");
                }

                if(response == 1){
                  console.log("No existe. Registre usuario");
                  document.getElementById("invalido").innerHTML = "Usuario no registrado";
                  $('#invalido').toast('show');
                  document.getElementById("nombre_cliente").disabled = false;
                  document.getElementById("apellido_cliente").disabled = false;
                  document.getElementById("fecha_cliente").disabled = false;
                  document.getElementById("direccion_cliente").disabled = false;
                  document.getElementById("telefono_cliente").disabled = false;
                  document.getElementById("email_cliente").disabled = false;
                  document.getElementById("btnRegistrar").disabled = false;
                  document.getElementById("btnEditarCliente").disabled = true; 
                  $('#nombre_cliente').val("");
                  $('#apellido_cliente').val("");
                  $('#fecha_cliente').val("");
                  $('#direccion_cliente').val("");
                  $('#telefono_cliente').val("");
                  $('#email_cliente').val("");
                } else {
                  if(response != 1 || response != 0){
                    datos = JSON.parse(response);
                    $('#idcliente').text(datos[0].idcliente);
                    $('#nombre_cliente').val(datos[0].nombre_cliente);
                    $('#apellido_cliente').val(datos[0].apellido_cliente);
                    $('#fecha_cliente').val(datos[0].fecha_cliente);
                    $('#direccion_cliente').val(datos[0].direccion_cliente);
                    $('#telefono_cliente').val(datos[0].telefono_cliente);
                    $('#email_cliente').val(datos[0].email_cliente);  
                    document.getElementById("btnEditarCliente").disabled = false;                
                  }
                }                
              }
            })
            ///////////////////BD///////////////////////////////////////
            
          
            
          }
        }
      })

    var cedula_cliente = document.getElementById("cedula_cliente");
    cedula_cliente.addEventListener("keyup", function(event) {
        if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("btnBuscar").click();
      }
    })

  //////////////////////VALIDACIONES DE INFORMACIÓN - BUSQUEDA DE USUSARIO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - REGISTRO DE USUSARIO///////////////////////////////////////

  $(document).on('click', '#btnRegistrar', function(){
    if($('#nombre_cliente').val() == "" || $('#apellido_cliente').val() == "" || $('#fecha_cliente').val() == ""
      || $('#direccion_cliente').val() == "" || ($('#telefono_cliente').val() == "" || $('#telefono_cliente').val().length < 11)
      || $('#email_cliente').val() == "") { 
      document.getElementById("invalido").innerHTML = "Introduzca información válida";
      $('#invalido').toast('show');

      if($('#nombre_cliente').val() == "" || $('#nombre_cliente').val().length < 3){
        $('#nombre_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#apellido_cliente').val() == "" || $('#apellido_cliente').val().length < 3){
        $('#apellido_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#apellido_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#fecha_cliente').val() == ""){
        $('#fecha_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
      }
      fecha();

      if($('#direccion_cliente').val() == "" || $('#direccion_cliente').val().length < 5){
        $('#direccion_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#telefono_cliente').val() == "" || $('#telefono_cliente').val().length < 11){
        $('#telefono_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#telefono_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#email_cliente').val() == ""){
        $('#email_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        document.getElementById('email_cliente').addEventListener('input', function() {
          campo = event.target;
          
          emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          //Se muestra un texto a modo de ejemplo, luego va a ser un icono
          if (emailRegex.test(campo.value)) {
            $('#email_cliente').attr("class", "input-width form-control form-control-sm");
          } else {
            $('#email_cliente').attr("class", "input-width form-control form-control-sm is-invalid");
          }
        });

        //$('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

    } else {

      /////////////////DB///////////////

      const datosCliente = {
        cedula_cliente : $('#cedula_cliente').val(),
        nombre_cliente : $('#nombre_cliente').val(),
        apellido_cliente : $('#apellido_cliente').val(),
        fecha_cliente : $('#fecha_cliente').val(),
        direccion_cliente : $('#direccion_cliente').val(),
        telefono_cliente : $('#telefono_cliente').val(),
        email_cliente : $('#email_cliente').val()
      };

      console.log(datosCliente);
      var json = JSON.stringify(datosCliente);
      console.log(json);

      $.ajax({
          url: 'php/registrarCliente.php',
          type: 'POST',
          data : { json },
          success: function(response){
            console.log(response);  
          }   
      })

      var cedula_cliente = $('#cedula_cliente').val();
            $.ajax({
              url : 'php/buscarCliente.php',
              type : 'POST',
              data : { cedula_cliente },
              success : function(response){

                if(response == 0){
                  console.log("Error en base de datos");
                }

                if(response == 1){
                  console.log("No existe. Registre usuario");
                  document.getElementById("invalido").innerHTML = "Usuario no registrado";
                  $('#invalido').toast('show');
                  document.getElementById("nombre_cliente").disabled = false;
                  document.getElementById("apellido_cliente").disabled = false;
                  document.getElementById("fecha_cliente").disabled = false;
                  document.getElementById("direccion_cliente").disabled = false;
                  document.getElementById("telefono_cliente").disabled = false;
                  document.getElementById("email_cliente").disabled = false;
                  document.getElementById("btnRegistrar").disabled = false;
                  document.getElementById("btnEditarCliente").disabled = true; 
                  $('#nombre_cliente').val("");
                  $('#apellido_cliente').val("");
                  $('#fecha_cliente').val("");
                  $('#direccion_cliente').val("");
                  $('#telefono_cliente').val("");
                  $('#email_cliente').val("");
                } else {
                  if(response != 1 || response != 0){
                    datos = JSON.parse(response);
                    $('#idcliente').text(datos[0].idcliente);   
                    $('#nombre_cliente').val(datos[0].nombre_cliente);
                    $('#apellido_cliente').val(datos[0].apellido_cliente);
                    $('#fecha_cliente').val(datos[0].fecha_cliente);
                    $('#direccion_cliente').val(datos[0].direccion_cliente);
                    $('#telefono_cliente').val(datos[0].telefono_cliente);
                    $('#email_cliente').val(datos[0].email_cliente);  
                    document.getElementById("nombre_cliente").disabled = true;
                    $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
                    document.getElementById("apellido_cliente").disabled = true;
                    $('#apellido_cliente').attr("class", "input-width form-control form-control-sm"); 
                    document.getElementById("fecha_cliente").disabled = true;
                    $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
                    document.getElementById("direccion_cliente").disabled = true;
                    $('#direccion_cliente').attr("class", "input-width form-control form-control-sm"); 
                    document.getElementById("telefono_cliente").disabled = true;
                    $('#telefono_cliente').attr("class", "input-width form-control form-control-sm"); 
                    document.getElementById("email_cliente").disabled = true;
                    $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
                    document.getElementById("btnRegistrar").disabled = true;
                    document.getElementById("btnEditarCliente").disabled = false;             
                  }
                }                
              }
            })

      ////////////////DB////////////////  
      alert("Registrado");
      //document.getElementById("cedula_cliente").disabled = true;
      //document.getElementById("btnBuscar").disabled = true;
      //document.getElementById("btnCancelar").disabled = true;
    }
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - REGISTRO DE USUSARIO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR DE USUSARIO///////////////////////////////////////

  $(document).on('click', '#btnEditarCliente', function(){
    document.getElementById("nombre_cliente").disabled = true;
    document.getElementById("apellido_cliente").disabled = true;
    document.getElementById("fecha_cliente").disabled = true;
    document.getElementById("direccion_cliente").disabled = false;
    document.getElementById("telefono_cliente").disabled = false;
    document.getElementById("email_cliente").disabled = false;
    document.getElementById("btnGuardarCliente").disabled = false;
    document.getElementById("btnEditarCliente").disabled = true;
    $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#apellido_cliente').attr("class", "input-width form-control form-control-sm");
    $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#direccion_cliente').attr("class", "input-width form-control form-control-sm");
    $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
    $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR DE USUSARIO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR DE USUSARIO///////////////////////////////////////

  $(document).on('click', '#btnGuardarCliente', function(){
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

    document.getElementById("nombre_cliente").disabled = true;
    document.getElementById("apellido_cliente").disabled = true;
    document.getElementById("fecha_cliente").disabled = true;
    document.getElementById("direccion_cliente").disabled = true;
    document.getElementById("telefono_cliente").disabled = true;
    document.getElementById("email_cliente").disabled = true;
    document.getElementById("btnGuardarCliente").disabled = true;
    document.getElementById("btnEditarCliente").disabled = false;
    $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#apellido_cliente').attr("class", "input-width form-control form-control-sm");
    $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#direccion_cliente').attr("class", "input-width form-control form-control-sm");
    $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
    $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR DE USUSARIO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - CANCELAR REGISTRO///////////////////////////////////////

  $(document).on('click', '#btnCancelar', function(){
    $('#cedula_cliente').val("");
    $('#nombre_cliente').val("");
    $('#apellido_cliente').val("");
    $('#fecha_cliente').val("");
    $('#direccion_cliente').val("");
    $('#telefono_cliente').val("");
    $('#email_cliente').val("");
    document.getElementById("nombre_cliente").disabled = true;
    document.getElementById("apellido_cliente").disabled = true;
    document.getElementById("fecha_cliente").disabled = true;
    document.getElementById("direccion_cliente").disabled = true;
    document.getElementById("telefono_cliente").disabled = true;
    document.getElementById("email_cliente").disabled = true;
    document.getElementById("btnRegistrar").disabled = true;
    document.getElementById("btnEditarCliente").disabled = true;
    document.getElementById("btnGuardarCliente").disabled = true;
    $('#cedula_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#apellido_cliente').attr("class", "input-width form-control form-control-sm");
    $('#fecha_cliente').attr("class", "input-width form-control form-control-sm"); 
    $('#direccion_cliente').attr("class", "input-width form-control form-control-sm");
    $('#telefono_cliente').attr("class", "input-width form-control form-control-sm");
    $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - CANCELAR REGISTRO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - BUSQUEDA DE PRODUCTO///////////////////////////////////////

  $(document).on('click', '#mostrarProductos', function(){
    $.ajax({
          url: 'php/listarCatalogo.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                    
                if(response == 1){
                    alert("No hay productos en sistema");
                    $("#modalProductos").modal("hide");
                } else {
                    if(response != 1){
                        datos = JSON.parse(response); 
                        let plantilla = '';
                        datos.forEach(resultado => {

                            plantilla += `<tr>
                                            <td hidden="hidden">${resultado.idproducto}</td>
                                            <td> <div style="width: 10em;">${resultado.codigo_producto}</div></td>
                                            <td> <div style="width: 10em;">${resultado.descripcion_producto}</div></td>
                                            <td> <div style="width: 10em;">${resultado.existencia_producto}</div></td>
                                            <td> <div style="width: 10em;">${resultado.precio_producto}</div></td>
                                        </tr>`
                        });

                        $('#tableCatalogo').html(plantilla);
                        $("#modalProductos").modal("show");
                    }
                }

            }
        })
  })


  $("#busquedaProducto").keyup(function(e){ 
    var codigo = $("#busquedaProducto").val();
    $.ajax({ 
      url : 'php/busquedaCatalogo.php',
      type : 'POST',
      data : { codigo },
      success : function(response){
        datos = JSON.parse(response); 

        let plantilla = '';
        datos.forEach(resultado => {

            plantilla += `<tr>
                            <td hidden="hidden">${resultado.idproducto}</td>
                            <td> <div style="width: 10em;">${resultado.codigo_producto}</div></td>
                            <td> <div style="width: 10em;">${resultado.descripcion_producto}</div></td>
                            <td> <div style="width: 10em;">${resultado.existencia_producto}</div></td>
                            <td> <div style="width: 10em;">${resultado.precio_producto}</div></td>
                          </tr>`
        });
        $('#tableCatalogo').html(plantilla);
      }
    });
  })

  $('#codigo_producto').keypress(function(e){
    if(!$('#cedula_cliente').val() || !$('#nombre_cliente').val() || !$('#apellido_cliente').val() || !$('#fecha_cliente').val() || 
      !$('#direccion_cliente').val() || !$('#telefono_cliente').val() || !$('#email_cliente').val()){
      $('#codigo_producto').val('');
      alert("Ingrese cédula");
      $('#cedula_cliente').focus();
      document.getElementById("cantidad_producto").disabled = true;
      document.getElementById("btnListar").disabled = true;
      document.getElementById("descripcion_producto").innerHTML = "-";
      document.getElementById("existencia_producto").innerHTML = "-";
      $('#cantidad_producto').val('');
      document.getElementById("precio_producto").innerHTML = "0.00";
      document.getElementById("precioTotal_producto").innerHTML = "0.00";
    } else {
      document.getElementById("cantidad_producto").disabled = true;
      document.getElementById("btnListar").disabled = true;
      document.getElementById("descripcion_producto").innerHTML = "-";
      document.getElementById("existencia_producto").innerHTML = "-";
      $('#cantidad_producto').val('');
      document.getElementById("precio_producto").innerHTML = "0.00";
      document.getElementById("precioTotal_producto").innerHTML = "0.00";
          
      $('#codigo_producto').attr("class", "form-control form-control-sm");
      $('#codigo_producto').attr("maxlength", "7");
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();

      var numeros = "áéíóúabcdefghijklmnñopqrstuvwxyz1234567890";

      if(numeros.indexOf(tecla) == -1){
        return false;
      }
    }
  });

  var codigo_producto = document.getElementById("codigo_producto");
  codigo_producto.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
      //Ocultar aviso
      $('#codigo_producto').attr("class", "form-control form-control-sm");
      $('#cantidad_producto').attr("class", "form-control form-control-sm");
      event.preventDefault();

      if($('#codigo_producto').val()){
        ///////////DB/////////////
        let codigo_producto = $('#codigo_producto').val();
        $.ajax({
          url: 'php/buscarProducto.php',
          type: 'POST',
          data : { codigo_producto },
          success: function(response){
            if(response == 0){
              console.log("Error en base de datos");
            }

            if(response == 1){
              alert("No existe producto");
              document.getElementById("cantidad_producto").disabled = true;
              document.getElementById("btnListar").disabled = true;
              $('#codigo_producto').val('');
              document.getElementById("descripcion_producto").innerHTML = "-";
              document.getElementById("existencia_producto").innerHTML = "-";
              $('#cantidad_producto').val('');
              document.getElementById("precio_producto").innerHTML = "0.00";
              document.getElementById("precioTotal_producto").innerHTML = "0.00";
            } else {
              if(response != 1 || response != 0){
                datos = JSON.parse(response);  
                if(parseInt(datos[0].existencia_producto) == 0) {
                  alert("El producto: "+codigo_producto+" no posee unidades existentes en el inventario.\n"+
                    "Dirígase a compras o desactive el producto en inventario");
                  $('#codigo_producto').val('');
                } else {
                  if (parseInt(datos[0].existencia_producto) > 0 && parseInt(datos[0].existencia_producto) < 5) {
                    var statusConfirm = confirm("Al producto: "+codigo_producto+" le restan: "+datos[0].existencia_producto+
                      " existentes en el inventario.");
                    if (statusConfirm == true){
                      document.getElementById("idproducto").innerHTML = datos[0].idproducto;
                      document.getElementById("descripcion_producto").innerHTML = datos[0].descripcion_producto;
                      document.getElementById("existencia_producto").innerHTML = datos[0].existencia_producto;
                      $('#cantidad_producto').val('1');
                      document.getElementById("precio_producto").innerHTML = datos[0].precio_producto;
                      document.getElementById("precioTotal_producto").innerHTML = datos[0].precio_producto;
                      $('#codigo_producto').attr("class", "form-control form-control-sm");
                      document.getElementById("cantidad_producto").disabled = false;
                      document.getElementById("btnListar").disabled = false;
                    } else {
                      document.getElementById("cantidad_producto").disabled = true;
                      document.getElementById("btnListar").disabled = true;
                      $('#codigo_producto').val('');
                      document.getElementById("descripcion_producto").innerHTML = "-";
                      document.getElementById("existencia_producto").innerHTML = "-";
                      $('#cantidad_producto').val('');
                      document.getElementById("precio_producto").innerHTML = "0.00";
                      document.getElementById("precioTotal_producto").innerHTML = "0.00";
                    } 
                  } else {
                    if(parseInt(datos[0].existencia_producto) > 5){
                      document.getElementById("idproducto").innerHTML = datos[0].idproducto;
                      document.getElementById("descripcion_producto").innerHTML = datos[0].descripcion_producto;
                      document.getElementById("existencia_producto").innerHTML = datos[0].existencia_producto;
                      $('#cantidad_producto').val('1');
                      document.getElementById("precio_producto").innerHTML = datos[0].precio_producto;
                      document.getElementById("precioTotal_producto").innerHTML = datos[0].precio_producto;
                      $('#codigo_producto').attr("class", "form-control form-control-sm");
                      document.getElementById("cantidad_producto").disabled = false;
                      document.getElementById("btnListar").disabled = false;  
                    }
                  }
                }
              }
            }        

          }
        })
        ///////////DB/////////////
      } else {
        alert("No existe");
        document.getElementById("cantidad_producto").disabled = true;
        document.getElementById("btnListar").disabled = true;
        $('#codigo_producto').val('');
        document.getElementById("descripcion_producto").innerHTML = "-";
        document.getElementById("existencia_producto").innerHTML = "-";
        $('#cantidad_producto').val('');
        document.getElementById("precio_producto").innerHTML = "0.00";
        document.getElementById("precioTotal_producto").innerHTML = "0.00";
      }
      
    }
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - BUSQUEDA DE PRODUCTO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - ESPECIFICACION DE CANTIDAD///////////////////////////////////////
  
  $('#cantidad_producto').keypress(function(e){
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

  $('#cantidad_producto').keyup(function(e) {
    $('#cantidad_producto').attr("class", "form-control form-control-sm");
    if(parseInt($('#cantidad_producto').val()) > parseInt($('#existencia_producto').text())){
      $('#cantidad_producto').attr("class", "form-control form-control-sm is-invalid");
      document.getElementById("precioTotal_producto").innerHTML = '0.00';
      document.getElementById("invalido2").innerHTML = "La cantidad sobrepasa a la existencia";
      $('#invalido2').toast('show');
    } else {
      if($('#cantidad_producto').val() == ""){
        document.getElementById("precioTotal_producto").innerHTML = '0.00';
      } else {
        var precioTotal = (parseFloat(document.getElementById("precio_producto").innerHTML)*parseFloat($('#cantidad_producto').val()));
        document.getElementById("precioTotal_producto").innerHTML = ''+precioTotal+'.00';
      }
    }

    ////ACABO DE PONER 16JUN20
    if(parseInt($('#cantidad_producto').val()) > 2 && $('#codigo_producto').val().includes('C')){
      $('#cantidad_producto').attr("class", "form-control form-control-sm is-invalid");
      document.getElementById("invalido2").innerHTML = "Puede agregar 1 o 2 cristales por producto";
      $('#invalido2').toast('show');
    }

  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - ESPECIFICACION DE CANTIDAD///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - LISTAR PRODUCTO///////////////////////////////////////

  $(document).on('click', '#btnListar', function(){
    var info = $(this)[0].parentElement.parentElement;
    if($('#cantidad_producto').val() == "" || $('#codigo_producto').val() == ""){
      
      document.getElementById("invalido2").innerHTML = "Introduzca información válida";
      $('#invalido2').toast('show'); 
      if($('#cantidad_producto').val() == ""){
        $('#cantidad_producto').attr("class", "form-control form-control-sm is-invalid");
      }
      if($('#codigo_producto').val() == ""){
        $('#codigo_producto').attr("class", "form-control form-control-sm is-invalid");
      }

    } else {
      
      if(parseInt($('#cantidad_producto').val()) > parseInt($('#existencia_producto').text())){
        document.getElementById("invalido2").innerHTML = "La cantidad sobrepasa a la existencia";
        $('#invalido2').toast('show');
      } else {


        if($('#codigo_producto').val().includes('CM001') || $('#codigo_producto').val().includes('CM002') ||
          $('#codigo_producto').val().includes('CB001') || $('#codigo_producto').val().includes('CB002') ||
          $('#codigo_producto').val().includes('CP001') || $('#codigo_producto').val().includes('CP002') || 
          $('#codigo_producto').val().includes('Cm001') || $('#codigo_producto').val().includes('Cm002') ||
          $('#codigo_producto').val().includes('Cb001') || $('#codigo_producto').val().includes('Cb002') ||
          $('#codigo_producto').val().includes('Cp001') || $('#codigo_producto').val().includes('Cp002') ||
          $('#codigo_producto').val().includes('cm001') || $('#codigo_producto').val().includes('cm002') ||
          $('#codigo_producto').val().includes('cb001') || $('#codigo_producto').val().includes('cb002') ||
          $('#codigo_producto').val().includes('cp001') || $('#codigo_producto').val().includes('cp002') ||
          $('#codigo_producto').val().includes('cM001') || $('#codigo_producto').val().includes('cM002') ||
          $('#codigo_producto').val().includes('cB001') || $('#codigo_producto').val().includes('cB002') ||
          $('#codigo_producto').val().includes('cP001') || $('#codigo_producto').val().includes('cP002')){

          if(parseInt($('#cantidad_producto').val()) > 2){
            $('#cantidad_producto').attr("class", "form-control form-control-sm is-invalid");
            document.getElementById("invalido2").innerHTML = "Puede agregar 1 o 2 cristales por producto";
            $('#invalido2').toast('show');
          } else {

            /////////////////DB///////////////
            let idproducto = $(info).find("td:eq(0)").text();
            let cantidad_producto = $('#cantidad_producto').val();
            let precio_producto = $(info).find("td:eq(5)").text();
            $.ajax({
              url: 'php/listarProducto.php',
              type: 'POST',
              data : { idproducto, cantidad_producto, precio_producto },
              success: function(response){
                console.log(response);  
              }
            })
            $.ajax({
              url: 'php/restaSumaInventario.php',
              type: 'POST',
              data : { cantidad_producto, idproducto },
              success: function(response){
                console.log(response);  
              }
            })
            console.log(idproducto+" "+cantidad_producto+" "+precio_producto);
            ////////////////DB////////////////
           
            $('#cantidad_producto').attr("class", "form-control form-control-sm");
            document.getElementById("tableProducto").insertRow(-1).innerHTML = '<tr class="table-active">'+
            '<td class="" hidden="hidden">'+ $(info).find("td:eq(0)").text() +'</td>'+
            '<td class="codigoCategoria">'+ $('#codigo_producto').val() +'</td>'+
            '<td class="descripcionProducto">'+ $(info).find("td:eq(2)").text() +'</td>'+
            '<td class="cantidadProducto">'+ $('#cantidad_producto').val() +'</td>'+
            '<td class="precioProducto">'+ $(info).find("td:eq(5)").text() +'</td>'+
            '<td>'+ $(info).find("td:eq(6)").text() +'</td>'+
            '<td style="width: 20em;">'+
               '<label><b>Formula</b></label>'+
                '<div style="margin: auto;">'+
                  '<label><b>OI</b></label>'+
                  '<div style="display: flex;">'+
                    '<div>'+
                      '<label>ESF</label>'+
                      '<input class="col-md-10 form-control form-control-sm" placeholder="ESF" type="number" step="any" value="0.0" id="esf_oi">'+
                '</div>'+
                '<div>'+
                  '<label>CIL</label> '+
                  '<input class="col-md-10 form-control form-control-sm" placeholder="CIL" type="number" step="any" value="0.0" id="cil_oi">'+
                '</div>'+
                '<div>'+
                  '<label>EJE</label>'+
                  '<input class="col-md-10 form-control form-control-sm" placeholder="EJE" type="number" step="any" value="0.0" id="eje_oi">'+
                '</div>'+
              '</div>'+
                '</div>'+
                '<div style="margin: auto; margin-top: 1vh;">'+
                  '<label><b>OD</b></label>'+
                  '<div style="display: flex;">'+
                    '<div>'+
                      '<label>ESF</label>'+
                      '<input class="col-md-10 form-control form-control-sm" placeholder="ESF" type="number" step="any" value="0.0" id="esf_od">'+
                '</div>'+
                '<div>'+
                  '<label>CIL</label> '+
                  '<input class="col-md-10 form-control form-control-sm" placeholder="CIL" type="number" step="any" value="0.0" id="cil_od">'+
                '</div>'+
                '<div>'+
                  '<label>EJE</label>'+
                  '<input class="col-md-10 form-control form-control-sm" placeholder="EJE" type="number" step="any" value="0.0" id="eje_od">'+
                '</div>'+
              '</div>'+
                '</div>'+
                '<hr>'+
                '<div style="margin: auto;">'+
                  '<label><b>Tratamiento</b></label>'+
                  '<label>Especifique si sus cristales serán procesados con <b>antireflejo</b>, <b>coloración</b> o ambas</label>'+
                  '<div>'+
                    '<div style="display: flex; margin: 0.3em;">'+
                      '<div class="btn-group btn-group-toggle" data-toggle="buttons">'+
                          '<label class="btn btn-info">'+
                          '<input type="checkbox" autocomplete="off"> Antireflejo'+
                          '</label>'+
                        '</div>'+
                        '<div style="margin-left: auto; margin-top: 0.6em;"><label>50.00</label></div>'+
                    '</div>'+
                    '<div style="display: flex; margin: 0.3em;">'+
                      '<div class="btn-group btn-group-toggle" data-toggle="buttons">'+
                          '<label class="btn btn-info">'+
                          '<input type="checkbox" autocomplete="off"> Coloración'+
                          '</label>'+
                        '</div>'+
                        '<div style="margin-left: auto; margin-top: 0.6em;"><label>25.00</label></div>'+
                    '</div>'+
                   '</div>'+
                '</div>'+
                '<hr>'+
                '<div style="margin: auto; display: flex;">'+
                  '<div style="margin: auto;"><button type="button" class="aceptarProducto btn btn-primary">Aceptar</button></div>'+
                  '<div style="margin: auto;"><button type="button" class="editarProducto btn btn-warning" disabled>Editar</button></div>'+
                  '<div style="margin: auto;"><button type="button" class="eliminarProductoCristal btn btn-danger">Eliminar</button></div>'+
                '</div>'+
            '</td>'+
            '</tr>';

            var precioTotal = $('#precioTotal').text();
            var sumaPrecios = (parseFloat(precioTotal)+parseFloat($(info).find("td:eq(6)").text()));
            document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
            document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

            var calIVA = (parseFloat(sumaPrecios)*0.12);
            document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 
      
            var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
            document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';

            document.getElementById("cantidad_producto").disabled = true;
            document.getElementById("btnListar").disabled = true;
            $('#codigo_producto').val('');
            $('#codigo_producto').attr("class", "input-width form-control form-control-sm"); 
            document.getElementById("descripcion_producto").innerHTML = "-";
            document.getElementById("existencia_producto").innerHTML = "-";
            $('#cantidad_producto').val('');
            $('#cantidad_producto').attr("class", "input-width form-control form-control-sm"); 
            document.getElementById("precio_producto").innerHTML = "0.00";
            document.getElementById("precioTotal_producto").innerHTML = "0.00";


          }


        } else {
            /////////////////DB///////////////
            let idproducto = $(info).find("td:eq(0)").text();
            let cantidad_producto = $('#cantidad_producto').val();
            let precio_producto = $(info).find("td:eq(5)").text();
            $.ajax({
              url: 'php/listarProducto.php',
              type: 'POST',
              data : { idproducto, cantidad_producto, precio_producto },
              success: function(response){
                console.log(response);  
              }
            })
             $.ajax({
              url: 'php/restaSumaInventario.php',
              type: 'POST',
              data : { cantidad_producto, idproducto },
              success: function(response){
                console.log(response);  
              }
            })
            console.log(idproducto+" "+cantidad_producto+" "+precio_producto);
            ////////////////DB////////////////

            document.getElementById("tableProducto").insertRow(-1).innerHTML = '<tr class="table-active">'+
            '<td class="" hidden="hidden">'+ $(info).find("td:eq(0)").text() +'</td>'+
            '<td class="codigoCategoria">'+ $('#codigo_producto').val() +'</td>'+
            '<td class="descripcionProducto">'+ $(info).find("td:eq(2)").text() +'</td>'+
            '<td class="cantidadProducto">'+ $('#cantidad_producto').val() +'</td>'+
            '<td class="precioProducto">'+ $(info).find("td:eq(5)").text() +'</td>'+
            '<td>'+ $(info).find("td:eq(6)").text() +'</td>'+
            '<td style="width: 20em;">'+
              '<div style="margin-left: 0.3em;">'+
                '<button class="eliminarProducto btn btn-danger"> Eliminar </button>'+
              '</div>'+
            '</td>'+
            '</tr>';
            
            var precioTotal = $('#precioTotal').text();
            var sumaPrecios = (parseFloat(precioTotal)+parseFloat($(info).find("td:eq(6)").text()));
            document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
            document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

            var calIVA = (parseFloat(sumaPrecios)*0.12);
            document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 
      
            var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
            document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';

            document.getElementById("cantidad_producto").disabled = true;
            document.getElementById("btnListar").disabled = true;
            $('#codigo_producto').val('');
            $('#codigo_producto').attr("class", "input-width form-control form-control-sm"); 
            document.getElementById("descripcion_producto").innerHTML = "-";
            document.getElementById("existencia_producto").innerHTML = "-";
            $('#cantidad_producto').val('');
            $('#cantidad_producto').attr("class", "input-width form-control form-control-sm"); 
            document.getElementById("precio_producto").innerHTML = "0.00";
            document.getElementById("precioTotal_producto").innerHTML = "0.00"; 
        }
      }
    }
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - LISTAR PRODUCTO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - ACEPTAR PRODUCTO///////////////////////////////////////

  $(document).on('click', '.aceptarProducto', function () {
    var info = $(this)[0].parentElement.parentElement.parentElement.parentElement;
    var codigoProducto = $(info).find("td:eq(1)").text();
    var descripcionProducto = $(info).find("td:eq(2)").text();
    var precioProducto = $(info).find("td:eq(4)").text();
    //////////////////////
    var divAccion = $(this)[0].parentElement.parentElement.parentElement;
    var cbTratamientoAnti = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild;
    var cbTratamientoColoracion = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.firstChild;
    var btnTratamientoAnti = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.firstChild.firstChild;
    var btnTratamientoColoracion = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild;
    /////////////////////
    var btnAceptar = $(this)[0].parentElement.firstChild;
    var btnEditar = $(this)[0].parentElement.parentElement.firstChild.nextSibling.firstChild;
    var btnEliminar = $(this)[0].parentElement.parentElement.firstChild.nextSibling.nextSibling.firstChild;
    /////////////////////

    if(cbTratamientoAnti.checked){
      let precioAnti = parseInt($(info).find("td:eq(5)").text())+50;
      if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con antireflejo"); 
        $(info).find("td:eq(5)").text(precioAnti+".00");
      }
      if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con antireflejo"); 
        $(info).find("td:eq(5)").text(precioAnti+".00");
      }
      if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con antireflejo"); 
        $(info).find("td:eq(5)").text(precioAnti+".00");
      }
      if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con antireflejo"); 
        $(info).find("td:eq(5)").text(precioAnti+".00");
      }
      if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con antireflejo"); 
        $(info).find("td:eq(5)").text(precioAnti+".00");
      }
      if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con antireflejo"); 
        $(info).find("td:eq(5)").text(precioAnti+".00");
      }

      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)+50);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';

    } else {

      if(descripcionProducto.includes('antireflejo')){
        let precioAntiResta = parseInt($(info).find("td:eq(5)").text())-50;
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato"); 
          $(info).find("td:eq(5)").text(precioAntiResta+".00");
        }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio"); 
          $(info).find("td:eq(5)").text(precioAntiResta+".00");
        }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato"); 
          $(info).find("td:eq(5)").text(precioAntiResta+".00");
        }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio"); 
          $(info).find("td:eq(5)").text(precioAntiResta+".00");
        }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato"); 
          $(info).find("td:eq(5)").text(precioAntiResta+".00");
        }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio"); 
          $(info).find("td:eq(5)").text(precioAntiResta+".00");
        }
        var precioTotal = $('#precioTotal').text();
        var sumaPrecios = (parseFloat(precioTotal)-50);

        document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
        document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

        var calIVA = (parseFloat(sumaPrecios)*0.12);
        document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

        var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
        document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';
      }

      if(descripcionProducto.includes('antireflejo') && cbTratamientoColoracion.checked){
        let precioColoracion = parseInt($(info).find("td:eq(5)").text())+25;
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con coloración"); 
          $(info).find("td:eq(5)").text(precioColoracion+".00");
        }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con coloración"); 
          $(info).find("td:eq(5)").text(precioColoracion+".00");
        }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con coloración"); 
          $(info).find("td:eq(5)").text(precioColoracion+".00");
        }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con coloración"); 
          $(info).find("td:eq(5)").text(precioColoracion+".00");
        }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con coloración"); 
          $(info).find("td:eq(5)").text(precioColoracion+".00");
        }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con coloración"); 
          $(info).find("td:eq(5)").text(precioColoracion+".00");
        }
        var precioTotal = $('#precioTotal').text();
        var sumaPrecios = (parseFloat(precioTotal)+25);

        document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
        document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

        var calIVA = (parseFloat(sumaPrecios)*0.12);
        document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

        var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
        document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';
      }

    }

    if(descripcionProducto.includes('coloración') && cbTratamientoAnti.checked){
      let precioColoracionResta = parseInt($(info).find("td:eq(5)").text())-25;
      $(info).find("td:eq(5)").text(precioColoracionResta+".00");
      
      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)-25);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';    
    }

    if(descripcionProducto.includes('antireflejo') && cbTratamientoAnti.checked){
      alert("Ya tiene ese tratamiento: antireflejo");
      let precioAnti = parseInt($(info).find("td:eq(5)").text())-50;
      $(info).find("td:eq(5)").text(precioAnti+".00");

      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)-50);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
    }


    
    if(cbTratamientoColoracion.checked){
      let precioColoracion = parseInt($(info).find("td:eq(5)").text())+25;
      if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con coloración"); 
        $(info).find("td:eq(5)").text(precioColoracion+".00");
      }
      if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con coloración"); 
        $(info).find("td:eq(5)").text(precioColoracion+".00");
      }
      if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con coloración"); 
        $(info).find("td:eq(5)").text(precioColoracion+".00");
      }
      if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con coloración"); 
        $(info).find("td:eq(5)").text(precioColoracion+".00");
      }
      if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con coloración"); 
        $(info).find("td:eq(5)").text(precioColoracion+".00");
      }
      if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con coloración"); 
        $(info).find("td:eq(5)").text(precioColoracion+".00");
      }
      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)+25);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
    } else {

      if(descripcionProducto.includes('coloración')){
        let precioColoracionResta = parseInt($(info).find("td:eq(5)").text())-25;
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato");
          $(info).find("td:eq(5)").text(precioColoracionResta+".00");
        }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio");
          $(info).find("td:eq(5)").text(precioColoracionResta+".00");
        }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato");
          $(info).find("td:eq(5)").text(precioColoracionResta+".00");
        }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio");
          $(info).find("td:eq(5)").text(precioColoracionResta+".00");
        }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato");
          $(info).find("td:eq(5)").text(precioColoracionResta+".00");
        }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio");
          $(info).find("td:eq(5)").text(precioColoracionResta+".00");
        }
        var precioTotal = $('#precioTotal').text();
        var sumaPrecios = (parseFloat(precioTotal)-25);

        document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
        document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

        var calIVA = (parseFloat(sumaPrecios)*0.12);
        document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

        var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
        document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
      }

      if(descripcionProducto.includes('coloración') && cbTratamientoAnti.checked){
        let precioAnti = parseInt($(info).find("td:eq(5)").text())+25;
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con antireflejo"); 
          $(info).find("td:eq(5)").text(precioAnti+".00");
        }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con antireflejo"); 
          $(info).find("td:eq(5)").text(precioAnti+".00");
        }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con antireflejo"); 
          $(info).find("td:eq(5)").text(precioAnti+".00");
        }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con antireflejo"); 
          $(info).find("td:eq(5)").text(precioAnti+".00");
        }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con antireflejo"); 
          $(info).find("td:eq(5)").text(precioAnti+".00");
        }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con antireflejo"); 
          $(info).find("td:eq(5)").text(precioAnti+".00");
        }
        var precioTotal = $('#precioTotal').text();
        var sumaPrecios = (parseFloat(precioTotal)+25);

        document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
        document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

        var calIVA = (parseFloat(sumaPrecios)*0.12);
        document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

        var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
        document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
      }

    }

    if(descripcionProducto.includes('antireflejo') && cbTratamientoColoracion.checked){
      let precioAnti = parseInt($(info).find("td:eq(5)").text())-25;
      $(info).find("td:eq(5)").text(precioAnti+".00");
      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)-25);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
    }

    if(descripcionProducto.includes('coloración') && cbTratamientoColoracion.checked){
      alert("Ya tiene ese tratamiento: coloración");
      let precioColoracion = parseInt($(info).find("td:eq(5)").text())-25;
      $(info).find("td:eq(5)").text(precioColoracion+".00");
      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)-25);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
    }








    if(cbTratamientoAnti.checked && cbTratamientoColoracion.checked){
      if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con antireflejo y coloración");  }
      if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con antireflejo y coloración");  }
      if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con antireflejo y coloración");  }
      if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con antireflejo y coloración");  }
      if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con antireflejo y coloración");  }
      if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con antireflejo y coloración");  }
    } else {
      

      if(descripcionProducto.includes('antireflejo y coloración')){
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato"); }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio"); }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato"); }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio"); }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato"); }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio"); }
      }

      if(descripcionProducto.includes('antireflejo y coloración') && cbTratamientoAnti.checked){
        
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con antireflejo"); }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con antireflejo"); }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con antireflejo"); }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con antireflejo"); }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con antireflejo"); }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con antireflejo"); }

      }

      if(descripcionProducto.includes('antireflejo y coloración') && cbTratamientoColoracion.checked){
        
        if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con coloración"); }
        if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con coloración"); }
        if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con coloración"); }
        if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con coloración"); }
        if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con coloración"); }
        if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con coloración"); }
        
      }
    }

    if(descripcionProducto.includes('coloración') && cbTratamientoAnti.checked && cbTratamientoColoracion.checked){
      let precioAnti = parseInt($(info).find("td:eq(5)").text())+25;
      $(info).find("td:eq(5)").text(precioAnti+".00");
      if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con antireflejo y coloración"); }
      if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con antireflejo y coloración"); }
      if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con antireflejo y coloración"); }
      if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con antireflejo y coloración"); }
      if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con antireflejo y coloración"); }
      if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con antireflejo y coloración"); }
      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)+25);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var precioTotal = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("precioTotal").innerHTML = ''+precioTotal+'.00';   
    }

    if(descripcionProducto.includes('antireflejo') && cbTratamientoAnti.checked && cbTratamientoColoracion.checked){
      let precioAnti = parseInt($(info).find("td:eq(5)").text())+25;
      $(info).find("td:eq(5)").text(precioAnti+".00");
      if(codigoProducto == "CM001"){ $(info).find("td:eq(2)").text("Cristal monofocal de policarbonato con antireflejo y coloración"); }
      if(codigoProducto == "CM002"){ $(info).find("td:eq(2)").text("Cristal monofocal de vidrio con antireflejo y coloración"); }
      if(codigoProducto == "CB001"){ $(info).find("td:eq(2)").text("Cristal bifocal de policarbonato con antireflejo y coloración"); }
      if(codigoProducto == "CB002"){ $(info).find("td:eq(2)").text("Cristal bifocal de vidrio con antireflejo y coloración"); }
      if(codigoProducto == "CP001"){ $(info).find("td:eq(2)").text("Cristal progresivo de policarbonato con antireflejo y coloración"); }
      if(codigoProducto == "CP002"){ $(info).find("td:eq(2)").text("Cristal progresivo de vidrio con antireflejo y coloración"); }
      var precioTotal = $('#precioTotal').text();
      var sumaPrecios = (parseFloat(precioTotal)+25);

      document.getElementById("precioTotal").innerHTML = ''+sumaPrecios+'.00';
      document.getElementById("precioIndicador").innerHTML = ''+sumaPrecios+'.00';

      var calIVA = (parseFloat(sumaPrecios)*0.12);
      document.getElementById("IVA").innerHTML = ''+calIVA+'.00'; 

      var subPrecio = (parseFloat(sumaPrecios)-parseFloat(calIVA));
      document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';   
    }

    btnTratamientoAnti.setAttribute("class", "btn btn-info disabled");
    btnTratamientoColoracion.setAttribute("class", "btn btn-info disabled");
    
    cbTratamientoAnti.setAttribute("disabled", ""); 
    cbTratamientoColoracion.setAttribute("disabled", ""); 
    
    btnEditar.removeAttribute("disabled"); 
    btnEliminar.removeAttribute("disabled"); 
    btnAceptar.setAttribute("disabled", ""); 

    ///////////////////////ENVIO DE FORMULA A LA BD///////////////////////////////////
    if(parseInt($('#esf_oi').val()) == "0.0" && parseInt($('#cil_oi').val()) == "0.0" && parseInt($('#eje_oi').val()) == "0.0"
        && parseInt($('#esf_od').val()) == "0.0" && parseInt($('#cil_od').val()) == "0.0" && parseInt($('#eje_od').val()) == "0.0"){
      alert("No hay formula. Si va a ingresar una formula: \n"
        +"Al desaparecer el aviso, presione editar e ingresela");
    } else {
      let idcliente = $('#idcliente').text();
      let esf_oi = $('#esf_oi').val();
      let cil_oi = $('#cil_oi').val();
      let eje_oi = $('#eje_oi').val();
      let esf_od = $('#esf_od').val();
      let cil_od = $('#cil_od').val();
      let eje_od = $('#eje_od').val();
      $.ajax({
        url: 'php/registrarFormulaTratamiento.php',
        type: 'POST',
        data : { idcliente,esf_oi,cil_oi,eje_oi,esf_od,cil_od,eje_od },
        success: function(response){
          console.log(response);  
         }
      })
      document.getElementById("esf_oi").disabled = true;
      document.getElementById("cil_oi").disabled = true;
      document.getElementById("eje_oi").disabled = true;
      document.getElementById("esf_od").disabled = true;
      document.getElementById("cil_od").disabled = true;
      document.getElementById("eje_od").disabled = true;
    }
    ///////////////////////ENVIO DE FORMULA A LA BD///////////////////////////////////    

  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - ACEPTAR PRODUCTO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR PRODUCTO///////////////////////////////////////

  $(document).on('click', '.editarProducto', function () {
    var btnAceptar = $(this)[0].parentElement.parentElement.firstChild.firstChild;
    var btnEditar = $(this)[0].parentElement.parentElement.firstChild.nextSibling.firstChild;
    var btnEliminar = $(this)[0].parentElement.parentElement.firstChild.nextSibling.nextSibling.firstChild;
    var divAccion = $(this)[0].parentElement.parentElement.parentElement;
    var cbTratamientoAnti = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild;
    var cbTratamientoColoracion = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild.firstChild;
    var btnTratamientoAnti = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.firstChild.firstChild;
    var btnTratamientoColoracion = divAccion.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.firstChild.nextSibling.firstChild.firstChild;
    
    btnTratamientoAnti.setAttribute("class", "btn btn-info");
    btnTratamientoColoracion.setAttribute("class", "btn btn-info");
    cbTratamientoAnti.removeAttribute("disabled"); 
    cbTratamientoColoracion.removeAttribute("disabled"); 

    if(cbTratamientoAnti.checked){
      btnTratamientoAnti.setAttribute("class", "btn btn-info active");
    } else {
      btnTratamientoAnti.setAttribute("class", "btn btn-info");
    }

    if(cbTratamientoColoracion.checked){
      btnTratamientoColoracion.setAttribute("class", "btn btn-info active");
    } else {
      btnTratamientoColoracion.setAttribute("class", "btn btn-info");
    }

    btnAceptar.removeAttribute("disabled"); 
    btnEditar.setAttribute("disabled", ""); 
    //btnEliminar.setAttribute("disabled", ""); 
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - EDITAR PRODUCTO///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - ELIMINAR PRODUCTO EN LISTA///////////////////////////////////////

  $(document).on('click', '.eliminarProductoCristal', function () {
    var info = $(this)[0].parentElement.parentElement.parentElement.parentElement;
    var precioProducto = $(info).find("td:eq(5)").text();
    var precioTotal = $('#precioTotal').text();
    var precioRestado = (parseFloat(precioTotal)-parseFloat(precioProducto));
    
    /////////////////DB///////////////
    let idproducto = $(info).find("td:eq(0)").text();
    let cantidad_producto = $(info).find("td:eq(3)").text();
    let precio_producto = $(info).find("td:eq(4)").text();
    $.ajax({
      url: 'php/eliminarDetalle.php',
      type: 'POST',
      data : { idproducto, cantidad_producto, precio_producto },
      success: function(response){
        console.log(response);  
       }
    })
    let cantidad = $(info).find("td:eq(3)").text();
    $.ajax({
      url: 'php/restaSumaInventario.php',
      type: 'POST',
      data : { cantidad, idproducto },
      success: function(response){
        console.log(response);  
      }
    })
    console.log(idproducto+" "+cantidad_producto+" "+precio_producto);
    ////////////////DB////////////////

    document.getElementById("precioTotal").innerHTML = ''+precioRestado+'.00';
    document.getElementById("precioIndicador").innerHTML = ''+precioRestado+'.00';

    /////////

    var calIVA = (parseFloat(precioRestado)*0.12);
    console.log(calIVA);

    document.getElementById("IVA").innerHTML = ''+calIVA+'.00';

    /////////

    var subPrecio = (parseFloat(precioRestado)-parseFloat(calIVA));
    document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';

    info.closest('tr').remove();

    $('#efectivo').val('');
    document.getElementById("efectivo").disabled = false;
    $('#debito').val('');
    document.getElementById("debito").disabled = false;
    $('#credito').val('');
    document.getElementById("credito").disabled = false;
    $('#transferencia').val('');
    document.getElementById("transferencia").disabled = false;

  });

  $(document).on('click', '.eliminarProducto', function () {
    var info = $(this)[0].parentElement.parentElement.parentElement;
    var precioProducto = $(info).find("td:eq(5)").text();

    /////////////////DB///////////////
    let idproducto = $(info).find("td:eq(0)").text();
    let cantidad_producto = $(info).find("td:eq(3)").text();
    let precio_producto = $(info).find("td:eq(4)").text();
    $.ajax({
      url: 'php/eliminarDetalle.php',
      type: 'POST',
      data : { idproducto, cantidad_producto, precio_producto },
      success: function(response){
        console.log(response);  
       }
    })
    let cantidad = $(info).find("td:eq(3)").text();
    $.ajax({
      url: 'php/restaSumaInventario.php',
      type: 'POST',
      data : { cantidad, idproducto },
      success: function(response){
        console.log(response);  
      }
    })
    console.log(idproducto+" "+cantidad_producto+" "+precio_producto);
    ////////////////DB////////////////
    
    var precioTotal = $('#precioTotal').text();
    var precioRestado = (parseFloat(precioTotal)-parseFloat(precioProducto));
    
    document.getElementById("precioTotal").innerHTML = ''+precioRestado+'.00';
    document.getElementById("precioIndicador").innerHTML = ''+precioRestado+'.00';

    /////////

    var calIVA = (parseFloat(precioRestado)*0.12);
    console.log(calIVA);

    document.getElementById("IVA").innerHTML = ''+calIVA+'.00';

    /////////

    var subPrecio = (parseFloat(precioRestado)-parseFloat(calIVA));
    document.getElementById("subPrecio").innerHTML = ''+subPrecio+'.00';

    info.closest('tr').remove();

    //////////////////////////

    $('#efectivo').val('');
    document.getElementById("efectivo").disabled = false;
    $('#debito').val('');
    document.getElementById("debito").disabled = false;
    $('#credito').val('');
    document.getElementById("credito").disabled = false;
    $('#transferencia').val('');
    document.getElementById("transferencia").disabled = false;



  });

  //////////////////////VALIDACIONES DE INFORMACIÓN - ELIMINAR PRODUCTO EN LISTA///////////////////////////////////////

  //////////////////////VALIDACIONES DE INFORMACIÓN - FACTURAR///////////////////////////////////////  

  /////////////////////VALIDACIONES BASICAS///////////////////////////////////////

  $(document).on('keyup', '#efectivo', function (e) {
    if(e.keyCode === 13){
      
      e.preventDefault();
      var indiceTable = document.getElementById("tableProducto").rows.length;
      var precioIndicador = parseInt($('#precioIndicador').text());
      var efectivo = parseInt($('#efectivo').val());

      //////////////////////////////////////////////////////////////////////////

      if((precioIndicador == 0 || precioIndicador == "") && indiceTable == 0){
        alert("Introduzca un producto primero");
        $('#efectivo').val('');
      } else {
        if((precioIndicador < efectivo) && indiceTable > 0){
          alert("El monto es mayor al precio de venta");
          $('#efectivo').val('');
        } else {
          if((precioIndicador >= efectivo) && indiceTable > 0){
            var total = parseInt(precioIndicador - efectivo);
            document.getElementById("precioIndicador").innerHTML = total+".00";
            document.getElementById("efectivo").disabled = true;
          }
        }
      }
    }
  })

  $(document).on('click', '#borrarEfectivo', function () {
    var info = $(this)[0].previousSibling.previousSibling;
    var reponer = $(info).val();
    var precioIndicador = parseInt($('#precioIndicador').text());
    var total = parseInt(precioIndicador)+parseInt(reponer);

    if(reponer == "" || parseInt(reponer) == 0){
      alert("Debe introducir un monto");
    } else {
      document.getElementById("precioIndicador").innerHTML = total+".00";
      $(info).val('');
      document.getElementById("efectivo").disabled = false;
    }
    
  });

  /////////////////////////

  $(document).on('keyup', '#debito', function (e) {
    if(e.keyCode === 13){
      
      e.preventDefault();
      var indiceTable = document.getElementById("tableProducto").rows.length;
      var precioIndicador = parseInt($('#precioIndicador').text());
      var debito = parseInt($('#debito').val());

      //////////////////////////////////////////////////////////////////////////

      if((precioIndicador == 0 || precioIndicador == "") && indiceTable == 0){
        alert("Introduzca un producto primero");
        $('#debito').val('');
      } else {
        if((precioIndicador < debito) && indiceTable > 0){
          alert("El monto es mayor al precio de venta");
          $('#debito').val('');
        } else {
          if((precioIndicador >= debito) && indiceTable > 0){
            var total = parseInt(precioIndicador - debito);
            document.getElementById("precioIndicador").innerHTML = total+".00";
            document.getElementById("debito").disabled = true;
          }
        }
      }
    }
  })

  $(document).on('click', '#borrarDebito', function () {
    var info = $(this)[0].previousSibling.previousSibling;
    var reponer = $(info).val();
    var precioIndicador = parseInt($('#precioIndicador').text());
    var total = parseInt(precioIndicador)+parseInt(reponer);

    if(reponer == "" || parseInt(reponer) == 0){
      alert("Debe introducir un monto");
    } else {
      document.getElementById("precioIndicador").innerHTML = total+".00";
      $(info).val('');
      document.getElementById("debito").disabled = false;
    }
    
  });

  /////////////////////////////////////////

  $(document).on('keyup', '#credito', function (e) {
    if(e.keyCode === 13){
      
      e.preventDefault();
      var indiceTable = document.getElementById("tableProducto").rows.length;
      var precioIndicador = parseInt($('#precioIndicador').text());
      var credito = parseInt($('#credito').val());

      //////////////////////////////////////////////////////////////////////////

      if((precioIndicador == 0 || precioIndicador == "") && indiceTable == 0){
        alert("Introduzca un producto primero");
        $('#credito').val('');
      } else {
        if((precioIndicador < credito) && indiceTable > 0){
          alert("El monto es mayor al precio de venta");
          $('#credito').val('');
        } else {
          if((precioIndicador >= credito) && indiceTable > 0){
            var total = parseInt(precioIndicador - credito);
            document.getElementById("precioIndicador").innerHTML = total+".00";
            document.getElementById("credito").disabled = true;
          }
        }
      }
    }
  })

  $(document).on('click', '#borrarCredito', function () {
    var info = $(this)[0].previousSibling.previousSibling;
    var reponer = $(info).val();
    var precioIndicador = parseInt($('#precioIndicador').text());
    var total = parseInt(precioIndicador)+parseInt(reponer);

    if(reponer == "" || parseInt(reponer) == 0){
      alert("Debe introducir un monto");
    } else {
      document.getElementById("precioIndicador").innerHTML = total+".00";
      $(info).val('');
      document.getElementById("credito").disabled = false;
    }
    
  });

  ///////////////////////////////

  $(document).on('keyup', '#transferencia', function (e) {
    if(e.keyCode === 13){
      
      e.preventDefault();
      var indiceTable = document.getElementById("tableProducto").rows.length;
      var precioIndicador = parseInt($('#precioIndicador').text());
      var transferencia = parseInt($('#transferencia').val());

      //////////////////////////////////////////////////////////////////////////

      if((precioIndicador == 0 || precioIndicador == "") && indiceTable == 0){
        alert("Introduzca un producto primero");
        $('#transferencia').val('');
      } else {
        if((precioIndicador < transferencia) && indiceTable > 0){
          alert("El monto es mayor al precio de venta");
          $('#transferencia').val('');
        } else {
          if((precioIndicador >= transferencia) && indiceTable > 0){
            var total = parseInt(precioIndicador - transferencia);
            document.getElementById("precioIndicador").innerHTML = total+".00";
            document.getElementById("transferencia").disabled = true;
          }
        }
      }
    }
  })

  $(document).on('click', '#borrarTransferencia', function () {
    var info = $(this)[0].previousSibling.previousSibling;
    var reponer = $(info).val();
    var precioIndicador = parseInt($('#precioIndicador').text());
    var total = parseInt(precioIndicador)+parseInt(reponer);

    if(reponer == "" || parseInt(reponer) == 0){
      alert("Debe introducir un monto");
    } else {
      document.getElementById("precioIndicador").innerHTML = total+".00";
      $(info).val('');
      document.getElementById("transferencia").disabled = false;
    }
    
  });
    
  ////////////////////////////////////////////////////////////////

  $('#efectivo').keypress(function(e){
      $('#efectivo').attr("maxlength", "11");
      $('#efectivo').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
  });

  $('#debito').keypress(function(e){
      $('#debito').attr("maxlength", "11");
      $('#debito').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
  });

  $('#credito').keypress(function(e){
      $('#credito').attr("maxlength", "11");
      $('#credito').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
  });

  $('#transferencia').keypress(function(e){
      $('#transferencia').attr("maxlength", "11");
      $('#transferencia').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
  });


  /////////////////////VALIDACIONES BASICAS////////////////////////////////////////


  $(document).on('click', '#btnFacturar', function(){
    var indiceTable = document.getElementById("tableProducto").rows.length;
    var precioIndicador = parseInt($('#precioIndicador').text());
    var precioTotal = parseInt($('#precioTotal').text());
    if($('#nombre_cliente').val() == "" || $('#apellido_cliente').val() == "" || $('#fecha_cliente').val() == ""
      || $('#direccion_cliente').val() == "" || ($('#telefono_cliente').val() == "" || $('#telefono_cliente').val().length < 11)
      || $('#email_cliente').val() == "" || indiceTable == 0 || ((precioIndicador == precioTotal) && indiceTable > 0) || 
      ((precioIndicador != 0) && indiceTable > 0)) {
      alert("Faltan datos");

      if($('#cedula_cliente').val() == ""){
        $('#cedula_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#cedula_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#nombre_cliente').val() == ""){
        $('#nombre_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#nombre_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#apellido_cliente').val() == ""){
        $('#apellido_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#apellido_cliente').attr("class", "input-width form-control form-control-sm"); 
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

      if($('#telefono_cliente').val() == "" || $('#telefono_cliente').val().length < 11){
        $('#telefono_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#telefono_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if($('#email_cliente').val() == ""){
        $('#email_cliente').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#email_cliente').attr("class", "input-width form-control form-control-sm"); 
      }

      if(indiceTable == 0){
        $('#codigo_producto').attr("class", "input-width form-control form-control-sm is-invalid"); 
      } else {
        $('#codigo_producto').attr("class", "input-width form-control form-control-sm"); 
      }

      if(((precioIndicador == precioTotal) && indiceTable > 0) || ((precioIndicador != 0) && indiceTable > 0)){
        alert("Seleccione formas de pago");
      } 
    } else {
      /////////////////DB///////////////

      if($("#efectivo").val() && $("#debito").val() && $("#credito").val() &&  $("#transferencia").val()){
            



            let suma = parseInt($("#efectivo").val())+parseInt($("#debito").val())+parseInt($("#credito").val())+parseInt($("#transferencia").val());
            let precio_total = parseInt($('#precioTotal').text());
            if(suma > precio_total){
              alert("El monto es mayor al precio total");
              $("#efectivo").val('');
              $("#debito").val('');
              $("#credito").val(''); 
              $("#transferencia").val('');
            } else {
              if(suma < precio_total){
                alert("El monto es menor al precio total");
                $("#efectivo").val('');
                $("#debito").val('');
                $("#credito").val(''); 
                $("#transferencia").val('');
              } else {
                if(suma == precio_total){
                  let pago_factura = 1;
                  let idcliente = $('#idcliente').text();
                  let cod_factura = $('#noFactura').text();
                  while(pago_factura <= 4){
                    $.ajax({
                      url: 'php/crearFactura.php',
                      type: 'POST',
                      data : { cod_factura, idcliente, pago_factura },
                      success: function(response){
                        console.log(response);  
                      }   
                    })
                    pago_factura++;
                  }
                }
              }
            }




        } else {
            if( ($("#efectivo").val() && $("#debito").val() && $("#credito").val())  ||  
                    ($("#transferencia").val() && $("#credito").val() && $("#debito").val()) ||
                        ($("#transferencia").val() && $("#efectivo").val() && $("#debito").val()) || 
                            ($("#transferencia").val() && $("#credito").val() && $("#efectivo").val())){


                            if($("#efectivo").val() && $("#debito").val() && $("#credito").val()){
                              let suma = parseInt($("#efectivo").val())+parseInt($("#debito").val())+parseInt($("#credito").val());
                              let precio_total = parseInt($('#precioTotal').text());
                              if(suma > precio_total){
                                alert("El monto es mayor al precio total");
                                $("#efectivo").val('');
                                $("#debito").val('');
                                $("#credito").val(''); 
                              } else {
                                if(suma < precio_total){
                                  alert("El monto es menor al precio total");
                                  $("#efectivo").val('');
                                  $("#debito").val('');
                                  $("#credito").val(''); 
                                } else {
                                  if(suma == precio_total){
                                    let pago_factura = 1;
                                    let idcliente = $('#idcliente').text();
                                    let cod_factura = $('#noFactura').text();
                                    while(pago_factura <= 3){
                                      $.ajax({
                                        url: 'php/crearFactura.php',
                                        type: 'POST',
                                        data : { cod_factura, idcliente, pago_factura },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_factura++;
                                    }
        
                                  }
                                }
                              }
                            }


                            if($("#transferencia").val() && $("#credito").val() && $("#debito").val()){
                              let suma = parseInt($("#transferencia").val())+parseInt($("#debito").val())+parseInt($("#credito").val());
                              let precio_total = parseInt($('#precioTotal').text());
                              if(suma > precio_total){
                                alert("El monto es mayor al precio total");
                                $("#transferencia").val('');
                                $("#credito").val('');
                                $("#debito").val(''); 
                              } else {
                                if(suma < precio_total){
                                  alert("El monto es menor al precio total");
                                  $("#transferencia").val('');
                                  $("#credito").val('');
                                  $("#debito").val(''); 
                                } else {
                                  if(suma == precio_total){
                                    let pago_factura = 4;
                                    let idcliente = $('#idcliente').text();
                                    let cod_factura = $('#noFactura').text();
                                    while(pago_factura >= 2){
                                      $.ajax({
                                        url: 'php/crearFactura.php',
                                        type: 'POST',
                                        data : { cod_factura, idcliente, pago_factura },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_factura--;
                                    }
        
                                  }
                                }
                              }
                            }



                            if($("#transferencia").val() && $("#efectivo").val() && $("#debito").val()){
                              let suma = parseInt($("#transferencia").val())+parseInt($("#efectivo").val())+parseInt($("#debito").val());
                              let precio_total = parseInt($('#precioTotal').text());
                              if(suma > precio_total){
                                alert("El monto es mayor al precio total");
                                $("#transferencia").val('');
                                $("#efectivo").val('');
                                $("#debito").val(''); 
                              } else {
                                if(suma < precio_total){
                                  alert("El monto es menor al precio total");
                                  $("#transferencia").val('');
                                  $("#efectivo").val('');
                                  $("#debito").val(''); 
                                } else {
                                  if(suma == precio_total){
                                    let pago_factura = 4;
                                    let idcliente = $('#idcliente').text();
                                    let cod_factura = $('#noFactura').text();

                                    if(pago_factura == 4){
                                      $.ajax({
                                        url: 'php/crearFactura.php',
                                        type: 'POST',
                                        data : { cod_factura, idcliente, pago_factura },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                    }

                                    pago_factura = 1;
                                    while(pago_factura <= 2){
                                      $.ajax({
                                        url: 'php/crearFactura.php',
                                        type: 'POST',
                                        data : { cod_factura, idcliente, pago_factura },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_factura++;
                                    }
                                  }
                                }
                              }
                            }
                            if($("#transferencia").val() && $("#credito").val() && $("#efectivo").val()){
                              let suma = parseInt($("#transferencia").val())+parseInt($("#efectivo").val())+parseInt($("#credito").val());
                              let precio_total = parseInt($('#precioTotal').text());
                              if(suma > precio_total){
                                alert("El monto es mayor al precio total");
                                $("#transferencia").val('');
                                $("#credito").val('');
                                $("#efectivo").val(''); 
                              } else {
                                if(suma < precio_total){
                                  alert("El monto es menor al precio total");
                                  $("#transferencia").val('');
                                  $("#credito").val('');
                                  $("#efectivo").val(''); 
                                } else {
                                  if(suma == precio_total){
                                    let pago_factura = 1;
                                    let idcliente = $('#idcliente').text();
                                    let cod_factura = $('#noFactura').text();

                                    if(pago_factura == 1){
                                      $.ajax({
                                        url: 'php/crearFactura.php',
                                        type: 'POST',
                                        data : { cod_factura, idcliente, pago_factura },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                    }

                                    pago_factura = 3;
                                    while(pago_factura <= 4){
                                      $.ajax({
                                        url: 'php/crearFactura.php',
                                        type: 'POST',
                                        data : { cod_factura, idcliente, pago_factura },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_factura++;
                                    }
                                  }
                                }
                              }
                            }                
            } else {
              if( ($("#efectivo").val() && $("#debito").val()) ||
                        ($("#credito").val() && $("#transferencia").val()) ||
                            ($("#efectivo").val() && $("#transferencia").val()) ||
                                ($("#efectivo").val() && $("#credito").val()) || 
                                    ($("#transferencia").val() && $("#debito").val()) ||
                                        ($("#credito").val() && $("#debito").val())){

                                        if($("#efectivo").val() && $("#debito").val()){
                                          let suma = parseInt($("#efectivo").val())+parseInt($("#debito").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(suma > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#efectivo").val('');
                                            $("#debito").val('');
                                          } else {
                                            if(suma < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#efectivo").val('');
                                              $("#debito").val('');
                                            } else {
                                              if(suma == precio_total){
                                                let pago_factura = 1;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                while(pago_factura <= 2){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                  pago_factura++;
                                                }
                                              }
                                            }
                                          }
                                        }



                                        if($("#credito").val() && $("#transferencia").val()){
                                          let suma = parseInt($("#credito").val())+parseInt($("#transferencia").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(suma > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#credito").val('');
                                            $("#transferencia").val('');
                                          } else {
                                            if(suma < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#credito").val('');
                                              $("#transferencia").val('');
                                            } else {
                                              if(suma == precio_total){
                                                let pago_factura = 3;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                while(pago_factura <= 4){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                  pago_factura++;
                                                }     
                                              }
                                            }
                                          }
                                        }



                                        if($("#efectivo").val() && $("#transferencia").val()){
                                          let suma = parseInt($("#efectivo").val())+parseInt($("#transferencia").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(suma > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#efectivo").val('');
                                            $("#transferencia").val('');
                                          } else {
                                            if(suma < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#efectivo").val('');
                                              $("#transferencia").val('');
                                            } else {
                                              if(suma == precio_total){
                                                let pago_factura = 1;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();

                                                if(pago_factura == 1){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }

                                                pago_factura = 4;
                                                if(pago_factura == 4){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }   
                                              }
                                            }
                                          }
                                        }


                                        if($("#efectivo").val() && $("#credito").val()){
                                          let suma = parseInt($("#efectivo").val())+parseInt($("#credito").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(suma > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#efectivo").val('');
                                            $("#credito").val('');
                                          } else {
                                            if(suma < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#efectivo").val('');
                                              $("#credito").val('');
                                            } else {
                                              if(suma == precio_total){
                                                let pago_factura = 1;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();

                                                if(pago_factura == 1){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }

                                                pago_factura = 3;
                                                if(pago_factura == 3){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }       
                                              }
                                            }
                                          }
                                        }
                                        if($("#transferencia").val() && $("#debito").val()){
                                          let suma = parseInt($("#transferencia").val())+parseInt($("#debito").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(suma > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#transferencia").val('');
                                            $("#debito").val('');
                                          } else {
                                            if(suma < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#transferencia").val('');
                                              $("#debito").val('');
                                            } else {
                                              if(suma == precio_total){
                                                let pago_factura = 2;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();

                                                if(pago_factura == 2){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }

                                                pago_factura = 4;
                                                if(pago_factura == 4){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }    
                                              }
                                            }
                                          }
                                        }

                                        if($("#credito").val() && $("#debito").val()){
                                          let suma = parseInt($("#credito").val())+parseInt($("#debito").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(suma > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#credito").val('');
                                            $("#debito").val('');
                                          } else {
                                            if(suma < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#credito").val('');
                                              $("#debito").val('');
                                            } else {
                                              if(suma == precio_total){
                                                let pago_factura = 2;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                while(pago_factura <= 3){
                                                  $.ajax({
                                                    url: 'php/crearFactura.php',
                                                    type: 'POST',
                                                    data : { cod_factura, idcliente, pago_factura },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                  pago_factura++;
                                                }      
                                              }
                                            }
                                          }
                                        }
                } else {
                  if( ($("#efectivo").val()) || 
                            ($("#debito").val()) || 
                                ($("#credito").val()) ||
                                    ($("#transferencia").val())){

                                        if($("#efectivo").val()){
                                          let efectivo = parseInt($("#efectivo").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(efectivo > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#efectivo").val('');
                                          } else {
                                            if(efectivo < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#efectivo").val('');
                                            } else {
                                              if(efectivo == precio_total){
                                                let pago_factura = 1;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                $.ajax({
                                                  url: 'php/crearFactura.php',
                                                  type: 'POST',
                                                  data : { cod_factura, idcliente, pago_factura },
                                                  success: function(response){
                                                    console.log(response);  
                                                  }   
                                                })
                                              }
                                            }
                                          }
                                        }

                                        if($("#debito").val()){
                                          let debito = parseInt($("#debito").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(debito > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#debito").val('');
                                          } else {
                                            if(debito < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#debito").val('');
                                            } else {
                                              if(debito == precio_total){
                                                let pago_factura = 2;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                  $.ajax({
                                                  url: 'php/crearFactura.php',
                                                  type: 'POST',
                                                  data : { cod_factura, idcliente, pago_factura },
                                                  success: function(response){
                                                    console.log(response);  
                                                  }   
                                                })     
                                              }
                                            }
                                          }
                                        }


                                        if($("#credito").val()){
                                          let credito = parseInt($("#credito").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(credito > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#credito").val('');
                                          } else {
                                            if(credito < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#credito").val('');
                                            } else {
                                              if(credito == precio_total){
                                                let pago_factura = 3;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                  $.ajax({
                                                  url: 'php/crearFactura.php',
                                                  type: 'POST',
                                                  data : { cod_factura, idcliente, pago_factura },
                                                  success: function(response){
                                                    console.log(response);  
                                                  }   
                                                })
                                              }
                                            }
                                          }
                                        }


                                        if($("#transferencia").val()){
                                          let transferencia = parseInt($("#transferencia").val());
                                          let precio_total = parseInt($('#precioTotal').text());
                                          if(transferencia > precio_total){
                                            alert("El monto es mayor al precio total");
                                            $("#transferencia").val('');
                                          } else {
                                            if(transferencia < precio_total){
                                              alert("El monto es menor al precio total");
                                              $("#transferencia").val('');
                                            } else {
                                              if(transferencia == precio_total){
                                                let pago_factura = 4;
                                                let idcliente = $('#idcliente').text();
                                                let cod_factura = $('#noFactura').text();
                                                  $.ajax({
                                                  url: 'php/crearFactura.php',
                                                  type: 'POST',
                                                  data : { cod_factura, idcliente, pago_factura },
                                                  success: function(response){
                                                    console.log(response);  
                                                  }   
                                                })
                                              }
                                            }
                                          }
                                        }
                    }
                }
            }
        }



      ///////////////RESPALDO//////////////////
      /*let idcliente = $('#idcliente').text();
      let cod_factura = $('#noFactura').text();
      $.ajax({
        url: 'php/crearFactura.php',
        type: 'POST',
        data : { cod_factura, idcliente },
        success: function(response){
          console.log(response);  
        }   
      })*/

      let idfactura = $('#idFactura').text();
      $.ajax({
        url: 'php/agregarDetalle.php',
        type: 'POST',
        data : { idfactura },
        success: function(response){
          console.log(response); 
        }   
      })

      let idfactura2 = $('#idFactura').text();
      if(parseInt($('#esf_oi').val()) != 0 || parseInt($('#cil_oi').val()) != 0|| parseInt($('#eje_oi').val()) != 0
        || parseInt($('#esf_od').val()) != 0 || parseInt($('#cil_od').val()) != 0 || parseInt($('#eje_od').val()) != 0){
          $.ajax({
          url: 'php/registrarFormulaTratamiento.php',
          type: 'POST',
          data : { idfactura2 },
          success: function(response){
            console.log(response);
          }   
        })
      }
      
      ///////////////////RESPALDO///////////////

      ////////////////DB//////////////// 
      
      alert("Factura guardada");
      location.reload();
    }
    
  })

  //////////////////////VALIDACIONES DE INFORMACIÓN - FACTURAR///////////////////////////////////////
});