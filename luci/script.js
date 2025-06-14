// Obtener referencias a los elementos del DOM
const notaForm = document.getElementById('nota-form');
const listaNotas = document.getElementById('lista-notas');

// Manejar el evento de envío del formulario
notaForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;
    const imagenInput = document.getElementById('imagen');
    let imagenUrl = '';

    // Si hay una imagen seleccionada
    if (imagenInput.files.length > 0) {
        const file = imagenInput.files[0];
        const reader = new FileReader();

        // Leer la imagen como una URL de datos
        reader.onload = function(e) {
            imagenUrl = e.target.result;
            agregarNota(titulo, contenido, imagenUrl);
        };
        reader.readAsDataURL(file); // Leer como URL de datos
    } else {
        // Si no hay imagen, agregar la nota sin imagen
        agregarNota(titulo, contenido, imagenUrl);
    }

    // Reiniciar el formulario
    notaForm.reset();
});

// Función para agregar la nota a la lista
function agregarNota(titulo, contenido, imagenUrl) {
    // Crear un nuevo elemento de tarjeta para la nota
    const notaCard = document.createElement('div');
    notaCard.classList.add('nota-card');

    // Crear el contenido de la tarjeta
    notaCard.innerHTML = `
        <h3>${titulo}</h3>
        <p>${contenido}</p>
        ${imagenUrl ? `<img src="${imagenUrl}" alt="Imagen de ${titulo}">` : ''}
    `;

    // Agregar la tarjeta a la lista de notas
    listaNotas.appendChild(notaCard);
}
