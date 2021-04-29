let a = 'Kirill'
let b = '123456'

let person = new User(a,b)

console.log(person)
console.log(person.username)
console.log(person.validatePassword())

let firstStudent = new Student(a,b, 'i123')
console.log(firstStudent)
console.log(firstStudent.getStudentCourses())