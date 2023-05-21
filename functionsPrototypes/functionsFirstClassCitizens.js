//Storing functions in variables
function add(a, b) {
    return a + b;
}
let sum = add;
//let result = sum(10, 20); // hoặc let result = add(10, 20);
//console.log(result); //30

//Passing a function to another function (truyền 1 function cho 1 function khác)
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result = average(10, 20, sum);
console.log(result); // 15
