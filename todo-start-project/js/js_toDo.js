const forms = document.querySelector('#newTaskForm');
const texts = document.querySelector('#addNewTask');
const tasksList = document.querySelector('#list-group');


//Загружаем данные
loadData();

// 1. Добавление новой задачи
// Отслеживаем отправку формы

forms.addEventListener('submit', function (evr) {
    // Отменяем стандартное поведение при отправке формы (перезагрузку страницы)
    evr.preventDefault();

    // Берем введённый текст пользователем в поле ввода
    const tasksText = texts.value; //взяли значение переменной texts и сохранили в др. перемен



    const taskHTML = `<li class="list-group-item d-flex justify-content-between">
                        <span contenteditable="true" class="task-title">${tasksText}</span>
                        <div>
                <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
                <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
                        </div>
                    </li>`;

    // Добавляем HTML разметку в константу (ul,куда именно добавляем) с 2 аргументами (в начале, и что добавляем)
    tasksList.insertAdjacentHTML('afterbegin', taskHTML);

    // Скрывает или показывает запись о том что список дел чист
    deleteListItem();

    // Очищаем поле добавления новой задачи
    texts.value = '';

    // Возвращаем фокус на поле ввода после добавления задачи
    texts.focus();
    
    //Сохранить данные
    saveData();
});

deleteListItem();


//2. КНОПКИ "Готово" и "Удалить"
// Прослушиваем клик внутри всего списка с задачами

tasksList.addEventListener('click', function(event) {

    //Проверяем,что клик произошел по кнопке "Удалить"
    if (event.target.getAttribute('data-action') == 'delete-task'){
    
        //Находим родительски тег <li> или .list-group-item и удаляем его
        event.target.closest('.list-group-item').remove();

         // Скрывает или показывает запись о том что список дел чист
        deleteListItem();

        //Сохранить данные
        saveData();

        //проверяем, что клик произошел по кнопке "Готово"
    }else if (event.target.getAttribute('data-action') == 'ready') {

        //Нашли родительский элемент Li
        const parrentElement = event.target.closest('.list-group-item');

        //В родительском элементе через пер. нашли спан и присвоили ему класс
        parrentElement.querySelector('span.task-title').classList.add('task-title-done');

        parrentElement.querySelector('span.task-title').setAttribute('contenteditable','false');

        //Перемещаем запись в конец списка
        tasksList.insertAdjacentElement('beforeend', parrentElement);

        //Удаляем кнопку "Готово"
        parrentElement.querySelector('button[data-action="ready"]').remove();

        //Сохранить данные
        saveData();
    }
});

function deleteListItem() {
    if (tasksList.children.length > 1) {
        document.querySelector('#empty-list-item').emptyListItem.style.display = "none";
    }else{
        document.querySelector('#empty-list-item').emptyListItem.style.display = "block";
    }
}

function saveData() {
    localStorage.setItem('todoList',tasksList.innerHTML);
}

function loadData() {
    if (localStorage.getItem('todoList')) {
    tasksList.innerHTML = localStorage.getItem('todoList');
    }
}








// //Сохраняем данные в localstorage
// localStorage.setItem('user', 'PabloEskobar');

// //Получаем данныеиз localStorage
// localStorage.getItem('user');

