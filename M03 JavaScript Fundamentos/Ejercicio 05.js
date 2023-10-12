/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0) {
      return 'Es positivo';
   } else if (num < 0) {
      return 'Es negativo';
   } else {
      return false;
   }
}
console.log(esPositivo(50));
console.log(esPositivo(-51));
console.log(esPositivo(0));
   


function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
      return str + '!'
}
console.log(agregarSimboloExclamacion('Hola Nakamas'));


function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:

   return nombre + ' ' + apellido;
}
console.log(combinarNombres("MonkeyD","Luffy")); 


function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return 'Hola ' + nombre + '!';
}
console.log(obtenerSaludo("luffy"));

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return alto * ancho;
}
  
   var alto = 5;
   var ancho = 10;
   var area = obtenerAreaRectangulo(alto, ancho);
   console.log(area); 
   


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return lado *4
}
   var longitudLado = 5;
   var perimetro = retornarPerimetro(longitudLado);
   console.log(perimetro);
   


function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return base * altura / 2;
}

   var base = 16;
   var altura = 4;
   var area = areaDelTriangulo(base, altura);
   console.log(area); 
   


function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
      return euro *1.20;
}


   var cantidadEuros = 300;
   var cantidadDolares = deEuroAdolar(cantidadEuros);
   console.log(cantidadDolares); 


function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
  
      
   if (letra.length === 1) {
      letra = letra.toLowerCase();
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
         return 'Es vocal';
      }
   }
   return 'Dato incorrecto';
}
   
   console.log(esVocal("a")); 
   console.log(esVocal("E")); 
   console.log(esVocal("B")); 
   


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
