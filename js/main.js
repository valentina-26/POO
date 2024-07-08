class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        alert(`Hola Soy ${this.nombre}`);
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