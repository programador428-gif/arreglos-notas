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

  console.log(`Suma total: ${sumaTotal}`)
  console.log(`Promedio ${promedioNotas}`);
}

function generarTabla() {
  let contenidoTabla = '';
  let cpmTabla = document.getElementById('divTabla');
  contenidoTabla += `
    <table>
    <tr>
      <th>Cabecera 1</th>
      <th>Cabecera 2</th>
      <th>Cabecera 3</th>
    </tr>
    <tr>
      <td>Celda 1</td>
      <td>Celda 2</td>
      <td>Celda 3</td>
    </tr>
    <tr>
      <td>Celda 1</td>
      <td>Celda 2</td>
      <td>Celda 3</td>
    </tr>
    <tr>
      <td>Celda 1</td>
      <td>Celda 2</td>
      <td>Celda 3</td>
    </tr>
  </table>
  `
  cpmTabla.innerHTML = contenidoTabla;
}

function mostrarNota() {
  let cpmTabla = document.getElementById('divTabla');
  let contenidoTabla = '<table>';
  let miNota;
  for (let i = 0; i < notas.length; i++) {
    miNota = notas[i];
    contenidoTabla += `
      <tr>
        <td>${miNota}</td>
      </tr>
    `
  }
  contenidoTabla += '</table>';
  cpmTabla.innerHTML = contenidoTabla;
}