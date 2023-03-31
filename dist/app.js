"use strict";
//Base Function Vehicle
class Vehicle {
    constructor(_make, _model, _year, _rented = false) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set setRented(rented) {
        this._rented = rented;
    }
    rent() {
        if (this._rented) {
            console.log(`Sorry the ${this.make} ${this.model} is already rented.`);
        }
        else {
            this._rented = true;
            console.log(`You have rented ${this.make} ${this.model}.`);
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            console.log(`Thank You for returning the ${this.make} ${this.model}.`);
        }
        else {
            console.log(`The ${this.make} ${this.model}is not been rented yet.`);
        }
    }
}
// SubClass Car
class Car extends Vehicle {
    constructor(_make, _model, _year, numseats) {
        super(_make, _model, _year);
        this.numSeats = numseats;
    }
    rentalRate() {
        return 50;
    }
    getNumSeats() {
        return this.numSeats;
    }
}
// SubClass Truck
class Truck extends Vehicle {
    constructor(_make, _model, _year, cargoCapacity) {
        super(_make, _model, _year);
        this.cargoCapacity = cargoCapacity;
    }
    rentalRate() {
        return 100;
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
}
// SubClass MotorCycle
class MotorCycle extends Vehicle {
    constructor(_make, _model, _year, engineSize) {
        super(_make, _model, _year);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 25;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
//Test Examples
console.log("car rent");
const car = new Car('Toyota', 'Camry', 2021, 5);
console.log(`The rental rate for the ${car.getNumSeats()} ${car.model} is $${car.rentalRate()} per day.`);
car.rent(); // "You have rented the Toyota Camry."
car.rent(); // "Sorry, the Toyota Camry is already rented."
car.return(); // "Thank you for returning the Toyota Camry."
console.log("truck rent");
const truck = new Truck('Ford', 'F-150', 2022, 1000);
console.log(`The rental rate for the ${truck.getCargoCapacity()} ${truck.model} is $${truck.rentalRate()} per day.`);
truck.rent(); // "You have rented the Toyota Camry."
truck.rent(); // "Sorry, the Toyota Camry is already rented."
truck.return(); // "Thank you for returning the Toyota Camry."
console.log("motorcycle rent");
const motorcycle = new MotorCycle('Sultan', 'Yamaha', 2023, 2000);
console.log(`The rental rate for the ${motorcycle.getEngineSize()}cc ${motorcycle.make} ${motorcycle.model} is $${motorcycle.rentalRate()} per day .`);
motorcycle.rent(); // "You have rented the Sultan Yamaha."
motorcycle.rent(); // "Sorry, the Sultan Yamaha is already rented."
motorcycle.return(); // "Thank you for returning the Sultan Yamaha."
//# sourceMappingURL=app.js.map