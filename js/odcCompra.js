$(document).ready(function() {
	console.log("JQuery is working");
    
    listarProveedor();

    noODC();

  //////////NO COMPRA/////////////
  function noODC(){
    $.ajax({
      url: 'php/noODC.php',
      type: 'GET',
        success: function(response){
          datos = JSON.parse(response); 
          
          var noODC = datos[0].cod_compra;
          var idCompra = parseInt(datos[0].idcompra)+1;
          var substract = parseInt(noODC.substring(4,7))+1;;

          document.getElementById("noODC").innerHTML = "OC00"+substract;
          document.getElementById("idCompra").innerHTML = idCompra;
        }
    })
  }
  //////////NO COMPRA/////////////

    function listarProveedor(){
        $.ajax({
          url: 'php/listarProveedor.php',
          type: 'GET',
            success: function(response){
                //console.log(response);
                datos = JSON.parse(response); 

                let plantilla = '';
                let id = 1;
                datos.forEach(resultado => {
                    plantilla += `
                    <option value="${id}">${resultado.nombre_proveedor}</option>`
                    id++;
                });
                $('#cmboxProveedor').html(plantilla);
                $('#cmboxProveedor').prepend('<option selected="">Seleccione proveedor</option>');
            }
        })
    }

    $('select#cmboxProveedor').on('change',function(){
        var value = parseInt($(this).val())-1;
        if($("#cmboxProveedor option:selected").text() == "Seleccione proveedor"){
            alert("Debe seleccionar un proveedor");
            $('#identificacion_proveedor').val("");
            $('#direccion_proveedor').val("");
            $('#email_proveedor').val("");
            $('#telefono_proveedor').val("");
        } else {
            $.ajax({
              url: 'php/listarProveedor.php',
              type: 'GET',
                success: function(response){
                    //console.log(response);
                    datos = JSON.parse(response); 
                    var identificacion_proveedor = datos[value].identificacion_proveedor;
                    var direccion_proveedor = datos[value].direccion_proveedor;
                    var email_proveedor = datos[value].email_proveedor;
                    var telefono_proveedor = datos[value].telefono_proveedor;
                    $('#identificacion_proveedor').val(identificacion_proveedor);
                    $('#direccion_proveedor').val(direccion_proveedor);
                    $('#email_proveedor').val(email_proveedor);
                    $('#telefono_proveedor').val(telefono_proveedor);
                    $('#identificacion_proveedor').attr("class", "form-control form-control-sm");
                    $('#direccion_proveedor').attr("class", "form-control form-control-sm");
                    $('#email_proveedor').attr("class", "form-control form-control-sm");
                    $('#telefono_proveedor').attr("class", "form-control form-control-sm");
                }
            })
        }
    });
    
    $('#nombre_encargado').keypress(function(e){
      $('#nombre_encargado').attr("maxlength", "15");
      $('#nombre_encargado').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    $('#apellido_encargado').keypress(function(e){
      $('#apellido_encargado').attr("maxlength", "15");
      $('#apellido_encargado').attr("class", "input-width form-control form-control-sm");
       var key = e.keyCode || e.which;
       var tecla = String.fromCharCode(key).toLowerCase();
       var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";

       if(letras.indexOf(tecla) == -1){
            return false;
        }
    });

    /////////////////////////////////////REGISTRAR PROVEEDOR/////////////////////////////////////

    $(document).on('click', '#btnRegistrarInfoProveedor', function(){
      if($('#identificacion_proveedor').val() == "" || $('#direccion_proveedor').val() == "" || 
          $('#email_proveedor').val() == "" || $('#telefono_proveedor').val() == "" || 
          $('#nombre_encargado').val() == "" || $('#apellido_encargado').val() == "" || $('#nombre_encargado').val().length < 3 ||
          $('#apellido_encargado').val().length < 3){
        alert("Ingrese los datos del proveedor");

        if($('#identificacion_proveedor').val() == ""){
          $('#identificacion_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#identificacion_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#direccion_proveedor').val() == ""){
          $('#direccion_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#direccion_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#email_proveedor').val() == ""){
          $('#email_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#email_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#telefono_proveedor').val() == ""){
          $('#telefono_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#telefono_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#nombre_encargado').val() == "" || $('#nombre_encargado').val().length < 3 || 
          $('#apellido_encargado').val() == "" || $('#apellido_encargado').val().length < 3){
          $('#nombre_encargado').attr("class", "input-width form-control form-control-sm is-invalid"); 
          $('#apellido_encargado').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#nombre_encargado').attr("class", "input-width form-control form-control-sm"); 
          $('#apellido_encargado').attr("class", "input-width form-control form-control-sm"); 
          document.getElementById("apellido_encargado").disabled = true;
          document.getElementById("nombre_encargado").disabled = true;
          document.getElementById("btnRegistrarInfoProveedor").disabled = true;
        }

       /* if($('#apellido_encargado').val() == "" || $('#apellido_encargado').val().length < 3){
          $('#apellido_encargado').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#apellido_encargado').attr("class", "input-width form-control form-control-sm"); 
          document.getElementById("apellido_encargado").disabled = true;
          document.getElementById("btnRegistrarInfoProveedor").disabled = true;
        }*/

      } else {
        document.getElementById("cmboxProveedor").disabled = true;
        document.getElementById("nombre_encargado").disabled = true;
        document.getElementById("apellido_encargado").disabled = true;
        $('#nombre_encargado').attr("class", "input-width form-control form-control-sm"); 
        $('#apellido_encargado').attr("class", "input-width form-control form-control-sm"); 
        document.getElementById("btnRegistrarInfoProveedor").disabled = true;

      }
    })

    var apellido_encargado = document.getElementById("apellido_encargado");
    apellido_encargado.addEventListener("keyup", function(event) {
        if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("btnRegistrarInfoProveedor").click();
      }
    })

    /////////////////////////////////////////////////////////////////////////////////////////////

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

    /////////////////////////////////////////////////////////////////////////////////////////////

    $('#codigo_producto').keypress(function(e){
    if(!$('#identificacion_proveedor').val() || !$('#direccion_proveedor').val() || !$('#email_proveedor').val() || 
        !$('#telefono_proveedor').val()){
      $('#codigo_producto').val('');
      alert("Seleccione un proveedor");
      $('#cmboxProveedor').focus();
      document.getElementById("cantidad_producto").disabled = true;
      document.getElementById("btnListar").disabled = true;
      document.getElementById("descripcion_producto").innerHTML = "-";
      document.getElementById("existencia_producto").innerHTML = "-";
      $('#cantidad_producto').val('');
      document.getElementById("precio_producto").innerHTML = "0.00";
      document.getElementById("precioTotal_producto").innerHTML = "0.00";
    } else {

        if(!$('#nombre_encargado').val() || !$('#apellido_encargado').val()){
            $('#codigo_producto').val('');
            alert("Especifique encargado");
            $('#nombre_encargado').focus();
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
    
    if(parseInt($('#cantidad_producto').val()) > 100){
      $('#cantidad_producto').attr("class", "form-control form-control-sm is-invalid");
      document.getElementById("precioTotal_producto").innerHTML = '0.00';
      document.getElementById("invalido2").innerHTML = "La cantidad se sobrepasa";
      $('#invalido2').toast('show');
    } else {
      
      if($('#cantidad_producto').val() == ""){
        document.getElementById("precioTotal_producto").innerHTML = '0.00';
      } else {
        var precioTotal = (parseFloat(document.getElementById("precio_producto").innerHTML)*parseFloat($('#cantidad_producto').val()));
        document.getElementById("precioTotal_producto").innerHTML = ''+precioTotal+'.00';
      }

    }

  })

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      
      if(parseInt($('#cantidad_producto').val()) > 100){
        document.getElementById("invalido2").innerHTML = "La cantidad se sobrepasa";
        $('#invalido2').toast('show');

      } else {
            /////////////////DB///////////////
            let idproducto = $(info).find("td:eq(0)").text();
            let cantidad_producto = $('#cantidad_producto').val();
            let precio_producto = $(info).find("td:eq(5)").text();
            $.ajax({
              url: 'php/listarProductoODC.php',
              type: 'POST',
              data : { idproducto, cantidad_producto, precio_producto },
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
            '<td>'+
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
  })

  //////////////////////////////////////////////////////////////////////////////////////////

  $(document).on('click', '.eliminarProducto', function () {
    var info = $(this)[0].parentElement.parentElement.parentElement;
    var precioProducto = $(info).find("td:eq(5)").text();

    /////////////////DB///////////////
    let idproducto = $(info).find("td:eq(0)").text();
    let cantidad_producto = $(info).find("td:eq(3)").text();
    let precio_producto = $(info).find("td:eq(4)").text();
    $.ajax({
      url: 'php/eliminarDetalleODC.php',
      type: 'POST',
      data : { idproducto, cantidad_producto, precio_producto },
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

    ////////////////

    $('#efectivo').val('');
    document.getElementById("efectivo").disabled = false;
    $('#debito').val('');
    document.getElementById("debito").disabled = false;
    $('#credito').val('');
    document.getElementById("credito").disabled = false;
    $('#transferencia').val('');
    document.getElementById("transferencia").disabled = false;

  });

  ////////////////////////////////////////////////////////////////////////

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

  ///////////////////////////////////////////////////////

  $('#tiempoEntrega').keypress(function(e){
      $('#tiempoEntrega').attr("maxlength", "2");
      $('#tiempoEntrega').attr("class", "input-width form-control form-control-sm");
        var key = e.keyCode || e.which;
        var tecla = String.fromCharCode(key).toLowerCase();

        var numeros = "0123456789";

        if(numeros.indexOf(tecla) == -1){
            return false;
        }
    });

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

    ////////////////////////////////////////////////////////////////////////////////////

    $(document).on('click', '#btnGenerarOC', function(){
    var indiceTable = document.getElementById("tableProducto").rows.length;
    var precioIndicador = parseInt($('#precioIndicador').text());
    var precioTotal = parseInt($('#precioTotal').text());
    if($('#identificacion_proveedor').val() == "" || $('#direccion_proveedor').val() == "" || 
          $('#email_proveedor').val() == "" || $('#telefono_proveedor').val() == "" || 
          $('#nombre_encargado').val() == "" || $('#apellido_encargado').val() == "" || $('#nombre_encargado').val().length < 3 ||
          $('#apellido_encargado').val().length < 3 || indiceTable == 0 || $('#tiempoEntrega').val() == "" || 
          $('#tiempoEntrega').val().length > 99 || ((precioIndicador == precioTotal) && indiceTable > 0) || 
          ((precioIndicador != 0) && indiceTable > 0)) {
      alert("Verifique datos");

      if($('#identificacion_proveedor').val() == ""){
          $('#identificacion_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#identificacion_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#direccion_proveedor').val() == ""){
          $('#direccion_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#direccion_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#email_proveedor').val() == ""){
          $('#email_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#email_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#telefono_proveedor').val() == ""){
          $('#telefono_proveedor').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#telefono_proveedor').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#nombre_encargado').val() == "" || $('#nombre_encargado').val().length < 3){
          $('#nombre_encargado').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#nombre_encargado').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#apellido_encargado').val() == "" || $('#apellido_encargado').val().length < 3){
          $('#apellido_encargado').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#apellido_encargado').attr("class", "input-width form-control form-control-sm"); 
        }

        if($('#tiempoEntrega').val() == "" || $('#tiempoEntrega').val().length > 99){
          $('#tiempoEntrega').attr("class", "input-width form-control form-control-sm is-invalid"); 
        } else {
          $('#tiempoEntrega').attr("class", "input-width form-control form-control-sm"); 
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

      var cod_compra = $('#noODC').text();
      var cmboxProveedor = $('#cmboxProveedor').val();
      var encargado_compra = $("#nombre_encargado").val() + " " + $("#apellido_encargado").val();
      
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
                  let pago_compra = 1;
                  while(pago_compra <= 4){
                    $.ajax({
                      url: 'php/crearODC.php',
                      type: 'POST',
                      data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                      success: function(response){
                        console.log(response);  
                      }   
                    })
                    pago_compra++;
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
                                    let pago_compra = 1;
                                    while(pago_compra <= 3){
                                      $.ajax({
                                        url: 'php/crearODC.php',
                                        type: 'POST',
                                        data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_compra++;
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
                                    let pago_compra = 4;
                                    while(pago_compra >= 2){
                                      $.ajax({
                                        url: 'php/crearODC.php',
                                        type: 'POST',
                                        data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_compra--;
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
                                    let pago_compra = 4;

                                    if(pago_compra == 4){
                                      $.ajax({
                                        url: 'php/crearODC.php',
                                        type: 'POST',
                                        data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                    }

                                    pago_compra = 1;
                                    while(pago_compra <= 2){
                                      $.ajax({
                                        url: 'php/crearODC.php',
                                        type: 'POST',
                                        data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_compra++;
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
                                    let pago_compra = 1;

                                    if(pago_compra == 1){
                                      $.ajax({
                                        url: 'php/crearODC.php',
                                        type: 'POST',
                                        data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                    }

                                    pago_compra = 3;
                                    while(pago_compra <= 4){
                                      $.ajax({
                                        url: 'php/crearODC.php',
                                        type: 'POST',
                                        data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                        success: function(response){
                                          console.log(response);  
                                        }   
                                      })
                                      pago_compra++;
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
                                                let pago_compra = 1;
                                                while(pago_compra <= 2){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                  pago_compra++;
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
                                                let pago_compra = 3;
                                                while(pago_compra <= 4){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                  pago_compra++;
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
                                                let pago_compra = 1;

                                                if(pago_compra == 1){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }

                                                pago_compra = 4;
                                                if(pago_compra == 4){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
                                                let pago_compra = 1;

                                                if(pago_compra == 1){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }

                                                pago_compra = 3;
                                                if(pago_compra == 3){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
                                                let pago_compra = 2;

                                                if(pago_compra == 2){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                }

                                                pago_compra = 4;
                                                if(pago_compra == 4){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
                                                let pago_compra = 2;
                                                while(pago_compra <= 3){
                                                  $.ajax({
                                                    url: 'php/crearODC.php',
                                                    type: 'POST',
                                                    data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
                                                    success: function(response){
                                                      console.log(response);  
                                                    }   
                                                  })
                                                  pago_compra++;
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
                                                let pago_compra = 1;
                                                $.ajax({
                                                  url: 'php/crearODC.php',
                                                  type: 'POST',
                                                  data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
                                                let pago_compra = 2;
                                                  $.ajax({
                                                  url: 'php/crearODC.php',
                                                  type: 'POST',
                                                  data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
                                                let pago_compra = 3;
                                                  $.ajax({
                                                  url: 'php/crearODC.php',
                                                  type: 'POST',
                                                  data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
                                                let pago_compra = 4;
                                                  $.ajax({
                                                  url: 'php/crearODC.php',
                                                  type: 'POST',
                                                  data : { cod_compra, cmboxProveedor, pago_compra, encargado_compra },
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
      /*let cmboxProveedor = $('#cmboxProveedor').text();
      let cod_compra = $('#noODC').text();
      $.ajax({
        url: 'php/crearODC.php',
        type: 'POST',
        data : { cod_compra, cmboxProveedor },
        success: function(response){
          console.log(response);  
        }   
      })*/

      console.log($('#idCompra').text());
      let idCompra = $('#idCompra').text();
      $.ajax({
        url: 'php/agregarDetalleODC.php',
        type: 'POST',
        data : { idCompra },
        success: function(response){
          console.log(response);  
        }   
      })
      ///////////////////RESPALDO///////////////

      ////////////////DB//////////////// 
      alert("Orden de compra guardada");
      location.reload();
    }
    
  })

});