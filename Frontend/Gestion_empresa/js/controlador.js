document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.list-group-item');
    const sections = {
        'Ofertas Publicadas': document.getElementById('ofertas-publicadas'),
        'Agregar Puesto': document.getElementById('actualizar-info'),
        'Ver Candidatos': document.getElementById('ver-candidatos')
    };

    // Función para ocultar todas las secciones y eliminar la clase 'active' de los enlaces
    function hideAllSections() {
        for (const section in sections) {
            sections[section].classList.add('d-none');
        }
        links.forEach(link => link.classList.remove('active'));
    }

    // Añadir evento click a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            hideAllSections();
            const sectionName = link.textContent.trim();
            if (sections[sectionName]) {
                sections[sectionName].classList.remove('d-none');
            }
            link.classList.add('active');
        });
    });

    // Mostrar por defecto la sección de "Ofertas Publicadas"
    sections['Ofertas Publicadas'].classList.remove('d-none');
});

document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.btn-edit');
    const saveButtons = document.querySelectorAll('.btn-save');
    const selects = document.querySelectorAll('.estado-select');

    editButtons.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            selects[index].disabled = false;
            btn.classList.add('d-none');
            saveButtons[index].classList.remove('d-none');
        });
    });

    saveButtons.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            selects[index].disabled = true;
            btn.classList.add('d-none');
            editButtons[index].classList.remove('d-none');
            // Aquí podrías agregar lógica para guardar el nuevo estado en el servidor si es necesario.
        });
    });
});
