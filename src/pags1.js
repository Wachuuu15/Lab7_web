// Creating progress element
const progress = document.createElement("progress");
progress.value = 20;
progress.max = 100;
progress.innerHTML = "<span>running...</span>";

// Creating h1 element
const text = document.createElement("p");
text.innerHTML = "Lectura:";

// Creating h1 element
const h1 = document.createElement("h1");
h1.innerHTML = "Curiosidades";
h1.setAttribute("align", "center");

// Creating details elements
const firstDetails = document.createElement("details");
const secondDetails = document.createElement("details");
const thirdDetails = document.createElement("details");
const fourthDetails = document.createElement("details");
const fifthDetails = document.createElement("details");

// Creating summary elements for each details
const firstSummary = document.createElement("summary");
firstSummary.innerHTML = "15 de julio";

const secondSummary = document.createElement("summary");
secondSummary.innerHTML = "Tengo un perro";

const thirdSummary = document.createElement("summary");
thirdSummary.innerHTML = "Familia";

const fourthSummary = document.createElement("summary");
fourthSummary.innerHTML = "No me gusta McDonald's";

const fifthSummary = document.createElement("summary");
fifthSummary.innerHTML = "Me gusta leer y bailar";



// Creating p elements for each details
const firstP = document.createElement("p");
firstP.innerHTML = "Nací un 15 de julio de 2003, fui la primera hija de mis papás, primogenita, si lo vemos así, también la primera nieta tanto del lado de mis papá como mamá, por lo que ya era esperada con ansias desde que anunciaron que venía a este mundo.<br><br>Fueron buenos años, era la consentida de ambas familias, mis tíos les gustaba llevarme de paseo a todos lados, también les gustaba comprarme vestidos o zapatos, eso fue hasta que mis tíos 2 años después empezaron a tener sus propios bebés al igual que mi mamá tuvo a mi hermano.<br><br><br>Algo curioso de esta fecha es que hay una película que se basa en el 15 de Julio, una de las mejores películas que he visto y me hace llorar cada vez que la veo, la película se llama One Day.<div style='text-align: center'><img src='15.PNG' width='650' height='350'></div>";
const secondP = document.createElement("p");
secondP.innerHTML = "Tengo 3 perros de hecho, pero los demás son de mis hermanos, mi perro se llama Coockie es el ser más leal que he conocido, nació en la pandemia así que me a hecho compañía desde que nació, es Shi-Tzu y le gusta el tomate.<div style='text-align: center'><img src='cookie.jpeg' width='320' height='350'></div>";
const thirdP = document.createElement("p");
thirdP.innerHTML = "Como mencioné antes, tengo 2 hermanos, uno de 18 y otro de 10 años, vivo con mis dos padres y mis 3 perros.<div style='text-align: center'><img src='familia.jpeg' width='250' height='350'></div>";
const fourthP = document.createElement("p");
fourthP.innerHTML = "En serio, quién prefiere Mc Donald's en lugar de Burger King, los helados son deliciosos, no lo niego pero no comparto el gusto.";
const fifthP = document.createElement("p");
fifthP.innerHTML = "Mi libro favorito es Cinder, es una novela de fantasía y romance de hecho cuenta con 4 libros los cuales aún no leo, pero tienen los mismos generos. He leído libros desde que tengo 12 años, recuerdo que los primeros libros que leí fuerón clásicos de la literatura, como Don Quijote de la mancha, Corazón, Marianela, entre otros, geniunamente a esa edad no entendía muy bien los sentimientos que el autor quería transmitirme, así que los volví a leer 3 años después, debo de mencionar que fue la mejor decisión de mi vida, cada vez que terminaba un libro, quería leer otro y otro";

// Creamos el primer div
var div1 = document.createElement("div");
div1.style.textAlign = "center";

// Creamos el enlace y la imagen
var a = document.createElement("a");
a.href = "historia.html";

var img = document.createElement("img");
img.style.textAlign = "center";
img.src = "casa.png";
img.width = "50";
img.height = "50";

// Agregamos la imagen dentro del enlace y el enlace dentro del primer div
a.appendChild(img);
div1.appendChild(a);

// Creamos el segundo div
var div2 = document.createElement("div");
div2.style.textAlign = "right";

// Creamos el enlace y el encabezado
var a2 = document.createElement("a");
a2.href = "pags2.html";

var h2 = document.createElement("h2");
var b = document.createElement("b");
b.textContent = "Siguiente";

// Agregamos el encabezado dentro del enlace y el enlace dentro del segundo div
h2.appendChild(b);
a2.appendChild(h2);
div2.appendChild(a2);

// Agregamos ambos divs al cuerpo del documento HTML
document.body.appendChild(h1);
document.body.appendChild(text);
document.body.appendChild(progress);

document.body.appendChild(firstSummary);
document.body.appendChild(firstP);

document.body.appendChild(secondSummary);
document.body.appendChild(secondP);

document.body.appendChild(thirdSummary);
document.body.appendChild(thirdP);

document.body.appendChild(fourthSummary);
document.body.appendChild(fourthP);

document.body.appendChild(fifthSummary);
document.body.appendChild(fifthP);

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.style.backgroundImage = 'url(born.jpg)';
