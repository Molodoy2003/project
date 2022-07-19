"use strict";

// КУРСЫ



// ----------РАБОТА С GITHUB--------------


// git add -A
// git status
// git commit -a -m"название"
// git push

// Если открываешь файл с гитбаха, чтоб он обновился до последних изменений 
// git pull





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

// Округление до ближ меньшего
// console.log(Math.floor(num));

// const test = '12.2px';

// Переводит строку в целое число
// console.log(parseInt(test));
// Переводит строку в дробное число
// console.log(parseFloat(test));








      // -----------ОБЪЕКТЫ--------------


// const options = {
// 	name: 'test',
// 	width: 1024,
// 	heigth: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function() {
// 		console.log('Test');
// 	}
// };
// options.makeTest();

// ПЕРЕЕБИРАЕМ СВОЙСТВА ОБЪЕКТА FOR IN
// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 	}
// }

// delete options.name;                      // удаление элемента
// console.log(Object.keys(options).length); // количество элементов
// const {border, bg} = options.colors;      // деструктуризация объектов
// console.log(border);


// КЛОНИРОВАНИЕ ОБЪЕКТОВ 

// function copy (mainObj) {
// 	let objCopy = {};

// 	let key;
// 	for (key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }
// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(numbers);
// console.log(newNumbers);


// СОЕДИНЕНИЕ ДВУХ ОБЪЕКТОВ (Object.assign)

// const numbers = {
// 	a: 2,
// 	b: 5,
// 	c: {
// 		x: 7,
// 		y: 4,
// 	}
// };
// const add = {
// 	d: 17,
// 	e: 20,
// };
// console.log(Object.assign(numbers, add));










      //-------------МАССИВЫ------------------ 


// const arr = [1, 2, 3, 6, 8];

// arr.pop();        //  удаляет последний элемент
// arr.push(10);     // добавляет элемент в конец
// arr.shift();      // удаляет первый элемент
// arr.unshift(15);  // добавляет элемент в начало массива
// arr.splice(1, 1); // удаление определенных элементов


// Перебор элементов массива

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }


// Метод forEach

// arr.forEach(function(item, index, array) {
// 	console.log(`элемент ${item} находится под номером ${index} в массиве ${array}`);
// });


// КОПИРОВАНИЕ МАССИВА

// const  oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[0] = 'abc';
// console.log(oldArray);
// console.log(newArray);







       //-------------ОСНОВЫ ООП------------------ 


// const soldier = {  // главный протатип
// 	health: 400,
// 	armor: 100,
// 	sayHello: function() {
// 		console.log("hello");
// 	}
// };
// const Jonh = {
// 	health: 100,
// };

// Object.setPrototypeOf(Jonh, soldier); // наследуем свойства главного протатипа

// const Jonh = Object.create(soldier); // или так наследуем

// console.log(Jonh.armor);
// Jonh.sayHello();







  //-------------ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ------------------ 


   // To String 

// console.log(typeof(String(null)));


   // To Number 

// console.log(typeof(Number('4')));
// ИЛИ 
// console.log(typeof(+'5'));


   // To Boolean

let switcher = null;
if (switcher) {
	console.log('Working...');
}

switcher = 1;
if (switcher) {
	console.log('Working...');
}