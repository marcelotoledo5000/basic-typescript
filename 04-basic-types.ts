// booleano
// let success = true // implicit
let success: boolean = true // explicit

// numbers
// let int = 10 // implicit
let int: number  = 10 // explicit
// let flo = 10.50 // implicit
let flo: number = 10.50 // explicit
// let hex = 0xFA // implicit
let hex: number = 0xFA // explicit

// string
let firstName = 'Marcelo'
let lastName = 'Toledo'
let fullName = `${firstName} ${lastName}`
let adress: string = '1000, Street Name'

console.log(fullName)

// array
let arrayStrings: string[] = ['a', 'b', 'c']
let arrayNumbers: Array<number> = [1, 2, 3]
let arrayAny: Array<any> = [1, 'b']

// enum
enum statusVm { stopped, deleted, waiting, pending }
enum statusVmString {
  stopped = 'stopped',
  deleted = 'deleted',
  waiting = 'waoting',
  pending = 'pending'
}

let vm: statusVm = statusVm.stopped

if(vm == statusVm.stopped){
  console.log('VM is stopped')
}
