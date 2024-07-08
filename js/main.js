class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola Soy ${this.nombre}, tengo ${this.edad} y mi sexo es ${this.sexo}`);
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}


document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nombre = document.querySelector('#nombre').value;
    let edad = document.querySelector('#edad').value;
    let genero = document.querySelector('#genero').value;

    let nuevaPersona = new Persona(nombre, edad, genero);
    nuevaPersona.saludar();
});

// Crea una instancia de la clase Persona llamada persona1
let persona1 = new Persona("Ana", 18, "Femenino");
persona1.saludar();

// Llama al método estático esMayorDeEdad() pasando la edad de persona1
console.log(Persona.esMayorDeEdad(persona1.edad));

// Clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Hola, estoy estudiando ${this.carrera}`);
    }
}

// Crea una instancia de Estudiante y llama al método estudiar
let estudiante1 = new Estudiante("Pedro", 21, "Masculino", "Ingeniería");
estudiante1.saludar();
estudiante1.estudiar();
