// function hellowWorld() {
//   console.log("hellowWorld");
// }
// hellowWorld();

// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// checkAccess();

// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет Пользователь");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// writeMessage();

// function sum(a, b = 0) {
//   console.log(b);
//   console.log(a + b);
// }
// sum(1, 4);
// sum(16);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }

// const userName = getName("Ivan");
// console.log(userName);

// function getName(name) {}

// const userName = getName("Ivan");
// console.log(userName);

// let name = "Alex";

// function getName(userName) {
//   return userName;
// }
// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "Alex";

// console.log(name, "1");

// function sayHi(userName) {
//   name = "Petr";
//   console.log(userName, "function");
// }
// sayHi();
// console.log(name, "2");

// let a = 0;
// let b = 0;

// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// let name = "Max";
// function sayHi(name) {
//   if (name) {
//     console.log(`Привет ${name}`);
//   } else {
//     console.log("Привет гость");
//   }
// }
// sayHi(name);

// function sum(a, b = 1) {
//   console.log(a ** b);
// }
// sum(2, 3);
// sum(2, 8);
// sum(20);

// function getValue(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[1];
//   }
//   return sum / arr.length;
// }
// console.log(getValue([1, 3, 6]));
// const sayName = function (name) {
//   return name;
// };

// const copy = sayName;
// console.log(sayName("  Алекс "));

// console.log(copy("  Иван "));

// const getName = function () {
//   console.log("Alex");
// };

// const getUserInfo = function (callBack) {
//   console.log("USER INFO");
//   callBack();
// };
// getUserInfo(getName);
// test();
// function test() {
//   console.log("test");
// }

// const test2 = function () {
//   console.log("test 2");
// };
// test2();

// const myFirstArrowFunc = () => console.log("!!");

// const test1 = (name) => {
//   return name;
// };

// console.log(test1("Alex"));

// const getLog = () => console.log("LOG");
// getLog();

//FD(инициализируется до определения функции)
// function example(param) {
//   return param;
// }
// example(1);

//FE(инициализируется после определения функции)
// const example2 = function (param) {
//   return param;
// };
// example2(2);
// //AF.1 похоже на FE
// const example3 = (param) => param;
// example3(3);
// //AF.2
// const example3 = (param) => {
//   //big body
//   return param;
// };
// example3(3);

// const getString = (str, n) => {
//   for (let i = 0; i < n; i += 1) {
//     console.log(str);
//   }
// };
// getString("Ivan", 3);

const sum = (str) => {
  if (
    str === "а" ||
    str === "е" ||
    str === "ё" ||
    str === "и" ||
    str === "о" ||
    str === "у" ||
    str === "ю" ||
    str === "я"
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
};
sum("а");

// const sum1 = (str) => {
//   let = "анна";
// };
