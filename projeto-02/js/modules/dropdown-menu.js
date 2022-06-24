import outsideClick from './outsideclick.js'

export default class DropDownMenu {
  constructor(initmenu, events) {
    this.initMenu = document.querySelectorAll(initmenu)

    // define touchstart e click como argumento
    // padrão de events caso o usuário não defina

    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events

    this.activeClass = 'active'
    this.ActiveDropDownMenu = this.ActiveDropDownMenu.bind(this)
  }
  // Ativa o dropdownmenu e adiciona
  // A função que observa o clique fora dele

  ActiveDropDownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget

    element.classList.add(this.activeClass)

    outsideClick(element, this.events, () => {
      element.classList.remove('active')
    })
  }

  // Adiciona os eventos  ao dropdownmenu

  addDropdownMenusEvent() {
    this.initMenu.forEach(item => {
      this.events.forEach(userEvent => {
        item.addEventListener(userEvent, this.ActiveDropDownMenu)
      })
    })
  }

  init() {
    if (this.initMenu.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}
