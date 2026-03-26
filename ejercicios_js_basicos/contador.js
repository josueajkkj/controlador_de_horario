

let horasTrabajadas = 0;

function incrementarHoras(horas) {
  if (horas <= 0) {
    console.log(" El valor debe ser mayor a 0");
    return horasTrabajadas;
  }
  horasTrabajadas += horas;
  console.log(` Horas acumuladas: ${horasTrabajadas}h`);
  return horasTrabajadas;
}


incrementarHoras(2);
incrementarHoras(3);
incrementarHoras(-1);
