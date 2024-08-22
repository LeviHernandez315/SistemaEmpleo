const jobs = [
    {
        title: "Desarrollador Web",
        company: "Tech Solutions",
        location: "Ciudad de México, MX",
        type: "Tiempo completo",
        description: "Buscamos un desarrollador web con experiencia en HTML, CSS y JavaScript.",
        link: "#"
    },
    {
        title: "Diseñador Gráfico",
        company: "Creative Studio",
        location: "Guadalajara, MX",
        type: "Medio tiempo",
        description: "Oportunidad para un diseñador gráfico con un portafolio impresionante.",
        link: "#"
    },
    {
        title: "Analista de Datos",
        company: "DataCorp",
        location: "Monterrey, MX",
        type: "Tiempo completo",
        description: "Buscamos un analista de datos con experiencia en SQL y Python.",
        link: "#"
    }
];

const Usuario = [];

function renderJobs(filteredJobs) {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = ''; // Limpia la lista antes de mostrar los resultados filtrados

    filteredJobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'list-group-item mb-3 p-4 shadow-sm job-item';
        jobItem.setAttribute('data-type', job.type);
        jobItem.setAttribute('data-location', job.location);

        jobItem.innerHTML = `
            <h4 class="mb-1"><a href="${job.link}" class="text-decoration-none text-primary">${job.title}</a></h4>
            <p class="mb-1"><strong>Compañía:</strong> ${job.company}</p>
            <p class="mb-1"><strong>Ubicación:</strong> ${job.location}</p>
            <p class="mb-3">${job.description}</p>
            <a href="${job.link}" class="btn btn-primary">Aplicar</a>
        `;

        jobList.appendChild(jobItem);
    });
}

function filterJobs() {
    const keyword = document.getElementById('keyword').value.toLowerCase().trim();
    const jobType = document.getElementById('job-type').value;

    const filteredJobs = jobs.filter(job => {
        const jobTitle = job.title.toLowerCase();

        // Comparar si la palabra clave está en el título
        const matchesKeyword = jobTitle.includes(keyword);
        const matchesType = !jobType || job.type === jobType;

        console.log(`matchesKeyword: ${matchesKeyword}, matchesType: ${matchesType}`);

        return matchesKeyword && matchesType;
    });

    renderJobs(filteredJobs);
}


// Inicializa la página con todas las ofertas
renderJobs(jobs);

// Asigna el evento de submit para filtrar los empleos
document.getElementById('job-filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    filterJobs();
});


