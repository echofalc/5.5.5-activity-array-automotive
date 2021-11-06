// import '/Users/erickfalconi/Documents/js/5.5.5-activity-array-automotive/vehicleBaseClass.js'
import Vehicle from './vehicleBaseClass.js';

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    loadPassanger(num) {
        if (num + this.passenger < this.maximumPassengers) {
            return this.availableRoom == true;
        } else {
            return this.availableRoom == false;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Engine started...")
            return this.started == true;
        } else {
            console.log("No fuel...")
            return this.started == false;
        }
    }

    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService;
        }
    }
}
