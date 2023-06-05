// interfaces
// function show(obj: { category: string, product: string }) {
//   console.log(obj.category)
//   console.log(obj.product)
// }
// basic
function show_product(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
show_product({ category: 'Category name', product: 'Product name' });
function show_department(_a) {
    var department = _a.department, category = _a.category;
    console.log(department);
    console.log(category);
}
show_department({ department: 'Department name', category: 'Category name' });
show_department({ department: 'Department name' });
var obj1 = { department: 'Department test' };
console.log(obj1);
var obj2 = { department: 'Department test', category: 'Optional category' };
console.log(obj2);
// class with interface
var Department = /** @class */ (function () {
    function Department() {
    }
    return Department;
}());
var depto = new Department();
depto.department = 'My department object';
depto.category = 'My optional category'; // only available if implemented in our class
console.log(depto);
