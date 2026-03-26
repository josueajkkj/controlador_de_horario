class Pausa {
    constructor(tipo, duracionMinutos) {
        this.tipo = tipo;
        this.duracionMinutos = duracionMinutos;
    }

    mostrarPausa() {
        return `Pausa: ${this.tipo} - ${this.duracionMinutos} minutos`;
    }
}

// Prueba
const pausa1 = new Pausa("Almuerzo", 45);
console.log(pausa1.mostrarPausa());