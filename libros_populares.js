// Crear un elemento div para el mensaje de bienvenida
const welcome = document.createElement('div');
const message = document.createElement('p');
message.textContent = 'En esta sección encontrarás los libros más populares de nuestros usuarios, ¡disfruta y diviértete!';
welcome.appendChild(message);

// Crear un elemento div para la lista de libros
const books = document.createElement('div');

// Crear los elementos de la lista y establecer sus atributos
const book1 = document.createElement('a');
book1.href = 'details_rebeldes.html';
book1.innerHTML = '<b>"Cuentos de buenas noches para niñas rebeldes"</b><i> ---- Autor: Elena Favilli / Francesca Cavallo</i>';

const book2 = document.createElement('a');
book2.href = 'details_mujercitas.html';
book2.innerHTML = '<b>"Mujercitas"</b><i> ---- Autor: Louisa May Alcott</i>';

const book3 = document.createElement('a');
book3.href = 'details_born.html';
book3.innerHTML = '<b>"Kim Ji-Young, nacida en 1982"</b><i> ---- Autor: Nam Joo Cho</i>';

// Agregar los elementos de la lista al div correspondiente
books.appendChild(book1);
books.appendChild(document.createElement('br'));
books.appendChild(book2);
books.appendChild(document.createElement('br'));
books.appendChild(book3);

// Agregar todos los elementos creados al body
const img = document.createElement('img');


document.body.style.backgroundImage = 'url(nub.jpg)';
document.body.appendChild(img);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(welcome);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(books);
document.body.appendChild(document.createElement('br'));

// Crear un elemento div para el enlace de la página principal
const home = document.createElement('div');
home.style.textAlign = 'center';

// Crear el enlace y establecer sus atributos
const link = document.createElement('a');
link.href = 'index.html';

// Crear el elemento imagen para el enlace y establecer sus atributos
const img2 = document.createElement('img');
img2.src = 'casa.png';
img2.width = 50;
img2.height = 50;

// Agregar la imagen al enlace y el enlace al div correspondiente
link.appendChild(img2);
home.appendChild(link);

// Agregar el div del enlace al body
document.body.appendChild(home);
