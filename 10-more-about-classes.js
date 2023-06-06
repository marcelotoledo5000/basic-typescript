// class with interface
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
    function Vehicle(brand, model, year, tank, fuel) {
        if (fuel === void 0) { fuel = 'gasoline'; }
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.tank = tank;
        this.fuel = fuel;
    }
    Vehicle.prototype.consumption = function () {
        var average;
        if (this.fuel == 'gasoline') {
            average = this.year / 75 / 2;
            console.log("Fuel consumption with gasoline is: ".concat(average));
            return average;
        }
        else {
            average = this.year / 75 / 3;
            console.log("Fuel consumption with gasoline is: ".concat(average));
            return average;
        }
    };
    Vehicle.prototype.range = function () {
        if (this.fuel == 'gasoline') {
            return "Fuel consumption is: ".concat(this.tank * this.consumption());
        }
        else {
            return "Fuel consumption is: ".concat(this.tank * this.consumption());
        }
    };
    return Vehicle;
}());
var myVehicle = new Vehicle('Honda', 'Fit', 2010, 47, 'alcohol');
var myVehicle2 = new Vehicle('Honda', 'Fit', 2015, 47, 'gasoline');
console.log(myVehicle.brand);
console.log(myVehicle.model);
console.log(myVehicle.year);
console.log(myVehicle);
console.log(myVehicle.consumption());
console.log(myVehicle2);
console.log(myVehicle2.consumption());
// inheritance: car and motorcycle
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // wheels: number
    // engine: number // engine capacity
    // constructor(public wheels: number, public engine: number) {}
    Motorcycle.prototype.consumption = function () {
        var average;
        average = this.year / 50;
        console.log("Fuel consumption is: ".concat(average));
        return average;
        // return `Fuel consumption is: ${this.tank * 35}`
    };
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle('Honda', 'XLX', 2000, 12);
console.log(myMotorcycle);
console.log(myMotorcycle.consumption());
