var getConection = require('../index');


const registrarPersona = async (req, res) =>{
    try {
        // datos de la persona
        const DNI = req.body.DNI;
        const Primer_Nombre = req.body.Primer_Nombre; 
        const Segundo_Nombre = req.body.Segundo_Nombre;
        const Primer_Apellido = req.body.Primer_Apellido;
        const Segundo_Apellido = req.body.Segundo_Apellido;
        const Id_Tipo_Identificacion = req.body.Id_Tipo_Identificacion;
        // const FechaNacimiento = req.body.Primer_Apellido;

        // conexion con la base de datos
        const query = `INSERT INTO Persona (
                            DNI, 
                            Primer_Nombre, 
                            Segundo_Nombre, 
                            Primer_Apellido, 
                            Segundo_Apellido, 
                            Id_Tipo_Identificacion
                            )
                            VALUES(?, ?, ?, ?, ?, ?)
                            `;
        const connection = await getConection.conector();
        const [rows,fields] = await connection.execute(query, 
                                                    [DNI, 
                                                    Primer_Nombre,
                                                    Segundo_Nombre,
                                                    Primer_Apellido,
                                                    Segundo_Apellido,
                                                    Id_Tipo_Identificacion
                                                    ]);
        
        return res.status(201).json({ message: 'Persona registrada exitosamente' });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });


    }
}

exports.registrarPersona = registrarPersona;

const registrarUsuario = async (req, res) =>{
    try {
        // datos de la persona
        const Correo = req.body.Correo;
        const Password = req.body.Password;
        const id_Tipo_Usuario = req.body.id_Tipo_Usuario;
        // const FechaNacimiento = req.body.Primer_Apellido;

        // conexion con la base de datos
        const query = `INSERT INTO Usuario (
                            Correo, 
                            Password, 
                            id_Tipo_Usuario
                            )
                            VALUES(?, ?, ?)
                            `;
        const connection = await getConection.conector();
        const [rows,fields] = await connection.execute(query, 
                                                    [Correo,
                                                    Password,
                                                    id_Tipo_Usuario
                                                    ]);
        
        return res.status(201).json({ id_usuario: rows.insertId ,message: 'Usuario registrado exitosamente' });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });


    }
}

exports.registrarUsuario = registrarUsuario

const registrarAspirante = async (req, res) =>{
    try {
        // datos de la persona
        const Telefono = req.body.Telefono;
        const Id_Genero = req.body.Id_Genero;
        const Id_Estado_Civil = req.body.Id_Estado_Civil;
        const DNI = req.body.DNI;
        const Id_Usuario = req.body.Id_Usuario;
        // const Correo = req.body.Correo;
        // const Password = req.body.Password;
        // const FechaNacimiento = req.body.Primer_Apellido;

        // conexion con la base de datos
        const query = `INSERT INTO Aspirante (
                            DNI, 
                            Id_Usuario, 
                            Telefono,
                            Id_Estado_Civil,
                            Id_Genero
                            )
                            VALUES(?, ?, ?, ?, ?)
                            `;
        const connection = await getConection.conector();
        
        // const [usuarios] = await connection.execute('select * from Usuario where Correo = ? and Password = ?', [Correo, Password]);
        // console.log(usuarios[0].id_usuario);
        
        // if (usuarios.length === 0) {
        //     return res.status(404).json({ message: 'Usuario no encontrado' });
        // }
        
        // const Id_Usuario =usuarios[0].id_usuario
        
        const [rows,fields] = await connection.execute(query, 
                                                    [DNI,
                                                    Id_Usuario,
                                                    Telefono,
                                                    Id_Estado_Civil,
                                                    Id_Genero
                                                    ]);
        
        return res.status(201).json({ message: 'Usuario registrado exitosamente' });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });


    }
}

exports.registrarAspirante = registrarAspirante

// // datos del aspirante
// const Telefono = req.body.Telefono;
// const Licencia = req.body.Licencia;
// const Vehiculo = req.body.Vehiculo;

// // datos del usuario
// const Correo = req.body.Primer_Apellido;
// const Password = req.body.Primer_Apellido;