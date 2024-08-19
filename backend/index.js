const express = require('express');
const mysql = require('mysql2');
const conexion = require('./app');
const cors = require('cors');
const bodyParser= require('body-parser');
const puerto=3100;

const usuariosRouter = require('./routers/usuarios.router');

const app = express();

//mildrewers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Probando backend de pruebaempleos');
});

app.listen(puerto, () => {
	console.log(`Servidor Levantado en https://localhost:${puerto}`);
});

app.use('/usuarios', usuariosRouter);

// const conectar = conexion.conector();

async function conector(){
    try{
        const pool = await mysql.connect(conexion);
            // function(error){
            // if(error){
            //     console.log('conexion fallida');
            //     throw error;
            // }else{
            //     console.log('conexion exitosa');
            // }
        console.log('conexion exitosa');
        // });
        return pool;
    }catch (error) {
        console.log('ha habido un error');
    }
    
}

conector();

exports.conector = conector;