// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

// let i = 3;
// while (i) {
//   console.log(i);
//   i--;
// }

//do while
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

//for
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

//break
// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", "");
//   if (!value) break;
//   sum += value;
// }
// console.log("Сумма: " + sum);

//continue
// for (let i = 0; i < 10; i++) {
//   if (i <= 4) continue;
//   console.log(i);
// }

//switch
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     console.log("Маловато");
//     break;
//   case 4:
//     console.log("В точку!");
//     break;
//   case 5:
//     console.log("перебор");
//     break;
//   default:
//     console.log("нет таких значений");
// }

let userNameFamily = prompt("Ваша фамилия?");
while (userNameFamily === "") {
  alert("Поле не должно быть пустым");
  userNameFamily = prompt("Ваша фамилия?");
}
console.log(userNameFamily);
let userName = prompt("Ваше имя?");
while (userName === "") {
  alert("Поле не должно быть пустым");
  userName = prompt("Ваша имя?");
}
console.log(userName);
let userMiddleName = prompt("Ваше отчество");
while (userMiddleName === "") {
  alert("Поле не должно быть пустым");
  userMiddleName = prompt("Ваше отчество?");
}
console.log(userMiddleName);
let ageUser = +prompt("Ваш возраст?");
while (isNaN(ageUser)) {
  alert(" это не число");
  ageUser = +prompt("Ваш возраст?");
}
let gender = confirm("Ваш пол мужской?") ? "Мужской" : "Женский";
let pension = "Нет";
if (gender === "Мужской" && ageUser >= 65) pension = "ДА";
if (gender === "Женский" && ageUser >= 55) pension = "ДА";
alert(`Ваше ФИО ${userNameFamily + " " + userName + " " + userMiddleName},
Ваш возраст в годах ${ageUser},
Ваш возраст в днях ${ageUser * 365},
Через 5 лет вам будет ${ageUser + 5},
Ваш пол ${gender}
Вы на пенсии? ${pension}
`);
