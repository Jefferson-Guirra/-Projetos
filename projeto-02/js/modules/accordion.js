export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list)
    this.activeClass = 'ativo'
  }

  /*
   *Adicionando Class .ativo aos dd e dt de .faq-lista
   */

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass)
    item.nextElementSibling.classList.toggle(this.activeClass)
  }
  // Adiciona os eventos ao acordion
  
  addAccordionEvent() {
    this.accordionList.forEach(item => {
      item.addEventListener('click', () => this.toggleAccordion(item))
    })
  }
  // iniciar função

  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
    return this
  }
}
