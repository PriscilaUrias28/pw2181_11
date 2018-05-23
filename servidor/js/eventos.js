var inicioApp = function() //activar todos los eventos que se ejecuten en el HTML //vamos a hacer que se conecte al php para ver si la contras;a y elusaurio son orrrectos
{

var Aceptar=function()
{
	event.preventDefault();
	var usuario=$("#txtUsuario").val(); //aqui esta extrayendo el usaurio y lacontra
	var clave =$("#txtClave").val();
	var parametros="opc=validaentrada"+
					"&usuario="+usuario+
					"&clave="+clave+
					"&idopcional="+Math.random();
					//alert(parametros);
$.ajax({
	cache:false,
	type: "POST",
	dataType: "json",
	url: "php/validaentrada.php",
	data: parametros,
	success: function(response)
	{
		if (response.respuesta ==true) {
			//alert("Bienvenido")
			$("#secInicio").hide("slow");
		}else
		{
			alert("Usuario o Clave Incorrecta(s)")
		}
	},
	error: function(xhr, ajaxOptions, trhownError)
	{

	}
});
}
$("#btnAceptar").on("click", Aceptar); //le activamos un al btn aceptar

} 

$(document).ready(inicioApp);