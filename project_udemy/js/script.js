/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

   // document.addEventListener('DOMContentLoaded', ()=>{
   //    const movieDB = {
   //       movies: [
   //           "Логан",
   //           "Лига справедливости",
   //           "Ла-ла лэнд",
   //           "Одержимость",
   //           "Скотт Пилигрим против...",
   //           "Мстители"
   //       ]
   //   };
 
   //   const del = document.querySelectorAll('.promo__adv img'),
   //       poster = document.querySelector('.promo__bg'),
   //       genre = poster.querySelector('.promo__genre'),
   //       moviesList = document.querySelector('.promo__interactive-list'),
   //       addds = document.querySelector('form.add'),
   //       addInput = addds.querySelector('.adding__input'),
   //       checkboxing = addds.querySelector('[type="checkbox"]');
      

   //    // Прослушиваем кнопку Подтвердить и сбрасываем перезагрузку формы//
   //   addds.addEventListener('submit', (e)=> {
   //       e.preventDefault();

   //       let newFilm = addInput.value;
   //       const favorite = checkboxing.checked;

   //       if (newFilm) {

   //          if (newFilm.length > 21) {
   //             newFilm = `${newFilm.substring(0, 22)}...`;
   //          }

   //          if (favorite) {
   //             console.log("Добавляем любимый фильм");
   //          }

   //          movieDB.movies.push(newFilm);
   //          sortArr(movieDB.movies);
   //          createMovieList(movieDB.movies, moviesList);
   //       }

   //       e.target.reset();

   //   });
 
   // // Удаляем рекламу с правой колонки // 
   //  const deleteReklam = (arr)=>{
   //   arr.forEach(item => {
   //           item.remove();
   //       });
   // };
    
   //   // Меняем фон логотипа и меня жанр фильма //
   //   const makeChanges = () => {
   //       genre.textContent = 'Драма';
   //       poster.style.backgroundImage = 'url("img/bg.jpg")';
   //   };
     
   //   const sortArr = (arr) => {
   //      arr.sort();
   //   };
     
   //   // console.log(poster.innerHTML);

   //   function createMovieList (films, parent) {
   //    parent.innerHTML = "";
   //    sortArr(films);

   //      films.forEach((film, i) => {
   //       moviesList.innerHTML += 
   //       `<li class="promo__interactive-item">${i + 1} ${film}
   //           <div class="delete"></div>
   //        </li>`;
   //     });

   //     document.querySelectorAll('.delete').forEach((btn, i) =>{
   //       btn.addEventListener('click', ()=> {
   //          btn.parentElement.remove();
   //          movieDB.movies.splice(i, 1);
   //          createMovieList(films, parent);
   //       });
   //     });
   //   }

   //    makeChanges();
   //    deleteReklam(del);
   //    createMovieList(movieDB.movies, moviesList);
   //    // sortArr(movieDB.movies);
     
   //    // a= a + 'aaa';
   //   // a += 'aaa';
 
   // });


   window.addEventListener('DOMContentLoaded', ()=> {
      const FilmDB = {
        films: [
         'Мстители',
         'Логан',
         'Rampage',
         'Невероятная история Уолтера Митти и его приключения',
         'Невероятный халк'
      ]
   };

   const delet = document.querySelectorAll('.promo__adv img'),
         janre = document.querySelector('.promo__genre'),
         backImg = document.querySelector('.promo__bg'),
         filmsList = document.querySelector('.promo__interactive-list'),
         formsH = document.querySelector('form.add'),
         inputAdd = document.querySelector('.adding_input'),
         checkingBox = document.querySelector('[type="checkbox"]');

         formsH.addEventListener ('submit', (event)=> {
                  event.preventDefault();
                  let NewKino = inputAdd;
                  let Checking = checkingBox;

            if (NewKino) {
               if (NewKino.length > 20) {
                  NewKino = `${NewKino.substring(0, 21)}...`;
               } 
               if (Checking) { 
                  console.log('Приём');
               }
            } 
            FilmDB.films = NewKino;
            sortArray(FilmDB.films);

         });


         function creativeKinoList (films, parent) {
            parent.innerHTML = "";
            sortArray(films);

            films.forEach((kin,o) => {
               filmsList.innerHTML +=
               `<li class="promo__interactive-item">${o + 1} ${kin}
                          <div class="delete"></div>
               </li>`;
             });
             
             document.querySelectorAll('.delete').forEach((korzinka,pi) => {
               korzinka.addEventListener('click', ()=> {
                  korzinka.parentElement.remove();
                  FilmDB.films.splice(pi, 1);
                  creativeKinoList(films, parent);
               });
            });
         }
            
         

         const deletes = (q)=> {
            q.forEach(item => {
                  item.remove();    
            });
         };

         const Changes = () => {
            janre.textContent = 'Драма';
            backImg.style.backgroundImage = 'url("img/bg.jpg")';
         };

         const sortArray = (arr)=> {
            arr.sort();
         };

         sortArray (FilmDB.films);
         creativeKinoList (FilmDB.films, filmsList);
         Changes ();
         deletes(delet);

   });