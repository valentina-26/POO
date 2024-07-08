class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido() {
        console.log(`El animal hace ${this.sonido}`);
    }


}


document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nombre = document.querySelector('#nombre').value;
    let edad = document.querySelector('#sonido').value;

    let nuevoanimal = new Animal(nombre, sonido);
    nuevoanimal.saludar();
});

// Crea una instancia de la clase animal llamada animal1
let animal1 = new Animal("vaca", "muuuuuu");
animal1.hacerSonido();



// Clase perro que hereda de Persona
class Perro extends Animal {
    constructor(nombre, sonido,raza) {
        super(nombre, sonido);
        this.raza = raza;
    }

    moverCola() {
        console.log(`está moviendo la cola.`);

        return `está moviendo la cola.`;
    }
}
