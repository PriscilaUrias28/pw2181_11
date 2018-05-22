<?php

	function conecta(){
		//SERVIDOR, USUARIO, CONTRASEÑA, BASE DE DATOS
		$con=mysqli_connect("127.0.0.1","root","", "pw218111");
		return $con;
	}

?>