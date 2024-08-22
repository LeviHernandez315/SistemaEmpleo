// var mysql = require('mysql2');

// var conexion = {
//     host: 'localhost',
//     database: 'pruebaempleos',
//     user: 'root',
//     password: 'mysql',
// };

const conexion = {
    host: 'agencia-empleos.cdvfxxw47zcz.us-east-1.rds.amazonaws.com',
    database: 'agencia-empleos',
    user: 'admin',
    password: 'admin_123'
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