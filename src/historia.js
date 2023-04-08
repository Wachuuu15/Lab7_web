const heading = document.createElement('h1');
heading.textContent = 'SOBRE MÍ';
heading.style.textAlign = 'center';

const div1 = document.createElement('div');
div1.style.textAlign = 'center';

const img = document.createElement('img');
img.src = 'giphy.gif';
img.width = 450;
img.height = 450;

const div2 = document.createElement('div');
div2.style.textAlign = 'right';

const link = document.createElement('a');
link.href = 'nuevos_lanzamientos.html';

const img2 = document.createElement('img');
img2.src = 'casa.png';
img2.width = 50;
img2.height = 50;

const ul = document.createElement('ul');
const li = document.createElement('li');
const a = document.createElement('a');
a.href = 'pags1.html';
a.textContent = 'Inicio';

document.body.appendChild(heading);

div1.appendChild(img);
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));

const p = document.createElement('p');
p.textContent = `Tengo 19 años, por lo que no hay mucho que contar, aunque un dato resaltante de mí
                  es que me encanta hablar, en este caso escribir, así que querido lector te contaré
                  acerca de las cosas que me formaron para ser hoy la pre adulta/adolescente que soy...
                  \n\nComencemos!`;
div1.appendChild(p);

li.appendChild(a);
ul.appendChild(li);
div1.appendChild(ul);

document.body.appendChild(div1);

link.appendChild(img2);
div2.appendChild(link);
document.body.appendChild(div2);
// Agregar los elementos al documento
document.body.style.backgroundImage = 'url("Fondo de celular gatito.jpg")';

