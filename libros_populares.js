const welcome = document.createElement('div');
const message = document.createElement('p');
message.textContent = 'En esta sección encontrarás los libros más populares de nuestros usuarios, ¡disfruta y diviértete!';
welcome.appendChild(message);

const books = document.createElement('div');

const book1 = document.createElement('a');
book1.href = 'details_rebeldes.html';
book1.innerHTML = '<b>"Cuentos de buenas noches para niñas rebeldes"</b><i> ---- Autor: Elena Favilli / Francesca Cavallo</i>';

const book2 = document.createElement('a');
book2.href = 'details_mujercitas.html';
book2.innerHTML = '<b>"Mujercitas"</b><i> ---- Autor: Louisa May Alcott</i>';

const book3 = document.createElement('a');
book3.href = 'details_born.html';
book3.innerHTML = '<b>"Kim Ji-Young, nacida en 1982"</b><i> ---- Autor: Nam Joo Cho</i>';

books.appendChild(book1);
books.appendChild(document.createElement('br'));
books.appendChild(book2);
books.appendChild(document.createElement('br'));
books.appendChild(book3);

const img = document.createElement('img');


document.body.style.backgroundImage = 'url(nub.jpg)';
document.body.appendChild(img);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(welcome);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(books);
document.body.appendChild(document.createElement('br'));

const home = document.createElement('div');
home.style.textAlign = 'center';

const link = document.createElement('a');
link.href = 'index.html';

const img2 = document.createElement('img');
img2.src = 'casa.png';
img2.width = 50;
img2.height = 50;

link.appendChild(img2);
home.appendChild(link);

document.body.appendChild(home);
