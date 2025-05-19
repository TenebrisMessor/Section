function generarCombinacion() {
  const letras = ['A', 'B', 'C'];
  let primera = letras[Math.floor(Math.random() * letras.length)];
  let segunda;

  // Asegurarse de que no se repita la letra
  do {
    segunda = letras[Math.floor(Math.random() * letras.length)];
  } while (segunda === primera);

  const resultado = `${primera} y ${segunda}`;
  document.getElementById("resultado").textContent = resultado;
}
