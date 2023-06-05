
// function mult(x, y) {
//   return x * y
// }

// old form to write functions
const mult = function(x: number, y: number): number { // void, when it does not return something
  return x * y
}
let result_mult: number = mult(3, 5)
console.log(result_mult)

// arrow functions
const div = (x: number, y: number): number => {
  return x / y
}
let result_div: number = div(3, 5)
console.log(result_div)

// short functions
const sum = (x: number, y: number): number => x + y
let result_sum: number = sum(6, 5)
console.log(result_sum)

let str1 = str_param => `String Text with: ${str_param}`
console.log(str1('My Text'))

// default parameters
let functionDefaultParam = (last_name, first_name = 'John') => {
  return `Full name: ${first_name} ${last_name}`
}
console.log(functionDefaultParam('Smith'))
console.log(functionDefaultParam('Smith', 'Joe'))
console.log(functionDefaultParam('Downey', 'Robert'))

// options parameters
let functionOptionalParam = (last_name: string, first_name?) => {
  return `Name: ${first_name} ${last_name}`
}
console.log(functionOptionalParam('Smith')) // will return undefined to first_name
console.log(functionOptionalParam('Smith', 'Joe'))
console.log(functionOptionalParam('Downey', 'Robert'))

let functionOptionalParam2 = (last_name: string, first_name?: string) => {
  if (typeof first_name == 'undefined') {
    return `Last Name: ${last_name}`
  }
  return `Fullname: ${first_name} ${last_name}`
}
console.log(functionOptionalParam2('Smith'))
console.log(functionOptionalParam2('Downey', 'Robert'))
