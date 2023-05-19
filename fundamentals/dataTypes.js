// Javascript có các kiểu dữ liệu nguyên thủy :
//  null, undefined, boolean, number, string, symbol, bigint

// 1 kiểu dữ liệu phức tạp: OBJECT.

//let counter = 120; // counter is a number
//counter = false; // counter is now a boolean
//counter = 'foo' // counter is now a string

//let counter = 120;
//console.log(typeof counter); //number
//
//counter = false;
//console.log(typeof counter); //boolean
//
//counter = 'Hello'
//console.log(typeof counter); //string

// The undefined type
let counter;
console.log(counter); // undefined
console.log(typeof counter); // undefined
// Biến chưa được khai báo
console.log(typeof undeclaredVar); //undefined

// NULL
let obj = null;
console.log(typeof null); // object
console.log(null == undefined); //true

// NUMBER
let num = 200;

let p = 12.5;
let d = 0.05;

//auto convert equal 200
let price = 200.0;
// let memory
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

console.log(Number.MAX_VALUE + Number.MAX_VALUE); //Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

// NaN
console.log('a' / 2); // Nan
console.log(NaN / 2); // Nan
console.log(NaN == NaN); // false

// STRING
//let greeting = 'Hi';
//let message = "Bye";
let message = "I'm also a vaild string"; // use \ to escape the single quote
// có thể tạo chuỗi mới từ chuỗi hiện có
let str = 'Javascript';
str = str + ' String';
console.log(str); // Javascript String

let s = 'Javascript';
s[0] = 'j';
console.log(s); //Javascript

// BOOLEAN
//có 2 giá trị TRUE hoặc FALSE
let inProgress = true;
let completed = false;
console.log(typeof inProgress, typeof completed); //boolean, boolean

//The conversion rules:
// Type        true                                false
// string      non - empty - string                empty string
// number      non - zero number and Infinity      0, NaN
// object      non - fll object                    null
// undefined                                       undefined
//Example
console.log(Boolean('Hi')); //true
console.log(Boolean('')); //false

console.log(Boolean(100)); //true
console.log(Boolean(Infinity)); //true
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean({ foo: 100 })); //true
console.log(Boolean(null)); //false

// SYMBOL
let s1 = Symbol();
console.log(s1); //Symbol()
//hàm Symbol tạo ra một giá trị duy nhất mới mỗi khi bạn gọi nó
console.log(Symbol() == Symbol()); //false

//BIGINT
// nó đại diện cho toàn bộ số lớn hơn 2 mũ 53 (-1). Để tạo thành một bigint số bằng chữ, bạn thêm chữ cái n vào cuối
let pageView = 9007199254740991n;
console.log(typeof pageView); //bigint

// OBJECT TYPE
let emptyObject = {};

let person = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '0123456789',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Joe',
        state: 'CA',
        country: 'USA',
    },
};
console.log(person.address);
// { building: '4000',
//   street: 'North 1st street',
//   city: 'San Joe',
//   state: 'CA',
//   country: 'USA' }
console.log(person.firstName); //John
console.log(person.age); //undefined

console.log(person['email']); // john@gmail.com
console.log(person['phone']); //0123456789
