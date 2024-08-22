var getConection = require('../index');

const obtenerUsuarios = async (req, res) =>{
    try {
        const correo = req.body.Correo; 
        const Password = req.body.Password;
        // console.log(correo);
        const connection = await getConection.conector();
        const [rows,fields] = await connection.execute('select * from Usuario where Correo = ? and Password = ?', [correo, Password]);
        console.log(rows);
        // console.log(rows.length)

        if (rows.length > 0) {
            res.status(200).json({ id_usuario: rows[0].id_usuario });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }

        // res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });


    }
}



exports.obtenerUsuarios = obtenerUsuarios;
