let notas = [];
let sumaTotal;
let promedioTotal;

function agregarElemento() {
  notas.push(5);
  notas.push(10);
  console.log(notas.length);
}

function recorrerArreglo() {
  let notaR;
  for (let indice = 0; indice < notas.length; indice++) {
    notaR = notas[indice];
    console.log(notaR);
  }
}

function probarAgregar() {
  let notaRecuperada;
  notaRecuperada = recuperarInt('txtNota');
  agregarNota(notaRecuperada);
}

function agregarNota(nota) {
  notas.push(nota);
  if (notas.length === 5) {
    promedioNotas();
  }
  if (notas.length > 5) {
    return;
  }
}

function promedioNotas() {
  for (let i = 0; i < notas.length; i++) {
    let valorActual = notas[i];
    let posicionActual = i + 1;
    console.log(`${posicionActual}. Nota: ${valorActual}`);
  }
  sumaTotal = sumar(notas);
  promedioNotas = promedio(notas);

  console.log(`Suma total: ${sumar(notas)}`)
  console.log(`Promedio ${promedio(notas)}`);
}