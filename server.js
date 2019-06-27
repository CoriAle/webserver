const express = require('express')
const app = express();
 //Middleware un callback que se va a ejecutar siempre que hAYA UNA peticion
 //
 //
 var hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

 app.use(express.static(__dirname + '/public'));
 //Carpeta publica accesible a culquier prsona
 //__dirname => path al proyecto
hbs.registerPartials(__dirname + '/views/parciales' );
//Parciales
//Usar handlebar como engine
app.set('view engine', 'hbs');


app.get('/',  (req, res)=> {

	res.render('home', {
		nombre: "corina",
	}); //Render delhome
  	/*let salida = {
		nombre: "Corina",
		edad: 23,
		url: req.url
	}
	res.send(salida);
  //res.send('Hola Mundo')*/
});

app.get('/about',  (req, res)=> {

	res.render('about'); //Render delhome
  	/*let salida = {
		nombre: "Corina",
		edad: 23,
		url: req.url
	}
	res.send(salida);
  //res.send('Hola Mundo')*/
});

/*
app.get('/data',  (req, res)=> {

  res.send('Hola Mundo data')
});
*/
 
app.listen(port, ()=>{
	console.log("Escuchando peticiones en el puerto "+ port);
})



/*
nodemon escucha todas las extensiones
$ nodemon server.js -e js, hbs,html,css

*/