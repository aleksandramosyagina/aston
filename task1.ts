class Vehicle {
    brand: string;
    model: string;
    year: number;
    protected speed: number;

    constructor(brand: string, model: string, year: number, speed: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    accelerate(amount: number) {
        this.speed += amount;
        console.log(`This speed increased by ${amount}. The current speed is ${this.speed}`)
    }

    brake(amount: number) {
        this.speed -= amount;
        console.log(`This speed decreased by ${amount}. The current speed is ${this.speed}`)
    }

    info() {
        console.log(`This is the car ${this.brand} ${this.model}, ${this.year} year of production, ${this.speed} speed`)
    }
}

class Car extends Vehicle {
    fuelType: string;

    constructor(brand: string, model: string, year: number, speed: number, fuelType: string) {
        super(brand, model, year, speed); 
        this.fuelType = fuelType; 
    }

    refuel() {
        console.log(`This car was refueled with ${this.fuelType}`)
    }
}


class ElectricCar extends Car {
    private _batteryLevel: number;

    get batteryLevel(): string {
        return `${this._batteryLevel}%`;
    }
    
    set batteryLevel(value: number) {
        if (value < 0 || value > 100) {
            throw new Error("Batterylevel must be between 0 and 100");
        }
        this._batteryLevel = value;
    }

    charge(amount: number) {
        this._batteryLevel += amount;
    }

    refuel() {
        console.log(`This car was charged. The current charge is ${this._batteryLevel}`)
    }
}

const newCar = new Car('Toyota', 'Corolla', 2009, 60, '92')
newCar.refuel()
newCar.accelerate(20);
newCar.brake(10);
newCar.info();


const newElectricCar = new ElectricCar('Tesla', 'Cybertrack', 2024, 100, 'electric');

newElectricCar.batteryLevel = 75;
newElectricCar.charge(25);
newElectricCar.refuel();
newElectricCar.info();