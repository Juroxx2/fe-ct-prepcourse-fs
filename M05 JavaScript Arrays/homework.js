/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
const miArreglo = [10,40, 60, 90, 100];
console.log(devolverPrimerElemento(miArreglo));;


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [array.length-1];
}
const Arreglo = [10,40, 60, 90, 100];
console.log( devolverUltimoElemento(Arreglo));


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
const parametro = [1,2,3,4,5,6];
console.log(obtenerLargoDelArray(parametro));


function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const resultado = [];
   for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] + 1);
   }
   return resultado;
}
const result = [14, 26, 32, 71];
const resultado = incrementarPorUno(result);
console.log(resultado);


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
const Agregar = [10, 20, 30];
const Elemento = 40;
const recibo = agregarItemAlFinalDelArray(Agregar, Elemento);
console.log(recibo);



function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
const agregado = [13, 26, 38];
const elementos = 1;
const recive = agregarItemAlComienzoDelArray(agregado, elementos);
console.log(recive);


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}
const friends = ['Hey baby', 'How you doing?'];
const frase = dePalabrasAFrase(friends);
console.log(frase);


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true; 
      }
   }
   return false; 
}
const numeros = [10, 20, 30, 40];
const elementoBuscado = 20;
console.log(arrayContiene(numeros, elementoBuscado));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];
   }
   return suma;
}
const cadenanum = [10, 20, 30, 40];
const Queda = agregarNumeros(cadenanum);
console.log(Queda);


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
   }
   const promedio = suma / resultadosTest.length;
   return promedio;
}
const notas = [8, 9, 7, 85];
const promedio = promedioResultadosTest(notas);
console.log(promedio);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   
   let maximo = arrayOfNums[0]; 
   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > maximo) {
         maximo = arrayOfNums[i]; 
      }
   }
   return maximo;
}
const Chain = [1, 2, 3, 5, 4];
const maximo = numeroMasGrande(Chain);
console.log(maximo);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0];
   } else {
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
         producto *= arguments[i];
      }
      return producto;
   }
}

console.log(multiplicarArgumentos()); 
console.log(multiplicarArgumentos(5)); 
console.log(multiplicarArgumentos(2, 3, 4));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let count = 0; 

   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         count++; 
      }
   }

   return count; 
}

const myArray = [10, 25, 5, 30, 20, 15];
const cantidadElementosMayoresA18 = cuentoElementos(myArray);
console.log(cantidadElementosMayoresA18);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }
}


console.log(diaDeLaSemana(1));
console.log(diaDeLaSemana(3)); 
console.log(diaDeLaSemana(7)); 


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numStr = num.toString();
   return numStr[0] === '9';
}
console.log(empiezaConNueve(956));
console.log(empiezaConNueve(56789));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0) {
      return true;
   }
   const primerElemento = array[0];
   for (let i = 1; i < array.length; i++) { 
      if (array[i] !== primerElemento) {
         return false;
      }
   }
   return true;
}

console.log(todosIguales([5, 5, 5, 5]));
console.log(todosIguales([2, 4, 2, 2]));


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesPedidos = ["Enero", "Marzo", "Noviembre"];
   const mesesEncontrados = [];

   for (let i = 0; i < array.length; i++) {
      if (mesesPedidos.includes(array[i])) {
         mesesEncontrados.push(array[i]);
      }
   }

   if (mesesEncontrados.length === 3) {
      return mesesEncontrados; 
   } else {
      return "No se encontraron los meses pedidos";
   }
}
const mesesDesordenados = ["Marzo", "Abril", "Enero", "Julio", "Noviembre", "Diciembre"];
console.log(mesesDelAño(mesesDesordenados));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const resultados = [];

   for (let i = 0; i <= 10; i++) {
      resultados.push(6 * i);
   }

   return resultados;
}

const tablaDel6 = tablaDelSeis();
console.log(tablaDel6);


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const valoresMayoresACien = [];

   for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         valoresMayoresACien.push(array[i]);
      }
   }

   return valoresMayoresACien;
}

const arregloOriginal = [50, 75, 110, 90, 120, 200];
const mayoresACien = mayorACien(arregloOriginal);
console.log(mayoresACien);


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const resultado = [];

   for (let i = 0; i < 10; i++) {
      num += 2;
      resultado.push(num);

      if (num === i) {
         return "Se interrumpió la ejecución";
      }
   }

   return resultado;
}
console.log(breakStatement(3)); 
console.log(breakStatement(1));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const resultado = [];

   for (let i = 0; i < 10; i++) {
      if (i === 5) {
         continue; 
      }

      num += 2;
      resultado.push(num);
   }

   return resultado;
}
console.log(continueStatement(3));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
