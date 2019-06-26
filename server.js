const express = require('express')
const app = express()
 //Middleware un callback que se va a ejecutar siempre que hAYA UNA peticion
 //
 //
 
 app.use(express.static(__dirname + '/public'));

/*app.get('/',  (req, res)=> {
  	let salida = {
		nombre: "Corina",
		edad: 23,
		url: req.url
	}
	res.send(salida);
  //res.send('Hola Mundo')
});


app.get('/data',  (req, res)=> {

  res.send('Hola Mundo data')
});
*/
 
app.listen(3000, ()=>{
	console.log("Escuchando peticiones en el puerto 3000");
})