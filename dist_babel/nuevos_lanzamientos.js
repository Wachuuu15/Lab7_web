// Crea el título h1 y lo centra
const h1 = document.createElement('h1');
h1.textContent = 'Nuevos Lanzamientos';
h1.style.textAlign = 'center';

// Crea la lista ordenada y sus elementos
const ol = document.createElement('ol');
const li1 = document.createElement('li');
li1.innerHTML = '<b>La CICIG experimento o conspiración</b><i> ,Carlos Sabino</i>';
const li2 = document.createElement('li');
li2.innerHTML = '<b>El map de los anhelos</b><i>, Alice Kellen</i>';
const li3 = document.createElement('li');
li3.innerHTML = '<b>La luz en la oscuridad</b><i>, Heino Falcke</i>';
const li4 = document.createElement('li');
li4.innerHTML = '<a href="historia.html"><b>Sobre mí</b><i>, Jennifer Toxcon</i></a>';

// Agrega los elementos de la lista ordenada a la lista
ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
ol.appendChild(li4);

// Crea un div y agrega la lista ordenada
const div1 = document.createElement('div');
div1.appendChild(ol);

// Crea los espacios vacíos con elementos br
const br1 = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');
const br4 = document.createElement('br');

// Agrega los espacios vacíos al div
div1.appendChild(br1);
div1.appendChild(br2);
div1.appendChild(br3);
div1.appendChild(br4);

// Crea un segundo div para el botón de regreso a la página principal
const div2 = document.createElement('div');
div2.style.textAlign = 'center';
const a = document.createElement('a');
a.href = 'index.html';
const img = document.createElement('img');
img.src = 'casa.png';
img.width = 50;
img.height = 50;
a.appendChild(img);
div2.appendChild(a);

// Agrega ambos divs al body
// Crea el body y establece el background
document.body.style.backgroundImage = 'url(ojo.jpg)';
document.body.appendChild(h1);
document.body.appendChild(div1);
document.body.appendChild(div2);

// Agrega el body al documento
document.documentElement.appendChild(body);