//Ex
function add(x, y) {
    return x + y;
}
add(10, 20);

//
// function say(message) {
//     console.log(message); //undefined
// }
// say();

//
// function say(message) {
//     message = typeof message !== 'undefined' ? message: 'Hi';
//     console.log(message); // Hi
// }
// say();

//
function say(message = 'HiHi') {
    console.log(message);
}
say();
say('Hello');
say('what the shit');

//Evaluating default parameters
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car')); // [ 'Toy Car' ];
console.log(put('Teddy Bear')); // -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

// Using other parameters in default values
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}
console.log(add()); // 4

// Nếu bạn tham chiếu tham số chưa được khởi tạo, bạn sẽ gặp lỗi.
// function subtract(x = y, y = 1) {
//     return x - y;
// }
// subtract(10); // Uncaught ReferenceError: Cannot access 'y' before initialization
