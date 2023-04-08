// Crear elementos
const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'black';

const div1 = document.createElement('div');
div1.style.color = 'white';
div1.innerHTML = '<br><br>Lectura:';

const progress = document.createElement('progress');
progress.value = 25;
progress.max = 100;
const span = document.createElement('span');
span.textContent = 'running...';
progress.appendChild(span);

div1.appendChild(progress);

const br1 = document.createElement('br');
const br2 = document.createElement('br');

const h1 = document.createElement('h1');
h1.style.color = 'white';
h1.setAttribute('align', 'center');
h1.textContent = 'GUSTOS MUSICALES';

const div3 = document.createElement('div');
const img = document.createElement('img');
img.src = 'https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif';
img.width = 450;
img.height = 450;
div3.appendChild(img);

const div2 = document.createElement('div');
div2.style.color = 'white';



const div4 = document.createElement('div');
div4.style.textAlign = 'center';
const h2 = document.createElement('h2');
h2.innerHTML = 'TOP 5 géneros más escuchados';
div4.appendChild(h2);
div3.appendChild(div4);

const p = document.createElement('p');
p.innerHTML = `En la siguiente lista se encuentran mis géneros musicales favoritos, puedes ingresar al link 
que te llevará a mi playlist de cada uno.<br><br>Disfruta escuchando buena música!`;

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = 'https://open.spotify.com/playlist/7qHdjTiLGiAlaaVLZtyzMl?si=230e88751f68490f';
a1.textContent = 'POP';
li1.appendChild(a1);

const li2 = document.createElement('li');
const a2 = document.createElement('a');
a2.href = 'https://open.spotify.com/playlist/7qHdjTiLGiAlaaVLZtyzMl?si=230e88751f68490f';
a2.textContent = 'Latin pop (324-400)';
li2.appendChild(a2);

const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = 'https://open.spotify.com/playlist/45sJM0GzvOcbASpqSDkxIU?si=03004c7406d04a3a';
a3.textContent = 'Reggaeton';
li3.appendChild(a3);

const li4 = document.createElement('li');
const a4 = document.createElement('a');
a4.href = 'https://open.spotify.com/playlist/37i9dQZF1EQqkOPvHGajmW?si=61c167a8cccc4c8d';
a4.textContent = 'Indie';
li4.appendChild(a4);

const li5 = document.createElement('li');
const a5 = document.createElement('a');
a5.href = 'https://open.spotify.com/playlist/0DRWKOxJwlK6HIdh9ECsfT?si=86030d0aad284c15';
a5.textContent = 'Rock';
li5.appendChild(a5);
// Crear el div principal
const divPrincipal = document.createElement('div');
divPrincipal.style.color = 'white';

// Crear el título de artistas favoritos
const tituloArtistas = document.createElement('h3');
tituloArtistas.textContent = 'BONUS: Mis artistas favoritas';

// Crear la primera imagen de artista
const imgArtista1 = document.createElement('img');
imgArtista1.src = 'https://media.giphy.com/media/geuXiMq0MNqfAyxS7b/giphy.gif';
imgArtista1.width = 250;
imgArtista1.height = 250;

// Crear la segunda imagen de artista
const imgArtista2 = document.createElement('img');
imgArtista2.src = 'https://media.giphy.com/media/ylxLEKieeBzoI/giphy.gif';
imgArtista2.width = 250;
imgArtista2.height = 250;

// Crear el div para las imágenes de artistas
const divArtistas = document.createElement('div');
divArtistas.appendChild(tituloArtistas);
divArtistas.appendChild(imgArtista1);
divArtistas.appendChild(imgArtista2);


ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

div2.appendChild(p);
div2.appendChild(ul);

// Agregar elementos al body
body.appendChild(div1);
body.appendChild(br1);
body.appendChild(h1);
body.appendChild(br2);
body.appendChild(div2);
body.appendChild(div3);

// Crear los elementos para los botones de navegación
const divNavegacion = document.createElement('div');
divNavegacion.style.display = 'flex';
divNavegacion.style.justifyContent = 'space-between';

const botonAnterior = document.createElement('a');
botonAnterior.href = 'pags1.html';
const tituloAnterior = document.createElement('h2');
tituloAnterior.innerHTML = '<b>Anterior</b>';
botonAnterior.appendChild(tituloAnterior);

const botonSiguiente = document.createElement('a');
botonSiguiente.href = 'pags3.html';
const tituloSiguiente = document.createElement('h2');
tituloSiguiente.innerHTML = '<b>Siguiente</b>';
botonSiguiente.appendChild(tituloSiguiente);

divNavegacion.appendChild(botonAnterior);
divNavegacion.appendChild(botonSiguiente);

// Agregar todos los elementos al div principal
divPrincipal.appendChild(divArtistas);
divPrincipal.appendChild(document.createElement('br'));
divPrincipal.appendChild(document.createElement('br'));
divPrincipal.appendChild(divNavegacion);

// Agregar el div principal al body del HTML
document.body.appendChild(divPrincipal);