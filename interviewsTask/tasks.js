// Напишите функцию, которая определяет уникальны ли все символы в строке.
// Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

function isUnique(str) {
  return new Set(str).size === str.length
}

console.groupCollapsed('1 isUnique')
console.log(isUnique('abcdef')) // -> true
console.log(isUnique('12345671')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false
console.log(isUnique('sabcadeff'))
console.log(isUnique('aabbccdd'))
console.groupEnd()

// Напишите функцию, принимающая массив с вложенными массивами
// и распакуйте в результирующий плоский массов.
// В результате должны получить новый одномерный массив.

function flatten(array) {
  return String(array).split(',').map(el => +el)
}

console.groupCollapsed('2 flatten')
console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
console.groupEnd()

// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

function removeDupes(str) {
  const set = new Set(str)
  return [...set].join('')
}

console.groupCollapsed('3 removeDupes')
console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'
console.groupEnd()

// Напишите функцию, которая принимает массив строк и возвращает
// самую частовстречающуюся строку в этом массиве.
// Если таких строк несколько, то нужно вернуть первую, идя слева на право.

function highestFrequency(array) {
  let table = array.reduce((acc, el, i) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})

  let arr = []
  for (const element in table) {
    arr.push([element, table[element]])
  }

  return arr.sort((a,b) => b[1] - a[1])[0][0]

}

console.groupCollapsed('4 highestFrequency')
console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi
console.groupEnd()

// Напишите функцию, которая принимает 2 строки.
// Верните `true` если строки являются перевернутым вариантом друг друга (см. пример). Иначе верните `false`.

function isStringRotated(source, test) {
  return source.split('').sort().join('') === test.split('').sort().join('')
}

console.groupCollapsed('5 highestFrequency')
console.log(isStringRotated('javascript', 'scriptjava')) // -> true
console.log(isStringRotated('javascript', 'iptjavascr')) // -> true
console.log(isStringRotated('javascript', 'java')) // -> false
console.groupEnd()




