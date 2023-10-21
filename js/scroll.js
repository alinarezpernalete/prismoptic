$(document).ready(function() {
 	console.log("Scroll");

 
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 1);
		
		$('.inside').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
 
	 
});