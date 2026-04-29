const promedio = (arr) => sumar(arr) / arr.length;
const sumar = (...nums) => nums.flat().reduce((acc, n) => acc + n, 0);

function recuperaraTexto(idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
}

function recuperarInt(idComponente) {
  let valorCaja = recuperaraTexto(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
}
function recuperarFloat(idComponente) {
  let valorCaja = recuperaraTexto(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
}
function mostrarTexto(idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
}
function mostrarTextoEnCaja(idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.value = mensaje;
}

function mostrarImagen(idComponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.src = rutaImagen;

}

function limpiarInput(parametro) {
  let componente;

  if (parametro instanceof HTMLElement) {
    componente = parametro;
  } else {
    componente = document.getElementById(parametro);
  }

  if (componente) {
    componente.value = '';
    componente.focus();
  } else {
    console.warn("No se pudo encontrar el componente para limpiar.");
  }
}