document.addEventListener('DOMContentLoaded', function () {
    fetch('/usuario/estudiantes', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            mostrarResultado(data.body); // Usamos el campo `body` del objeto
        })
        .catch(error => console.error('Error:', error));
});

function mostrarResultado(estudiantes) {
    const estudiantesList = document.getElementById('estudiantesList'); // Contenedor del HTML
    estudiantesList.innerHTML = ''; // Limpiar contenido previo

    if (estudiantes && estudiantes.length > 0) {
        // Iteramos sobre los estudiantes
        estudiantes.forEach(estudiante => {
            const div = document.createElement('div');
            div.className = 'estudiante-item'; // Clase para aplicar estilos
            div.innerHTML = `
                <p><strong>Nombre:</strong> ${estudiante.nombre}</p>
                <p><strong>Apellido:</strong> ${estudiante.apellido}</p>
                <p><strong>Curso:</strong> ${estudiante.curso}</p>
                <p><strong>Paralelo:</strong> ${estudiante.paralelo}</p>
                <p><strong>Puntaje:</strong> ${estudiante.puntaje}</p>
            `;
            estudiantesList.appendChild(div); // Agregamos el div al contenedor
        });
    } else {
        // Mostrar un mensaje si no hay estudiantes
        estudiantesList.innerHTML = '<p>No se encontraron estudiantes.</p>';
    }
}
