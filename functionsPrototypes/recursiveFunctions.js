// ĐỆ QUY
// function countDown(fromNumber) {
//     console.log(fromNumber); // 5, 4, 3, 2, 1

//     let nextNumber = fromNumber - 1;
//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(5);

// Sử dụng vòng lặp
function countUp(toNumber) {
    for (let i = 1; i <= toNumber; i++) console.log(i); // 1, 2, 3, 4, 5
}
countUp(5);

/*
//
let newYearCount = countDown;
//some where is the code
countDown = null;
// the following function call will cause an error
newYearCount(10); //Uncaught TypeError: countDown is not a function
*/

//
let countDown = function f(fromNumber) {
    console.log(fromNumber); //10, 9, 8, 7, 6, 5, 4, 3, 2, 1

    let nextNumber = fromNumber - 1;
    if (nextNumber > 0) {
        f(nextNumber);
    }
};
let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);

//tổng các số tự nhiên từ 1 đến n
function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}
let result = sum(6);
console.log(result); //21
