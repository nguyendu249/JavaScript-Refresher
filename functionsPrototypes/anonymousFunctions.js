let show = function () {
    console.log('Anonymous functions');
};
show();

// setTimeout(function () {
//     console.log('Execute later after 1 second')
// }, 1000)

//Gọi hàm bằng cách thêm dấu ngoặc đơn (call the function by adding trailing parentheses() )
(function () {
    console.log('Immediately invoked function execution');
})();

let person = {
    firstName: 'Du',
    lastName: 'Nguyen',
};
(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

// arrow functions
let show2 = () => console.log('Anonymous functions');

let add = function (a, b) {
    return a + b;
};
// =>
let add2 = (a, b) => a + b;
