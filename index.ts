// 1. Crear una interfaz “Animal” que posea el atributo “nombre”, así como también la
// definición de un método “gritar” que retorne un string que representa el ruido que
// hace el animal al gritar.

// 2. Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”.

// 3. Crear una función “describirAnimal” que reciba como parámetro un objeto de tipo
// “Animal” e imprima en la consola “El animal [nombre del animal] hace [ruido que
// hace el animal al gritar]”. Hacer uso del método “gritar” y el acceso a la propiedad
// “nombre” para cumplir el objetivo.

// creo el enum con dias de la semana.
enum diasSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo"
}

// creo variable que solo acepte numero o string.
let dato: string | number;

interface Animal {
  nombre: string;
  gritar(): string;
}

class Perro implements Animal {
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  nombre: string;
  gritar(): string {
    return "Guau";
  }
}

class Gato implements Animal {
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  nombre: string;
  gritar(): string {
    return "Miau";
  }
}

class Vaca implements Animal {
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  nombre: string;
  gritar(): string {
    return "Muu";
  }
}

function describirAnimal(animal: Animal) {
  console.log("El animal " + animal.nombre + " hace " + animal.gritar());
}

const perro = new Perro("Bobby");
const gato = new Gato("Mishi");
const vaca = new Vaca("Lola");

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

/*
const hoyEs: diasSemana = diasSemana.Lunes;
//pruebo enum
console.log("Hoy es:", hoyEs);*/

// primero le pongo el nombre del mejor jugador de la historia.
dato = "Messi";
console.log(dato);

// despues lo remplazo con 10.
dato = 10;
console.log(dato);

// 8. Clase gen que implementa la interfaz Fila
interface Fila<T> {
  agregar(elemento: T): void;
  remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  remover(): T | undefined {
    return this.elementos.shift();
  }
}

// 9. Fila para numeros, strings y animales
const filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();
const filaStrings: FilaGenerica<string> = new FilaGenerica<string>();
const filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

// 10. Agregar elementos y remover
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

filaNumeros.agregar(1);
filaNumeros.agregar(2);
filaNumeros.agregar(3);

filaStrings.agregar("hola");
filaStrings.agregar("mundo");
filaStrings.agregar("typescript");

filaAnimales.remover();
filaNumeros.remover();
filaStrings.remover();