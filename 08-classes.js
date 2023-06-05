// class name, attributes and constructor method
var Animal = /** @class */ (function () {
    // name: string
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        // this.name = name
    }
    return Animal;
}());
var myAnimal = new Animal('Dog', 'White');
console.log(myAnimal.name);
console.log(myAnimal.color);
console.log(myAnimal);
