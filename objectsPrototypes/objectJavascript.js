let person = {
    first: 'John',
    last: 'Man',
    'building no': 39601,
};
console.log(person.first); //John
console.log(person['last']); //Man
console.log(person['building no']); //39601

person.first = 'Jane';
console.log(person.first); //Jane

person.age = 27; //add 1 thuộc tính vào object
console.log(person.age); //27

delete person['building no']; //delete thuộc tính khỏi object

//Kiểm tra xem thuộc tính có ở bên trong object hay không
console.log('ssn' in person); //false
console.log('age' in person); //true
