let minutosDisponibles = 480;

function restarPausa(minutos) {
  if (minutos <= 0) {
    console.log(" Los minutos deben ser mayores a 0");
    return minutosDisponibles;
  }
  if (minutos > minutosDisponibles) {
    console.log(" No puedes pausar más tiempo del disponible");
    return minutosDisponibles;
  }
  minutosDisponibles -= minutos;
  console.log(`✅ Pausa: ${minutos} min | Disponibles: ${minutosDisponibles} min`);
  return minutosDisponibles;
}


restarPausa(30);
restarPausa(15);
restarPausa(-5);
