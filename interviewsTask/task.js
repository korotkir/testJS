friends = {
    'Cерега' : 'Омск',
    'Соня' : 'Москва',
    'Дима' : 'Челябинск'}

function isAnyoneIn(collection, city) {
    for (let key in collection) {
        if (collection[key] == city) {
            return `В городе ${collection[key]} проживает ${key}`
        }
    }
    return 'Ничего не найдено!'
}
console.groupCollapsed('Объекты. Цикл for in')
console.log(isAnyoneIn(friends, 'Москва'))
console.groupEnd()

// key: Серега, collection[key] = Омск

// https://www.youtube.com/watch?v=VeWtYEX8NfU&feature=emb_logo
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

}

console.log(killer({
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill'])); // 'James'

console.log(killer({
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': []
}, ['Ben'])); // 'Megan'