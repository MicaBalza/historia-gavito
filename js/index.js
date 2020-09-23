let root = document.documentElement;
let themeSelect = document.querySelector("#theme-select");

themeSelect.addEventListener("change", changeTheme);

function changeTheme(e) {
  if (e.target.value === "dark") {
    root.style.setProperty("--color-background", "#0B132B");
    root.style.setProperty("--color-surface", "#1C2541");
    root.style.setProperty("--color-text", "#5BC0BE");
    root.style.setProperty("--color-accent", "#6FFFE9");
  } else if (e.target.value === "light") {
    root.style.setProperty("--color-background", "");
    root.style.setProperty("--color-surface", "");
    root.style.setProperty("--color-text", "");
    root.style.setProperty("--color-accent", "");
  }
}

var period = [
  "Modernidad",
  "Posmodernidad",
  "Transición",
  "New Wave",
  "Pop",
  "Psicodelia",
  "Punk",
];
var features = ["Tipografía", "Fotografía", "Collage"];

// Todas las tags
var tags = period.concat(features);

console.log(
  `Ahora mismo existen ${
    tags.length
  } etiquetas sobre las que podés filtrar, son: ${tags.join(", ")}`
);

// Función para eventualmente mostrarle 3 tags "palabras clave" al usuario
var palabra1 = tags[Math.floor(Math.random() * tags.length)];
var palabra2 = tags[Math.floor(Math.random() * tags.length)];
var palabra3 = tags[Math.floor(Math.random() * tags.length)];
// Acá faltaría un if para chequear que los números no se repitan, o buscar como se pueden generar números random diferentes

function mostrarPalabras() {
  alert(
    `Hablá de esta imagen en cuanto a ${palabra1}, ${palabra2}, ${palabra3}`
  );
}

// Imágenes
function Picture(name, author, year, tags, description) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.tags = tags;
  this.description = description;
}

const imagen1 = new Picture(
  "Revista Wet",
  "April Greiman",
  1970,
  ["Posmodernidad", "New Wave", "Transición"],
  "Portada para la revista WET"
);
