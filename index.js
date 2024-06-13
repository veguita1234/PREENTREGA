// Array de estudiantes
let estudiantes = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 22 },
    { nombre: "María", edad: 19 },
    { nombre: "Carlos", edad: 21 }
];

// Función para mostrar los estudiantes en el HTML
function mostrarEstudiantes() {
    let listaEstudiantesDiv = document.getElementById('listaEstudiantes');
    listaEstudiantesDiv.innerHTML = ''; // Limpiar la lista

    // Ciclo para recorrer el array de estudiantes
    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];
        
        // Crear un elemento div para cada estudiante
        let estudianteDiv = document.createElement('div');
        estudianteDiv.textContent = `${estudiante.nombre} - ${estudiante.edad} años`;

        // Condicional para agregar una clase especial si el estudiante es mayor de 21 años
        if (estudiante.edad > 21) {
            estudianteDiv.classList.add('mayor');
        }

        // Agregar el div al contenedor principal
        listaEstudiantesDiv.appendChild(estudianteDiv);
    }
}

// Función para agregar un nuevo estudiante
function agregarEstudiante(nombre, edad) {
    let nuevoEstudiante = { nombre: nombre, edad: edad };
    estudiantes.push(nuevoEstudiante);
}

// Ejemplo de uso de la función agregarEstudiante
agregarEstudiante("Sofía", 23);