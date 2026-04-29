let notas = [];
let sumaTotal = 0;
let promedioTotal = 0;

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

function agregarNotas() {
  let notaRecuperada = recuperarInt('txtNota');

  if (!isNaN(notaRecuperada)) {
    if (notas.length < 5) {
      notas.push(notaRecuperada);
    }

    if (notas.length === 5) {
      calcularPromedio();
    }

    mostrarNota();
    limpiarInput('txtNota');
  }
}

function calcularPromedio() {
  sumaTotal = sumar(notas);
  promedioTotal = promedio(notas);
}

function mostrarNota() {
  let cpmTabla = document.getElementById('divTabla');

  let contenidoTabla = `
    <table>
      <thead>
        <tr>
          <th>Índice</th>
          <th>Nota Registrada</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < notas.length; i++) {
    contenidoTabla += `
      <tr>
        <td>${i + 1}</td>
        <td>${notas[i]}</td>
      </tr>
    `;
  }

  contenidoTabla += '</tbody>';

  if (notas.length === 5) {
    contenidoTabla += `
      <tfoot>
        <tr>
          <td>Suma Total:</td>
          <td>${sumaTotal}</td>
        </tr>
        <tr>
          <td>Promedio:</td>
          <td>${promedioTotal}</td>
        </tr>
      </tfoot>
    `;
  }

  contenidoTabla += '</table>';

  cpmTabla.innerHTML = contenidoTabla;
}