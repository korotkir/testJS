class GridView {
    /*
    * properties
    * @param [array] _tableClass - css классы оформления
    * @param [array] data  - выходные данные
    * @param [array] _attribute - управляем что и как выводитьм из входных данных data
    * @param [array] _element - куда выводить таблицу
    * @param [array] _header - заголовок таблицы
    * @param [array] _headerClass - css классы заголовка
     */

    constructor() {
        this._header = ''
        this._headerClass = []
        this._tableClass = []
        this._element = 'body'
        this._attribute = []
    }

    /*
    * Method set header
     */

    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim()
            return true
        } else {
            return false
        }
    }

    /*
   * Method set header
    */

    set headerClass(headerClass) {
        if (typeof header === 'object' && header.trim() != '') {
            this._headerClass = headerClass
            return true
        } else {
            return false
        }
    }

    /*
   * Method set element
    */

    set element(element) {
        if (document.querySelector(element)) {
            this._element = document.querySelector(element)
            return true
        } else {
            return false
        }
    }


    /*
    * Method for show GridViewTable
     */

    // render - method for make table
    render() {

    }

}