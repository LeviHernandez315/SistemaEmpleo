document.addEventListener('DOMContentLoaded', function() {
    // Licencia de conducir
    var poseeLicenciaSi = document.querySelector('input[name="poseeLicencia"][value="1"]');
    var poseeLicenciaNo = document.querySelector('input[name="poseeLicencia"][value="0"]');
    var tiposDeLicencia = document.getElementById('tiposDeLicencia');

    poseeLicenciaSi.addEventListener('change', function() {
        if (poseeLicenciaSi.checked) {
            tiposDeLicencia.style.display = 'block';
        }
    });

    poseeLicenciaNo.addEventListener('change', function() {
        if (poseeLicenciaNo.checked) {
            tiposDeLicencia.style.display = 'none';
        }
    });

    // Vehículo
    var vehiculoSi = document.getElementById('vehiculoSi');
    var vehiculoNo = document.getElementById('vehiculoNo');
    var vehiculoOpciones = document.getElementById('vehiculoOpciones');

    vehiculoSi.addEventListener('change', function() {
        if (vehiculoSi.checked) {
            vehiculoOpciones.style.display = 'block';
        }
    });

    vehiculoNo.addEventListener('change', function() {
        if (vehiculoNo.checked) {
            vehiculoOpciones.style.display = 'none';
        }
    });
});


//Para los Titulos
let contadorTitulos = 1;

function mostrarCampos() {
    const nivel = document.getElementById('nivel-ad').value;
    const contenedor = document.getElementById('contenedorTitulos');
    
    // Mostrar el contenedor si se selecciona un nivel que implica títulos obtenidos
    if (nivel >= 1) { // Puedes ajustar este valor según tus necesidades
        contenedor.style.display = 'block';
    } else {
        contenedor.style.display = 'none';
        contadorTitulos = 1;
        resetearCampos();
    }
}

