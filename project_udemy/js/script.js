/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

   document.addEventListener('DOMContentLoaded', ()=>{
      const movieDB = {
         movies: [
             "Логан",
             "Лига справедливости",
             "Ла-ла лэнд",
             "Одержимость",
             "Скотт Пилигрим против..."
         ]
     };
 
     const del = document.querySelectorAll('.promo__adv img'),
         poster = document.querySelector('.promo__bg'),
         genre = poster.querySelector('.promo__genre'),
         moviesList = document.querySelector('.promo__interactive-list'),
         addds = document.querySelector('form.add'),
         addInput = addds.querySelector('.adding__input'),
         checkboxing = addds.querySelector('[type="checkbox"]');
      

      // Прослушиваем кнопку Подтвердить и сбрасываем перезагрузку формы//
     addds.addEventListener('submit', (e)=> {
         e.preventDefault();

         let newFilm = addInput.value;
         const favorite = checkboxing.checked;

         if (newFilm) {

            if (newFilm.length > 21) {
               newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
               console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
         }

         e.target.reset();

     });
 
   // Удаляем рекламу с правой колонки // 
    const deleteReklam = (arr)=>{
     arr.forEach(item => {
             item.remove();
         });
   };
    
     // Меняем фон логотипа и меня жанр фильма //
     const makeChanges = () => {
         genre.textContent = 'Драма';
         poster.style.backgroundImage = 'url("img/bg.jpg")';
     };
     
     const sortArr = (arr) => {
        arr.sort();
     };
     
     // console.log(poster.innerHTML);

     function createMovieList (films, parent) {
      parent.innerHTML = "";
      sortArr(films);

        films.forEach((film, i) => {
         moviesList.innerHTML += 
         `<li class="promo__interactive-item">${i + 1} ${film}
             <div class="delete"></div>
          </li>`;
       });

       document.querySelectorAll('.delete').forEach((btn, i) =>{
         btn.addEventListener('click', ()=> {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
         });
       });
     }

      makeChanges();
      deleteReklam(del);
      createMovieList(movieDB.movies, moviesList);
      // sortArr(movieDB.movies);
     
      // a= a + 'aaa';
     // a += 'aaa';
 
   });

