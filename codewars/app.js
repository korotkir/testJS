function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
}

console.log(solution('abc', 'be'))