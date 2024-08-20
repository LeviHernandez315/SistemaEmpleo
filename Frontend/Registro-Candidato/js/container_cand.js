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
    window.history.back();
}
  