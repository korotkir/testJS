console.log('modal.js is worked')

function _createModal(options) {
    // В HTML-документах создает элемент c тем тегом, 
    //что указан в аргументе или HTMLUnknownElement, 
    //если имя тега не распознаётся.
    const modal = document.createElement('div')
    // Добавляет класс 'vmodal' к созданому ранее div
    modal.classList.add('vmodal')
    // insertAdjacentHTML() разбирает указанный текст 
    // как HTML или XML и вставляет полученные узлы (nodes) 
    // в DOM дерево в указанную позицию. Данная функция не 
    // переписывает имеющиеся элементы, что предотвращает 
    // дополнительную сериализацию и поэтому работает быстрее, 
    // чем манипуляции с innerHTML.
    // 'afterbegin': сразу после открывающего тега  
    // element (modal) (перед первым потомком).
    modal.insertAdjacentHTML('afterbegin', `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal title</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <div class="p">Lorem ipsum dolor sit.</div>
            <div class="p">Lorem ipsum dolor sit.</div>
          </div>
          <div class="modal-footer">
            <button>Ok</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    `)
    document.body.appendChild(modal)
    return modal
}
 
 $.modal = function(options) {
   const ANIMATION_SPEED = 200
   const $modal = _createModal(options)
   let closing = false

  return {
    open() {
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)
    },
    destroy() {}
  }
}
