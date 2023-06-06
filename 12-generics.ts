// type parameter
let newArray: Array<number> = []

function arrayFunction(array: Array<number>) {

}

// generics params
func'

// let variable: string = my_function(2) // errors: Type 'number' is not assignable to type 'string'.
// let variable: number = my_function('text') // errors: Type 'string' is not assignable to type 'number'.
// let variable: number = my_function(2) // it works
let variable: number = my_function<number>(2) // it works also

class List<T> {
  let items: Array<T> = []

  add(item:T) {
    items.push(item)
  }

  remove(item:T) {
    const index = items.indexOf(item)
    items.splice(index, 1)
  }
}

let list = new List<number>()

list.add(3)
console.log(list)
list.remove(3)
console.log(list)
