class Jornada {
    constructor(fecha, horasTrabajadas) {
        this.fecha = fecha;
        this.horasTrabajadas = horasTrabajadas;
    }
}

function generarReporte(jornadas) {
    console.log("=== REPORTE DE JORNADAS ===");

    jornadas.forEach((jornada, index) => {
        console.log(
            `${index + 1}. Fecha: ${jornada.fecha} | Horas trabajadas: ${jornada.horasTrabajadas}`
        );
    });
}

// Simulación de array de jornadas
const jornadas = [
    new Jornada("2026-03-24", "8h 00m"),
    new Jornada("2026-03-25", "7h 30m"),
    new Jornada("2026-03-26", "8h 15m")
];

// Prueba
generarReporte(jornadas);