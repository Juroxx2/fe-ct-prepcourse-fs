/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   
    return string;
}
const resultado = devolverString("Hola, mundo");
console.log(resultado);

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}
const resultados = suma(5, 3);
console.log(resultados);




function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
const resto = resta(8 , 5);
console.log(resto);


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
  return x/y;
}
const Divide = divide(4,2);
console.log(Divide);


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
  return x*y;
}
const times = multiplica(5,4);
console.log(times);


function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
  return x % y;
}
const obtener= obtenerResto(17,7);
console.log(obtener);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
