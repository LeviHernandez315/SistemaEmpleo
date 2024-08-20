var getConection = require('../index');

const obtenerUsuarios = async (req, res) =>{
    try {
        const connection = await getConection.conector();
        const [rows,fields] = await connection.execute('select * from Usuario');
        console.log(rows);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });

        
    }
    
    
    // try {
        // const { email, password } = req.body;
        // const consulta = 'SELECT * FROM usuario where correo = aspirante1@example.com';
        // const pool = await getConection.conector();
        // const result= await pool.execute('SELECT * FROM usuario');
        // console.log(result.recordset);
        // res.json(result);
        // res.send(result.recordset);
        // console.log(result.recordset);
    // } catch (error) {
    //     res.status(500).send('Error al obtener usuarios');
    // }
}



exports.obtenerUsuarios = obtenerUsuarios;
