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
    if (suspectInfo['James'].includes(dead[0])) {
        return 'Yes'
    }
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