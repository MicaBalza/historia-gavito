// ----- GET USER NAME

document.addEventListener("DOMContentLoaded", showModal());

function showModal() {
  if (localStorage.username) {
    document.querySelector(
      "#saludo"
    ).innerHTML = localStorage.username.toUpperCase();
  } else if (!localStorage.username) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<div id="modal-background"><div id="modal-username"><h2>Bienvenido!</h2><h3>Ingresa tu nombre:</h3><form id="name-form" onsubmit="getName(); return false"><input type="text" name="username" id="name-input" /><input type="submit" value="Ingresar"/></form></div></div>'
    );
  }
}

function getName() {
  localStorage.setItem("username", document.querySelector("#name-input").value);
  document.body.removeChild(document.querySelector("#modal-background"));
  document.querySelector(
    "#saludo"
  ).innerHTML = localStorage.username.toUpperCase();
}

// ----- PRACTICE

function showPractice() {
  selectWords();
  selectImage();
  timer();
  $("#practice-intro").fadeOut(1000, function () {
    $("#practice-content").fadeIn();
  });
}

function selectImage() {
  let id = Math.floor(Math.random() * 20);
  document
    .querySelector("#practice-content")
    .insertAdjacentHTML("afterbegin", `<img src="assets/img/${id}.jpg">`);
}

function selectWords() {
  // Función para eventualmente mostrarle 3 tags "palabras clave" al usuario
  let palabra1 = tags[Math.floor(Math.random() * tags.length)];
  let palabra2 = tags[Math.floor(Math.random() * tags.length)];
  let palabra3 = tags[Math.floor(Math.random() * tags.length)];
  document
    .querySelector("#practice-content")
    .insertAdjacentHTML(
      "afterbegin",
      `<p>${palabra1}</p><p>${palabra2}</p><p>${palabra3}</p>`
    );
  // Acá faltaría un if para chequear que los números no se repitan, o buscar como se pueden generar números random diferentes
}

function timer() {
  var fiveSeconds = new Date().getTime() + 601000;

  $("#clock")
    .countdown(fiveSeconds, { elapse: true })
    .on("update.countdown", function (event) {
      var $this = $(this);
      if (event.elapsed) {
        $this.html(event.strftime("TIEMPO !"));
      } else {
        $this.html(event.strftime("<span>%H:%M:%S</span>"));
      }
    });
}

// -----

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

function mostrarPalabras() {}

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
