const forms = document.querySelector('#newTaskForm');
const texts = document.querySelector('#addNewTask');
const tasksList = document.querySelector('#list-group');
const emptyListItem = document.querySelector('#empty-list-item');

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
});

function deleteListItem() {
    if (tasksList.children.length > 1) {
        emptyListItem.style.display = "none";
    }else{
        emptyListItem.style.display = "block";
    }
}

deleteListItem();