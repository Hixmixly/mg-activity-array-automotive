//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)



class Car  extends VehicleModule {
    constructor (make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers= 5;
        this.passengers= 0;
        this.numberOfWheels= 4;
        this.msximumSpeed= 160;
        this.fuel= 10;
        this.scheduleService= false;
        }
    
    loadPassenger(num){
        if(this.passengers < this.maxPassangers) {
            if ((num + this.maximumPassengers) <= this.masPassangers) {
                this.passenger =num;
                return this.passenger;
            } else {
                console.log (this.model + "" + this.make + "not enough space for all passangers");
            } 

        }  else {
            console.log(this.model +"" +this.make +"is full");
        }
    }

    start(){ 
        if (this.fuel > 0){
            console.log ("engine has started");
            return this.strared = true
        } else {
            console.log ("no fuel");
            return this.started = false;
        }

    }

    scheduleService(mileage) {
        console.log(){
            if (this.mileage > 3000) {
                this.scheduleService = true
                return this.scheduleService;
            }       
        }
    }
}




let myCar = new Car ("ford", "model-t", 2000, "blue", 3500 )
let myCar2= new Car ("bmw","gv20", 2024, "green", 1000 )
let myCar3= new Car ("audi", "a7", 2020, "black", 1747)

myCar.start()
myCar.loadPassenger(4)
myCar.stop()
myCar.checkService()

console.log(myCar)
console.log(myCar2)



