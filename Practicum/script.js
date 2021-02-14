/*
    «Модуль» — это популярная реализация паттерна,
инкапсулирующего приватную информацию, состояние
и структуру, используя замыкания.
    Это позволяет оборачивать публичные и приватные
методы и переменные в модули, и предотвращать
их попадание в глобальный контекст, где они могут
конфликтовать с интерфейсами других разработчиков.
Паттерн «модуль» возвращает только публичную часть API,
оставляя всё остальное доступным только внутри замыканий.

*/

// В данном примере нет инкапсуляции,
// соответственно все данные, в том числе,
// свойство module, любой пользователь может
// изменить. Например сделать это свойства строкой,
// в этом случае все методы сломаются:


// const noModule = {
//     counter: 0,
//     incrementCounter: function() {
//         return ++this.counter
//     },
//     resetCounter: function() {
//         return this.counter = 0
//     }
// }


// В данном случае мы имеем пример паттерна модуль.
// Теперь переменная counter является приватной и не никто не имеет к ней доступ.
// Если нужно получить ее значение, можно воспользоваться методом getCounter()

let moduleOne = (function () {
    let counter = 0;

    return {
        incrementCounter: function () {
            return ++counter;
        },
        resetCounter: function () {
            return counter = 0;
        },
        getCounter: function () {
            return counter;
        }
    }
})();

// ИЛИ ТАК:

let moduleTwo = (function () {
    let counter = 0
    moduleTwo = {}

    moduleTwo.incrementCounter = function() {
        return ++counter
    }
    moduleTwo.resetCounter = function() {
        return counter = 0
    }
    moduleTwo.getCounter = function() {
        return counter
    }

    return moduleTwo
})
