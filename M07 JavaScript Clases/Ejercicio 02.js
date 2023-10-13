/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
   }

   detalle() {
      return {
         nombre: this.nombre,
         apellido: this.apellido,
         edad: this.edad,
         domicilio: this.domicilio
      };
   }
}
const persona = new Persona("Garp", "MonkeyD", 65, "123 east blue");
const detalles = persona.detalle();
console.log(detalles);


function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   class Persona {
      constructor(nombre, apellido, edad, domicilio) {
         this.nombre = nombre;
         this.apellido = apellido;
         this.edad = edad;
         this.domicilio = domicilio;
      }

      detalle() {
         return {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            domicilio: this.domicilio
         };
      }
   }

   return new Persona(nombre, apellido, edad, domicilio);
}

const nuevaPersona = crearInstanciaPersona("Ace", "D.Gold", 18, "54 Calle Dona");
console.log(nuevaPersona.detalle());


function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   class Persona {
      constructor(nombre, edad) {
         this.nombre = nombre;
         this.edad = edad;
      }
   }
   
   Persona.prototype.datos = function() {
      return `${this.nombre}, ${this.edad} años`;
   };
   
   
   const persona = new Persona("Garp", 65);
   console.log(persona.datos());
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
