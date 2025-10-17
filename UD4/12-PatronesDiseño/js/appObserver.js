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
            if (!this.#observers.includes(observer)){
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
    // crear la clase del AnalogSensor que hereda de Sensor
    class AnalogSensor extends Sensor{
        #tipo;
        constructor(id){
            super(id);
            this.#tipo = "analog"
        }  
        lectura(){
            //simular la temperatura
            const temp=(Math.random()* (30-15+1))+15
            //llamar al método notificar de la clase base Sensor
            this.notificar({id:this.id, tipo:this.#tipo, value:temp.toFixed(2)})
        }  

    }
    //clase SensorFactory
    class SensorFactory{
        static crearSensor(tipo, id){
            switch (tipo.toLocaleLowerCase()){
                case 'digital':
                    return new DigitalSensor(id);
                case 'analog':
                    return new AnalogSensor(id);
            }
        }
    }
    //Crear la clase observador Monitor. Receptor de las notificaciones
    class Monitor{
        #sensors;
        constructor (){ //Singlenton
            if (Monitor.instance){
                return Monitor.instance
            }
            this.#sensors =[];
            Monitor.instance=this;
        }
        addSensor(sensor){
           this.#sensors.push(sensor) ;
           sensor.addObserver(this);
        }
        delSensor(sensor){
            this.#sensors=this.#sensors.filter(sen=>!sen !==sensor);
            sensor.removeObserver(this);
        }
        //Método de notificaciones. Es llamado automáticamente por los sensores
        update(data){
            console.log(`Monitor recibió datos: Sensor: ${data.id}, tipo: ${data.tipo}, temperatura: ${data.value}`);
        }
    }
    return{
        Monitor,
        SensorFactory
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
console.log(monitor);
//Simular las lecturas de los sensores
setInterval(()=>{
    sensor1.lectura();
    sensor2.lectura();
    sensor3.lectura();
})
