// Классы ES-6

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

// класс нужно называть с большой буквы
// Для того чтобы проинициализировать начанльные значения данного класса
// мы должны реализовать метод конструктор
// В конструктор мы будем принимать объект options, который мы будем причислять в данный клас
class Animal {
    static type = 'ANIMAL' // если переменная является статической, обращаться к ней можно Animal.type

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal!')
    }
}

// Как нам создать тоже самый объект animal с помощью класса?

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am cat!')
    }

    get ageInfo() {
        return this.age * 7
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black', // Что нам делать если мы хотим также передавать дополнительные параметры?
    // реализуем конструктор в классе Cat, чтобы цвет можно было присваивать только кошкам
})

/////////////////////////////////////////////////////////////////////////////////////////
                        // Как на практике работают классы в JS?
/////////////////////////////////////////////////////////////////////////////////////////

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green'
})

// При открытии мы получаем красный квадрат
// Если мы обратимся к переменной box1 - мы можем вызывать методы, которые реализованы в Component
// box.hide() и  box.show()