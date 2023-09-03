function metodoIngresar() {
  const select1 = document.querySelector("#select-1");
  const select2 = document.querySelector("#select-2");
  const select3 = document.querySelector("#select-3");
  const parrafo = document.querySelector("#pass-parrafo");

  const pass = Number(select1.value + select2.value + select3.value);

  if (911 === pass) {
    parrafo.innerHTML = "Password 1 correcto";
  } else if (714 === pass) {
    parrafo.innerHTML = "Password 2 es correcto";
  } else {
    parrafo.innerHTML = "Clave incorrecta";
  }
}
