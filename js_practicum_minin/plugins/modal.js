console.log('modal.js is worked')
let DEFAULT_WIDTH = '600px'

Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createModalFooter(buttons = []) {
  if(buttons.length === 0) {
    return document.createElement('div')
  }

  const wrap = document.createElement('div')
  wrap.classList.add('modal-footer')

  buttons.forEach(btn => {
    const $btn = document.createElement('button')
    $btn.textContent = btn.text
    $btn.classList.add('btn')
    $btn.classList.add(`btn-${btn.type || 'secondary'}`)
    $btn.onclick = btn.handler || noop
    wrap.appendChild($btn)
  })

  return wrap
}

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
      <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
          <div class="modal-header">
            <span class="modal-title">${options.title || 'Window'}</span>
            ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
          </div>
          <div class="modal-body" data-content>
            ${options.content || ''}
          </div>
        </div>
      </div>
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))    
    document.body.appendChild(modal)
    return modal
}
 
 $.modal = function(options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  let modal = {
    open() {
      if(destroyed) {
        return console.log('Modal is destroyed')
      }
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
        if (typeof options.onClose === 'function') {
            options.onClose()
        }
      }, ANIMATION_SPEED)
    },
  }

  const listener = event => {
    if(event.target.dataset.close) {
      modal.close()
    }
  } 

  $modal.addEventListener('click', listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', listener)
      destroyed = true
    },
    setContent(html){
      $modal.querySelector('[data-content]').innerHTML = html
    }
  }) 
}



