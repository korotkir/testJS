function myClosure(zone) {
  return function(url) {
    return `https://${url}.${zone}`
  }
}

let ruZone = myClosure('ru')
let comZone = myClosure('com')
console.log(ruZone('yandex'))
console.log(comZone('google'))

//////////////////////
function bind(ctx, fn) { 
  return function(...args) {
    fn.apply(ctx, args)
  }
}
// Входные данные:
function logPerson() {
  console.log(
    `Person: ${this.name}, ${this.age}, ${this.job}. Является сотрудником компании СтройТЕК.`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Программист'}
const person2 = {name: 'Иван', age: 43, job: 'Строитель'}

console.log(bind(person1, logPerson)())
console.log(bind(person2, logPerson)())

