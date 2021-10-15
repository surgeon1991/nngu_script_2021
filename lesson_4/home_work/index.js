// // работа с if...else
// // 1
// let a = 0;

// if (a == 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной а = 1, -3 в консоле "Неверно"

// // 2
// let b = 1;

// if (b > 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной b = 0, -3 в консоле "Неверно"

// // 3
// let c = -3;

// if (c < 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной c = 0, 1 в консоле "Неверно"

// // 4
// let d = 1;

// if (d >= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной d = -3 в консоле "Неверно"

// // 5
// let e = -3;

// if (e <= 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной e = 1 в консоле "Неверно"

// // 6
// let f = 1;

// if (f != 0) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной f = 0 в консоле "Неверно"

// // 7
// let h = "test";

// if (h == "test") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// // При значении переменной h = "тест", 3 в консоле "Неверно"

// // 8
// let g = "1";

// if (g === "1") {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
// При значении переменной g = 1 , 3 в консоле "Неверно"

// Работа с логическими переменными

// //1
// let test = 0;
// if (test == true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let test = 1;
// let result = test == true ? "Верно" : "Неверно";
// console.log(result);

// //1
// let test = 0;
// if (test != true) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// let test = 0;
// let result = test != true ? "Верно" : "Неверно";
// console.log(result);

// Работа с && и ||

//1
// let a = 5;
// if (a > 0 && a < 5) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }
//2

// let a = 0;

// if (a == 0 || a == 2) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }

//3

// let a = 2;
// let b = 1;
// if (a <= 1 || b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

//4
// let a = 3;
// let b = 5;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// На switch
//1
// let num = 4;
// let result;
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "лето";
//     break;
//   case 4:
//     result = "осень";
//     break;
// }
// console.log(result);

//Общие задачи
//1
// let day = 11;

// if (day >= 1 && day < 10) {
//   console.log("Первая декада");
// } else if (day >= 10 && day < 21) {
//   console.log("Вторая декада");
// } else {
//   console.log("Третья декада");
// }

//2
// let month = 9;
// let season;

// if (month <= 2 || month == 12) {
//   season = "зима";
// } else if (month >= 3 && month <= 5) {
//   season = "весна";
// } else if (month >= 6 && month <= 8) {
//   season = "весна";
// } else {
//   season = "осень";
// }
// console.log(season);

//3
// let a = "abcde";
// if (a[0] === "a") {
//   console.log("да");
// } else {
//   console.log("нет");
// }
//4
// let a = "12345";
// if (a[0] === "1" || a[0] === "2" || a[0] === "3") {
//   console.log("да");
// } else {
//   console.log("нет");
// }
//5
// let a = "123";
// console.log(Number(a[0]) + Number(a[1]) + Number(a[2]));

//6
// let a = "123321";
// if (+a[0] + +a[1] + +a[2] == +a[3] + +a[4] + +a[5]) {
//   console.log("да");
// } else {
//   console.log("нет");
// }

// Циклы while и for
//1
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
//2
// let i = 11;
// while (i <= 33) {
//   console.log(i);
//   i++;
// }

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }
//3
// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
//   if (i % 2 == 1) continue;
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
//   if (i % 2 == 1) continue;
// }
//4
// let sum = 0;
// let i = 1;
// while (i < 101) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 100; i += 1) {
//   sum += i;
// }
// console.log(sum);

//Работа с for для массивов
//1
// let a = [1, 2, 3, 4, 5];
// for (let i = 0; i < a.length; i += 1) {
//   console.log(a[i]);
// }
//2
// let a = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < a.length; i += 1) {
//   result += a[i];
// }
// console.log(result);
//Задачи общие

//1
// let a = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] < 3 || a[i] > 10) continue;
//   console.log(a[i]);
// }
//2
// let a = [0, 1, 2, 3, 4, -5, -6, -4, -3];
// let result = 0;
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] <= 0) continue;
//   result += a[i];
// }
// console.log(result);
//3
// let a = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] !== 4) {
//     console.log("Есть");
//   }
//   break;
// }
//4
// let a = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < a.length; i += 1) {
//   let b = a[i] + "";
//   if (+b[0] === 1 || +b[0] === 2 || +b[0] === 5) {
//     console.log(a[i]);
//   }
// }
//5
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b = "-";
// for (let i = 0; i < a.length; i += 1) {
//   b = b + a[i] + "-";
// }
// console.log(b);
//6
//8
