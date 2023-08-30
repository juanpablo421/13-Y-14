const { inicioSesion, minimoMaximo } = require('./proy_modules/functions.js');
const colors = require('colors');

inicioSesion('juan'); 
inicioSesion('juanes'); 
inicioSesion('lus suarez'); 

const numeros = [8, 6,-89, 3, 8, 4531];
console.log('Análisis del arreglo de números:', numeros);

minimoMaximo(numeros);
