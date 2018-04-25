var Marvel=function()
	{
		var Buscar=function()
		{
			var personaje=$("#txtPersonaje").val();
			var url= "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
			var cantidadComics=0;
			var comics= "";		
			url = url + personaje; //la misma url gigante y ya le pedo el perwsonaje
			//para poner el ajax correctamnete $.ajax({})
			$.ajax({
				url: url, 
				dataType: "json", 
				success:function(response){
					if(response.code==200)
					{	//ok(todo está bien)
						$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension); //le estamos cambiando el atributo de src
					}

				}
			})
		
		}
		//la accion la va a activar el boton
		$("#btnBuscar").on("click", Buscar);

	}
//aprenderse de memoria
$(document).ready(Marvel);