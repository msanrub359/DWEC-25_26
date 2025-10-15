
ear = () => {
  for (let fila = 0; fila < 4; fila++) {
    aNumeros[fila] = []; //crear un array bidimensional
    for (let col = 0; col < 4; col++) {
      aNumeros[fila].push(Math.floor(Math.random() * 100)+1);
    }
  }
};
const mostrarFor = () => {
  document.writeln("-----For -------<br>");
  for (let fila = 0; fila < aNumeros.length; fila++) {
    for (let col = 0; col < aNumeros[fila].length; col++) {
      //document.writeln(`${aNumeros[fila][col]} `);
       document.writeln(`${aNumeros.at(fila).at(col)} `);
    }
    document.writeln(`<br> `);
  }
};
const mostrarForEach = () => {
  document.writeln("</br>-----For Each -------<br>");
  aNumeros.forEach(function(fila) {
    fila.forEach(elemento => {
      document.writeln(`${elemento} `);
    });

    document.writeln(`<br> `);
  });
};

//script
crear();
mostrarFor();
mostrarForEach();
