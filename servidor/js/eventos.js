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
			$("#frmUsuarios").hide("slow");
			//posicipna el cursor en el cuadro de texop
			$("txtNombreUsuario").focus();
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
var buscaUsuario=function()
{
	var usuario=$("txtNombreUsuario").val();
	var parametros= "opc=buscaUsuario"+"&usuario="+usuario+"&aleatorio="+Math.random();
	
	if (usuario != "") 
	{
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/buscausuario.php",
			data: parametros,
			success: function(response)
			{
				if (response.respuesta == true) 
				{
					$("#txtNombre").val(response.nombre);
					$("#txtClaveUsuario").val(response.clave);
				}
				else
				{
					$("#txtNombre").focus();
				}
			},
			error: function(xhr, ajaxOptions, trhownError)
			{
			}
		});
	}
}
	var teclaNombreUsuario = function(tecla)
	{
		if (tecla.wich ==13) 
		{
			buscaUsuario();
		}
	}

$("#btnAceptar").on("click", Aceptar); //le activamos un al btn aceptar
$("txtNombreUsuario").on("keypress", teclaNombreUsuario); 
$("#frmUsuarios").hide();

} 
$(document).ready(inicioApp);