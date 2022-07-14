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

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false
	};
	


	function rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '');
			const b = prompt('На сколько оцените его?', '');
		
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('Error');
				i--;
			}
		}
	}

	// rememberMyFilms();

	
	function detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено мало фильмов!');
		} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
			console.log('Вы классический зритель');
		} else {
			console.log('Вы киноман');
		}
	}

	// detectPersonalLevel();


	function showMyDB(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
		
	}
	showMyDB(personalMovieDB.privat);



	function writeYourGenres() {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);
			personalMovieDB.genres[i - 1] = genre;
		}
	}	
	writeYourGenres();