/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x ===y;
}
console.log(sonIguales(10, 10));
console.log(sonIguales(7, 13));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
  return str1.length=== str2.length; 
}
console.log(tienenMismaLongitud("Rolo","Rolo"));
console.log(tienenMismaLongitud("Rolo","fantasma"));

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   return num < 90;
}
console.log(menosQueNoventa(85));
console.log(menosQueNoventa(90));

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   return num > 50;
}
console.log(mayorQueCincuenta(52));
console.log(mayorQueCincuenta(50));



function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2==0;
}
console.log(esPar(4));
console.log(esPar(7));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   return num % 2 == 1;
}
console.log(esImpar(5));
console.log(esImpar(2));


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
