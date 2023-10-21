$(document).ready(function() {
	console.log("JQuery is working");
	
	var nombre = document.getElementById("nombre_usuario");
	var contrasena = document.getElementById("contrasena_usuario");

	$(document).on('click', '.btnEntrar', function(){
		var nombre_usuario = $('#nombre_usuario').val();
	    var contrasena_usuario = $('#contrasena_usuario').val();
		
		if(nombre_usuario == "" || contrasena_usuario == ""){
			//var toastHTML = '<span>Datos inválidos</span>';
  			//M.toast({html: toastHTML, classes:'alert alert-dismissible alert-danger mensaje-invalido'});
			$('#invalido').toast('show');
			$('#nombre_usuario').focus();
		} else {
            $.ajax({ 
                url : 'php/iniciarSesion.php',
                type : 'POST',
                data : { nombre_usuario, contrasena_usuario },
                success : function(response){
                	console.log(response);
                	if (response == 0){
                		alert("Error en la base de datos");
                	}
                	if (response == 1){
                		$('#invalido').toast('show');
						$('#nombre_usuario').focus();
                	}
                	if (response != 0 && response != 1) {
                		window.location.href = "home.html";
                	}
                }
            });
		}
	})

	nombre.addEventListener("keyup", function(event) {
  		if (event.keyCode === 13) {
  			event.preventDefault();
			document.getElementById("btnEntrar").click();
  		}
	}); 

	contrasena.addEventListener("keyup", function(event) {
  		if (event.keyCode === 13) {
  			event.preventDefault();
			document.getElementById("btnEntrar").click();
  		}
	});

});

