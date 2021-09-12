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
    let re = url.match(/(\w|\-)+\./g) // массив с подходящими значениями
    if (re[0] == 'www.') {re.splice(0,1)}
    let result = re[0] // берем самый первый (левый элемент)
    return result.slice(0, result.length - 1) // удаляем точку
}

console.groupCollapsed(' 12 ')
console.log(
    `Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
For example:
domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"`)
console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName('https://www.n9-rj6vxavp.tv'))
console.groupEnd()

// 13

function order(words){
    return words.split(' ').sort((a,b) =>
        b.match(/\d+/) - a.match(/\d+/)).reverse().join(' ')
}

console.groupCollapsed(' 13 ')
console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")) // ""
console.groupEnd()

// 14

function getMiddle(s)
{
  //Code goes here!
  if (s.length === 1) {
    return s
  } else if (s.length % 2 === 0) {
      let oneStep = s.length / 2
      let twoStep = oneStep - 1
      return s.slice(twoStep, -Math.abs(twoStep))
    } else if (s.length % 2 !== 0) {
      let oneStep = (s.length - 1) / 2
      return s.slice(oneStep, -Math.abs(oneStep))
  }
}

console.groupCollapsed(' 14 ')
console.log('You are going to be given a word. Your job is to return the middle character of the word. If the words length is odd, return the middle character. If the words length is even, return the middle 2 characters.')
console.log('testing', getMiddle('testing')) // t
console.log('test', getMiddle('test')) // es
console.log('A', getMiddle('A'))
console.groupEnd()

// 15. Вариант 1.

