<?php  
//inlude()//mete a fuerza un archivo, hace que el codigo del archivo sea m[as grande, pero es mas rapido
//require()//hace el codigo amas chico, pero es mas lento.

//por get porque esta en la URL,
$parametro1 = $_GET["parametro1"];
$variable=0;
$otra="";
$otradeotra=0.0;
	for ($i=0; $i <= 10 ; $i++)
	{ 
		//echo "string"; //est[a trabajndo en modo doble, es para ponernos una pista-SALIR CORRIENDO NO USAR
		// print para impresiones ntaurales usar imprimir, para que solo se use consola.SI USAAR

		//PUEDO INCRUSTAR PHP DENTRO DE HTML

		print("Texto " .$i. "<br>"); 
	}
?> 

<html>
<head>
	
	<title></title>
</head>
<body>
	Hola mundo <?php print($parametro1); ?>
</body>
</html>