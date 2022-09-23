// let bonusBalance = 1000;
// let summ = 50;
// let minus = 3;
// let balance = bonusBalance ;
//
// let day = ((50 - 3 - 3) * 3) + (50 - 3);
// let balance2 = balance + day
// console.log(balance2)


// Задача 1
/*
В интернет-магазине у зарегистрированного пользователя есть имя и бонусный баланс. Представим, что вы пользователь. Отобразите информацию об успешном входе и своем бонусном балансе.
*/
console.log(`
- - - - - Решение 1 - - - - -
`);
let username = 'Ivan';
let bonusBalance = 1000;

console.log(`Пользователь: ${username}`);
console.log(`Баланс: ${bonusBalance}`);



// Зачача 2
/*
За каждую покупку мы добавляем на баланс фиксированную сумму в 50 бонусных баллов. Баллы сгорают со временем - каждый день сгорает 3 балла.

Посчитайте, какой баланс будет у пользователя через 7 дней, если обычно он раз в два дня делает покупку.
*/
console.log(`
- - - - - Решение 2 - - - - -
`);
bonusBalance -= 3; // день 1
bonusBalance -= 3; // день 2
bonusBalance += 50;
bonusBalance -= 3; // день 3
bonusBalance -= 3; // день 4
bonusBalance += 50;
bonusBalance -= 3; // день 5
bonusBalance -= 3; // день 6
bonusBalance += 50;
bonusBalance -= 3; // день 7

console.log(`Баланс через 7 дней: ${bonusBalance}`);



