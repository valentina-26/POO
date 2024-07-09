class Personaje{
    #nombre;
    #Fuerza;
    constructor(nombre,fuerza){
        this.nombre = nombre;
        this.fuerza = fuerza;
    }

    presentarse() {
        console.log(`Personaje ${this.nombre}, nivel de fuerza: ${this.fuerza}`);
    }
}

class Jedi extends Personaje {
    constructor(fuerza,nombre){
    super(fuerza,nombre)
}
    usarFuerza(){
        console.log('Jedi esta usando  su fuerza para proteger la galaxia')
    }

    entrenar(){
        console.log(`Incrementando nivel de fuerza ${this.fuerza + 10}`)
    }
}

class sith extends Personaje{
    constructor(fuerza,nombre){
        super(fuerza,nombre)
    }

    usarFuerza(){
        console.log('sith esta utilizando su fuerza para proteger la galaxia')
    }

    corromper(){
        console.log(`Disminuyendo fuerza:-5 unidades :${this.fuerza - 5}`)
    }
}

class MaestroJedi extends Jedi{
    constructor(fuerza,nombre){
        super(fuerza,nombre)
    }

    enseñar(){
        console.log(`Incrementando nivel de fuerza ${this.fuerza + 20}`)
    }

}

let yoda = new MaestroJedi (10,"nosequenombreponer")
yoda.presentarse().usarFuerza().enseñar()

let darthVader = new sith (8,"otronombre")
darthVader.presentarse().usarFuerza().corromper()


const batalla = (Personaje1,Personaje2) =>{
    console.log(`inicio de la batalla....`)
    // if (Personaje1.fuerza > Personaje2.fuerza){
    //     console.log(`El personaje1 fue el conquistador de la galaxia`)
    // }else{
    //     console.log(`El Personaje2 fue el conquistador de la galaxia`)
    // }
} 