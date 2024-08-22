var getConection = require('../index');

const obtenerUsuarios = async (req, res) =>{
    try {
        // const {correo,
        //     contraseña
        // }=req.body
        
        const correo = req.body.Correo;
        const contraseña = req.body.contraseña;
        console.log(correo);
        const connection = await getConection.conector();
        const [rows,fields] = await connection.execute('select * from Usuario where Correo = ? and contraseña = ?', [correo, contraseña]);
        console.log(rows);
        console.log(rows.length)

        if (rows.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }

        // res.status(200).json(rows);
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
