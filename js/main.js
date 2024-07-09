class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar() {
        console.log(this.velocidad * 10);
    }

    static convertirKmHEnMph(velocidadKmH) {
        return velocidadKmH / 1.60934;
    }
}

document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let velocidad = parseFloat(document.querySelector('#velocidad').value); 
    let marca = document.querySelector('#marca').value;
    let modelo = document.querySelector('#modelo').value;

    let nuevoVehiculo = new Vehiculo(marca, modelo, velocidad);
    nuevoVehiculo.acelerar();

    let velocidadMph = Vehiculo.convertirKmHEnMph(velocidad);
    console.log(`Velocidad en Mph: ${velocidadMph}`);
});

class Coche extends Vehiculo {
    constructor(velocidad, marca, modelo, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar() {
        console.log(this.velocidad * 20);
    }
}

let coche1 = new Coche(10, "Mazda", "2020", "Gasolina");
coche1.acelerar();
