"use strict"
//Ejemplos con Intl.DateTimeFormat()

//declaración variables y constantes
const fechaHoy=new Date();
const fechaMilis=new Date(676767676767676);
const fechaCadena=new Date('12-12-2025');
const fechaParam=new Date(2025,8,25,12,23,43);

// Formateadores con Intl.DateTimeFormat
const formatoCorto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'short' });
const formatoMedio = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' });
const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', });
const formatoFechaCadena = new Intl.DateTimeFormat('es-ES', { 
  weekday: "long",  //"short", "narrow"
  day: "2-digit", // "numeric"
  month: "long", // "numeric", "2-digit", "short"
  year: "numeric", // "2-digit"
  
} );
const formatoTimeCadena = new Intl.DateTimeFormat('es-ES', { 
    hour: "numeric", //"2-digit"
  minute: "numeric", // "2-digit"
  second: "numeric", // "2-digit"
  hour12: false, //true  //false, formato 24 horas y true 12 horas AM/PM
} );

const formatoCompleto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'short', hour12:true });

// Mostrar fechas con formatos más legibles
document.writeln(`<h3>Fechas con formatos locales utilizando Intl.DateTimeFormat</h3>`);
document.writeln(`Hoy (formato corto): ${formatoCorto.format(fechaHoy)} <br>`);
document.writeln(`Hoy (formato medio): ${formatoMedio.format(fechaHoy)} <br>`);
document.writeln(`Hoy (formato largo): ${formatoLargo.format(fechaHoy)} <br>`);
document.writeln(`Hoy (Fecha formato largo cadena): ${formatoFechaCadena.format(fechaHoy)} <br>`);
document.writeln(`Hoy (Hora formato largo cadena): ${formatoTimeCadena.format(fechaHoy)} <br>`);
document.writeln(`Hoy (formato completo): ${formatoCompleto.format(fechaHoy)} <br>`);

//utilizar un objeto Intl.DateTimeFormat dentro del método toLocaleDateString
document.writeln(`Fecha toLocaleDateString(): ${fechaHoy.toLocaleDateString("es-ES", {
  weekday: "long",  //"short", "narrow"
  day: "2-digit", // "numeric"
  month: "long", // "numeric", "2-digit", "short"
  year: "numeric" // "2-digit"

})} <br>`);

// Sumar 24 días a la fecha actual
const fechaSumada = new Date(fechaHoy);
fechaSumada.setDate(fechaHoy.getDate() + 24);
document.writeln(`<h3>Suma de días</h3>`);
document.writeln(`Fecha de hoy + 24 días: ${formatoLargo.format(fechaSumada)} <br>`);

// Calcular los días que hay entre dos fechas
const fechaBase = new Date();
const diasTranscurridos = Math.floor((fechaSumada - fechaBase) / (1000 * 60 * 60 * 24));
document.writeln(`<h3>Diferencia de días</h3>`);
document.writeln(`Días entre ${formatoCorto.format(fechaBase)} y ${formatoLargo.format(fechaSumada)}: ${diasTranscurridos} días <br>`);