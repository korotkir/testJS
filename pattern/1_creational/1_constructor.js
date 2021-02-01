/*

Наиболее часто встречаемы дизайн паттерн в JS
Позволяет создавать новые объекты определенного типа.
Тут мы рассмотрим два вида синтаксиса
 */

// Как было раньше?

// Написание с большой буквы чтобы потом ее сделать классом
function ServerOld(name, ip) {
    this.name = name
    this.ip = ip
}

ServerOld.prototype.getUrl = function() {
    return `https://${this.ip}:80`
}

const awsOld = new ServerOld('AWS German', '81.21.21.32')
console.log(awsOld.getUrl())

// Вариант выше использовали когда еще не было классов в JS

// Сейчас данный паттерн пишут так:

class ServerNew {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const awsNew = new ServerNew('AWS German', '81.21.21.32')
console.log(awsNew.getUrl())