function agregarTitulo() {
    if (contadorTitulos < 3) {
        contadorTitulos++;
        const tabla = document.getElementById("tablaTitulos").getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();
        nuevaFila.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Título Obtenido" name="titulo[${contadorTitulos}]"></td>
            <td><input type="text" class="form-control" placeholder="Nombre de la Institución" name="institucion[${contadorTitulos}]" title="Nombre de la Institución"></td>
        `;
    } else {
        alert("No puedes agregar más de 3 títulos.");
    }
}

function resetearCampos() {
    const tabla = document.getElementById("tablaTitulos").getElementsByTagName('tbody')[0];
    tabla.innerHTML = `
        <tr>
            <td><input type="text" class="form-control" placeholder="Título Obtenido" name="titulo[1]"></td>
            <td><input type="text" class="form-control" placeholder="Nombre de la Institución" name="institucion[1]" title="Nombre de la Institución"></td>
        </tr>
    `;
}

//para Idiomas
function toggleIdiomas() {
    var idiomasOcultos = document.querySelectorAll('.idiomasOcultos');
    var mostrarIdiomas = document.querySelector('.mostrarIdiomas');
    var ocultarIdiomas = document.querySelector('.ocultarIdiomas');
    
    idiomasOcultos.forEach(function(element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
            mostrarIdiomas.style.display = 'none';
            ocultarIdiomas.style.display = 'inline';
        } else {
            element.style.display = 'none';
            mostrarIdiomas.style.display = 'inline';
            ocultarIdiomas.style.display = 'none';
        }
    });
}

//para la experiencia laboral
let experienciaCount = 0;

        function agregarExperiencia() {
            experienciaCount++;
            
            const contenedor = document.getElementById('experienciaContainer');
            
            // Crear una nueva fila de experiencia
            const nuevaExperiencia = document.createElement('div');
            nuevaExperiencia.className = 'form-group';
            nuevaExperiencia.innerHTML = `
               <div class="form-group">
                    <label for="empresa${Date.now()}">Nombre de la Empresa:</label>
                    <input type="text" id="empresa${Date.now()}" name="empresa[]" class="form-control" placeholder="Nombre de la Empresa">
                </div>
                <div class="form-group">
                    <label for="puesto${Date.now()}">Puesto Desempeñado:</label>
                    <input type="text" id="puesto${Date.now()}" name="puesto[]" class="form-control" placeholder="Puesto">
                </div>
                <div class="form-group">
                    <label for="fechaEntrada${Date.now()}">Fecha de Entrada:</label>
                    <input type="date" id="fechaEntrada${Date.now()}" name="fechaEntrada[]" class="form-control">
                </div>
                <div class="form-group">
                    <label for="fechaSalida${Date.now()}">Fecha de Salida:</label>
                    <input type="date" id="fechaSalida${Date.now()}" name="fechaSalida[]" class="form-control">
                </div>
                <div class="form-group">
                    <label for="FuncionesDesempeñadas${Date.now()}">Funciones a Cargo:</label>
                    <textarea id="FuncionesDesempeñadas${Date.now()}" name="FuncionesDesempeñadas[]" class="form-control" placeholder="Descripción de las tareas realizadas" rows="3"></textarea>
                </div>
                <hr>
            `;
            // Agregar la nueva experiencia al contenedor
            contenedor.appendChild(nuevaExperiencia);
        }

//botones registrar y cancelar
function goBack() {
    window.location.href = "/";
}


//el fetch para registrar una persona
document.getElementById('registrarPersona').addEventListener('click', async (e) => {
    e.preventDefault();

    const DNI = document.getElementById('dni').value;
    const Primer_Nombre = document.getElementById('primer_nombre').value;
    const Segundo_Nombre = document.getElementById('segundo_nombre').value;
    const Primer_Apellido = document.getElementById('primer_apellido').value;
    const Segundo_Apellido = document.getElementById('segundo_apellido').value;
    const Id_Tipo_Identificacion = getTipoIdentificacion(document.getElementById('identificacion').value);
    
    //variable para el usuario
    const Correo = document.getElementById('correo').value;
    const Password = document.getElementById('contrasena').value;
    const id_Tipo_Usuario = 1;

    //variables para el aspirante
    const Telefono = document.getElementById('Telefono').value;
    const Id_Genero = getGenero(document.getElementById('genero').value);
    const Id_Estado_Civil = getEstadoCivil(document.getElementById('estado_civil').value);

    var variableUsuario
    // Funciones para obtener valores
    function getTipoIdentificacion(valor) {
        switch(valor) {
            case "cedula": return 1;
            case "Pasaporte": return 2;
            default: return null;
        }
    }

    function getGenero(valor) {
        switch(valor) {
            case "masculino": return 1;
            case "femenino": return 2;
            case "prefiero no contestar": return 3;
            default: return null;
        }
    }

    function getEstadoCivil(valor) {
        switch(valor) {
            case "soltero":
            case "viudo": 
                return 1;
            case "casado": 
                return 2;
            case "divorciado": 
                return 3;
            default: 
                return null;
        }
    }

    // http://3.229.110.179:3100/usuarios - direccion en la nube
    
    // http://localhost:3100/usuarios - direccion en local
    try {
        const response = await fetch('http://localhost:3100/registrar/persona', { // Cambia esto si el backend está en otro puerto o dominio
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ DNI:DNI, 
                Primer_Nombre:Primer_Nombre,
                Segundo_Nombre:Segundo_Nombre,
                Primer_Apellido:Primer_Apellido,
                Segundo_Apellido:Segundo_Apellido,
                Id_Tipo_Identificacion:Id_Tipo_Identificacion})
        });

        const data = await response.json();

        if (response.ok) {
            // document.getElementById('message').textContent = data.message;
            alert('persona exitoso, URRRAAAAA');
            // console.log(data.id_usuario);
            // localStorage.setItem('UsuarioId', data.id_usuario);
            // window.location.href="../Puesto-trabajo/oferta_trabajo.html"
        } else {
            // document.getElementById('message').textContent = data.message;
            alert('Login fallido, por favor verifica tus credenciales');
        }
    } catch (err) {
        document.getElementById('message').textContent = 'An error occurred';
    }

    // para el usuario
    try {
        const response = await fetch('http://localhost:3100/registrar/usuario', { // Cambia esto si el backend está en otro puerto o dominio
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Correo: Correo, 
                Password:Password,
                id_Tipo_Usuario: id_Tipo_Usuario
            })
        });

        const data = await response.json();

        if (response.ok) {
            // document.getElementById('message').textContent = data.message;
            // alert('Login exitoso, URRRAAAAA');
            console.log('usuario exitoso, URRRAAAAA');
            variableUsuario = data.id_usuario;
            // localStorage.setItem('UsuarioId', data.id_usuario);
            // window.location.href="../Puesto-trabajo/oferta_trabajo.html"
        } else {
            // document.getElementById('message').textContent = data.message;
            alert('Login fallido, por favor verifica tus credenciales');
        }
    } catch (err) {
        document.getElementById('message').textContent = 'An error occurred';
    }

    //para el aspirante
    try {
        const response = await fetch('http://localhost:3100/registrar/aspirante', { // Cambia esto si el backend está en otro puerto o dominio
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ DNI:DNI,
                Telefono: Telefono, 
                Id_Genero: Id_Genero,
                Id_Estado_Civil: Id_Estado_Civil,
                Id_Usuario: variableUsuario
                // Password:Password,
                // Correo: Correo
            })
        });

        const data = await response.json();

        if (response.ok) {
            // document.getElementById('message').textContent = data.message;
            // alert('Login exitoso, URRRAAAAA');
            console.log('aspirante exitoso, URRRAAAAA');
            // localStorage.setItem('UsuarioId', data.id_usuario);
            // window.location.href="../Puesto-trabajo/oferta_trabajo.html"
        } else {
            // document.getElementById('message').textContent = data.message;
            alert('Login fallido, por favor verifica tus credenciales');
        }
    } catch (err) {
        document.getElementById('message').textContent = 'An error occurred';
    }

});