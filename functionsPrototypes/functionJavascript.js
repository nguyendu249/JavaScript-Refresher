//function functionName(parameters) {
// function body
// ...
//}

function say(message) {
    console.log(message); // Hello
}
let result = say('Hello');
console.log('ket qua:', result); // ket qua: undefined (không sử dụng return kết quả sẽ trả về undefined)

//function say(message) {
//    console.log(message)
//}
//say('hello');

//Ex
function calculator(length, width) {
    let area = length * width;
    console.log(area); // 50
}
calculator(5, 10);

//Ex return
function multiply(a, b) {
    return a * b;
}
let ketqua = 5 * 10;
console.log(ketqua); //50

//ex return ngay lập tức
function checkNumber(number) {
    if (number % 2 === 0) {
        return 'sô chẵn';
    }
    return 'số lẻ';
}
console.log(checkNumber(2)); // số chẵn
console.log(checkNumber(3)); // số lẻ

// arguments object
function sum() {
    var total = 0;
    console.log(arguments.length); //4
    for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
let tong = sum(2, 3, 4, 5);
console.log(tong); //14

// Function hoisting
// showMe(); // an hoisting example
// function showMe() {
//     console.log('an hoisting example');
// }

function showMe() {
    console.log('a hoisting example');
}
showMe(); // a hoisting example
