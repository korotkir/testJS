console.log('index.js is worked')

const priceModal = $.modal({
  title: 'Цена товара',
  open: '.indexBtn',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Закрыть', type: 'primary', handler() {
      priceModal.close()
    }}
  ]
})

/*
* 1. Динамически на основе массива вывести список карточек
* 2. Показать цену в модалке (и это должна быть одна модалка)
* 3. Модалка для удаления с 2мя кнопками
*/
const guitars = [
  {id: 1, title: 'Fender Stratocaster', price: 1000 , img: 'https://sc1.musik-produktiv.com/pic-010113338l/haar-traditional-s-sea-foam-green-aged-amber-hss.jpg' },
  {id: 2, title: 'Gibson Les Paul', price: 1500, img: 'https://sc1.musik-produktiv.com/pic-010113930xl/gibson-les-paul-standard-50s-tobacco-burst.jpg' },
  {id: 3, title: 'Gibson SG', price: 1100, img: 'https://sc1.musik-produktiv.com/pic-010114175xl/gibson-sg-tribute-cherry-satin.jpg'}
]
// Стрелочная функция
// toHTML - название функции
// guitars - аргумент функции
// => - return
let toHTML = guitars => `
  <div class="col">
        <div class="card">
          <img class="card-img-top" style="padding: 5px; height: 300px;" src="${guitars.img}" alt="${guitars.title}">
          <div class="card-body">
            <h5 class="card-title">${guitars.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${guitars.id}">Узнать цену</a>
            <a href="#" class="btn btn-danger">Удалить</a>
          </div>
        </div>
      </div>
`
// map преобразовывает в другой тип
function render() {
  const html = guitars.map(toHTML).join('')
  document.querySelector('#guitars').innerHTML = html
}

render()

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id

  if (btnType === 'price') {
    const guitar = guitars.find(f => f.id === id)
    priceModal.setContent(`<p>Цена ${guitar.title}: <strong>${guitar.price}$</strong></p>`)
    priceModal.open()
    console.log(id, guitar)
  }
})


