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
let guitars = [
  {id: 1, title: 'Fender Stratocaster', price: 1000 , img: 'https://sc1.musik-produktiv.com/pic-010113338l/haar-traditional-s-sea-foam-green-aged-amber-hss.jpg' },
  {id: 2, title: 'Gibson Les Paul', price: 1500, img: 'https://sc1.musik-produktiv.com/pic-010113930xl/gibson-les-paul-standard-50s-tobacco-burst.jpg' },
  {id: 3, title: 'Gibson SG', price: 1100, img: 'https://sc1.musik-produktiv.com/pic-010114175xl/gibson-sg-tribute-cherry-satin.jpg'},
  // {id: 4, title: 'Fender Stratocaster', price: 1000 , img: 'https://sc1.musik-produktiv.com/pic-010113338l/haar-traditional-s-sea-foam-green-aged-amber-hss.jpg' },
  // {id: 5, title: 'Gibson Les Paul', price: 1500, img: 'https://sc1.musik-produktiv.com/pic-010113930xl/gibson-les-paul-standard-50s-tobacco-burst.jpg' },
  // {id: 6, title: 'Gibson SG', price: 1100, img: 'https://sc1.musik-produktiv.com/pic-010114175xl/gibson-sg-tribute-cherry-satin.jpg'},
  // {id: 7, title: 'Fender Stratocaster', price: 1000 , img: 'https://sc1.musik-produktiv.com/pic-010113338l/haar-traditional-s-sea-foam-green-aged-amber-hss.jpg' },
  // {id: 8, title: 'Gibson Les Paul', price: 1500, img: 'https://sc1.musik-produktiv.com/pic-010113930xl/gibson-les-paul-standard-50s-tobacco-burst.jpg' },
  // {id: 9, title: 'Gibson SG', price: 1100, img: 'https://sc1.musik-produktiv.com/pic-010114175xl/gibson-sg-tribute-cherry-satin.jpg'},
]
// Стрелочная функция
// toHTML - название функции
// guitars - аргумент функции
// => - return
let toHTML = guitars => `
  <div class="col-4 col-sm-12">
        <div class="card">
          <img class="card-img-top" style="padding: 5px; height: 300px;" src="${guitars.img}" alt="${guitars.title}">
          <div class="card-body">
            <h5 class="card-title">${guitars.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${guitars.id}">Узнать цену</a>
            <a href="#" class="btn btn-danger" data-btn="remove" data-id="${guitars.id}">Удалить</a>
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
  const guitar = guitars.find(f => f.id === id)

  if (btnType === 'price') {
    priceModal.setContent(`<p>Цена ${guitar.title}: <strong>${guitar.price}$</strong></p>`)
    priceModal.open()
    console.log(id, guitar)
  } else if(btnType === 'remove') {
    $.confirm({
      title: 'Вы уверены?',
      content: `<p>Вы удаляете товар: <strong>${guitar.title}</strong></p>`
    }).then(() => {
      guitars = guitars.filter(f => f.id !== id)
      render()
    }).catch(() => {
      console.log('Cancel')
    })
  }
})


