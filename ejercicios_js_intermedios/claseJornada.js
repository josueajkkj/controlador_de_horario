class Jornada {
    constructor(fecha, horaEntrada, horaSalida) {
        this.fecha = fecha;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
    }

    calcularHorasTrabajadas() {
        const [entradaH, entradaM] = this.horaEntrada.split(":").map(Number);
        const [salidaH, salidaM] = this.horaSalida.split(":").map(Number);

        const minutosEntrada = entradaH * 60 + entradaM;
        const minutosSalida = salidaH * 60 + salidaM;

        const totalMinutos = minutosSalida - minutosEntrada;
        const horas = Math.floor(totalMinutos / 60);
        const minutos = totalMinutos % 60;

        return `${horas}h ${minutos}m`;
    }
}

// Prueba
const jornada1 = new Jornada("2026-03-26", "08:00", "17:30");
console.log(`Horas trabajadas: ${jornada1.calcularHorasTrabajadas()}`);