//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

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


//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

let myCar = new Car ("ford", "model-t", 2000, "blue", 3500 )

let myCar = Car ("bmw","gv80", 2024, "red", 1000)

myCar.start()
myCar.loadPassenger(4)
myCar.stop()
myCar.checkService()

console.log(myCar)










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
