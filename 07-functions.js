// function mult(x, y) {
//   return x * y
// }
// old form to write functions
var mult = function (x, y) {
    return x * y;
};
var result_mult = mult(3, 5);
console.log(result_mult);
// arrow functions
var div = function (x, y) {
    return x / y;
};
var result_div = div(3, 5);
console.log(result_div);
// short functions
var sum = function (x, y) { return x + y; };
var result_sum = sum(6, 5);
console.log(result_sum);
var str1 = function (str_param) { return "String Text with: ".concat(str_param); };
console.log(str1('My Text'));
// default parameters
var functionDefaultParam = function (last_name, first_name) {
    if (first_name === void 0) { first_name = 'John'; }
    return "Full name: ".concat(first_name, " ").concat(last_name);
};
console.log(functionDefaultParam('Smith'));
console.log(functionDefaultParam('Smith', 'Joe'));
console.log(functionDefaultParam('Downey', 'Robert'));
// options parameters
var functionOptionalParam = function (last_name, first_name) {
    return "Name: ".concat(first_name, " ").concat(last_name);
};
console.log(functionOptionalParam('Smith')); // will return undefined to first_name
console.log(functionOptionalParam('Smith', 'Joe'));
console.log(functionOptionalParam('Downey', 'Robert'));
var functionOptionalParam2 = function (last_name, first_name) {
    if (typeof first_name == 'undefined') {
        return "Last Name: ".concat(last_name);
    }
    return "Fullname: ".concat(first_name, " ").concat(last_name);
};
console.log(functionOptionalParam2('Smith'));
console.log(functionOptionalParam2('Downey', 'Robert'));
