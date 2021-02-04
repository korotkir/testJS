console.log(this) // window

document.querySelector('.b-1').addEventListener('click', f1)

// document.querySelector('.b-1').onclick = function () {
//     console.log(this)
//     this.style.background = 'orange'
// }

function f1() {
    console.log(this)
    this.style.background = 'orange'
}

let p = document.querySelectorAll('p')
for (let i = 0; i < p.length; i++) {
    p[i].onclick = f1
}


class U2 {
    constructor(model) {
        this.model = model
    }
}

console.log(U2)

const boat = new U2('744')
console.log(boat)

