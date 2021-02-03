class User {
    constructor(id, nickname, age, email, phone, status) {
        this.id = id
        this.nickname = nickname
        this.age = age
        this.email = email
        this.phone = phone
        this.status = status
    }

    // Статический метод для сравнения возрастов пользователей
    static getId(users1, users2) {
         if (users1.age > users2.age) {
           let result = users1.age - users2.age
           return `${users1.nickname} старше ${users2.nickname} на ${result} лет`
       } else {
           let result = users2.age - users1.age
           return `${users2.nickname} старше ${users1.nickname} на ${result} лет`
       }
    }

    // Написание метода для практики
    getMail() {
        return `E-mail пользователя ${this.nickname}: ${this.email}`
    }
}

const ivanov = new User(1, 'ivanofff', 32, 'ivanov@mail.ru', 12345, 'beginner')
const frolov = new User(2, 'frolov', 98,'frolov@mail.ru', 54321, 'admin')
let adressBook = [ivanov, frolov]

// Вызываем статический метод
console.log(User.getId(ivanov, frolov))

// Вызываем обычный метод
adressBook.forEach(element => console.log(element.getMail()))