// var mysql = require('mysql2');

// var conexion = mysql.createConnection({
//     host: 'localhost',
//     database: 'pruebaempleos',
//     user: 'root',
//     password: 'mysql',
// });

const conexion = {
    host: 'localhost',
    database: 'pruebaempleos',
    user: 'root',
    password: 'mysql'
}

module.exports=conexion;

// async function conector(){
//     try{
//         const pool = await conexion.connect();
//             // function(error){
//             // if(error){
//             //     console.log('conexion fallida');
//             //     throw error;
//             // }else{
//             //     console.log('conexion exitosa');
//             // }
//         console.log('conexion exitosa');
//         // });
//         return pool;
//     }catch (error) {
//         console.log('ha habido un error');
//     }
    
// }
// conexion.connect(function(error){
//     if(error){
//         console.log('conexion fallida');
//         throw error;
//     }else{
//         console.log('conexion exitosa');
//     }
// });

// conexion.end();



// exports.conector = conector;