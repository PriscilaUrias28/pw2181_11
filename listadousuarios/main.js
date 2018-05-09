const {app, BrowserWindow} = require('electron')//cosntante de electron
const path = require('path')
const url = require('url')

let pantallaPrincipal; //onstante que puedo dejar vac[ia]


function muestraPantallaPrincipal(){
	pantallaPrincipal=new BrowserWindow({width:320, height:425});//ancho y alto d e la ventana
	pantallaPrincipal.loadURL(url.format({ //pagina que se va a cargar dentro del proyecto e electro
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true

	})) 
	//pantallaPrincipal.webContents.openDevTools();
	pantallaPrincipal.show();
}
app.on('ready', muestraPantallaPrincipal)