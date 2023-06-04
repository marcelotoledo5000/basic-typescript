// object

let new_object: object = {
  first_name: 'Marcelo',
  last_name: 'Toledo'
}

// new_object = 'string' -> other type is not acceptable
console.log(new_object)

let other_object: Object = {
  category: 'category1',
  name: 'product_name'
}

other_object = 'here is accepted text or number' // string or number will be valid
console.log(other_object)

// any

let my_variable: any = 4
console.log(my_variable)

my_variable = {}
console.log(my_variable)

my_variable = []
console.log(my_variable)

my_variable = 'String'
console.log(my_variable)

my_variable = false
console.log(my_variable)

let my_array: Array<any> = [2, 'String', { name: 'Marcelo' }, true]
console.log(my_array)
my_array.push('Extra Value')
console.log(my_array)
