/*

* 1. Динамически на основе массива вывести список карточек
* 2. Показать цену в модалке (и это должна быть одна модалка)
* 3. Модалка для удаления с 2мя кнопками

*/

console.log('index.js is worked')

const modal = $.modal({
  title: 'Kir Modal',
  open: '.indexBtn',
  closable: true,
  content: `
    <p>lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex provident assumenda itaque, dignissimos dolorem. Magnam inventore eaque op</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary Btn click')
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      console.log('Danger Btn click')
      modal.close()
    }}
  ]
})

// Открыть окно на странице 
// let openModal = document.querySelector(modal.openToIndex)
// window.addEventListener('click', modal.open)

