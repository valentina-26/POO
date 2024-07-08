class Persona {
    constructor(nombre, edad, ) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    set setnombre(nombre){
        this.nombre=nombre;
    }

    set setedad(edad){
        this.edad=edad;
    }

    set setsexo(sexo){
        this.sexo=sexo;
    }

    get getnombre(){
        return this.ojos
    }

    get getedad(){
        return this.edad
    }

    get getsexo(){
        return this.sexo
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