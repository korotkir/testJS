document.addEventListener('DOMContentLoaded', () => {

// Задача 1.
// Создать массив и вывести с помощью цикла все его элементы на страницу

let container = document.querySelector('.container')

const floor = ['Ландыши', 'Розы', 'Орхидеи', 'Гвоздики'] 

function cicle(){
  for (i = 0; i < floor.length; i++){
    const result = floor[i]
    container.innerHTML  += `${result} </br></br>`
    console.log(floor[i])
  }
}

cicle()

// Задача 2.
// Создать табло innerHTML, значение которого = 'A + B' (строка). 
// Создать цикл, записывающий в массив значения A и B.

let math = document.querySelector('.math')
let resultOne = document.querySelector('.resultOne')
math.innerHTML = '20+11'
let inter = math.innerHTML
// Способ 1. (не подходит под условие данного задания)
// Функция eval() выполняет арифметические действия над строкой.
resultOne.innerHTML = `<b>Способ 1. Результат: ${eval(inter)}</b>`

// Способ 2.
// С помощью метода split(), разбиваем строку (разделитель '+') и превращаем её в массив
let resultTwo = document.querySelector('.resultTwo')
function calc() {
	let arr = inter.split('+')
	console.log(arr)
	let result = +arr[0] + +arr[1]
	console.log(result)
	resultTwo.innerHTML = `<b>Способ 2. Результат: ${result}<b>`
}
calc()

})

