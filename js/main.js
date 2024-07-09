class Personaje {
    #nombre;
    #fuerza;

    constructor(nombre, fuerza) {
        this.#nombre = nombre;
        this.#fuerza = fuerza;
    }

    get nombre() {
        return this.#nombre;
    }

    get fuerza() {
        return this.#fuerza;
    }

    set fuerza(valor) {
        this.#fuerza = valor;
    }

    presentarse() {
        this.imprimirMensaje(`Personaje ${this.#nombre}, nivel de fuerza: ${this.#fuerza}`);
    }

    imprimirMensaje(mensaje) {
        const consoleDiv = document.querySelector("#console");
        const messageElement = document.createElement("p");
        messageElement.textContent = mensaje;
        consoleDiv.appendChild(messageElement);
    }
}

class Jedi extends Personaje {
    usarFuerza() {
        this.imprimirMensaje(`${this.nombre} está utilizando la Fuerza para proteger la galaxia`);
    }

    entrenar() {
        this.fuerza += 10;
        this.imprimirMensaje(`${this.nombre} ha incrementado su nivel de fuerza a ${this.fuerza}`);
    }
}

class Sith extends Personaje {
    usarFuerza() {
        this.imprimirMensaje(`${this.nombre} está utilizando la Fuerza para conquistar la galaxia`);
    }

    corromper() {
        this.fuerza -= 5;
        this.imprimirMensaje(`${this.nombre} ha disminuido su nivel de fuerza a ${this.fuerza}`);
    }
}

class MaestroJedi extends Jedi {
    enseñar() {
        this.fuerza += 20;
        this.imprimirMensaje(`${this.nombre} ha incrementado su nivel de fuerza a ${this.fuerza}`);
    }
}

const yoda = new MaestroJedi("Yoda", 10);
const darthVader = new Sith("Darth Vader", 8);

document.querySelector("#yodaPresentarse").addEventListener("click", () => yoda.presentarse());
document.querySelector("#yodaUsarFuerza").addEventListener("click", () => yoda.usarFuerza());
document.querySelector("#yodaEnseñar").addEventListener("click", () => yoda.enseñar());

document.querySelector("#vaderPresentarse").addEventListener("click", () => darthVader.presentarse());
document.querySelector("#vaderUsarFuerza").addEventListener("click", () => darthVader.usarFuerza());
document.querySelector("#vaderCorromper").addEventListener("click", () => darthVader.corromper());

const batalla = (personaje1, personaje2) => {
    const consoleDiv = document.querySelector("#console");
    consoleDiv.innerHTML = "";  // Clear previous messages
    consoleDiv.innerHTML += `<p>Inicio de la batalla...</p>`;

    personaje1.usarFuerza();
    personaje2.usarFuerza();

    if (personaje1 instanceof MaestroJedi) {
        personaje1.enseñar();
    } else if (personaje1 instanceof Sith) {
        personaje1.corromper();
    }

    if (personaje2 instanceof MaestroJedi) {
        personaje2.enseñar();
    } else if (personaje2 instanceof Sith) {
        personaje2.corromper();
    }

    if (personaje1.fuerza > personaje2.fuerza) {
        consoleDiv.innerHTML += `<p>${personaje1.nombre} ha conquistado la galaxia!</p>`;
    } else {
        consoleDiv.innerHTML += `<p>${personaje2.nombre} ha conquistado la galaxia!</p>`;
    }
}

document.querySelector("#iniciarBatalla").addEventListener("click", () => batalla(yoda, darthVader));
