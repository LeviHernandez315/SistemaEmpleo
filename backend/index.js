const express = require('express');
const mysql = require('mysql2/promise');
const conexion = require('./app');
const cors = require('cors');
const bodyParser= require('body-parser');
const puerto= process.env.PORT || 3100;

const usuariosRouter = require('./routers/usuarios.router');

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

// const conectar = conexion.conector();

async function conector(){
    try{
        const pool = await mysql.createConnection(conexion);
            // function(error){
            // if(error){
            //     console.log('conexion fallida');
            //     throw error;
            // }else{
            //     console.log('conexion exitosa');
            // }
        // const result = pool.execute('select * from Usuario');
        console.log('conexion exitosa');
        // console.log('yeah, funciono');
        // console.log(result);
         // Ejecuta la consulta
        // const [rows, fields] = await pool.execute('select * from Usuario');

    // Muestra los resultados en la consola y envíalos en la respuesta
        // console.log(rows);
        // res.json(rows);

    // Cierra la conexión
        // await pool.end();
        // });
        return pool;
    }catch (error) {
        console.log('ha habido un error');
    }
    
}

conector();

exports.conector = conector;