//Base Function Vehicle

abstract class Vehicle {
    constructor(
        private _make: string,
        private _model: string,
        private _year: number,
        private _rented: boolean = false
        ) {}

        get make(): string{
            return this._make;
        }

        get model(): string{
            return this._model;
        }
        
        get year(): number{
            return this._year;
        }

        get rented(): boolean{
            return this._rented;
        }

        set setRented(rented: boolean) {
            this._rented = rented;
        }

        public abstract rentalRate(): number

        public rent(): void{
            if(this._rented){
                console.log(`Sorry the ${this.make} ${this.model} is already rented.`);
            }
            else{
                this._rented = true;
                console.log(`You have rented ${this.make} ${this.model}.`);
            }
        }

        public return(): void{
            if(this._rented){
                this._rented = false
                console.log(`Thank You for returning the ${this.make} ${this.model}.`);
            }
            else{
                console.log(`The ${this.make} ${this.model}is not been rented yet.`);
            }
        }
}

// SubClass Car

class Car extends Vehicle{
    private numSeats: number;
    constructor(_make: string, _model: string,_year: number, numseats: number){
        super(_make,_model,_year);
        this.numSeats = numseats;
    }
    public rentalRate(): number {
        return 50; 
    }
    
    public getNumSeats(): number {
        return this.numSeats;
    }
}

// SubClass Truck

class Truck extends Vehicle{
    private cargoCapacity: number;
    constructor(_make: string, _model: string,_year: number, cargoCapacity: number){
        super(_make,_model,_year);
        this.cargoCapacity = cargoCapacity;
    }
    public rentalRate(): number {
        return 100; 
    }
    
    public getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}

// SubClass MotorCycle

class MotorCycle extends Vehicle{
    private engineSize: number;
    constructor(_make: string, _model: string,_year: number, engineSize: number){
        super(_make,_model,_year);
        this.engineSize = engineSize;
    }
    public rentalRate(): number {
        return 25; 
    }
    
    public getEngineSize(): number {
        return this.engineSize;
    }
}

//Test Examples

console.log("car rent")

const car = new Car('Toyota', 'Camry', 2021, 5);
console.log(`The rental rate for the ${car.getNumSeats()} ${car.model} is $${car.rentalRate()} per day.`);
car.rent(); // "You have rented the Toyota Camry."
car.rent(); // "Sorry, the Toyota Camry is already rented."
car.return(); // "Thank you for returning the Toyota Camry."


console.log("truck rent")

const truck = new Truck('Ford', 'F-150', 2022, 1000);
console.log(`The rental rate for the ${truck.getCargoCapacity()} ${truck.model} is $${truck.rentalRate()} per day.`);
truck.rent(); // "You have rented the Toyota Camry."
truck.rent(); // "Sorry, the Toyota Camry is already rented."
truck.return(); // "Thank you for returning the Toyota Camry."


console.log("motorcycle rent")

const motorcycle = new MotorCycle('Sultan', 'Yamaha', 2023, 2000);
console.log(`The ${motorcycle.make} ${motorcycle.model} has a ${motorcycle.getEngineSize()}cc engine.`);
motorcycle.rent(); // "You have rented the Sultan Yamaha."
motorcycle.rent(); // "Sorry, the Sultan Yamaha is already rented."
motorcycle.return(); // "Thank you for returning the Sultan Yamaha."