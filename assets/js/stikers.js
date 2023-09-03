function metodoSticker() {
  const inputSticker1 = document.querySelector("#input-sticker-1");
  const inputSticker2 = document.querySelector("#input-sticker-2");
  const inputSticker3 = document.querySelector("#input-sticker-3");

  const total =
    Number(inputSticker1.value) +
    Number(inputSticker2.value) +
    Number(inputSticker3.value);

  const parrafo = document.querySelector("#parrafo");

  Number(total) <= 10
    ? (parrafo.innerHTML = "Llevas " + total + " stickers")
    : (parrafo.innerHTML = "Llevas demasiados stickers " + "(" + total + ")");
}
