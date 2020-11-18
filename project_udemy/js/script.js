/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
        navLeft = document.querySelector('.just_promo');

      

    del.forEach(item => {
            item.remove();
        });

    // del.forEach(function (item) {
    //     item.remove();
    // });
    // genre.innerHTML = 'Драма'; 
    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    moviesList.innerHTML = "";
    movieDB.movies.sort();

    // console.log(poster.innerHTML);

    movieDB.movies.forEach((film, i) => {
        moviesList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                                    <div class="delete"></div>
                                </li>`;
    });

    // a= a + 'aaa';
    // a += 'aaa';


    // const movieA = {
    //     hrefs: [
    //         "Фильмы",
    //         "Сериалы",
    //         "Мультфильмы",
    //         "Клипы",
    //         "Трейлеры"
    //   ]
    // }; 
    // navLeft.innerHTML = "";
    //  movieA.hrefs.sort();

    //  movieA.hrefs.forEach((numbers, q)=> {
    //     navLeft.innerHTML += `<li><a class="promo__menu-item" href="#">${q + 1} ${numbers}
    //     </a></li>`;
    // });


