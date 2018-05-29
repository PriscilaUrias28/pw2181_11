<?php
include 'conexiones.php';
function borrarusuarios()
{
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	
	//Conectarnos al servidor de BD.
	$con = conecta();
	//$consulta = "select usuario from usuarios where usuario= '".$usuario."' limit 1";
	$consulta = sprintf("delete from usuarios where usuario =%s limit 1",$usuario);
	
	if(mysqli_affected_rows($con)>0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	//var_dump($salidaJSON);
	print json_encode($salidaJSON);
}
$opc = $_POST["opc"];
switch ($opc) {
	case 'borrarusuario':
		borrarusuarios();
		break;
	
	default:
		# code...
		break;
}
?>