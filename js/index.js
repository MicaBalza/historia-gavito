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
      '<div id="modal-background"><div id="modal-username"><h2>Bienvenidx!</h2><h3>Por favor, ingresá tu nombre:</h3><form id="name-form" autocomplete="off" onsubmit="getName(); return false"><input type="text" name="username" id="name-input" /><input type="submit" value="Ingresar"/></form></div></div>'
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

// Mostrar 3 tags "palabras clave" al usuario
function selectWords() {
  // Hacer que no se repitan
  var randomsSet = new Set();
  while (randomsSet.size < 3) {
    randomsSet.add(1 + Math.floor(Math.random() * (tags.length - 1)));
  }
  var randoms = [...randomsSet];
  let palabra1 = tags[randoms[0]];
  let palabra2 = tags[randoms[1]];
  let palabra3 = tags[randoms[2]];
  document
    .querySelector("#practice-content")
    .insertAdjacentHTML(
      "afterbegin",
      `<p>${palabra1}</p><p>${palabra2}</p><p>${palabra3}</p>`
    );
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
        $this.html(event.strftime("%H:%M:%S"));
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
