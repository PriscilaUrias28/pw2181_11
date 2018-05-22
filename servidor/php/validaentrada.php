<?php
include 'conexiones.php';
function valida(){
$respuesta=false;
	//CONECTARNOS A LA BASE DE DATOS, AL SERVIDOR DE BASE DE DATOS
	//PODEMOS PONER LA CONECI[ON, PERO SE VA A ESTAR USANDO PARA TODOS POR ESO SE HACE UN ARCHIVO APARTE
$usuario = $_POST["usuario"];
$clave = md5$_POST["clave"];

	$con=conecta();
	$consulta= "select*from usuarios where usuario= '".$usuario."' and clave='".$clave "' limit 1";
	$resConsulta=mysqli_query($con,$consulta);

	if (mysqli_num_rows($resConsulta)>0) {
		$respuesta=true;
	}

	//VA HACER ALGO RARO, ES LO ANTERIOR A ESTE COMENTARIO, lo de las comillas
	//DECIRLE QUE PARE EN LA PRIEMRA OCURRENA
	$salidaJSPON = array('respuesta' => $respuesta ); //le podemos poner nombre, llave valor

	print json_encode($salidaJSON);//CONVERTIRLO A JSON

}

$opc = $_POST["opc"];

switch ($opc) {
	case 'validaentrada':
		valida();
		break;
	
	default:
		# code...
		break;
}
?>