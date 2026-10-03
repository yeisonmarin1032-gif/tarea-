function mostrarResultado(id, texto, esError) {
  const el = document.getElementById(id);
  el.classList.remove('empty');
  el.innerHTML = esError ? '<span class="err">' + texto + '</span>' : texto;
}

// 1) Propina
function calcularPropina() {
  const monto = parseFloat(document.getElementById('montoCuenta').value);
  const porcentaje = parseFloat(document.getElementById('porcentajePropina').value);

  if (isNaN(monto) || isNaN(porcentaje) || monto < 0 || porcentaje < 0) {
    mostrarResultado('resultadoPropina', 'Ingresa un monto y un porcentaje válidos.', true);
    return;
  }

  const propina = monto * (porcentaje / 100);
  const total = monto + propina;

  mostrarResultado('resultadoPropina',
    'Propina: $' + propina.toFixed(2) + '\nTotal a pagar: $' + total.toFixed(2)
  );
}

// 2) IMC
function calcularIMC() {
  const peso = parseFloat(document.getElementById('pesoKg').value);
  const altura = parseFloat(document.getElementById('alturaM').value);

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    mostrarResultado('resultadoIMC', 'Ingresa un peso y una altura válidos.', true);
    return;
  }

  const imc = peso / (altura ** 2);
  let categoria;
  if (imc < 18.5) categoria = 'Bajo peso';
  else if (imc < 25) categoria = 'Normal';
  else if (imc < 30) categoria = 'Sobrepeso';
  else categoria = 'Obesidad';

  mostrarResultado('resultadoIMC',
    'IMC: ' + imc.toFixed(2) + '\nCategoría: ' + categoria
  );
}

// 3) Menú de utilidades
function mostrarSubmenu() {
  const opcion = document.getElementById('menuOpcion').value;
  ['submenu1', 'submenu2', 'submenu3'].forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  const resultado = document.getElementById('resultadoMenu');
  resultado.classList.add('empty');
  resultado.textContent = 'El resultado aparecerá aquí.';

  if (opcion) {
    document.getElementById('submenu' + opcion).classList.add('active');
  }
}

function convertirCelsius() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (isNaN(celsius)) {
    mostrarResultado('resultadoMenu', 'Ingresa una temperatura válida.', true);
    return;
  }
  const fahrenheit = celsius * 9 / 5 + 32;
  mostrarResultado('resultadoMenu', fahrenheit.toFixed(2) + ' °F');
}

function calcularIVA() {
  const precio = parseFloat(document.getElementById('precioBase').value);
  const iva = parseFloat(document.getElementById('ivaPorcentaje').value);
  if (isNaN(precio) || isNaN(iva) || precio < 0 || iva < 0) {
    mostrarResultado('resultadoMenu', 'Ingresa un precio y un IVA válidos.', true);
    return;
  }
  const precioFinal = precio + (precio * iva / 100);
  mostrarResultado('resultadoMenu', 'Precio final: $' + precioFinal.toFixed(2));
}

function clasificarNota() {
  const nota = parseFloat(document.getElementById('notaNumero').value);
  if (isNaN(nota) || nota < 0 || nota > 100) {
    mostrarResultado('resultadoMenu', 'Ingresa una nota entre 0 y 100.', true);
    return;
  }
  let letra;
  if (nota >= 90) letra = 'A';
  else if (nota >= 80) letra = 'B';
  else if (nota >= 70) letra = 'C';
  else if (nota >= 60) letra = 'D';
  else letra = 'F';
  mostrarResultado('resultadoMenu', 'Nota en letra: ' + letra);
}