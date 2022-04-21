"use strict";

// 1
/*
Прислал Александр.

Кто убийца?

Мы - следователи. Нам удалось сузить список подозреваемых до небольшого числа
людей. К счастью, у нас есть информация о том, кто с кем встречался.

Дан список имен подозреваемых и всех, с кем подозреваемые встречались в этот день.

{
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle'],
}

А также список убитых:

['Lucas', 'Bill']

Найдите имя убийцы. В нашем случае это James, так как он единственный, кто видел
Lucas и Bill.
*/
function killer(suspectInfo, dead) {
  for (let i = 0; i < Object.keys(suspectInfo).length; i++) {
    for (let suspect[i] of suspectInfo[i]) {
      return suspectInfo[suspect]
    }
  }
}

console.log(killer({
  'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill'])); // 'James'

// console.log(killer({
//     'Brad': [],
//     'Megan': ['Ben', 'Kevin'],
//     'Finn': []
// }, ['Ben'])); // 'Megan'


// 2

// Напишите программу, которая выводит  в консоль числа от 1 до 100.
// При этом, вместо чисел кратных 3, программа должна выводить слово "Flizz",
// а вместо чисел кратных 5 - слово "Buzz". Если число кратно и 3 и 5,
// программа должна выводить - "FlizzBuzz".


for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FlizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Flizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}








