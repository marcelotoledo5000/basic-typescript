// object
var new_object = {
    first_name: 'Marcelo',
    last_name: 'Toledo'
};
// new_object = 'string' -> other type is not acceptable
console.log(new_object);
var other_object = {
    category: 'category1',
    name: 'product_name'
};
other_object = 'here is accepted text or number'; // string or number will be valid
console.log(other_object);
// any
var my_variable = 4;
console.log(my_variable);
my_variable = {};
console.log(my_variable);
my_variable = [];
console.log(my_variable);
my_variable = 'String';
console.log(my_variable);
my_variable = false;
console.log(my_variable);
var my_array = [2, 'String', { name: 'Marcelo' }, true];
console.log(my_array);
my_array.push('Extra Value');
console.log(my_array);
