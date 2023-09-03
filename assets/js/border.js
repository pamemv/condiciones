/*border*/
function metodoBorder() {
  const img = document.querySelector("#img");

  img.style.border === "2px solid red"
    ? (img.style.border = "none")
    : (img.style.border = "2px solid red");
}
