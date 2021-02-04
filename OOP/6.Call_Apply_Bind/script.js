const b1 = document.querySelector('.b-1')
const b2 = document.querySelector('.b-2')

b1.onclick = test

function test(color, text) {
    this.style.background = color
    console.log(text)
}

// test() // Error!

//test.call(b1) // Кнопка стала оранжевой!

// b2.onclick = function () {
//     test.call(b1, 'red', 'ololo')
//     test.apply(b1, ['red', 'ololo'])
// }

let a = test.bind(b1, 'orange', 777)
let b = test.bind(b2, 'red', 888)

b2.onclick = a