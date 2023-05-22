//Storing functions in variables
function add(a, b) {
    return a + b;
}
//let sum = add;
//let result = sum(10, 20); // hoặc let result = add(10, 20);
//console.log(result); //30

//Passing a function to another function (truyền 1 function cho 1 function khác)
function average(a, b, fn) {
    return fn(a, b) / 2;
}
let result = average(10, 20, add);
console.log(result); // 15

//Returning functions from functions
function compareBy(propertyName) {
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
}
let products = [
    { name: 'Nguyen Du', price: 900 },
    { name: 'John', price: 800 },
    { name: 'My Hanh', price: 600 },
];
console.log('Products sorted by name:');
products.sort(compareBy('name'));

console.table(products);

// sort products by prices
console.log('Products sorted by prices:');
products.sort(compareBy('price'));

console.table(products);
