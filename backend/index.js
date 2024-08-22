const express = require('express');
const mysql = require('mysql2/promise');
const conexion = require('./app');
const cors = require('cors');
const bodyParser= require('body-parser');
const puerto= process.env.PORT || 3100;

const usuariosRouter = require('./routers/usuarios.router');
const aspiranteRouter = require('./routers/aspirante.router');

const app = express();

//mildrewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Probando backend de pruebaempleos: Funciono');
});

app.listen(puerto, () => {
	console.log(`Servidor Levantado en el puerto = ${puerto}`);
});

app.use('/usuarios', usuariosRouter);
app.use('/registrar', aspiranteRouter);


async function conector(){
    try{
        const pool = await mysql.createConnection(conexion);
            
        console.log('conexion exitosa');
        
        return pool;
    }catch (error) {
        console.log('ha habido un error');
    }
    
}

// conector();

exports.conector = conector;