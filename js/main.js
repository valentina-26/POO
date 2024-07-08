class Figura {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }

    calcularArea() {
        console.log(`El area de la figura es ${this.area}`);
    }


}


document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let color = document.querySelector('#color').value;
    let area = document.querySelector('#area').value;

    let nuevafigura = new Figura(color, area);
    nuevafigura.calcularArea();
});


let figura1 = new Figura("Rosa", "24 cm");
figura1.calcularArea();



class Circulo extends Figura {
    constructor(color, area,radio) {
        super(color, area);
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}


let circulo1 = new Circulo("Rojo", "10 cm", "5 cm");
circulo1.calcularArea()

class Rectangulo extends Figura {
    constructor(color, area,largo, ancho) {
    super(color,area);
    this.largo = largo;
    this.ancho = ancho;
}
    calcularArea() {
        return this.largo * this.ancho;
}
}

let recatangulo1 = new Rectangulo("verde","20cm","40cm","20cm");
recatangulo1.calcularArea()

