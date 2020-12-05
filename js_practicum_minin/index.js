console.log('index.js is worked')

const modal = $.modal({
  title: 'Kir Modal',
  open: '.indexBtn',
  closable: true,
  content: `
    <p>lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex provident assumenda itaque, dignissimos dolorem. Magnam inventore eaque op</p>
  `,
  width: '400px'
})

let openModal = document.querySelector(modal.openToIndex)
window.addEventListener('click', modal.open)

