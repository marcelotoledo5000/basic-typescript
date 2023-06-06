// class with interface

// enum fuel {
//   gasoline = 'gasoline',
//   alcohol = 'alcohol'
// }

// may be include attributes or methods
interface VehicleInterface {
  brand: string
  model: string
  year: number
  tank: number // tank capacity in liters
  fuel: string // gasoline or alcohol
  // fuel: enum { gasoline = 'gasoline', alcohol = 'alcohol' };
  // fuel: enum { gasoline, alcohol }
}

class Vehicle implements VehicleInterface {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
    public tank: number,
    public fuel = 'gasoline'
  ) { }

  consumption() { // consumption average
    let average: number

    if (this.fuel == 'gasoline') {
      average = this.year / 75 / 2
      console.log(`Fuel consumption with gasoline is: ${average}`)
      return average
    } else {
      average = this.year / 75 / 3
      console.log(`Fuel consumption with gasoline is: ${average}`)
      return average
    }
  }

  range() { // average distance with a tank
    if (this.fuel == 'gasoline') {
      return `Fuel consumption is: ${this.tank * this.consumption()}`
    } else {
      return `Fuel consumption is: ${this.tank * this.consumption()}`
    }
  }
}

let myVehicle: Vehicle = new Vehicle('Honda', 'Fit', 2010, 47, 'alcohol')
let myVehicle2: Vehicle = new Vehicle('Honda', 'Fit', 2015, 47, 'gasoline')

console.log(myVehicle.brand)
console.log(myVehicle.model)
console.log(myVehicle.year)
console.log(myVehicle)
console.log(myVehicle.consumption())
console.log(myVehicle2)
console.log(myVehicle2.consumption())

// inheritance: car and motorcycle
class Motorcycle extends Vehicle {
  // wheels: number
  // engine: number // engine capacity
  // constructor(public wheels: number, public engine: number) {}
  consumption() {
    let average: number
    average = this.year / 50
    console.log(`Fuel consumption is: ${average}`)
    return average
    // return `Fuel consumption is: ${this.tank * 35}`
  }
}

let myMotorcycle = new Motorcycle('Honda', 'XLX', 2000, 12)

console.log(myMotorcycle)
console.log(myMotorcycle.consumption())
