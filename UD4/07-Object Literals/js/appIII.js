"use strict"; 
//declaraciones

//objeto literal, agrupar todo en una variable
const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red'
}
// //sellar
 Object.seal(electro); //no permite modificar la estructura pero sí el contenido
//  electro.disponible=true; //error
//  electro.color=100; //error
//  console.log({electro});
if (Object.isSealed(electro)){ //Devuelve true si está sellado
    electro.nombre="Horno"; 
    console.log(electro);
    
}else{
   console.log('No está sellado');
}

