// Вам предстоит сделать поисковик, в котором можно искать репозитории в GitHub по их названию. Допишите код в файл task.js, 
// чтобы при нажатии на кнопку «Найти» отправлялся запрос на 
// https://api.nomoreparties.co/github-search?q= и текст поиска, который пользователь ввёл в форму.
// Например, запрос https://api.nomoreparties.co/github-search?q=react
// возвращает объект вида:

// {

//     total_count: 1748551
//     incomplete_results: false
//     items: [
//         {
//             id: 10270250,
//             name: "react",
//             full_name: "facebook/react",
//             html_url: "https://github.com/facebook/react",
//             description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
//             stargazers_count: 160193,
//             language: "JavaScript",
//             ...
//         },
//         ...
//     ]
// } 

// Запрос должен отправляться по событию 'submit' на форме. Используйте для решения задачи fetch().then().catch() конструкцию. 
// Для успешного решения задачи необходимо выполнить следующие действия:
// Перед отправкой запроса нужно вызывать функцию onSubmitStart(). Эта вспомогательная функция нужна для «оживления» интерфейса.
// Функцию renderCount(total_count) следует вызывать только при наличии результатов поиска. 
// Вместе с ней нужно добавить в resultsContainer найденные репозитории, вызвав для каждого из них функцию template(item). 
// Обратите внимание, функция renderCount принимает аргумент из ответа сервера: total_count.
// ФункциюrenderEmptyResults нужно вызывать только при отсутствии результатов по запрошенному названию, 
// то есть когда total_count равен нулю.
// На случай ошибки, произошедшей на стороне сервера или же внутри клиентского кода, — вызывайте функцию renderError(). 
// Вызов этой функции добавит пользовательскому интерфейсу информативности.


// Подсказка:

// Задачу можно решить несколькими способами. 
// Для отрисовки результатов поиска пригодятся конструкции for..of или методы массивов. 
// Так же, стоит обратить внимание на событие 'submit', по умолчанию страница будет перезагружаться, 
// от такого поведения следует избавиться. 
// е забывайте, что fetch, который следует использовать для запроса, — асинхронный. Удачи! :)


const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');

const renderError = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
  countContainer.innerHTML = '';
};

const renderEmptyResults = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
  countContainer.innerHTML = '';
};

const renderCount = count => {
  countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
      )}</span> результатов
  `;
};

const onSubmitStart = () => {
  countContainer.innerHTML = `Загрузка...`;
  resultsContainer.innerHTML = '';
  errorContainer.innerHTML = '';
};

function template(item) {
  const newElement = document.createElement('li');
  newElement.classList.add('search__finding-item');
  newElement.innerHTML = `
      <p class="search__finding-name">
          ${item.full_name} 
      </p>
  `;
  return newElement;
}

async function onSubmit(event) {
  onSubmitStart()
  //  Получаем ссылку для поиска
  let url = document.querySelector('.search__textfield').value
  // Выполняем запрос на сервер
  await fetch(`https://api.nomoreparties.co/github-search?q=${url}`)
    .then(response => response.json())
      .then((obj) => {
        if (obj.total_count) {
          renderCount(obj.total_count)
          for (let values of obj.items) {
            resultsContainer.append(template(values))
          }
        } else {
          renderEmptyResults()
        }
      })
      .catch(renderError)
}

form.addEventListener('submit', onSubmit)