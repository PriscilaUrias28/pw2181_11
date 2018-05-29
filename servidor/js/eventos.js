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
	success: function(response){
		if (response.respuesta ==true) {
			//alert("Bienvenido")
			$("#secInicio").hide("slow");
			$("#frmUsuarios").show("slow");
			//posicipna el cursor en el cuadro de texop
			$("txtNombreUsuario").focus();
		}else
		{
			alert("Usuario o Clave Incorrecta(s)")
		}
	},
	error: function(xhr, ajaxOptions, trhownError){

	
	}
});
}
var buscaUsuario=function()
{
	var usuario=$("#txtNombreUsuario").val();
	var parametros= "opc=buscaUsuario"+
					"&usuario="+usuario+
					"&aleatorio="+Math.random();
	
	if (usuario != "") 
	{
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/buscausuario.php",
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
					$("#txtNombre").val("");
					$("#txtClaveUsuario").val("");
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
		if (tecla.which ==13) 
		{
			buscaUsuario();
		}
	}

	var Guardar = function()
	{
		var usuario=$("#txtNombreUsuario").val();
		var nombre=$("#txtNombre").val();
		var clave=$("#txtClaveUsuario").val();
		var parametros= "opc=guardarusuario"+
						"&usuario="+usuario+
						"&nombre="+nombre+
						"&clave="+clave+
						"&aleatorio="+Math.random();

		if(usuario!="" && nombre!="" && clave!="")
		{
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/guardausuarios.php",
			data: parametros,
			success: function(response)
			{
				if (response.respuesta == true)
				{
					alert("Cambios guardados con exito");
					$("#frmUsuarios>input").val("");
					$("#txtNombreUsuario").focus();
				}
				else
				{
					alert("Ocurrió un error, intente más tarde");
				}				
			},
			error: function(xhr, ajaxOptions, trhownError)
			{

			}
		});

		}else
		{
			alert("Llene todos los campos");
		}
	}
	var Borrar= function(){
		var usuario=$("#txtNombreUsuario").val();
		var pregunta= prompt("Seguro que desea borrar a" +usuario+ "? (si/no)", "No");
		var parametros= "opc=borrarusuario"+
						"&usuario="+usuario+
						"&aleatorio="+Math.random();

		if (pregunta != null && pregunta=="si") {
			//AQU[I VA EL AJAX]
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/borrarusuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta==true){
					alert("Usuario Borrado");
					$("#frmUsuarios>input").val("");
					$("#txtNombreUsuario").focus();

				}else{
					alert("Ocurrió un error, intenté más tarde")
				}
			},
			error: function(xhr, ajaxOptions, trhownError){
			}
		});
	}
}

$("#btnAceptar").on("click", Aceptar); //le activamos un al btn aceptar
$("#txtNombreUsuario").on("keypress", teclaNombreUsuario); 
$("#frmUsuarios").hide();
$("#btnGuardar").on("click",Guardar);
$("#btnBorrar").on("click",Borrar);

} 
$(document).ready(inicioApp);