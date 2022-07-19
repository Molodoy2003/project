'use strict';


// 1 Практика 


// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренных фильмов?', '');
// 	const b = prompt('На сколько оцените его?', '');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('Error');
// 		i--;
// 	}
// }
// if (personalMovieDB.count < 10) {
// 	console.log('Просмотрено мало фильмов!');
// } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
// 	console.log('Вы классический зритель');
// } else {
// 	console.log('Вы киноман');
// }


// console.log(personalMovieDB);








// 2 ПРАКТИКА 


// function secondTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
	
// 	for (let i = 0; i < data.length; i++) {
// 		if (typeof(data[i]) === 'number') {
// 			data[i] = data[i] * 2;
// 		} else if (typeof(data[i]) === 'string') {
// 			data[i] = `${data[i]} - done`;
// 		}
// 	}
// 	console.log(data);
// 	return data;
// 	}
// 	secondTask();


// function FirstTask() {
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
//    const result = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];
// 	}
// 	console.log(result);
// }
// FirstTask();


// function thirdTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	for (let i = 1; i <= data.length; i++) {
// 		 result[i - 1] = data[data.length - i]
// 	}

// 	console.log(result);
// 	return result;
// }
// thirdTask();


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)






// 3 ПРАКТИКА 


// function sayHello(name) {
// 	return `Hello, ${name}!`;
// }
// sayHello('Danik');


// function returnNeighboringNumbers(number) {
// 	 let arr = [number - 1, number, number + 1];
// 	 console.log(arr);
// 	 return arr;
// }
// returnNeighboringNumbers(5);


// function getMathResult(num, times) {
// 	if (typeof(times) != 'number' || times <= 0) {
// 		return num;
// 	}
// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 		} else {
// 			str += `${num * i}---`;
// 		}
// 	}
// 	console.log(str);
// 	return str;
// }
// getMathResult(4, 5);








// 4 ПРАКТИКА 


// let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();

// const personalMovieDB = {
// 		count: numberOfFilms,
// 		movies: {},
// 		actors: {},
// 		genres: [],
// 		privat: false
// 	};
	


// 	function rememberMyFilms() {
// 		for (let i = 0; i < 2; i++) {
// 			const a = prompt('Один из последних просмотренных фильмов?', '');
// 			const b = prompt('На сколько оцените его?', '');
		
// 			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 				personalMovieDB.movies[a] = b;
// 				console.log('done');
// 			} else {
// 				console.log('Error');
// 				i--;
// 			}
// 		}
// 	}

// 	 rememberMyFilms();

	
// 	function detectPersonalLevel() {
// 		if (personalMovieDB.count < 10) {
// 			console.log('Просмотрено мало фильмов!');
// 		} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
// 			console.log('Вы классический зритель');
// 		} else {
// 			console.log('Вы киноман');
// 		}
// 	}

// 	 detectPersonalLevel();

// 	function showMyDB(hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
		
// 	}
// 	showMyDB(personalMovieDB.privat);

// 	function writeYourGenres() {
// 		for (let i = 1; i <= 3; i++) {
// 			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 			personalMovieDB.genres[i - 1] = genre;
// 		}
// 	}	
// 	writeYourGenres();




// function getTimeFromMinutes(min) {
// 	let hour = Math.floor(min / 60);
// 	if (hour == 1 ) {
// 		let res = `Это ${hour} час и ${(min - (hour * 60))} минут`;
// 		console.log(res);
// 		return res;
// 	} else if (hour == 2, 3, 4) {
// 		let res = `Это ${hour} часа и ${(min - (hour * 60))} минут`;
// 		console.log(res);
// 		return res;
// 	} else if (hour == 5, 6, 7, 8, 9, 10) {
// 		let res = `Это ${hour} часов и ${(min - (hour * 60))} минут`;
// 		console.log(res);
// 		return res;
// 	} else if (typeof(min) !== 'number' || !Number.isInteger(min)) {
// 		console.log("Ошибка, проверьте данные");
// 	}
// }
// getTimeFromMinutes(80);
// getTimeFromMinutes(150);
// getTimeFromMinutes(400);
// getTimeFromMinutes('ddasda');




// function findMaxNumber(a, b, c, d) {
// 	if (a > b && a > c && a > d) {
// 		let res = `Самое большое число это ${a}`;
// 		console.log(res);
// 	} else if (b > a && b > c && b > d) {
// 		let res2 = `Самое большое число это ${b}`;
// 		console.log(res2);
// 	} else if (c > a && c > b && c > d) {
// 		let res3 = `Самое большое число это ${c}`;
// 		console.log(res3);
// 	} else if (d > a && d > b && d > c) {
// 		let res4 = `Самое большое число это ${d}`;
// 		console.log(res4);
// 	}
// }
// findMaxNumber(5, 4, 3, 2);
// findMaxNumber(5, 8, 3, 2);
// findMaxNumber(5, 4, 10, 2);
// findMaxNumber(5, 4, 3, 15);








// 5 ПРАКТИКА

