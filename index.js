document.getElementById('guardar').addEventListener('click', function() {

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;


    let usuario = {
      nombre: nombre,
      edad: edad
    };


    localStorage.setItem('usuario', JSON.stringify(usuario));


    document.getElementById('mensaje').textContent = 'Datos guardados correctamente';


    let retrievedData = JSON.parse(localStorage.getItem('usuario'));


    let contenidoDiv = document.getElementById('contenido');
    contenidoDiv.innerHTML = '';


    let nombreP = document.createElement('p');
    nombreP.textContent = `Nombre: ${retrievedData.nombre}`;

    let edadP = document.createElement('p');
    edadP.textContent = `Edad: ${retrievedData.edad}`;

    contenidoDiv.appendChild(nombreP);
    contenidoDiv.appendChild(edadP);
  });