//*1
// function calcNumber(n) {
//   console.log(n ** 2);
// }
// calcNumber(5);

//2
// function calcNumber(a, b) {
//   console.log(a + b);
// }
// calcNumber(5, 7);

//3
// function calcNumber(a, b, c) {
//   console.log((a - b) / c);
// }
// calcNumber(12, 4, 2);

//4
// function calcNumber(n) {
//   if (n === 1) {
//     return console.log("Понедельник");
//   } else if (n === 2) {
//     return console.log("Вторник");
//   } else if (n === 3) {
//     return console.log("Среда");
//   } else if (n === 4) {
//     return console.log("Четверг");
//   } else if (n === 5) {
//     return console.log("Пятница");
//   } else if (n === 6) {
//     return console.log("Суббота");
//   } else if (n === 7) {
//     return console.log("Воскресенье");
//   } else {
//     return console.log("Нет");
//   }
// }
// calcNumber(3);

//5
// function calcNumber(a, b) {
//   if (a === b) {
//     return console.log("true");
//   } else if (a != b) {
//     return console.log("false");
//   }
// }
// calcNumber(5, 5);

//6
// function calcNumber(a, b) {
//   if (a + b > 10) {
//     return console.log("true");
//   } else if (a + b < 10) {
//     return console.log("false");
//   }
// }
// calcNumber(3, 6);

//7

// function calcNumber(a) {
//   if (a < 0) {
//     return console.log("true");
//   } else if (a >= 0) {
//     return console.log("false");
//   }
// }
// calcNumber(1);

// 8
// function isNumberRange(a) {
//   if (a > 0 && a < 10) {
//     return console.log("true");
//   } else {
//     return console.log("false");
//   }
// }
// isNumberRange(1);

//9

// const arr = [1, 4, 6, 9, 10, -1, -12];
// let newArr = [];
// function isNumberRange(a) {
//   if (a > 0 && a < 10) {
//     return true;
//   } else {
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (isNumberRange(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

//10
// let getDigitsSum = (digit) => {
//   let num = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     num += +digit[i];
//   }
//   return num;
// };
// console.log(getDigitsSum(6767));

//11

// let getDigitsSum = (digit) => {
//   let num = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     num += +digit[i];
//   }
//   return num;
// };
// let arr = [];
// for (let i = 1; i < 2021; i++) {
//   if (getDigitsSum(i) === 13) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// 12;
// let isEven = (a) => {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEven(6));

//13

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr1 = [];
// let isEven = (a) => {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     false;
//   }
// };
// for (i = 0; i < arr.length; i = +1) {
//   if (isEven(arr[i])) {
//     arr1.push(arr[i]);
//   }
// }

// console.log(arr1);

// let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 14

// const getDivisors = (number) => {
//   let arr = [];
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(getDivisors(152));

// 15
// const arr = [2, -45, -56, 3, 0, 23];
// const showElements = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };
// showElements(arr);

// 16

// let number = 42356252;
// const getDigitsSum = (number) => {
//   let stringDigit = number + "";
//   let sum = 0;
//   for (i = 0; i < stringDigit.length; i++) {
//     sum = sum + +stringDigit[i];
//   }
//   return sum;
// };

// while (getDigitsSum(number) >= 9) {
//   number = getDigitsSum(number);
// }

// console.log(getDigitsSum(number));
