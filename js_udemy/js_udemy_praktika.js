
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

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы его оцените ?' , '');
          if (a != null && b != null && a != '' && b != null && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('Done!');
          } else {
              console.log('Error!');
              i--;
          }
          
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30 ) {
    console.log('Вы киноман !')
} else {
    console.log('Ошибка!')
}
console.log(personalMovieDB);
    



const calc = (a,b) => {
    console.log('2');
    return a + b;
};
console.log(calc(10,2));












     /*for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

              if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                
                personalMovieDB.movies[a] = b;
                console.log('done');
              } else {
                  console.log('Error');
                  i--;
              }
              
     }

     if (personalMovieDB.count < 10) {
         console.log("Просмотрено довольно мало фильмов");
     } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы класический зритель");
     } else if (personalMovieDB.count >= 30) {
         console.log("Вы киноман!");
     } else {
         console.log("Произошла ошибка")
     }
      console.log(personalMovieDB);*/


