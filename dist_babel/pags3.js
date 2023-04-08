// Seleccionamos el body y lo guardamos en una variable
const body = document.querySelector("body");

// Creamos un elemento br y lo agregamos al body
const br1 = document.createElement("br");
const br2 = document.createElement("br");
body.appendChild(br1);
body.appendChild(br2);

// Creamos un elemento progress y lo agregamos al body
const progress = document.createElement("progress");
progress.setAttribute("value", "60");
progress.setAttribute("max", "100");
const span = document.createElement("span");
span.textContent = "running...";
progress.appendChild(span);
body.appendChild(progress);

// Creamos un elemento h1 y lo agregamos al body
const h1 = document.createElement("h1");
h1.setAttribute("align", "center");
h1.textContent = "Top 3 películas favoritas";
body.appendChild(h1);

// Creamos un elemento div y lo agregamos al body
const div = document.createElement("div");
body.appendChild(div);

// Creamos un elemento article para la primera película y lo agregamos al div
const article1 = document.createElement("article");
const h2_1 = document.createElement("h2");
h2_1.textContent = "Ratatouille";
const p1 = document.createElement("p");
p1.textContent = "Remy es una rata que aprecia la buena comida y tiene un paladar bastante sofisticado. Su sueño es convertirse algún día en un gran chef francés a pesar de la oposición de su familia. El destino lleva a Remy a las alcantarillas de París, donde su situación no puede ser mejor, ya que se encuentra justo debajo de uno de los restaurantes más finos de París. El roedor se sentirá en el lugar perfecto para convertir su sueño en una realidad.";
const img1 = document.createElement("img");
img1.setAttribute("src", "2007.jpg");
img1.setAttribute("width", "290");
img1.setAttribute("height", "450");
img1.style.textAlign = "center";
article1.appendChild(h2_1);
article1.appendChild(p1);
article1.appendChild(img1);
div.appendChild(article1);

// Creamos un elemento article para la segunda película y lo agregamos al div
const article2 = document.createElement("article");
const h2_2 = document.createElement("h2");
h2_2.textContent = "Orgullo y prejuicio";
const p2 = document.createElement("p");
p2.textContent = "Orgullo y prejuicio es una película británica del año 2005 del género romántico basada en la novela homónima de Jane Austen publicada en 1813. La película, basada en un guion de Deborah Moggach, fue producida por Working Title Films y dirigida por Joe Wright. En la Inglaterra de finales del siglo XVIII, los Bennett buscan marido para sus hijas. Lo que en un principio parece un bonito romance entre Lizzie, la hermana mayor, y el señor Darcy, un acaudalado joven que acaba de mudarse a la mansión vecina, acaba convirtiéndose en una batalla de sexos.";
const img2 = document.createElement("img");
img2.setAttribute("src", "prejuicio.jpg");
img2.setAttribute("width", "290");
img2.setAttribute("height", "450");
img2.style.textAlign = "center";
article2.appendChild(h2_2);
article2.appendChild(p2);
article2.appendChild(img2);
div.appendChild(article2);

// Creamos un elemento article para la tercera película y lo agregamos al div
const article3 = document.createElement("article");
const h2_3 = document.createElement("h2");
h2_3.textContent = "Si tuviera 30";
const p3 = document.createElement("p");
p3.textContent = "Por su trece cumpleaños, todo lo que Jenna Rink desea es ser guapa y popular. Tras una experiencia humillante con un grupo de chicas delante del chico más popular de la escuela, Jenna hace un deseo desesperado por tener una nueva vida. Milagrosamente su deseo se hace realidad, sólo que han pasado diecisiete años y ella es una niña de trece años en el cuerpo de una joven de treinta.";
const img3 = document.createElement("img");
img3.setAttribute("src", "30.jpg");
img3.setAttribute("width", "290");
img3.setAttribute("height", "450");
img2.style.textAlign = "center";
article3.appendChild(h2_3);
article3.appendChild(p3);
article3.appendChild(img3);
div.appendChild(article3);

// crear el elemento div
const div2 = document.createElement("div");

// crear el enlace para la página siguiente
const nextLink = document.createElement("a");
nextLink.href = "pags5.html";

// crear el div para el enlace siguiente y añadir el enlace
const nextDiv = document.createElement("div");
nextDiv.style.textAlign = "right";
nextDiv.appendChild(nextLink);

// crear el enlace para la página anterior
const prevLink = document.createElement("a");
prevLink.href = "pags2.html";
prevLink.innerHTML = "<h2><b>Anterior</b></h2>";

// crear el div para el enlace anterior y añadir el enlace
const prevDiv = document.createElement("div");
prevDiv.style.textAlign = "left";
prevDiv.appendChild(prevLink);

// añadir ambos divs al div principal
div.appendChild(nextDiv);
div.appendChild(prevDiv);