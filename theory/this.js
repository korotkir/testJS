// Контекст

function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Kirill',
    age: 22,
    helloName: function (job, phone) {
        console.group(`${this.name}, info:`) // Делает подзаголовок для каждого объекта
        console.log(`Hello ${this.name}, age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd() // необходимо закрывать console.group()
    }
}

person.helloName('Developer', 42354125) // Hello Kirill, age is 22

const nastya = {
    name: 'Nastya',
    age: 20
}

// Два способа для вызова функции
// 1
// person.helloName.bind(nastya, 'Nails', 89324234)() // Hello Nastya, age is 23
// 2
// const nastyaInfo = person.helloName.bind(nastya, 'Nails', 89324234)
// nastyaInfo()


// Методы call и apply

// Call отличается от bind
// bind
person.helloName.bind(nastya, 'Nails', 89324234)()
// call
person.helloName.call(nastya, 'Nails', 89324234) // вызывает функцию сразу, не нужны отдельные скобки
// apply
person.helloName.apply(nastya, ['Nails', 89324234]) // в apply всегда передается только два параметра, второй параметр всегда массив


//////////
// Задача: умножить каждый элемент массива на 20
const arrint = [1,2,3,4,5]

// 1 вариант
function multBy(array, n) {
    return array.map(function (i) {
        return i * n
    })
}

console.log(`Вариант 1: ${multBy(arrint, 20).join(', ')}`)

// 2 вариант

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(`Вариант 2: ${arrint.multBy(20).join(', ')}`)

