var i=0;

function cuenta()
	{
		i=i+1; //suma uno
		postMessage(i); //función implícita en los webworkers // manda mensaje
		setTimeout("cuenta()",500); //ejecuta cuenta y luego pasa medio segundo y vuelve a ejecutar cuenta y así //espra medio segundo y otra vez
	}

cuenta();