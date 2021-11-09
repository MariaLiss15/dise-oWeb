var inicio = true;

$(document).ready(function() {


	$("#boton").click(function(){
		if(inicio){
			$("#Cuadrado").css({"background-color":"#FF622C", "border-color":"#2980b9"});
			inicio = false;
		}
		else{
			$("#Cuadrado").css({"background-color":"#2980b9", "border-color":"#FF622C"});
			inicio = true;
		}
	});
});