export default class Tooltip {
  constructor(toolTips) {
    this.toolTip = document.querySelectorAll(toolTips)

    // bind do objeto da class aos callbacks

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  // Move a tooltip box em relaçao ao cursor do mouse
  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 15}px`
    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.toolTipBox.style.left = `${event.pageX + 15}px`
    }
  }
  // Remove os eventos de mouseleave e mousemove ao sair do target
  // Remove a tooltip

  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove()
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }
  // Cria a tooltip box e coloca no body

  criarToolTipBox(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip')
    toolTipBox.innerText = text
    document.body.appendChild(toolTipBox)
    this.toolTipBox = toolTipBox
  }
  // cria a tooltip box e adiciona os eventos
  // mousemove e mouseleave ao target

  onMouseOver({ currentTarget }) {
    this.criarToolTipBox(currentTarget)

    currentTarget.addEventListener('mouseleave', this.onMouseLeave)

    currentTarget.addEventListener('mousemove', this.onMouseMove)
  }
  // Adiciona os eventos de mouseover a cada tooltip

  addTolltipsEvent() {
    this.toolTip.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if (this.toolTip.length) {
      this.addTolltipsEvent()
    }

    return this
  }
}
