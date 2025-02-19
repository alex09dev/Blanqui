const imagenes = [
  "/imatges/miedo.jpg",
  "/imatges/napoleon.png",
  "/imatges/japicrismas.jpg",
  "/imatges/porros.jpg",
  "/imatges/temato.jpg",
  "/imatges/zzz.jpg",
];
const galeria = document.querySelector(".galeria");
const preview = document.querySelector(".preview");
const padelante = document.querySelector(".padelante");
const patras = document.querySelector(".patras");
let currentPhoto = 0;
imagenes.forEach((imagen, indice) => {
  galeria.innerHTML += `<img id="${indice}" src="${imagen}" alt="imagen">`;
});

galeria.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    preview.style.display = "flex";
    preview.querySelector("img").src = img.src;
    preview.querySelector("img").classList.add("pop-up");
    currentPhoto = img.id;
    if (likes[currentPhoto]) {
      like.innerText = "❤";
    } else {
      like.innerText = "🤍";
    }
  });
  
});

preview.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" || event.target.tagName === "BUTTON") {
    return;
  }
  console.log(event.target.tagName);
  preview.style.display = "none";
});
const like = document.querySelector(".like");
like.addEventListener("click", () => {
  likes[currentPhoto] = !likes[currentPhoto];
  console.log(likes);
  if (likes[currentPhoto]) {
    like.innerText = "❤";
  } else {
    like.innerText = "🤍";
  }
});

padelante.addEventListener("click", () => {
  currentPhoto++;
  if (currentPhoto >= imagenes.length) {
    currentPhoto = 0;
  }
  preview.querySelector("img").src = imagenes[currentPhoto];
});

patras.addEventListener("click", () => {
  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = imagenes.length - 1;
  }
  preview.querySelector("img").src = imagenes[currentPhoto];
});

//looooooooooooooooooooooooooooool
/*
const like = document.querySelector(".like");

let valoracion = localStorage.getItem("estado");

like.onclick = function () {
  valoracion = "si";
  equisde7u7();
};
*/
function equisde7u7() {
  localStorage.setItem("estado", valoracion);

  if (valoracion === "si") {
    like.innerText = "❤";
  }
}
//<button class="like">🤍</button>
// Create an arrasy with all values at false with the same length as the images array
const likes = Array(imagenes.length).fill(false);

console.log(likes);
