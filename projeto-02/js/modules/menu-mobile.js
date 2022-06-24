import outsideClick from './outsideclick.js'

export default class initMenuMobile {
  constructor(menubutton, menuList, events) {
    this.menubutton = document.querySelector(menubutton)
    this.menuList = document.querySelector(menuList)
    this.activeClass = 'active'

    // Define touchstart e click como evento padrão
    // caso o usuário não definir
    if (events === undefined) this.events = ['click', 'touchstart']
    else this.events = events

    this.initMenuMob = this.initMenuMob.bind(this)
  }

  initMenuMob(event) {
    event.preventDefault()
    this.menuList.classList.add(this.activeClass)
    this.menubutton.classList.add(this.activeClass)

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menubutton.classList.remove(this.activeClass)
    })
  }

  addMenuMobileEvents() {
    this.events.forEach(userEvents => {
      this.menubutton.addEventListener(userEvents, this.initMenuMob)
    })
  }

  init() {
    if (this.menubutton && this.menuList) this.addMenuMobileEvents()
    return this
  }
}
