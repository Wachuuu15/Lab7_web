// Crear el encabezado H1
const newHeading = document.createElement('h1');
newHeading.style.color = 'white';
newHeading.setAttribute('align', 'center');
newHeading.innerHTML = 'Bienvenido';

// Crear la división para los enlaces
const linkDiv = document.createElement('div');
linkDiv.classList.add('link');
linkDiv.innerHTML = '<h2 style="color: white;">Opciones de lectura:</h2>';

// Crear el enlace para libros populares
const popularBooksLink = document.createElement('a');
popularBooksLink.href = 'libros_populares.html';
popularBooksLink.innerHTML = '<h3 style="color: white;">Libros populares</h3>';
linkDiv.appendChild(popularBooksLink);

// Crear el enlace para nuevos lanzamientos
const newReleasesLink = document.createElement('a');
newReleasesLink.href = 'nuevos_lanzamientos.html';
newReleasesLink.innerHTML = '<h3 style="color: white;">Nuevos lanzamientos</h3>';
linkDiv.appendChild(newReleasesLink);

// Crear el elemento de audio
const audio = document.createElement('audio');
audio.controls = true;

const audioSource = document.createElement('source');
audioSource.src = 'antihero.mp3';
audioSource.type = 'audio/mpeg';

audio.appendChild(audioSource);

// Agregar los elementos a la página
document.body.style.backgroundImage = 'url(luna.jpg)';
document.body.appendChild(newHeading);
document.body.appendChild(linkDiv);
document.body.appendChild(audio);