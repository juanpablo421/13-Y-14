const claves = ['juan', 'juanes', 'luis suarez',];
let intentos = 0;

function inicioSesion(clave) {
  if (claves.includes(clave)) {
    console.log('***********************************************'.green)
    console.log('ACCESO CONCEDIDO');
    console.log('***********************************************'.green)
  } else {
    intentos++;
    console.log('***********************************************'.green)
    console.log('ACCESO DENEGADO');
    console.log('***********************************************'.green)
    
    if (intentos >= 3) {
      mostrarAlertaIntruso();
    }
  }
}

function mostrarAlertaIntruso() {
  require('colors'); 
  console.log('/////////////////////////////////////////////////////'.red.bgWhite)
  console.log('¡ALERTA INTRUSO!');
  console.log('*****************************************************'.red.bgWhite)
}

function minimoMaximo(numeros) {
  if (!numeros || numeros.length === 0) {
    console.log(colors.red('El arreglo de números está vacío.'));
    return;
  }

  let minimo = numeros[0];
  let maximo = numeros[0];
  let suma = 0;

  for (const numero of numeros) {
    if (numero < minimo) {
      minimo = numero;
    }
    if (numero > maximo) {
      maximo = numero;
    }
    suma += numero;
  }

  const promedio = suma / numeros.length;

  console.log(('Número menor:'), minimo);
  console.log(('Número mayor:'), maximo);
  console.log(('Promedio:'), promedio);
}

module.exports = {
  inicioSesion,
  minimoMaximo,
};
