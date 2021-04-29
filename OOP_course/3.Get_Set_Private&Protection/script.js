class User {
    constructor() {
        // this._name = name
    }
    #test = 'test lol'
    set name(name) {
        this._name = name
    }
    get name() {
        return this._name
    }
    one() {
        console.log(this.#test)
    }

}

const student = new User()
student.name = 'Alex'

console.log(student)
console.log(student.name)
// console.log(student.#test) - Uncaught SyntaxError: Private field '#test' must be declared in an enclosing class

class User2 extends User {}

const student2 = new User2()
student2.name = 'Oleg'

