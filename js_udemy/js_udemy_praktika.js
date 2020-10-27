
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
    RememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы его оцените ?' , '');
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('Done!');
                } else {
                    console.log('Error!');
                    i--;
                }
        }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30 ) {
            console.log('Вы киноман !');
        } else {
            console.log('Ошибка!');
        }
    },
    ShowMyDatabase (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
    },
    toggleVisibleMyDB: function(){
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            }else{
                personalMovieDB.privat = true;
            }
    },
    writeYourGenres() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre === null) {
            //     console.log("Вы ввели некорректные данные или не ввели их вовсе");
            //     i--;
            // }else{
            //       personalMovieDB.genres[i-1] = genre;
            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую `).toLowerCase();

            if (genres == '' || genres == null) {
                    console.log("Вы ввели некорректные данные или не ввели их вовсе");
                    i--;
                }else {
                      personalMovieDB.genres = genres.split(', ');
                      personalMovieDB.genres.sort();
                }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });

    }
};









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


