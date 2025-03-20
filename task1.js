var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, year, speed) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }
    Vehicle.prototype.accelerate = function (amount) {
        this.speed += amount;
        console.log("This speed increased by ".concat(amount, ". The current speed is ").concat(this.speed));
    };
    Vehicle.prototype.brake = function (amount) {
        this.speed -= amount;
        console.log("This speed decreased by ".concat(amount, ". The current speed is ").concat(this.speed));
    };
    Vehicle.prototype.info = function () {
        console.log("This is the car ".concat(this.brand, " ").concat(this.model, ", ").concat(this.year, " year of production, ").concat(this.speed, " speed"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, year, speed, fuelType) {
        var _this = _super.call(this, brand, model, year, speed) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    Car.prototype.refuel = function () {
        console.log("This car was refueled with ".concat(this.fuelType));
    };
    return Car;
}(Vehicle));
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ElectricCar.prototype, "batteryLevel", {
        get: function () {
            return "".concat(this._batteryLevel, "%");
        },
        set: function (value) {
            if (value < 0 || value > 100) {
                throw new Error("Batterylevel must be between 0 and 100");
            }
            this._batteryLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    ElectricCar.prototype.charge = function (amount) {
        this._batteryLevel += amount;
    };
    ElectricCar.prototype.refuel = function () {
        console.log("This car was charged. The current charge is ".concat(this._batteryLevel));
    };
    return ElectricCar;
}(Car));
var newCar = new Car('Toyota', 'Corolla', 2009, 60, '92');
newCar.refuel();
newCar.accelerate(20);
newCar.brake(10);
newCar.info();
var newElectricCar = new ElectricCar('Tesla', 'Cybertrack', 2024, 100, 'electric');
newElectricCar.batteryLevel = 75;
newElectricCar.charge(25);
newElectricCar.refuel();
newElectricCar.info();
