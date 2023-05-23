function square(x) {
    x = x * x;
    return x;
}
let y = 10;
let result = square(y);
console.log(result); //100
console.log(y); //10 no change

let person = {
    name: 'Du',
    age: 18,
};
function increaseAge(obj) {
    obj.age = obj.age + 1;
}
increaseAge(person);
console.log(person); //{ name: 'Du', age: 19 }

//
let person2 = {
    name: 'John',
    age: 25,
};
function increaseAge(obj) {
    obj.age = obj.age + 1;

    //reference another object
    obj = { name: 'Hanh', age: 22 };
}
increaseAge(person2);
console.log(person2); //{ name: 'John', age: 26 }
