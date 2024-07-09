class Empleado {
    constructor(nombre, edad, sueldo) {
        this.id = Empleado.generarIdEmpleado(); 
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
    }

    calcularSalarioAnual() {
        let salarioAnual = this.sueldo * 12;
        console.log(`ID del empleado ${this.nombre}: ${this.id}`);
        console.log(`Salario anual de ${this.nombre}: ${salarioAnual.toFixed(2)}`); 
    }

    static generarIdEmpleado() {
        if (!this.nextId) {
            this.nextId = 1; 
        } else {
            this.nextId++; 
        }
        return this.nextId;
    }
}

document.querySelector('#registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let sueldo = parseFloat(document.querySelector('#sueldo').value); 
    let nombre = document.querySelector('#nombre').value;
    let edad = parseInt(document.querySelector('#edad').value); 

    let empleado = new Empleado(nombre, edad, sueldo);
    empleado.calcularSalarioAnual();
});

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento) {
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

    calcularSalarioAnual() {
        let salarioConBono = this.sueldo * 12 * 1.1;
        console.log(`ID del gerente ${this.nombre} (${this.departamento}): ${this.id}`);
        console.log(`Salario anual del gerente ${this.nombre} (${this.departamento}): ${salarioConBono.toFixed(2)}`); // Ajustar la precisión del salario anual con bono
    }
}

let gerente1 = new Gerente('Maria Antonieta', 20, 1000, 'Marketing');
gerente1.calcularSalarioAnual();