// const personalPlanPeter = {
// 	name: "Peter",
// 	age: "29",
// 	skills: {
// 		 languages: ['ru', 'eng'],
// 		 programmingLangs: {
// 			  js: '20%',
// 			  php: '10%'
// 		 },
// 		 exp: '1 month'
// 	},
// 	showAgeAndLangs: function(plan) {
// 		let str = '';
// 		const {age} = plan;
// 		const {languages} = plan.skills;
// 		str += `Мне ${age} и я владею языками: `;

// 		languages.forEach(function(lang) {
// 			str += `${lang.toUpperCase()} `;
// 		});
		
// 		console.log(str);
// 		return str;
// 	}
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// function showExperience(plan) {
// 	const {exp} = plan.skills;
// 	console.log(exp);
// 	return exp;
// }
// showExperience(personalPlanPeter);


// function showProgrammingLangs(plan) {
// 	let str = '';
// 	const {programmingLangs} = plan.skills;
// 	for (let key in programmingLangs) {
// 		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 	}
// 	console.log(str);
// 	return str;
// }
// showProgrammingLangs(personalPlanPeter);








// 6 ПРАКТИКА


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
// 	 str +=`Семья состоит из: `;

// 	 arr.forEach(function(members){
// 		str += `${members} `;
// 	 }); 

// 	 console.log(str);
// 	 return str;
// }
// showFamily(family);



// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let str = '';
// 	 arr.forEach(function(city){
// 		str += `${city.toLowerCase()}\n`;
// 	 });

// 	 console.log(str);
// 	 return str;
// }
// standardizeStrings(favoriteCities);







// 7 ПРАКТИКА


// const someString = 'This is some strange string';

// function reverse(str) {
// 	 console.log(str.split('').reverse().join(''));
//     return str;
// }

// reverse(someString);







// 8 ПРАКТИКА


/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// const personalMovieDB = {
// 		count: 0,
// 		movies: {},
// 		actors: {},
// 		genres: [],
// 		privat: false,
// 		start: function() {
// 			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
			
// 				while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 					personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 				}
// 			},
// 		rememberMyFilms: function () {
// 			for (let i = 0; i < 2; i++) {
// 				const a = prompt('Один из последних просмотренных фильмов?', '');
// 				const b = prompt('На сколько оцените его?', '');
				
// 				if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 					personalMovieDB.movies[a] = b;
// 					console.log('done');
// 				} else {
// 					console.log('Error');
// 					i--;
// 				}
// 			}
// 		},
// 		detectPersonalLevel: function () {
// 			if (personalMovieDB.count < 10) {
// 				console.log('Просмотрено мало фильмов!');
// 			} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
// 				console.log('Вы классический зритель');
// 			} else {
// 				console.log('Вы киноман');
// 			}
// 		},
// 		showMyDB: function(hidden) {
// 			if (!hidden) {
// 				console.log(personalMovieDB);
// 			}
			
// 		},
// 		writeYourGenres: function() {
// 			for (let i = 1; i < 2; i++) {
// 				let genre = prompt(`Ваш любимый жанр под номером ${i}`);

// 				if (genre === '' || genre == null) {
// 					console.log('Вы ввели некорректные данные');
// 					i--;
// 				} else {
// 					personalMovieDB.genres[i - 1] = genre;
// 				}
// 			}
// 			personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
// 		},
// 		toggleVisibleMyDB: function() {
// 			if (personalMovieDB.privat) {
// 				personalMovieDB.privat = false;
// 			} else  {
// 				personalMovieDB.privat = true;
// 			}
// 		}	
// 	};




	const personalMovieDB = {
		count: 0,
		movies: {},
		actors: {},
		genres: [],
		privat: false,
		start: function() {
			 personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		
			 while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
				  personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
			 }
		},
		rememberMyFilms: function() {
			 for (let i = 0; i < 2; i++) {
				  const a = prompt('Один из последних просмотренных фильмов?', ''),
						  b = prompt('На сколько оцените его?', '');
			 
				  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
						personalMovieDB.movies[a] = b;
						console.log('done');
				  } else {
						console.log('error');
						i--;
				  }
			 }
		},
		detectPersonalLevel: function() {
			 if (personalMovieDB.count < 10) {
				  console.log("Просмотрено довольно мало фильмов");
			 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
				  console.log("Вы классический зритель");
			 } else if (personalMovieDB.count >= 30) {
				  console.log("Вы киноман");
			 } else {
				  console.log("Произошла ошибка");
			 }
		},
		showMyDB: function(hidden) {
			 if (!hidden) {
				  console.log(personalMovieDB);
			 }
		},
		toggleVisibleMyDB: function() {
			 if (personalMovieDB.privat) {
				  personalMovieDB.privat = false;
			 } else {
				  personalMovieDB.privat = true;
			 }
		},
		writeYourGenres: function() {
			 for (let i = 1; i <= 3; i++) {
				  let genre = prompt(`Ваш любимый жанр под номером ${i}`);
  
				  if (genre === '' || genre == null) {
						console.log('Вы ввели некорректные данные или не ввели их вовсе');
						i--;
				  } else {
						personalMovieDB.genres[i - 1] = genre;
				  } 
			 }
			 personalMovieDB.genres.forEach((item, i) => {
				  console.log(`Любимый жанр ${i + 1} - это ${item}`);
			 });
		}
  };
