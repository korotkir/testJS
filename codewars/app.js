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