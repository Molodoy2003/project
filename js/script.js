"use strict";

// КУРСЫ


    // ----------ОПЕРАТОРЫ.  ИНКРЕМЕНТ И ДЕКРЕМЕНТ (ПРЕФИКСНЫЙ И ПОСТФИКСТНЫЙ)--------------


// let incr = 10,
// 	 decr = 10;

// console.log(incr++);  // ответ 10
// console.log(decr--);  // ответ 10

// console.log(++incr);  // ответ 11
// console.log(--decr);  // ответ 9

// && - оператор и
// || - оператор или 






      //----------УСЛОВИЯ---------------      


// тернарный оператор 

// let num = 50;
// (num === 50) ? console.log("ok!") : console.log('Error');


// swith case

// let num = 50;
// switch (num) {
// 	case 49: 
// 		console.log('Неверно');
// 		break;
// 	case 50:
// 		console.log('В точку!');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// 		break;
// }

// if else

// let num = 50;
// if (num > 50) {
// 	console.log('Неверно');
// } else if (num < 50) {
// 	console.log('Неверно');
// } else {
// 	console.log('В точку!');
// }







     //----------ЦИКЛЫ---------------


 //  while 

// let num = 50;
// while (num < 55) {
// 	console.log(num);
// 	num++;
// }
 
// do while 

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// FOR

// let value = 10;
// for (let i = 1; i < value; i++) {
// 	console.log(i);
// }

// for (let i = 1; i < 10; i++) {
// 	if (i == 6) {
// 		break; // прерывает цикл
//		   continue; // пропускает определенный шаг
// 	}
// 	console.log(i);
// }






   // -------------СВОЙСТВА и МЕТОДЫ СТРОКИ И ЧИСЕЛ------------------ 

// const str = 'Hello world';

// Верхний и нижний регистр
// console.log(str.toUpperCase()); 
// console.log(str.toLowerCase()); 

// Найти кусок подстроки и с какого номера начинается
// console.log(str.indexOf('w'));

// Найти кусок строки от введенного числа и до введеного
// console.log(str.slice(6, 11));
// console.log(str.slice(6));


// const num = 12.2;

// Округление к ближ целому числу
// console.log(Math.round(num));

// const test = '12.2px';

// Переводит строку в целое число
// console.log(parseInt(test));
// Переводит строку в дробное число
// console.log(parseFloat(test));








      // -----------ОБЪЕКТЫ--------------


// let people = {
// 	name: 'Danik',
// 	age: 19,
// 	city: 'Brest',
// }
// people.street = 'Lenina'; // добавление элемента
// delete people.street;     // удаление элемента






      // -------------ФУНКЦИИ------------------ 


// function bark(name, weight) {
// 	if (weight > 20) {
// 		console.log(name + ' WOOF WOOF');
// 	} else {
// 		console.log(name + ' woof woof');
// 	}
// }
// bark('barsik', 22);
// bark('sharik', 10);


// function whatShallWear(temp) {
// 	if (temp < 60) {
// 		console.log('Wear a jacket');
// 	} else if (temp < 70) {
// 		console.log('Wear a sweater');
// 	} else {
// 		console.log('Wear t-shirt');
// 	}
// }
// whatShallWear(60);
// whatShallWear(50);
// whatShallWear(80);


// function summa(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	console.log(sum);
// 	}
// }
// let array = [5, 7, 35];

// summa(array);




