// booleano
// let success = true // implicit
var success = true; // explicit
// numbers
// let int = 10 // implicit
var int = 10; // explicit
// let flo = 10.50 // implicit
var flo = 10.50; // explicit
// let hex = 0xFA // implicit
var hex = 0xFA; // explicit
// string
var firstName = 'Marcelo';
var lastName = 'Toledo';
var fullName = "".concat(firstName, " ").concat(lastName);
var adress = '1000, Street Name';
console.log(fullName);
// array
var arrayStrings = ['a', 'b', 'c'];
var arrayNumbers = [1, 2, 3];
var arrayAny = [1, 'b'];
// enum
var statusVm;
(function (statusVm) {
    statusVm[statusVm["stopped"] = 0] = "stopped";
    statusVm[statusVm["deleted"] = 1] = "deleted";
    statusVm[statusVm["waiting"] = 2] = "waiting";
    statusVm[statusVm["pending"] = 3] = "pending";
})(statusVm || (statusVm = {}));
var statusVmString;
(function (statusVmString) {
    statusVmString["stopped"] = "stopped";
    statusVmString["deleted"] = "deleted";
    statusVmString["waiting"] = "waoting";
    statusVmString["pending"] = "pending";
})(statusVmString || (statusVmString = {}));
var vm = statusVm.stopped;
if (vm == statusVm.stopped) {
    console.log('VM is stopped');
}
