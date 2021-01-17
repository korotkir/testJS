// 1


function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
}

console.groupCollapsed(` 1 `)
console.log(solution('abc', 'be'))
console.groupEnd()

// 2


function reverseWords(str) {
    let fullReverse = str.split('').reverse().join('')
    let result = fullReverse.split(' ').reverse().join(' ')
    return result
}

console.groupCollapsed(` 2 `)
console.log(reverseWords('Всем привет, меня зовут Кирилл!'))
console.groupEnd()
// 3

function sortByLength (array) {
    array.sort(function(a,b) {
        return b.length - a.length
    }).reverse()
    return array
}

console.groupCollapsed(` 3 `)
console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
console.groupEnd()
// 4

function twoOldestAges(ages) {
    ages.sort(function(a,b) {
        return b - a
    }).reverse()
    return ages.slice(-2)
}

console.groupCollapsed(` 4 `)
console.log(twoOldestAges([999,1,2,3,7,4,888])) // 1,2,3,6,8,
console.groupEnd()

// 5

function descendingOrder(n){
    let str = String(n)
    let arr = str.split('')
    let sort = arr.sort(function(a,b) {
        return b - a
    })
    let result = sort.join('')
    return +result
}

console.groupCollapsed(` 5 `)
console.log(descendingOrder(123456789))
console.groupEnd()
// 6

function sumTwoSmallestNumbers(numbers) {
    let sorting =  numbers.sort(function(a,b){ return b - a})
    let result = sorting.slice(-2)
    return result[0] + result[1]
}

console.groupCollapsed(` 6 `)
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
console.groupEnd()
// 7

function oddOrEven(array) {
    let sum = 0
    for(i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if(sum % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.groupCollapsed(` 7 `)
console.log(oddOrEven([1,2,3,4]))
console.groupEnd()
// 8

function createPhoneNumber(numbers){
    let str = numbers.join('')
    return `(${str[0]}${str[1]}${str[2]}) ${str[3]}${str[4]}${str[5]}-${str[6]}${str[7]}${str[8]}${str[9]}`
}

console.groupCollapsed(` 8 `)
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
console.groupEnd()
// 9

// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');


function expandedForm(num) {
    let toString = String(num)
    let arr = []
    let result
    for (let i = 0; i < toString.length; i++) {
         if (toString[i] !== '0') {
             result = toString[i] + '0'.repeat(toString.length - (i + 1))
             arr[i] = result
         } else {
             arr[i] = '0'
         }
    }
    return String(arr.filter(func = (remove) => remove != 0).join(' + '))
}

console.groupCollapsed(` 9 `)
console.log(expandedForm(5006004))
console.groupEnd()

// 10. Highest Scoring Word

// На входе: предложение
// На выходе: слово получившее максимальный балл
// Баллы присуждаются от суммы букв, a = 1, b = 2, c = 3 ...
// если два слова набирают одинаковое количество баллов, выигрывает слово которое написано раньше.

function high(x){
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let stringToArray = x.split(' ')
    let symbol = {}
    let result = []

    // Цикл разбивает слова на буквы, каждое слово отдельный индекс объекта
    for (i = 0; i < stringToArray.length; i++) {
        symbol[i]  = stringToArray[i].split('')
    }

    for (i = 0; i < alphabet.length; i++) {
        for (k = 0; k < Object.keys(symbol).length; k++ ) {
            for (j = 0; j < symbol[k].length; j++) {
                if (alphabet[i] === symbol[k][j]) {
                    symbol[k][j] = alphabet.indexOf(alphabet[i])
                }
            }
        }
    }

    for (i = 0; i < stringToArray.length; i++) {
        result[i] = symbol[i].reduce((total, amount) => total + amount)
    }

    console.table(result)
    return stringToArray[result.indexOf(Math.max.apply(Math, result))]
}

console.groupCollapsed(' 10 ')
console.log(`Побеждает слово: ${high('aa b')}`)
console.groupEnd()


// 11.
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    let arr = this.split(' ')
    let upWord = arr.map(n => `${(n[0] || '').toUpperCase()}${n.slice(1)}`)
    return upWord.reduce(function (a,b){
        return a + b
    })
}

console.groupCollapsed(' 11 ')
console.log('camel case word'.camelCase())
console.groupEnd()


// 12

/*
Write a function that when given a URL as a string, parses
out just the domain name and returns it as a string.
For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
    let re = new RegExp()
    console.log(url.split())
}

domainName("http://github.com/carbonfive/raygun")


















