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
}