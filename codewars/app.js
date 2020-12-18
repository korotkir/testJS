// 1

function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
}

console.log(solution('abc', 'be'))

// 2

function reverseWords(str) {
    let fullReverse = str.split('').reverse().join('')
    let result = fullReverse.split(' ').reverse().join(' ')
    return result
}

console.log(reverseWords('Всем привет, меня зовут Кирилл!'))

// 3

function sortByLength (array) {
    array.sort(function(a,b) {
        return b.length - a.length
    }).reverse()
    return array
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

// 4

function twoOldestAges(ages) {
    ages.sort(function(a,b) {
        return b - a
    }).reverse()
    return ages.slice(-2)
}

console.log(twoOldestAges([999,1,2,3,7,4,888])) // 1,2,3,6,8,


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

console.log(descendingOrder(123456789))

// 6

function sumTwoSmallestNumbers(numbers) {
    let sorting =  numbers.sort(function(a,b){ return b - a})
    let result = sorting.slice(-2)
    return result[0] + result[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))

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

console.log(oddOrEven([1,2,3,4]))

// 8

function createPhoneNumber(numbers){
    let str = numbers.join('')
    return `(${str[0]}${str[1]}${str[2]}) ${str[3]}${str[4]}${str[5]}-${str[6]}${str[7]}${str[8]}${str[9]}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"




























