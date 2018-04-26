var Marvel=function()
	{
		var Buscar=function()
		{
			var personaje=$("#txtPersonaje").val();
			var url= "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
			var cantidadComics=0;
			var comics= "";	
			var cantidadhistorias="";	
			var historias="";
			var detalleEventos="";
			var eventos="";

			url = url + personaje; //la misma url gigante y ya le pedo el perwsonaje
			//para poner el ajax correctamnete $.ajax({})
			$.ajax({
				url: url, 
				dataType: "json", 
				success:function(response){
					if(response.code==200)
					{	//ok(todo está bien)
						$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension); //le estamos cambiando el atributo de src
						//alert(response.data.results[0].name); es cuando sale un mensaje
						$("#nombre").html(response.data.results[0].name);

						cantidadComics=response.data.results[0].comics.returned;//IMPRIMIR LOS COMICS
						 for(var i=0; i<cantidadComics;i++)
							 {
							 	comics+=response.data.results[0].comics.items[i].name+"<br>";
							 }
						 $("#comics").html(comics);


						cantidadhistorias=response.data.results[0].stories.returned;//IMPRIMIR LOS COMICS
						 for(var j=0; j<cantidadhistorias;j++)
							 {
							 	historias+=response.data.results[0].stories.items[j].name+"<br>";
							 }
						 $("#historias").html(historias);


						 //------------------EVENTOS
						 detalleEventos=response.data.results[0].events.returned;//IMPRIMIR LOS COMICS
						 for(var v=0; v<detalleEventos;v++)
							 {
							 	eventos+=response.data.results[0].events.items[v].name+"<br>";
							 }
						 $("#eventos").html(eventos);

						 

					}

				}
			})


		
		}
		var teclaPersonaje=function(tecla){
				//combinacion de 13+10
				//retorno de carro y avance de linea
				if(tecla.which==13)//enter
				{
					Buscar();
				}
			}
		//la accion la va a activar el boton
		$("#btnBuscar").on("click", Buscar);
		$("#txtPersonaje").on("keypress",teclaPersonaje)

	}
//aprenderse de memoria
$(document).ready(Marvel);