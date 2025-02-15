const imagenes = ["/imatges/miedo.jpg", "/imatges/napoleon.png", "/imatges/japicrismas.jpg", "/imatges/porros.jpg", "/imatges/temato.jpg", "/imatges/zzz.jpg"]
const galeria = document.querySelector(".galeria")
const preview = document.querySelector(".preview")
const padelante = document.querySelector(".padelante")
const patras = document.querySelector(".patras")
let currentPhoto = 0
imagenes.forEach((imagen,indice) => {
  galeria.innerHTML += `<img id="${indice}" src="${imagen}" alt="imagen">`;

});

galeria.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    preview.style.display = "flex";
    preview.querySelector("img").src = img.src;
    preview.querySelector("img").classList.add ("pop-up")
    currentPhoto = img.id;

  });
});

preview.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG"|| event.target.tagName === "BUTTON") {
        return;
    }
    console.log(event.target.tagName);
    preview.style.display = "none";
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

