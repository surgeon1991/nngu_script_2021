console.log("привет мир!"); //вывод строки в терминал

let userNumber = 1;
const userName = "Alex";
let userBigInt = 2n;
let userTrueOrFalse = true;
let userAge = null;
let userHeight;
const userAccont = { age: 23, name: "Ol" };
let userSymbol = Symbol("id"); //создание переменных под типы  данных

console.log(userNumber);
console.log(userName);
console.log(userBigInt);
console.log(userTrueOrFalse);
console.log(userAge);
console.log(userHeight);
console.log(userAccont);
console.log(userSymbol); //вывод в консоль переменные

console.log(typeof userNumber);
console.log(typeof "Alex");
console.log(typeof 3n);
console.log(typeof true);
console.log(typeof null);
console.log(typeof { age: 23, name: "Ol" });
console.log(typeof Symbol("id"));
console.log(typeof undefined); //вывод переменных через typeof

try {
  userName = "igor";
  console.log(userName);
} catch (err) {
  console.log("Error");
} // попытка изменить переменную,объявленную через const

try {
  userAccont = { age: 21, name: "mike" };
  console.log(userAccont);
} catch (err) {
  console.log("error_2");
} // попытка изменить переменную с типом obj,объявленную через const

let userAlex = { weight: 56, height: 175 };
userAlex = { weight: 55, height: 174 };
console.log(userAlex); // попытка изменить переменную с типом obj,объявленную через let

var userAlexandr = { weight: 58, height: 178 };
userAlexandr = { weight: 54, height: 173 };
console.log(userAlexandr); // попытка изменить переменную с типом obj,объявленную через var
