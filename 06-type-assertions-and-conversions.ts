let my_name = 'Marcelo Toledo'
console.log(my_name.length)

// conversion any to string
let any_string: any = 'String any'
console.log(any_string.length)
console.log((<string>any_string).length)
console.log((any_string as string).length)

let obj2 = {
  product: 'Product Name'
}
// obj1.text = 'New text' // it doesn't work
// (<any>obj2).text = 'New text' // that doesn't work either
console.log(obj2)

// conversion number in string
let num1 = 1
let num_string = num1 + '';
console.log(typeof num1)
console.log(num1)
console.log(typeof num_string)
console.log(num_string)

// conversion string in number
let num2 = +num_string
console.log(typeof num2)
console.log(num2)
