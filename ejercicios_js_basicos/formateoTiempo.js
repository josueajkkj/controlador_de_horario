function formatearTiempo(minutosTotales) {
  if (minutosTotales < 0) {
    console.log(" Los minutos no pueden ser negativos");
    return "00:00";
  }
  const horas = Math.floor(minutosTotales / 60);
  const minutos = minutosTotales % 60;
  const horasFormato = String(horas).padStart(2, "0");
  const minutosFormato = String(minutos).padStart(2, "0");
  console.log(` Tiempo formateado: ${horasFormato}:${minutosFormato}`);
  return `${horasFormato}:${minutosFormato}`;
}


formatearTiempo(90);
formatearTiempo(480);
formatearTiempo(-10);
