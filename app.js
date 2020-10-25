document.addEventListener('DOMContentLoaded', () => {

console.log('Работает!')
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

// Создать табло innerHTML, значение которого = 'A + B' (строка). 
// Создать цикл, записывающий в массив значения A и B.

let containerTwo = document.querySelector('.containerTwo')
containerTwo.innerHTML = '20+11'

let arr = ['', '']

console.log(arr)



})

