"use strict";
/*const answer = +prompt("How old are you?", "write, boy"); /*Динамическая типизация в момент указания оператора + */
/*console.log(typeof(answer));*/ 
/*вся инфа полученая от пользователя независимо через какой оператор она была получена всегда будет тип данных string (строка)*/

//const type = +prompt("How much?", "1500");
//console.log(type + 5); /*конкатенация (слияние строк)*/
 

//const answers = [];

//answers[0] = prompt('What is your name?', '');
//answers[1] = prompt('What is your surname?', '');
//answers[2] = prompt('How old are you?', '');
//answers[3] = prompt('Where you go?', '');

//document.write(answers);

//console.log(typeof(answers));
//console.log(typeof(null));

/*const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Hi, ${user}`);*/

const numbersOFFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numbersOFFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
