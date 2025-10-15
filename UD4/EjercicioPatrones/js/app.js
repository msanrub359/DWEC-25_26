"use strict"
//Patrón de Modulo
const SensorModule = (()=>{
    //clase Sensor (Sujeto). Emisor de notificaciones. Guarda una lista de observdores y les notifica cuando hay nuevos datos
    class Sensor {
        #id;
        #observers;
        constructor(id){
            this.#id = id;
            this.#observers =[];
        }

        get id(){
            return this.#id;
        }
        addObserver(observer){
            if (!this.#observers.include(observer)){
                this.#observers.push(observer)
            }
        }
        removeObserver(observer){
            this.#observers=this.#observers.filter(observador=> observador!=observer);
        }
        notificar (data){
            this.#observers.forEach(observador =>{
                observador.update(data)
            })
        }
        
    }
    // crear la clase del DigitalSensor que hereda de Sensor
    class DigitalSensor extends Sensor{
        #tipo;
        constructor(id){
            super(id);
            this.#tipo = "digital"
        }  
        lectura(){
            //simular la temperatura
            const temp=(Math.random()* (30-20+1))+20
            //llamar al método notificar de la clase base Sensor
            this.notificar({id:this.id, tipo:this.#tipo, value:temp.toFixed(2)})
        }  

    }
    return{
        Monitor
    }

})()

//app principal
//crear el objeto monitor (observador)
const  monitor = new SensorModule.Monitor();
//crear sensores
const sensor1 = SensorModule.SensorFactory.crearSensor("digital", 1);
const sensor2 = SensorModule.SensorFactory.crearSensor("analog", 2);
const sensor3 = SensorModule.SensorFactory.crearSensor("digital", 3);

//suscribir sensores al monitor
monitor.addSensor(sensor1);
monitor.addSensor(sensor2);
monitor.addSensor(sensor3);

//Simular las lecturas de los sensores
setInterval(()=>{
    sensor1.lectura();
    sensor2.lectura();
    sensor3.lectura();
})