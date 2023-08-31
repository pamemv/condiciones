const img = document.querySelector("#img");

/*border*/
function metodo() {
  if (img.style.border === "2px solid red") {
    img.style.border = "none";
    console.log("quito el borde");
  } else {
    img.style.border = "2px solid red";
    console.log("aplico el borde");
  }
}
