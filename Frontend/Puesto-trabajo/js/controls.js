// script.js

// Simulación de datos de ofertas de empleo
const jobs = [
    {
        title: "Desarrollador Web",
        company: "Tech Solutions",
        location: "Ciudad de México, MX",
        description: "Buscamos un desarrollador web con experiencia en HTML, CSS y JavaScript.",
        link: "#"
    },
    {
        title: "Diseñador Gráfico",
        company: "Creative Studio",
        location: "Guadalajara, MX",
        description: "Oportunidad para un diseñador gráfico con un portafolio impresionante.",
        link: "#"
    },
    {
        title: "Analista de Datos",
        company: "DataCorp",
        location: "Monterrey, MX",
        description: "Buscamos un analista de datos con experiencia en SQL y Python.",
        link: "#"
    }
];

function loadJobs() {
    const jobsContainer = document.getElementById('jobs-container');

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Compañía:</strong> ${job.company}</p>
            <p><strong>Ubicación:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <a href="${job.link}" class="apply-button">Aplicar</a>
        `;

        jobsContainer.appendChild(jobCard);
    });
}

// Cargar las ofertas de empleo al cargar la página
document.addEventListener('DOMContentLoaded', loadJobs);
