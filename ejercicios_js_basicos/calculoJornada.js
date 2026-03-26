function calcularJornada(horaEntrada, horaSalida, minutosPausa) {
  if (horaSalida <= horaEntrada) {
    console.log(" La hora de salida debe ser mayor a la entrada");
    return 0;
  }
  const totalMinutos = (horaSalida - horaEntrada) * 60;
  const minutosEfectivos = totalMinutos - minutosPausa;
  const horas = Math.floor(minutosEfectivos / 60);
  const minutos = minutosEfectivos % 60;
  console.log(`✅ Jornada efectiva: ${horas}h ${minutos}min`);
  return minutosEfectivos;
}


calcularJornada(8, 17, 60);
calcularJornada(9, 18, 45);
calcularJornada(10, 8, 30);
