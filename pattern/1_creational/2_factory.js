/*
Допустим у нас имеется некоторая коллекция
элементов, которые очень похожи по функционалу
 */

// Сейчас мы увидим что все классы похожи по своим характеристикам но отличается цена
// Мы можем создать некоторую абстракцию которая оюъединяет все эти классы
// и сама определяет какой инстанс на создавать в зависимости от типа, это как раз
// является концепцией factory

// Инстанс — экземпляр класса в объектно-ориентированном программировании.

class SimpleMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMemberShip,
        standard: StandardMemberShip,
        premium: PremiumMemberShip
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()
const members = [
    factory.create('Kirill', 'simple'),
    factory.create('Vladilen', 'premium'),
    factory.create('Nastya', 'standard'),
    factory.create('Petr'),
]

members.forEach(m => {
    m.define()
})