function ifLikes(names) {
  if(names.length === 0) {
    return `no one likes this`
  } else if(names.length === 1) {
    return `${names[0]} likes this`
  } else if(names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if(names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    let value = names.length - 2
    return `${names[0]}, ${names[1]} and ${value} others like this`
  }
}


console.groupCollapsed(' 15. Через if')
console.log(ifLikes([])) // must be "no one likes this"
console.log(ifLikes(['Alex',])) // must be "Alex likes this"
console.log(ifLikes(['Alex', 'Jacob'])) // must be "Alex and Jacob like this"
console.log(ifLikes(['Alex', 'Jacob', 'Mark'])) // must be "Alex, Jacob and Mark like this"
console.log(ifLikes(['Alex', 'Jacob', 'Mark', 'Max'])) // must be "Alex, Jacob and 2 others like this"
console.groupEnd()

// 15. Вариант 2.

function switchLikes(names) {
 switch(names.length) {
  case 0:
   return `no one likes this`
   break
  case 1:
   return `${names[0]} likes this`
   break
  case 2:
   return `${names[0]} and ${names[1]} like this`
   break
  case 3:
   return `${names[0]}, ${names[1]} and ${names[2]} like this`
   break
  default:
   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
 }
}

console.groupCollapsed(' 15. Через Switch')
console.log(switchLikes([])) // must be "no one likes this"
console.log(switchLikes(['Alex',])) // must be "Alex likes this"
console.log(switchLikes(['Alex', 'Jacob'])) // must be "Alex and Jacob like this"
console.log(switchLikes(['Alex', 'Jacob', 'Mark'])) // must be "Alex, Jacob and Mark like this"
console.log(switchLikes(['Alex', 'Jacob', 'Mark', 'Max'])) // must be "Alex, Jacob and 2 others like this"
console.groupEnd()

// 16

function pigIt(str){
  //Code here
  let strArr = str.split(' ')
  let firstLetter = strArr.map(elem => elem.substring(0, 1))
  let result = strArr.map(el => el.slice(1)).map((el, i, arr) => el + firstLetter[i] + 'ay').join(' ')
  return result.slice(-3, -2).search(/[^a-zа-яё0-9\s]/gi) ? result : result.substring(0, result.length - 2)


}

console.groupCollapsed(' 16.')
console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'))     // elloHay orldway !
console.groupEnd()

// 17. Human readable duration format

// https://calculat.io/ru/date/converter/seconds--365--days

function formatDuration (seconds) {
 let valueMinutes = 60
 let valueHours = 3600
 let valueDay = 86400
 let valueYear = 31536000
 let durationArr = []
 // Minutes
 let MinMinutes = seconds <= valueDay ? Math.floor(seconds / 60) : seconds
 let MinSecond = seconds - Math.round(seconds/5) * 5
 durationArr.push(MinMinutes)
 durationArr.push(MinSecond)
 let sometime = (el) => el > 1 ? 's' : ''
 let minutesResult = durationArr[0] ? `${durationArr[0]} minute` + sometime(durationArr[0]) + (durationArr[1] ? ` and ${durationArr[1]} second` + sometime(durationArr[1]) : '') : `${durationArr[1]} second` + sometime(durationArr[1])

 // Hours
 let hourHours = Math.floor(durationArr[0] / 60)
 let hourMinutes = durationArr[0] % 60
 let hourSeconds = seconds - (Math.floor(seconds / 60) * 60)
 let hourResult = hourSeconds && hourMinutes
                   ? `${hourHours} ${'hour' + sometime(hourHours)}, ${hourMinutes} ${'minute' + sometime(hourMinutes)} and ${hourSeconds} ${'second' + sometime(hourSeconds)}` : hourSeconds
                   ? `${hourHours} ${'hour' + sometime(hourHours)} and ${hourSeconds} ${'second' + sometime(hourSeconds)}` : hourMinutes
                   ? `${hourHours} ${'hour' + sometime(hourHours)}, ${hourMinutes} ${'minute' + sometime(hourMinutes)}` : `${hourHours} ${'hour' + sometime(hourHours)}`
 // Day
 let dayDays = Math.floor(durationArr[0] / valueDay)
 let dayHours = Math.floor((durationArr[0] % valueDay) / 3600)
 let dayMinutes = Math.floor((durationArr[0] % valueDay) % 3600 / 60)
 let daySeconds = seconds - (Math.floor(seconds / 60) * 60)
 let dayResult = dayMinutes && dayHours
                   ? `${dayDays} ${'day' + sometime(dayDays)}, ${dayHours} ${'hour' + sometime(dayHours)}, ${dayMinutes} ${'minute' + sometime(dayMinutes)} and ${daySeconds} ${'second' + sometime(daySeconds)}` : daySeconds && dayMinutes
                   ? `${dayDays} ${'day' + sometime(dayDays)}, ${dayMinutes} ${'minute' + sometime(dayMinutes)} and ${daySeconds} ${'second' + sometime(daySeconds)}` : daySeconds
                   ? `${dayDays} ${'day' + sometime(dayDays)} and ${daySeconds} ${'second' + sometime(daySeconds)}` : dayHours
                   ? `${dayDays} ${'day' + sometime(dayDays)}, ${dayHours} ${'hour' + sometime(dayHours)} and ${daySeconds} ${'second' + sometime(daySeconds)}` : hourMinutes
                   ? `${dayDays} ${'hour' + sometime(dayHours)}, ${dayMinutes} ${'minute' + sometime(dayMinutes)}` : `${dayHours} ${'hour' + sometime(dayHours)}`

 // Year
 let yearResult =  'no'

 // result
 return durationArr[0] <= valueMinutes ? minutesResult
  : durationArr[0] <= valueHours ? hourResult
   : durationArr[0] >= valueDay ? dayResult
    : yearResult
}


// console.groupCollapsed(' 17.')
console.log(formatDuration(1))
console.log(formatDuration(61))
console.log(formatDuration(121))
console.log(formatDuration(3600))
console.log(formatDuration(87790))
//console.groupEnd()


// 18.
function formatDuration (seconds) {
if (seconds === 0) {return 'now'}
 result = (value, year = 31536000) => {
 	let sometimes = (el) => el > 1 ? 's' : ''
 	let years = Math.floor(value / year)
  let days  = Math.floor((value % year) / 86400)
  let hours = Math.floor((value % year) % 86400 / 3600)
  let minutes = Math.floor((value % year) % 86400 % 3600 / 60)
  let second = value - (Math.floor(value / 60) * 60)
  let template = `${years != 0 ? years + ' year' + sometimes(years) + '-' : ''}${days != 0 ? days + ' day' + sometimes(days) + '-' : ''}${hours != 0 ? hours + ' hour' + sometimes(hours) + '-' : ''}${minutes != 0 ? minutes + ' minute' + sometimes(minutes) + '-' : ''}${second != 0 ? second + ' second' + sometimes(second) : ''}`.trim().replace(/ {1,}/g," ").split('-').filter((el) => el != '')

template.length === 5 ? template.splice(1, 0, ',') && template.splice(3, 0, ',') && template.splice(5, 0, ',') && template.splice(7, 0, 'and') : template.length === 4 ? template.splice(1, 0, ',') && template.splice(3, 0, ',') && template.splice(5, 0, 'and') : template.length === 3 ? template.splice(1, 0, ',') && template.splice(3, 0, 'and') : template.length === 2 ? template.splice(1, 0, 'and') : ''

  return template.join(' ').replace(/\s,/g, ',')

 }

 return result(seconds)
}


console.groupCollapsed(' 18.')
console.log(formatDuration(1))
console.log(formatDuration(61))
console.log(formatDuration(121))
console.log(formatDuration(3600))
console.log(formatDuration(87780))
console.log(formatDuration(10622))
console.log(formatDuration(41535960))
console.log(formatDuration(0))
console.groupEnd()


// 19. Pete, the baker

/*
Pete likes to bake some cakes. He has some recipes and ingredients.
Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients
(also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
*/

function cakes(recipe, available) {
 let recipeArr = Object.keys(recipe)
 let availableArr = Object.keys(available)
 let check = recipeArr.every((el, index) => availableArr.includes(el))
 if(!check) return 0
 let removeArr = availableArr.filter(el => recipeArr.includes(el))

 let resultArr = []

 for (let i = 0; i <= removeArr.length - 1; i++) {
  resultArr.push(Math.floor(available[removeArr[i]] / recipe[removeArr[i]]))
 }

 return Math.min(...resultArr)
}

console.groupCollapsed('19')
// must return 2
console.log(cakes(
 {flour: 500, sugar: 200, eggs: 1},
 {flour: 1200, sugar: 1200, eggs: 5, ups: 70})
)

// must return 0
console.log(cakes(
 {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
 {sugar: 500, flour: 2000, milk: 2000}))
console.groupEnd()

















