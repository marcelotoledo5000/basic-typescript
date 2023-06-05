// class name, attributes and constructor method

class Animal {
  // name: string // with explicit declaration
  constructor(public name: string, public color: string) {
    // this.name = name
  }
}

let myAnimal: Animal = new Animal('Dog', 'White')

console.log(myAnimal.name)
console.log(myAnimal.color)
console.log(myAnimal)
