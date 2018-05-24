<?php
include 'conexiones.php';
function buscausuario(){
$respuesta=false;
	//CONECTARNOS A LA BASE DE DATOS, AL SERVIDOR DE BASE DE DATOS
	//PODEMOS PONER LA CONECI[ON, PERO SE VA A ESTAR USANDO PARA TODOS POR ESO SE HACE UN ARCHIVO APARTE
$usuario = $_POST["usuario"];


	$con=conecta();
	$consulta= "select * from usuarios where usuario= '".$usuario."' limit 1";
	$resConsulta=mysqli_query($con,$consulta);
	$nombre="";
	$clave="";
	if (mysqli_num_rows($resConsulta) > 0) {
		$respuesta = true;
		while($regConsulta = mysqli_fetch_array($resConsulta))
		{
			$nombre = $regConsulta["nombre"];
			$clave = $regConsulta["clave"];

		}
	}

	//VA HACER ALGO RARO, ES LO ANTERIOR A ESTE COMENTARIO, lo de las comillas
	//DECIRLE QUE PARE EN LA PRIEMRA OCURRENA
	$salidaJSON = array('respuesta' => $respuesta,
						'nombre' => $nombre,
						'clave' => $clave); //le podemos poner nombre, llave valor

	print json_encode($salidaJSON);//CONVERTIRLO A JSON

}

$opc = $_POST["opc"];

switch ($opc) {
	case 'buscaUsuario':
		buscausuario();
		break;
	
	default:
		# code...
		break;
}
?>