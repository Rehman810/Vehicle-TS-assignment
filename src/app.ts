abstract class Vehicle {
    constructor(
        private make: string,
        private model: string,
        private year: number,
        private rented: boolean = false
        ) {}

        public getMake(): string{
            return this.make;
        }

        public getModel(): string{
            return this.model;
        }
        
        public getYear(): number{
            return this.year;
        }

        public isRented(): boolean{
            return this.rented;
        }
}