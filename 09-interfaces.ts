// interfaces

// function show(obj: { category: string, product: string }) {
//   console.log(obj.category)
//   console.log(obj.product)
// }

// basic
function show_product({category, product}: { category: string, product: string }) {
  console.log(category)
  console.log(product)
}

show_product({ category: 'Category name', product: 'Product name' })

// with interface
interface ObjectValue {
  department: string
  category?: string
}

function show_department({ department, category }: ObjectValue) {
  console.log(department)
  console.log(category)
}

show_department({ department: 'Department name', category: 'Category name' })
show_department({ department: 'Department name' })

let obj1: ObjectValue = { department: 'Department test' }
console.log(obj1)
let obj2: ObjectValue = { department: 'Department test', category: 'Optional category' }
console.log(obj2)

// class with interface
class Department implements ObjectValue {
  department: string
  category?: string | undefined
}

let depto = new Department()
depto.department = 'My department object'
depto.category = 'My optional category' // only available if implemented in our class

console.log(depto)
